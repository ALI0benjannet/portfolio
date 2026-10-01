"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { navLinks, scrollToHash, type Language } from "@/lib/site";

type Props = {
  lang: Language;
  onLangChange: (lang: Language) => void;
};

const LanguageSwitch = ({ lang, onLangChange }: Props) => (
  <div
    role="group"
    aria-label={lang === "EN" ? "Language" : "Langue"}
    className="flex items-center rounded-full border border-base-content/10 bg-base-200/60 p-0.5 text-xs font-bold"
  >
    {(["EN", "FR"] as const).map((code) => (
      <button
        key={code}
        type="button"
        onClick={() => onLangChange(code)}
        aria-pressed={lang === code}
        className={`rounded-full px-3 py-1.5 transition ${
          lang === code
            ? "bg-accent text-accent-content shadow"
            : "text-base-content/60 hover:text-base-content"
        }`}
      >
        {code}
      </button>
    ))}
  </div>
);

const Navbar = ({ lang, onLangChange }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");
  const links = navLinks[lang];

  // Ombre et fond plus marqués dès que la page défile.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Surligne le lien de la section actuellement visible.
  useEffect(() => {
    const sections = navLinks.EN.map((l) => document.querySelector(l.href)).filter(
      (el): el is HTMLElement => el instanceof HTMLElement
    );
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Échap ferme le menu mobile.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    scrollToHash(href);
    setIsOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 md:top-4">
      <div
        className={`mx-auto max-w-6xl rounded-2xl border px-4 py-2.5 backdrop-blur-xl transition-all duration-300 md:px-6 ${
          scrolled || isOpen
            ? "border-base-content/10 bg-base-100/85 shadow-xl shadow-black/20"
            : "border-transparent bg-base-100/40"
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="group flex items-center gap-3"
          >
            <Image
              className="h-9 w-9 rounded-full ring-2 ring-accent/50 transition duration-300 group-hover:ring-accent"
              src="/abj-logo.png"
              alt="Ali Ben Jannet logo"
              width={36}
              height={36}
              priority
            />
            <span className="hidden text-base font-bold tracking-tight sm:block">
              <span className="text-accent">Ali Ben</span> Jannet
            </span>
          </a>

          <nav aria-label="Main" className="hidden items-center gap-0.5 lg:flex">
            {links.map((link) => {
              const isActive = active === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative rounded-xl px-3 py-2 text-sm font-medium transition ${
                    isActive
                      ? "text-accent"
                      : "text-base-content/65 hover:bg-base-content/5 hover:text-base-content"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <LanguageSwitch lang={lang} onLangChange={onLangChange} />
            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              className="rounded-xl p-2 transition-colors hover:bg-base-content/5 lg:hidden"
              aria-label={lang === "EN" ? "Toggle menu" : "Ouvrir le menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
            isOpen ? "mt-3 max-h-[28rem] border-t border-base-content/10 pt-3" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-1 pb-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                tabIndex={isOpen ? 0 : -1}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`rounded-xl px-3 py-2.5 font-medium transition ${
                  active === link.href
                    ? "bg-accent/10 text-accent"
                    : "text-base-content/70 hover:bg-base-content/5 hover:text-base-content"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
