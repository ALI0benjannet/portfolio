"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { scrollToHash, type Language } from "@/lib/site";

// Bouton flottant qui apparaît après un peu de défilement.
const BackToTop = ({ lang }: { lang: Language }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => scrollToHash("#home")}
      aria-label={lang === "EN" ? "Back to top" : "Retour en haut"}
      className={`fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-content shadow-xl shadow-black/30 transition duration-300 hover:-translate-y-1 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
};

export default BackToTop;
