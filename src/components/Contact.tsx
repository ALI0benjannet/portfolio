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
  // If VITE_API_URL is empty in prod (same domain), we call "/api/contact" directly.
  const apiUrl = import.meta.env.VITE_API_URL || "";

  const getErrorMessage = (error: unknown) => {
    if (error instanceof Error) {
      if (!isEn) {
        const lowered = error.message.toLowerCase();
        if (lowered.includes("failed to fetch")) return "Impossible de contacter le serveur.";
        if (lowered.includes("network")) return "Problème réseau. Vérifiez votre connexion.";
        return "Une erreur est survenue.";
      }
      return error.message;
    }

    return isEn ? "Something went wrong." : "Une erreur est survenue.";
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget; // cache form before async work (React reuses events)
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString() ?? "";
    const email = formData.get("email")?.toString() ?? "";
    const subject = formData.get("subject")?.toString() ?? "";
    const message = formData.get("message")?.toString() ?? "";

    setFeedback(null);
    setSending(true);

    try {
      const endpoint = apiUrl ? `${apiUrl}/api/contact` : `/api/contact`;
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          (data as { error?: string }).error ||
            (isEn ? "Failed to send message." : "Échec de l'envoi du message."),
        );
      }

      setFeedback(isEn ? "Message sent! I'll reply soon." : "Message envoyé ! Je vous réponds rapidement.");
      form.reset();
    } catch (error) {
      setFeedback(getErrorMessage(error));
    } finally {
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
              ? "Available for missions collaborations. Drop me a line and I'll reply quickly."
              : "Disponible pour des missions, stages ou collaborations. Écrivez-moi et je vous réponds rapidement."}
          </p>
          <div className="space-y-2 text-sm text-base-content/70">
            <p>
              <span className="font-semibold text-base-content">Email :</span> alibenjannette@gmail.com
            </p>
            <p>
              <span className="font-semibold text-base-content">
                {isEn ? "Phone:" : "Téléphone :"}
              </span>{" "}
              +216 54 098 546
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
          />
          <input
            type="email"
            name="email"
            placeholder={isEn ? "Your email" : "Votre email"}
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder={isEn ? "Subject" : "Objet"}
            className="input input-bordered w-full"
            required
          />
          <textarea
            name="message"
            placeholder={isEn ? "Your message" : "Votre message"}
            className="textarea textarea-bordered w-full h-28"
            required
          />
          <button type="submit" className="btn btn-accent w-full">
            {sending ? (isEn ? "Sending..." : "Envoi...") : isEn ? "Send" : "Envoyer"}
          </button>
          {feedback && (
            <p className="text-sm text-base-content/70 text-center">{feedback}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;