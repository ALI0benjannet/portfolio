import { Facebook, Github, Linkedin } from "lucide-react";

type Language = "EN" | "FR";

type Props = {
  lang: Language;
};

const Footer = ({ lang }: Props) => {
  const year = new Date().getFullYear();
  const isEn = lang === "EN";

  return (
    <footer className="border-t border-base-300/60 bg-base-200/80 px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <aside className="flex flex-col gap-2">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <img
              className="h-10 w-10 rounded-full ring-2 ring-accent/50 transition-all duration-300 group-hover:scale-105 group-hover:ring-accent"
              src="/abj-logo.png"
              alt="ABJ portfolio logo"
            />
            <span className="hidden text-lg font-bold tracking-tight sm:block">
              <span className="text-accent">Ali Ben</span> Jannet
            </span>
          </a>
          <p className="text-sm text-base-content/70">
            {isEn
              ? "Built with passion and curiosity. Open to new projects and collaborations."
              : "Construit avec passion et curiosité. Disponible pour de nouveaux projets et collaborations."}
          </p>
          <p className="text-sm font-semibold text-base-content/80">
            {isEn ? `© ${year} - All rights reserved` : `© ${year} - Tous droits réservés`}
          </p>
        </aside>

        <nav className="flex flex-col gap-3 sm:items-end">
          <div className="flex items-center gap-3 text-sm text-base-content/70">
            <span className="h-px w-8 rounded-full bg-accent/70" />
            <span>{isEn ? "Stay connected" : "Restons connectés"}</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/ALI0benjannet"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={isEn ? "Open GitHub" : "Ouvrir GitHub"}
              className="rounded-full p-2 transition hover:bg-base-300"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/ali-ben-jannet-2a7746324"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={isEn ? "Open LinkedIn" : "Ouvrir LinkedIn"}
              className="rounded-full p-2 transition hover:bg-base-300"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://www.facebook.com/share/161sBQkeNY/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={isEn ? "Open Facebook" : "Ouvrir Facebook"}
              className="rounded-full p-2 transition hover:bg-base-300"
            >
              <Facebook className="h-6 w-6" />
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
