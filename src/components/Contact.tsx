"use client";

import { useState } from "react";
import { CheckCircle2, Copy, Loader2, Mail, MapPin, Phone, Send, XCircle } from "lucide-react";
import Title from "./Title";
import Reveal from "./Reveal";
import SocialLinks from "./SocialLinks";
import { site, type Language } from "@/lib/site";

type Props = {
  lang: Language;
};

type Status =
  | { state: "idle" }
  | { state: "sending" }
  | { state: "success" }
  | { state: "error"; message: string };

const labels = {
  EN: {
    title: "Let's work together",
    subtitle: "Available for internships, missions and collaborations. Drop me a line and I'll reply quickly.",
    emailLabel: "Email",
    phoneLabel: "Phone",
    locationLabel: "Location",
    copy: "Copy email",
    copied: "Copied!",
    name: "Name",
    namePh: "Your name",
    email: "Email",
    emailPh: "you@company.com",
    subject: "Subject",
    subjectPh: "What is it about?",
    message: "Message",
    messagePh: "Tell me about your project or opportunity…",
    send: "Send message",
    sending: "Sending…",
    success: "Message sent! I'll get back to you soon.",
    fill: "Please fill in all fields.",
    network: "Cannot reach the server. Check your connection.",
    timeout: "The request took too long. Please try again.",
    generic: `Unable to send right now. Please write directly to ${site.email}.`,
  },
  FR: {
    title: "Travaillons ensemble",
    subtitle: "Disponible pour des stages, missions ou collaborations. Écrivez-moi et je vous réponds rapidement.",
    emailLabel: "Email",
    phoneLabel: "Téléphone",
    locationLabel: "Localisation",
    copy: "Copier l'email",
    copied: "Copié !",
    name: "Nom",
    namePh: "Votre nom",
    email: "Email",
    emailPh: "vous@entreprise.com",
    subject: "Objet",
    subjectPh: "De quoi s'agit-il ?",
    message: "Message",
    messagePh: "Parlez-moi de votre projet ou de votre offre…",
    send: "Envoyer le message",
    sending: "Envoi…",
    success: "Message envoyé ! Je vous réponds rapidement.",
    fill: "Veuillez remplir tous les champs.",
    network: "Impossible de contacter le serveur. Vérifiez votre connexion.",
    timeout: "La requête a pris trop de temps. Réessayez.",
    generic: `Envoi impossible pour le moment. Écrivez-moi directement à ${site.email}.`,
  },
};

const Contact = ({ lang }: Props) => {
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const [copied, setCopied] = useState(false);
  const t = labels[lang];
  const sending = status.state === "sending";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const field = (key: string) => formData.get(key)?.toString().trim() ?? "";

    const payload = {
      name: field("name"),
      email: field("email"),
      subject: field("subject"),
      message: field("message"),
      // Champ piège invisible : seuls les robots le remplissent.
      website: field("website"),
    };

    if (!payload.name || !payload.email || !payload.subject || !payload.message) {
      setStatus({ state: "error", message: t.fill });
      return;
    }

    setStatus({ state: "sending" });

    // Coupe la requête avant que le navigateur ne reste bloqué indéfiniment.
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => ({}))) as { error?: string };
        // Les erreurs de validation (400) sont utiles à l'utilisateur, les autres non.
        const message = response.status === 400 && data.error ? data.error : t.generic;
        setStatus({ state: "error", message });
        return;
      }

      setStatus({ state: "success" });
      form.reset();
      setTimeout(() => setStatus({ state: "idle" }), 6000);
    } catch (error) {
      console.error("Contact form error:", error);
      const name = error instanceof Error ? error.name : "";
      setStatus({
        state: "error",
        message: name === "AbortError" ? t.timeout : t.network,
      });
    } finally {
      clearTimeout(timeoutId);
    }
  };

  const inputClass =
    "input w-full rounded-xl border-base-content/15 bg-base-100/60 focus:border-accent focus:outline-none";

  const infos = [
    { icon: Mail, label: t.emailLabel, value: site.email, href: `mailto:${site.email}` },
    { icon: Phone, label: t.phoneLabel, value: site.phone, href: site.phoneHref },
    { icon: MapPin, label: t.locationLabel, value: site.location[lang] },
  ];

  return (
    <section id="contact" className="scroll-mt-24 py-20 md:py-28">
      <Title eyebrow="06" title={t.title} subtitle={t.subtitle} />

      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-base-content/10 bg-base-200/40 p-6 md:p-10">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col gap-4">
              {infos.map(({ icon: Icon, label, value, href }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 rounded-2xl border border-base-content/10 bg-base-100/50 p-4"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-base-content/50">{label}</p>
                    {href ? (
                      <a href={href} className="block truncate font-medium transition hover:text-accent">
                        {value}
                      </a>
                    ) : (
                      <p className="font-medium">{value}</p>
                    )}
                  </div>
                </div>
              ))}

              <button
                type="button"
                onClick={copyEmail}
                className="btn btn-ghost btn-sm w-fit rounded-full text-base-content/70"
              >
                {copied ? <CheckCircle2 className="h-4 w-4 text-success" /> : <Copy className="h-4 w-4" />}
                {copied ? t.copied : t.copy}
              </button>

              <SocialLinks lang={lang} className="mt-auto pt-2" />
            </div>

            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
              {/* Champ piège anti-spam, caché aux humains et aux lecteurs d'écran. */}
              <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                <label>
                  Website
                  <input type="text" name="website" tabIndex={-1} autoComplete="off" />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block space-y-1.5">
                  <span className="text-sm font-medium text-base-content/80">{t.name}</span>
                  <input type="text" name="name" autoComplete="name" maxLength={100} placeholder={t.namePh} className={inputClass} required disabled={sending} />
                </label>
                <label className="block space-y-1.5">
                  <span className="text-sm font-medium text-base-content/80">{t.email}</span>
                  <input type="email" name="email" autoComplete="email" maxLength={200} placeholder={t.emailPh} className={inputClass} required disabled={sending} />
                </label>
              </div>
              <label className="block space-y-1.5">
                <span className="text-sm font-medium text-base-content/80">{t.subject}</span>
                <input type="text" name="subject" maxLength={200} placeholder={t.subjectPh} className={inputClass} required disabled={sending} />
              </label>
              <label className="block space-y-1.5">
                <span className="text-sm font-medium text-base-content/80">{t.message}</span>
                <textarea
                  name="message"
                  maxLength={5000}
                  placeholder={t.messagePh}
                  className="textarea h-36 w-full rounded-xl border-base-content/15 bg-base-100/60 focus:border-accent focus:outline-none"
                  required
                  disabled={sending}
                />
              </label>

              <button type="submit" className="btn btn-accent w-full rounded-full shadow-lg shadow-accent/20" disabled={sending}>
                {sending ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
                {sending ? t.sending : t.send}
              </button>

              <div aria-live="polite">
                {status.state === "success" && (
                  <div role="status" className="alert alert-success rounded-xl text-sm">
                    <CheckCircle2 className="h-5 w-5" />
                    <span>{t.success}</span>
                  </div>
                )}
                {status.state === "error" && (
                  <div role="alert" className="alert alert-error rounded-xl text-sm">
                    <XCircle className="h-5 w-5" />
                    <span>{status.message}</span>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default Contact;
