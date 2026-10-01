"use client";

import { useState } from "react";
import Title from "./Title";

type Language = "EN" | "FR";

type Props = {
  lang: Language;
};

const Contact = ({ lang }: Props) => {
  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const isEn = lang === "EN";

  const getErrorMessage = (error: unknown) => {
    if (error instanceof Error) {
      // AbortError porte l'info dans `name`, pas dans le message.
      const msg = `${error.name} ${error.message}`.toLowerCase();

      if (!isEn) {
        if (msg.includes("failed to fetch") || msg.includes("networkerror")) {
          return "Impossible de contacter le serveur. Vérifiez votre connexion.";
        }
        if (msg.includes("network")) {
          return "Problème réseau. Vérifiez votre connexion.";
        }
        if (msg.includes("abort") || msg.includes("timeout")) {
          return "La requête a pris trop de temps. Réessayez.";
        }
        return "Une erreur est survenue. Réessayez plus tard.";
      }

      if (msg.includes("failed to fetch") || msg.includes("networkerror")) {
        return "Cannot reach server. Check your connection.";
      }
      if (msg.includes("abort") || msg.includes("timeout")) {
        return "The request took too long. Please try again.";
      }
      return error.message;
    }

    return isEn ? "Something went wrong." : "Une erreur est survenue.";
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name")?.toString()?.trim() ?? "";
    const email = formData.get("email")?.toString()?.trim() ?? "";
    const subject = formData.get("subject")?.toString()?.trim() ?? "";
    const message = formData.get("message")?.toString()?.trim() ?? "";

    // Validation
    if (!name || !email || !subject || !message) {
      setFeedback(
        isEn ? "Please fill all fields." : "Veuillez remplir tous les champs."
      );
      return;
    }

    setFeedback(null);
    setSending(true);

    // Coupe la requete avant que le navigateur ne pende indefiniment.
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000);

    try {
      // Use relative path - works both locally (with proxy) and on Vercel
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ name, email, subject, message }),
        signal: controller.signal,
      });

      let data;
      try {
        data = await response.json();
      } catch {
        data = {};
      }

      if (!response.ok) {
        const errorMsg =
          (data as { error?: string }).error ||
          (isEn ? "Failed to send message." : "Échec de l'envoi du message.");
        throw new Error(errorMsg);
      }

      setFeedback(
        isEn
          ? "✓ Message sent! I'll reply soon."
          : "✓ Message envoyé ! Je vous réponds rapidement."
      );
      form.reset();

      // Clear success message after 5 seconds
      setTimeout(() => setFeedback(null), 5000);
    } catch (error) {
      console.error("Contact form error:", error);
      setFeedback(getErrorMessage(error));
    } finally {
      clearTimeout(timeoutId);
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="mt-16 rounded-3xl border border-base-200/60 bg-base-100/80 p-6 shadow-xl scroll-mt-28"
    >
      <Title title={isEn ? "Contact me" : "Contactez-moi"} />
      <div className="grid gap-6 md:grid-cols-2 text-left">
        <div className="space-y-3">
          <p className="text-base text-base-content/80">
            {isEn
              ? "Available for missions and collaborations. Drop me a line and I'll reply quickly."
              : "Disponible pour des missions, stages ou collaborations. Écrivez-moi et je vous réponds rapidement."}
          </p>
          <div className="space-y-2 text-sm text-base-content/70">
            <p>
              <span className="font-semibold text-base-content">Email :</span>{" "}
              <a
                href="mailto:alibenjannette@gmail.com"
                className="link link-hover"
              >
                alibenjannette@gmail.com
              </a>
            </p>
            <p>
              <span className="font-semibold text-base-content">
                {isEn ? "Phone:" : "Téléphone :"}
              </span>{" "}
              <a href="tel:+21654098546" className="link link-hover">
                +216 54 098 546
              </a>
            </p>
            <p>
              <span className="font-semibold text-base-content">
                {isEn ? "Location:" : "Localisation :"}
              </span>{" "}
              Monastir, Tunisie
            </p>
          </div>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder={isEn ? "Your name" : "Votre nom"}
            className="input input-bordered w-full"
            required
            disabled={sending}
          />
          <input
            type="email"
            name="email"
            placeholder={isEn ? "Your email" : "Votre email"}
            className="input input-bordered w-full"
            required
            disabled={sending}
          />
          <input
            type="text"
            name="subject"
            placeholder={isEn ? "Subject" : "Objet"}
            className="input input-bordered w-full"
            required
            disabled={sending}
          />
          <textarea
            name="message"
            placeholder={isEn ? "Your message" : "Votre message"}
            className="textarea textarea-bordered w-full h-28"
            required
            disabled={sending}
          />
          <button
            type="submit"
            className="btn btn-accent w-full"
            disabled={sending}
          >
            {sending
              ? isEn
                ? "Sending..."
                : "Envoi..."
              : isEn
              ? "Send"
              : "Envoyer"}
          </button>
          {feedback && (
            <div
              className={`alert ${
                feedback.includes("✓") ? "alert-success" : "alert-error"
              } text-sm`}
            >
              <span>{feedback}</span>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
