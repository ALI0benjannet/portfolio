"use client";

import Image from "next/image";
import SocialLinks from "./SocialLinks";
import { navLinks, scrollToHash, site, type Language } from "@/lib/site";

type Props = {
  lang: Language;
};

const Footer = ({ lang }: Props) => {
  const year = new Date().getFullYear();
  const isEn = lang === "EN";

  return (
    <footer className="border-t border-base-content/10 bg-base-200/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
        <div className="space-y-3">
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToHash("#home"); }} className="group inline-flex items-center gap-3">
            <Image
              className="h-10 w-10 rounded-full ring-2 ring-accent/50 transition group-hover:ring-accent"
              src="/abj-logo.png"
              alt="Ali Ben Jannet logo"
              width={40}
              height={40}
            />
            <span className="text-lg font-bold tracking-tight">
              <span className="text-accent">Ali Ben</span> Jannet
            </span>
          </a>
          <p className="max-w-xs text-sm leading-relaxed text-base-content/60">
            {isEn
              ? "Data Science & AI engineering student building AI systems and the platforms that ship them."
              : "Élève ingénieur en Data Science & IA, je conçois des systèmes d'IA et les plateformes qui les mettent en production."}
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-base-content/50">
            {isEn ? "Navigation" : "Navigation"}
          </h2>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {navLinks[lang].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollToHash(link.href); }}
                  className="text-base-content/70 transition hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-base-content/50">
            {isEn ? "Stay connected" : "Restons connectés"}
          </h2>
          <a href={`mailto:${site.email}`} className="text-sm text-base-content/70 transition hover:text-accent">
            {site.email}
          </a>
          <SocialLinks lang={lang} className="mt-4" />
        </div>
      </div>

      <div className="border-t border-base-content/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-base-content/50 sm:flex-row md:px-8">
          <p>© {year} {site.name}. {isEn ? "All rights reserved." : "Tous droits réservés."}</p>
          <p>
            {isEn ? "Built with" : "Réalisé avec"} Next.js · Tailwind CSS · DaisyUI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
