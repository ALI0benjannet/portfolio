import Title from "./Title";
import Reveal from "./Reveal";
import Image from "next/image";
import aliDev from "../assets/aliDev.jpg";
import { Brain, Cpu, GraduationCap, Languages, Layout, Monitor, Server } from "lucide-react";
import type { Language } from "@/lib/site";

const profileInfo = {
  EN: {
    title: "About me",
    subtitle: "Engineer in the making, at the crossroads of AI research and product engineering.",
    educationTitle: "Education",
    education: "Engineering Degree in Data Science & AI",
    school: "ESPRIM, Monastir · 2026",
    languagesTitle: "Languages",
    languages: ["Arabic: Native", "French: B2", "English: B1", "Russian: Beginner"],
  },
  FR: {
    title: "À propos",
    subtitle: "Futur ingénieur, à la croisée de la recherche en IA et de l'ingénierie produit.",
    educationTitle: "Formation",
    education: "Diplôme d'ingénieur en Data Science & IA",
    school: "ESPRIM, Monastir · 2026",
    languagesTitle: "Langues",
    languages: ["Arabe : natif", "Français : B2", "Anglais : B1", "Russe : débutant"],
  },
};

const icons = [Brain, Layout, Server, Monitor, Cpu];

const aboutSections = {
  EN: [
    {
      title: "Data Science & AI",
      description:
        "Designing intelligent solutions powered by data analysis and AI models using Python, Pandas, and NumPy.",
    },
    {
      title: "Frontend Development",
      description: "Building modern, interactive web interfaces with HTML, CSS, JavaScript, React, and Next.js.",
    },
    {
      title: "Backend Development",
      description: "Creating robust APIs and backend systems with Node.js, Spring Boot, and Symfony, connected to databases.",
    },
    {
      title: "Desktop & Web Apps",
      description: "Delivering complete, performant applications using JavaFX and modern web technologies.",
    },
    {
      title: "AI Integration",
      description: "Embedding smart models into web applications to craft innovative, high-performing solutions.",
    },
  ],
  FR: [
    {
      title: "Data Science & IA",
      description:
        "Conception et développement de solutions intelligentes basées sur l'analyse de données et les modèles d'IA à l'aide de Python, Pandas et NumPy.",
    },
    {
      title: "Développement Frontend",
      description:
        "Création d'interfaces web modernes et interactives avec HTML, CSS, JavaScript, React et Next.js.",
    },
    {
      title: "Développement Backend",
      description:
        "Développement d'APIs et de systèmes backend robustes avec Node.js, Spring Boot et Symfony, intégrés aux bases de données.",
    },
    {
      title: "Applications Desktop & Web",
      description:
        "Développement d'applications complètes et performantes en utilisant JavaFX et des technologies web modernes.",
    },
    {
      title: "Intégration de l'IA",
      description:
        "Intégration de modèles intelligents dans des applications web afin de créer des solutions innovantes et performantes.",
    },
  ],
};

type Props = {
  lang: Language;
};

const About = ({ lang }: Props) => {
  const sections = aboutSections[lang];
  const info = profileInfo[lang];

  return (
    <section id="about" className="scroll-mt-24 py-20 md:py-28">
      <Title eyebrow="01" title={info.title} subtitle={info.subtitle} />

      <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        <Reveal className="space-y-6 lg:sticky lg:top-28">
          <div className="relative mx-auto max-w-sm lg:mx-0">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-accent/30 to-primary/20 blur-2xl" />
            <Image
              src={aliDev}
              alt="Ali Ben Jannet at work"
              className="relative aspect-square w-full rounded-3xl border border-base-content/10 object-cover shadow-2xl"
              sizes="(max-width: 1024px) 384px, 400px"
              placeholder="blur"
            />
          </div>

          <div className="mx-auto max-w-sm space-y-5 rounded-2xl border border-base-content/10 bg-base-200/40 p-5 lg:mx-0">
            <div className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <GraduationCap className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-base-content/50">
                  {info.educationTitle}
                </h3>
                <p className="mt-1 font-semibold leading-snug">{info.education}</p>
                <p className="text-sm text-base-content/60">{info.school}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Languages className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-base-content/50">
                  {info.languagesTitle}
                </h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {info.languages.map((language) => (
                    <span
                      key={language}
                      className="rounded-full border border-base-content/10 bg-base-100 px-3 py-1 text-xs font-medium text-base-content/80"
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {sections.map((section, index) => {
            const Icon = icons[index];
            return (
              <Reveal
                key={section.title}
                delay={index * 80}
                className={index === 0 ? "sm:col-span-2" : ""}
              >
                <article className="group h-full rounded-2xl border border-base-content/10 bg-base-200/40 p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-base-200/70">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition group-hover:bg-accent group-hover:text-accent-content">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold">{section.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-base-content/70">
                    {section.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
