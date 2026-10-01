import { ChevronDown, Download, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import ali from "../assets/ali.jpg";
import SocialLinks from "./SocialLinks";
import { site, type Language } from "@/lib/site";

type Props = {
  lang: Language;
};

const content = {
  EN: {
    hello: "Hello, I'm",
    role: "Data Science & AI Engineering Student",
    intro:
      "Data Science & AI engineering student at ESPRIM (Monastir) with hands-on experience building end-to-end AI systems: LLM-powered agents, vision-language document extraction, deep learning for medical imaging and offline speech wake-word detection. Also experienced in the full-stack and microservice platforms that bring these models to users (Python, FastAPI, React / Next.js, Node.js, PostgreSQL, Docker). Hedera Certified Developer Associate.",
    contact: "Contact me",
    cv: "Download CV",
    cvFr: "French version",
    cvEn: "English version",
    socials: "Find me on",
  },
  FR: {
    hello: "Bonjour, je suis",
    role: "Élève ingénieur en Data Science & Intelligence Artificielle",
    intro:
      "Élève ingénieur en Data Science & IA à l'ESPRIM (Monastir), avec une expérience concrète de systèmes d'IA de bout en bout : agents à base de LLM, extraction de documents par modèles vision-langage, deep learning pour l'imagerie médicale et détection de mot de réveil hors ligne. Expérience également des plateformes full-stack et microservices qui mettent ces modèles en production (Python, FastAPI, React / Next.js, Node.js, PostgreSQL, Docker). Certifié Hedera Certified Developer Associate.",
    contact: "Contactez-moi",
    cv: "Télécharger le CV",
    cvFr: "Version française",
    cvEn: "Version anglaise",
    socials: "Retrouvez-moi sur",
  },
};

const Home = ({ lang }: Props) => {
  const t = content[lang];

  return (
    <section
      id="home"
      className="relative mx-auto grid max-w-6xl items-center gap-12 pt-28 pb-16 md:pt-36 md:pb-24 lg:grid-cols-[1.15fr_0.85fr]"
    >
      <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">

        <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
          <span className="block text-base-content/90">{t.hello}</span>
          <span className="mt-1 block bg-gradient-to-r from-accent via-orange-300 to-primary bg-clip-text text-transparent">
            {site.name}
          </span>
        </h1>

        <h2 className="mt-4 text-lg font-semibold text-accent md:text-xl">{t.role}</h2>

        <p className="mt-5 max-w-2xl text-[0.97rem] leading-relaxed text-base-content/75">
          {t.intro}
        </p>

        <p className="mt-4 inline-flex items-center gap-1.5 text-sm text-base-content/60">
          <MapPin className="h-4 w-4 text-accent" />
          {site.location[lang]}
        </p>

        <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a href="#contact" className="btn btn-accent rounded-full px-6 shadow-lg shadow-accent/20">
            <Mail className="h-5 w-5" />
            {t.contact}
          </a>

          <div className="dropdown dropdown-bottom sm:dropdown-end lg:dropdown-start">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-outline btn-accent w-full rounded-full px-6"
            >
              <Download className="h-5 w-5" />
              {t.cv}
              <ChevronDown className="h-4 w-4" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu z-20 mt-2 w-56 rounded-box border border-base-content/10 bg-base-200 p-2 shadow-xl"
            >
              <li>
                <a href={site.cv.FR} download>
                  <span className="rounded bg-accent/15 px-1.5 py-0.5 font-mono text-[0.7rem] font-bold text-accent">FR</span>
                  {t.cvFr}
                </a>
              </li>
              <li>
                <a href={site.cv.EN} download>
                  <span className="rounded bg-accent/15 px-1.5 py-0.5 font-mono text-[0.7rem] font-bold text-accent">EN</span>
                  {t.cvEn}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-4">
          <span className="text-sm font-medium text-base-content/60">{t.socials}</span>
          <span className="h-px w-8 bg-base-content/20" />
          <SocialLinks lang={lang} />
        </div>
      </div>

      <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
        <div className="relative">
          <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-accent/30 via-primary/20 to-transparent blur-3xl" />
          <Image
            src={ali}
            alt="Ali Ben Jannet"
            className="relative h-72 w-64 border-4 border-accent/80 object-cover shadow-2xl sm:h-96 sm:w-80 lg:h-[28rem] lg:w-[22rem]"
            style={{ borderRadius: "35% 65% 42% 58% / 48% 68% 32% 52%" }}
            sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 352px"
            placeholder="blur"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
