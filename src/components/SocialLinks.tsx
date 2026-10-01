import { site, type Language } from "@/lib/site";

// Logos de marque en SVG : les icônes de marque de lucide-react sont dépréciées.
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
    <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
    <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07Z" />
  </svg>
);

const links = [
  { key: "github", label: "GitHub", href: site.socials.github, Icon: GithubIcon },
  { key: "linkedin", label: "LinkedIn", href: site.socials.linkedin, Icon: LinkedinIcon },
  { key: "facebook", label: "Facebook", href: site.socials.facebook, Icon: FacebookIcon },
] as const;

type Props = { lang: Language; className?: string };

const SocialLinks = ({ lang, className = "" }: Props) => (
  <div className={`flex items-center gap-2 ${className}`}>
    {links.map(({ key, label, href, Icon }) => (
      <a
        key={key}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={lang === "EN" ? `Open ${label}` : `Ouvrir ${label}`}
        title={label}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-base-content/10 text-base-content/70 transition hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent"
      >
        <Icon />
      </a>
    ))}
  </div>
);

export { GithubIcon };
export default SocialLinks;
