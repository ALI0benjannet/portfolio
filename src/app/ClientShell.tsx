"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import About from "@/components/About";
import Experiences from "@/components/Experiences";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import type { Language } from "@/lib/site";

const STORAGE_KEY = "portfolio-lang";

export default function ClientShell() {
  const [lang, setLang] = useState<Language>("EN");

  // Langue enregistrée, sinon celle du navigateur.
  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch {
      // Stockage indisponible (navigation privée stricte) : on ignore.
    }
    if (saved === "EN" || saved === "FR") {
      setLang(saved);
    } else if (navigator.language?.toLowerCase().startsWith("fr")) {
      setLang("FR");
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "FR" ? "fr" : "en";
  }, [lang]);

  const changeLang = (next: Language) => {
    setLang(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignoré : la langue reste valable pour la session en cours.
    }
  };

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-content"
      >
        {lang === "EN" ? "Skip to content" : "Aller au contenu"}
      </a>

      <Navbar lang={lang} onLangChange={changeLang} />

      <div className="relative overflow-x-clip">
        <div className="bg-grid pointer-events-none absolute inset-x-0 top-0 h-[44rem]" />
        <div className="pointer-events-none absolute left-1/2 top-[-12rem] h-[32rem] w-[48rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

        <main id="main" className="relative mx-auto max-w-6xl px-5 md:px-8">
          <Home lang={lang} />
          <About lang={lang} />
          <Experiences lang={lang} />
          <Skills lang={lang} />
          <Projects lang={lang} />
          <Certifications lang={lang} />
          <Contact lang={lang} />
        </main>
      </div>

      <Footer lang={lang} />
      <BackToTop lang={lang} />
    </>
  );
}
