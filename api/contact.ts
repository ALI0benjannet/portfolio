import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

const escapeHtml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const renderEmailTemplate = ({ name, email, subject, message }: { name: string; email: string; subject: string; message: string }) => {
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

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: process.env.SMTP_SECURE === "true",
  auth:
    process.env.SMTP_USER && process.env.SMTP_PASS
      ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
      : undefined,
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, subject, message } = req.body || {};

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return res.status(500).json({ error: "Email service not configured." });
  }

  try {
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.TO_EMAIL || process.env.SMTP_USER,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
      html: renderEmailTemplate({ name, email, subject, message }),
    });

    return res.status(200).json({ message: "Email sent", id: info.messageId });
  } catch (error) {
    console.error("Failed to send email", error);
    return res.status(500).json({ error: "Unable to send email right now." });
  }
}
