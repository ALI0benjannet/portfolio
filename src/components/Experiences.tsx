import Title from "./Title";
import Reveal from "./Reveal";
import Image from "next/image";
import { Briefcase } from "lucide-react";
import type { Language } from "@/lib/site";

import triosweb from "../assets/companies/triosweb.png";
import esprim from "../assets/companies/esprim.png";
import neuralbey from "../assets/companies/neuralbey.png";
import startup from "../assets/companies/startup.png";
import anypli from "../assets/companies/anypli.png";
import tradrly from "../assets/companies/tradrly.jpg";

const experiences = {
  EN: [
    {
      id: 9,
      role: "Full Stack Engineering Intern",
      company: "Anypli",
      period: "Aug 2026",
      description: [
        "Designed and built TouriBook, a tourism booking platform: 7 FastAPI microservices (one PostgreSQL database each), an API gateway, a Next.js SSR client and a React admin, in FR / EN / AR.",
        "Guaranteed zero overselling with a booking saga, compensation and atomic SQL updates validated by concurrency tests; integrated Stripe with signed, idempotent webhooks.",
      ],
      technologies: ["FastAPI", "PostgreSQL", "Next.js", "React", "TypeScript", "Stripe", "Docker"],
      image: anypli,
      wideLogo: true,
    },
    {
      id: 10,
      role: "AI & Data Science Intern",
      company: "Tradrly",
      period: "Jun 2026 - Aug 2026",
      description: [
        "Astro: built a local-first AI agent (Electron / React, Node.js, FastAPI) that understands French and English commands and controls the computer, using a regex → spaCy → LLM (Gemini / GPT-4o) cascade that keeps working offline.",
        "DOOBY: developed a zero-shot vision-language pipeline extracting bilingual Arabic–French timetables into schema-constrained JSON (F1 87.3%, 100% exact Arabic labels).",
        "DOOBY: made the offline \"Hey Dooby\" wake-word detector operational and built a real-time bench to calibrate its threshold (6/6 detections, no false triggers).",
      ],
      technologies: ["Python", "FastAPI", "spaCy", "Gemini", "faster-whisper", "OpenWakeWord", "ONNX", "Node.js", "Electron", "React"],
      image: tradrly,
      wideLogo: true,
    },
    {
      id: 1,
      role: "Full Stack Developer",
      company: "TriosWeb",
      period: "Mar 2023 - Jun 2023",
      description: [
        "Final year project: creation of an HR dashboard to track resources and indicators.",
      ],
      image: triosweb,
    },
    {
      id: 2,
      role: "Desktop Developer",
      company: "ESPRIM",
      period: "Oct 2023 - Dec 2023",
      description: ["Semester project: medical desktop management app."],
      image: esprim,
    },
    {
      id: 3,
      role: "Full Stack Web Developer",
      company: "ESPRIM",
      period: "Jan 2024 - Mar 2024",
      description: ["Semester project: medical management web/desktop app."],
      image: esprim,
    },
    {
      id: 4,
      role: "Frontend Developer Intern",
      company: "Neuralbey",
      period: "Jul 2025 - Aug 2025",
      description: ["Internship: developed an application for Neuralbey with a contact form, internship offers with an application flow and a back-office (React, Django)."],
      image: neuralbey,
    },
    {
      id: 5,
      role: "Full Stack Developer",
      company: "MyStartup",
      period: "Aug 2025 - Sep 2025",
      description: ["Personal project: portfolio to showcase skills and projects."],
      image: startup,
    },
    {
      id: 6,
      role: "Full Stack & Data Science",
      company: "ESPRIM",
      period: "Oct 2025 - Dec 2025",
      description: [
        "Semester project: ML model and web app for dental diagnosis.",
      ],
      image: esprim,
    },
    {
      id: 7,
      role: "Full Stack & Data Science / AI",
      company: "ESPRIM",
      period: "Oct 2025 - Apr 2026",
      description: [
        "Semester project: full-stack recruitment platform with AI-powered CV parsing (spaCy NER + Transformer), semantic matching (SBERT), interview management and real-time chat — MERN stack + FastAPI.",
      ],
      image: esprim,
    },
    {
      id: 8,
      role: "Full Stack & Data Science",
      company: "ESPRIM",
      period: "Feb 2026 - Apr 2026",
      description: [
        "Semester project: deep learning pipeline and web application for brain tumor detection and classification on MRI images.",
      ],
      image: esprim,
    },
  ],
  FR: [
    {
      id: 9,
      role: "Stagiaire Ingénieur Full Stack",
      company: "Anypli",
      period: "Août 2026",
      description: [
        "Conception et développement de TouriBook, plateforme de réservation touristique : 7 microservices FastAPI (une base PostgreSQL chacun), une passerelle API, un client Next.js SSR et une interface d'administration React, en FR / EN / AR.",
        "Zéro survente garantie par une saga de réservation, des compensations et des mises à jour SQL atomiques validées par des tests de concurrence ; intégration de Stripe avec webhooks signés et idempotents.",
      ],
      technologies: ["FastAPI", "PostgreSQL", "Next.js", "React", "TypeScript", "Stripe", "Docker"],
      image: anypli,
      wideLogo: true,
    },
    {
      id: 10,
      role: "Stagiaire en IA & Data Science",
      company: "Tradrly",
      period: "Juin 2026 - Août 2026",
      description: [
        "Astro : développement d'un agent IA local (Electron / React, Node.js, FastAPI) qui comprend des commandes en français et en anglais et pilote l'ordinateur, grâce à une cascade regex → spaCy → LLM (Gemini / GPT-4o) qui fonctionne aussi hors ligne.",
        "DOOBY : pipeline vision-langage zero-shot extrayant des emplois du temps bilingues arabe–français en JSON contraint par schéma (F1 87,3 %, 100 % des libellés arabes exacts).",
        "DOOBY : remise en fonctionnement du détecteur hors ligne « Hey Dooby » et création d'un banc temps réel pour calibrer son seuil (6/6 détections, aucune fausse alerte).",
      ],
      technologies: ["Python", "FastAPI", "spaCy", "Gemini", "faster-whisper", "OpenWakeWord", "ONNX", "Node.js", "Electron", "React"],
      image: tradrly,
      wideLogo: true,
    },
    {
      id: 1,
      role: "Développeur Full Stack",
      company: "TriosWeb",
      period: "Mars 2023 - Juin 2023",
      description: [
        "Projet de fin d'études : création d'un tableau de bord RH pour suivre les ressources et indicateurs.",
      ],
      image: triosweb,
    },
    {
      id: 2,
      role: "Développeur Desktop",
      company: "ESPRIM",
      period: "Oct 2023 - Déc 2023",
      description: ["Projet de semestre : application desktop de gestion médicale."],
      image: esprim,
    },
    {
      id: 3,
      role: "Développeur Web Full Stack",
      company: "ESPRIM",
      period: "Jan 2024 - Mars 2024",
      description: ["Projet de semestre : application de gestion médicale web/desktop."],
      image: esprim,
    },
    {
      id: 4,
      role: "Stagiaire Développeur Frontend",
      company: "Neuralbey",
      period: "Juil 2025 - Août 2025",
      description: ["Stage : développement d'une application pour la société Neuralbey avec formulaire de contact, offres de stage avec candidature et back-office (React, Django)."],
      image: neuralbey,
    },
    {
      id: 5,
      role: "Développeur Full Stack",
      company: "MyStartup",
      period: "Août 2025 - Sep 2025",
      description: ["Projet perso : portfolio pour présenter mes compétences et projets."],
      image: startup,
    },
    {
      id: 6,
      role: "Développeur Full Stack & Data Science",
      company: "ESPRIM",
      period: "Oct 2025 - Déc 2025",
      description: [
        "Projet de semestre : modèle de machine learning et application web de diagnostic dentaire.",
      ],
      image: esprim,
    },
    {
      id: 7,
      role: "Développeur Full Stack & Data Science / IA",
      company: "ESPRIM",
      period: "Oct 2025 - Avr 2026",
      description: [
        "Projet de semestre : plateforme de recrutement full-stack avec parsing de CV propulsé par l'IA (spaCy NER + Transformer), matching sémantique (SBERT), gestion des entretiens et chat temps réel — stack MERN + FastAPI.",
      ],
      image: esprim,
    },
    {
      id: 8,
      role: "Développeur Full Stack & Data Science",
      company: "ESPRIM",
      period: "Fév 2026 - Avr 2026",
      description: [
        "Projet de semestre : pipeline de deep learning et application web pour la détection et classification de tumeurs cérébrales sur images IRM.",
      ],
      image: esprim,
    },
  ],
};

type Props = {
  lang: Language;
};

const MONTHS: Record<string, number> = {
  jan: 0, janv: 0, january: 0, janvier: 0,
  feb: 1, fev: 1, fév: 1, february: 1, février: 1,
  mar: 2, mars: 2, march: 2,
  apr: 3, avr: 3, april: 3, avril: 3,
  may: 4, mai: 4,
  jun: 5, juin: 5, june: 5,
  jul: 6, juil: 6, july: 6, juillet: 6,
  aug: 7, août: 7, aout: 7, august: 7,
  sep: 8, sept: 8, september: 8, septembre: 8,
  oct: 9, october: 9, octobre: 9,
  nov: 10, november: 10, novembre: 10,
  dec: 11, déc: 11, december: 11, décembre: 11,
};

const parseDate = (segment: string): number => {
  const parts = segment.trim().toLowerCase().split(/\s+/);
  if (parts.length < 2) return 0;
  const month = MONTHS[parts[0].replace(/\.$/, "")] ?? 0;
  const year = parseInt(parts[1], 10) || 0;
  return year * 12 + month;
};

const parseStart = (period: string): number =>
  parseDate(period.split(/[-–—]/)[0]);

const parseEnd = (period: string): number => {
  const segments = period.split(/[-–—]/);
  return parseDate(segments[1] ?? segments[0]);
};


const labels = {
  EN: {
    title: "Experience",
    subtitle:
      "Internships, academic and personal projects across AI, data and full-stack engineering.",
  },
  FR: {
    title: "Expériences",
    subtitle:
      "Stages, projets académiques et personnels entre IA, data et ingénierie full-stack.",
  },
};

const Experiences = ({ lang }: Props) => {
  const t = labels[lang];
  const experienceList = [...experiences[lang]].sort(
    (a, b) =>
      parseEnd(b.period) - parseEnd(a.period) ||
      parseStart(b.period) - parseStart(a.period)
  );

  return (
    <section id="experiences" className="scroll-mt-24 py-20 md:py-28">
      <Title eyebrow="02" title={t.title} subtitle={t.subtitle} />

      <ol className="relative mx-auto max-w-4xl border-l border-base-content/10 pl-6 md:pl-10">
        {experienceList.map((experience, index) => (
          <Reveal as="li" key={experience.id} delay={Math.min(index, 4) * 60} className="relative pb-8 last:pb-0">
            <span className="absolute -left-[calc(1.5rem+7px)] top-7 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-accent ring-4 ring-base-100 md:-left-[calc(2.5rem+7px)]" />
            <article className="group rounded-2xl border border-base-content/10 bg-base-200/40 p-5 transition duration-300 hover:border-accent/40 hover:bg-base-200/70 md:p-6">
              <header className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-center gap-4">
                  <Image
                    src={experience.image}
                    alt={`${experience.company} logo`}
                    className={`h-12 w-12 shrink-0 rounded-xl border border-base-content/10 ${
                      "wideLogo" in experience && experience.wideLogo
                        ? "bg-white object-contain p-1"
                        : "object-cover"
                    }`}
                    width={48}
                    height={48}
                  />
                  <div>
                    <h3 className="text-lg font-bold leading-tight">{experience.role}</h3>
                    <p className="mt-0.5 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                      <Briefcase className="h-3.5 w-3.5" />
                      {experience.company}
                    </p>
                  </div>
                </div>
                <span className="w-fit shrink-0 rounded-full border border-base-content/10 bg-base-100/60 px-3 py-1 font-mono text-xs text-base-content/70">
                  {experience.period}
                </span>
              </header>

              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-base-content/75">
                {experience.description.map((desc, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" />
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>

              {"technologies" in experience && experience.technologies && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-primary/10 px-2 py-0.5 font-mono text-[0.7rem] font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </article>
          </Reveal>
        ))}
      </ol>
    </section>
  );
};

export default Experiences;
