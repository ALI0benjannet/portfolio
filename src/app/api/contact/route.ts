import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 30;

const escapeHtml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const renderEmailTemplate = ({
  name,
  email,
  subject,
  message,
}: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  return `
    <div style="margin:0; padding:24px; background:#0b1220; font-family:'Segoe UI', Arial, sans-serif; color:#e5e7eb;">
      <div style="max-width:720px; margin:0 auto; background:#0f172a; border:1px solid #1f2937; border-radius:18px; overflow:hidden; box-shadow:0 18px 60px rgba(0,0,0,0.35);">
        <div style="background:linear-gradient(135deg,#f59e0b,#f97316,#fb923c); padding:20px 22px; color:#0f172a; font-weight:800; font-size:18px; letter-spacing:0.3px;">Nouveau message de votre portfolio</div>
        <div style="padding:22px 22px 16px 22px;">
          <p style="margin:0 0 12px 0; color:#cbd5e1; font-size:14px;">Quelqu'un vous a écrit via le formulaire de contact.</p>
          <div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:12px;">
            <div style="background:rgba(255,255,255,0.02); border:1px solid #1f2937; border-radius:12px; padding:14px 16px;">
              <div style="font-size:11px; color:#9ca3af; letter-spacing:0.08em; text-transform:uppercase; margin-bottom:6px;">Nom</div>
              <div style="font-size:16px; color:#f3f4f6; font-weight:700;">${safeName}</div>
            </div>
            <div style="background:rgba(255,255,255,0.02); border:1px solid #1f2937; border-radius:12px; padding:14px 16px;">
              <div style="font-size:11px; color:#9ca3af; letter-spacing:0.08em; text-transform:uppercase; margin-bottom:6px;">Email</div>
              <div style="font-size:15px; color:#fbbf24; font-weight:700;"><a href="mailto:${safeEmail}" style="color:#fbbf24; text-decoration:none;">${safeEmail}</a></div>
            </div>
            <div style="background:rgba(255,255,255,0.02); border:1px solid #1f2937; border-radius:12px; padding:14px 16px;">
              <div style="font-size:11px; color:#9ca3af; letter-spacing:0.08em; text-transform:uppercase; margin-bottom:6px;">Sujet</div>
              <div style="font-size:15px; color:#f3f4f6; font-weight:700;">${safeSubject}</div>
            </div>
          </div>
          <div style="margin-top:16px; background:#0b1220; border:1px solid #1f2937; border-radius:14px; padding:16px 16px 18px 16px;">
            <div style="font-size:11px; color:#9ca3af; letter-spacing:0.08em; text-transform:uppercase; margin-bottom:8px;">Message</div>
            <div style="font-size:15px; color:#e5e7eb; line-height:1.7;">${safeMessage}</div>
          </div>
          <div style="margin-top:18px; display:flex; gap:10px; flex-wrap:wrap; align-items:center;">
            <a href="mailto:${safeEmail}?subject=Re:%20${encodeURIComponent(subject)}" style="background:#f59e0b; color:#0f172a; padding:12px 16px; border-radius:10px; font-weight:800; text-decoration:none; box-shadow:0 10px 26px rgba(245,158,11,0.35);">Repondre maintenant</a>
            <span style="font-size:12px; color:#9ca3af;">Vous pouvez repondre directement a cet email.</span>
          </div>
        </div>
      </div>
    </div>
  `;
};

// Les valeurs collees dans le tableau de bord Vercel gardent souvent des
// guillemets ou des espaces (ex. mot de passe Gmail « abcd efgh ijkl mnop »).
const envValue = (key: string) =>
  (process.env[key] ?? "").trim().replace(/^(['"])(.*)\1$/, "$2").trim();

const smtpConfig = () => ({
  host: envValue("SMTP_HOST"),
  user: envValue("SMTP_USER"),
  pass: envValue("SMTP_PASS").replace(/\s+/g, ""),
  from: envValue("SMTP_FROM"),
  to: envValue("TO_EMAIL"),
});

type SmtpAttempt = { port: number; secure: boolean };

const buildTransport = ({ port, secure }: SmtpAttempt) => {
  const { host, user, pass } = smtpConfig();
  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
    // Sans ces timeouts, une connexion bloquee fige la fonction jusqu'a ce que
    // Vercel la tue : l'utilisateur ne voit qu'une erreur generique.
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
    tls: { servername: host },
  });
};

// Ports tentes dans l'ordre : celui configure, puis l'autre mode Gmail.
// 465 (TLS implicite) est frequemment bloque/lent depuis un environnement
// serverless ; 587 (STARTTLS) passe presque toujours.
const buildAttempts = (): SmtpAttempt[] => {
  const configuredPort = Number(envValue("SMTP_PORT")) || 587;
  const secureValue = envValue("SMTP_SECURE");
  const configuredSecure = secureValue ? secureValue === "true" : configuredPort === 465;

  const attempts: SmtpAttempt[] = [{ port: configuredPort, secure: configuredSecure }];
  const fallback: SmtpAttempt =
    configuredPort === 465 ? { port: 587, secure: false } : { port: 465, secure: true };

  if (fallback.port !== configuredPort) attempts.push(fallback);
  return attempts;
};

// Categorie sans donnee sensible, renvoyee aussi en production pour pouvoir
// diagnostiquer une panne sans acceder aux logs Vercel.
const smtpErrorReason = (error: unknown) => {
  const code = (error as { code?: string })?.code ?? "";
  const responseCode = (error as { responseCode?: number })?.responseCode;
  if (code === "EAUTH" || responseCode === 535) return "auth";
  if (code === "ETIMEDOUT" || code === "ECONNECTION" || code === "ESOCKET" || code === "EDNS") return "connection";
  if (code === "EENVELOPE") return "envelope";
  return "unknown";
};

const describeSmtpError = (error: unknown) => {
  const reason = smtpErrorReason(error);

  if (reason === "auth") {
    return "SMTP authentication failed. Check SMTP_USER / SMTP_PASS (Gmail requires a 16-character App Password, without spaces).";
  }
  if (reason === "connection") {
    return "Could not reach the SMTP server (connection timed out).";
  }
  return error instanceof Error ? error.message : String(error);
};

export async function POST(req: Request) {
  let body: { name?: unknown; email?: unknown; subject?: unknown; message?: unknown; website?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  // Champ piège : un humain ne le voit pas, un robot le remplit.
  // On répond « succès » pour ne pas indiquer au robot qu'il a été détecté.
  if (typeof body?.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ message: "Email sent" });
  }

  const clean = (value: unknown) => (typeof value === "string" ? value.trim() : "");
  const name = clean(body?.name);
  const email = clean(body?.email);
  const subject = clean(body?.subject);
  const message = clean(body?.message);

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  if (name.length > 100 || email.length > 200 || subject.length > 200 || message.length > 5000) {
    return NextResponse.json({ error: "One of the fields is too long." }, { status: 400 });
  }

  // Empêche l'injection d'en-têtes via des retours à la ligne dans l'objet.
  if (/[\r\n]/.test(subject) || /[\r\n]/.test(name)) {
    return NextResponse.json({ error: "Invalid characters in subject or name." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const config = smtpConfig();
  if (!config.host || !config.user || !config.pass) {
    return NextResponse.json({ error: "Email service not configured.", reason: "config" }, { status: 500 });
  }

  const mail = {
    // Gmail impose l'adresse authentifiee comme expediteur : on garde le nom
    // d'affichage de SMTP_FROM mais on force l'adresse de SMTP_USER.
    from: { name: config.from.replace(/\s*<[^>]*>\s*$/, "").replace(/"/g, "").trim() || "Portfolio Contact", address: config.user },
    to: config.to || config.user,
    replyTo: email,
    subject: `[Portfolio] ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
    html: renderEmailTemplate({ name, email, subject, message }),
  };

  let lastError: unknown;

  for (const attempt of buildAttempts()) {
    const transporter = buildTransport(attempt);
    try {
      const info = await transporter.sendMail(mail);
      return NextResponse.json({ message: "Email sent", id: info.messageId });
    } catch (error) {
      lastError = error;
      console.error(`SMTP attempt failed on port ${attempt.port}`, error);

      // Des identifiants invalides echoueront de la meme facon sur tous les
      // ports : inutile de reessayer.
      const code = (error as { code?: string })?.code;
      if (code === "EAUTH") break;
    } finally {
      transporter.close();
    }
  }

  const detail = describeSmtpError(lastError);
  const isDev = process.env.NODE_ENV !== "production";

  return NextResponse.json(
    {
      error: isDev
        ? `SMTP error: ${detail}`
        : "Unable to send email right now. Please write directly to alibenjannette@gmail.com.",
      reason: smtpErrorReason(lastError),
    },
    { status: 502 }
  );
}
