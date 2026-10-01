// Données partagées par tout le site : une seule source de vérité.

export type Language = "EN" | "FR";

export const site = {
  url: "https://alibenjannet.vercel.app",
  name: "Ali Ben Jannet",
  email: "alibenjannette@gmail.com",
  phone: "+216 54 098 546",
  phoneHref: "tel:+21654098546",
  location: { EN: "Monastir, Tunisia", FR: "Monastir, Tunisie" },
  repo: "https://github.com/ALI0benjannet/portfolio",
  cv: {
    FR: "/CV-F_AliBenJannet.pdf",
    EN: "/CV-E_AliBenJannet.pdf",
  },
  socials: {
    github: "https://github.com/ALI0benjannet",
    linkedin: "https://www.linkedin.com/in/ali-ben-jannet-2a7746324",
    facebook: "https://www.facebook.com/share/161sBQkeNY/",
  },
} as const;

export const navLinks: Record<Language, { href: string; label: string }[]> = {
  EN: [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experiences", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#certifications", label: "Certifications" },
    { href: "#contact", label: "Contact" },
  ],
  FR: [
    { href: "#home", label: "Accueil" },
    { href: "#about", label: "À propos" },
    { href: "#experiences", label: "Expériences" },
    { href: "#skills", label: "Compétences" },
    { href: "#projects", label: "Projets" },
    { href: "#certifications", label: "Certifications" },
    { href: "#contact", label: "Contact" },
  ],
};

/** Défilement doux vers une ancre, sans recharger la page. */
export const scrollToHash = (href: string) => {
  const target = document.querySelector(href);
  if (target instanceof HTMLElement) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", href);
  }
};
