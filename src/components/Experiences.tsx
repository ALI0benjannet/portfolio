import Title from "./Title";
import Image from "next/image";

import imgPython from "../assets/techno/python.png";
import imgPandas from "../assets/techno/pandas.png";
import imgNumPy from "../assets/techno/numPy.png";
import imgML from "../assets/techno/jupyternotebook.png";
import imgDL from "../assets/techno/deepLearning.png";
import imgHTML from "../assets/techno/html.png";
import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgNEXT from "../assets/techno/next-js.webp";
import imgTAILWIND from "../assets/techno/tailwind.png";
import imgNODE from "../assets/techno/node-js.png";
import imgTYPE from "../assets/techno/typescript.svg";
import imgSpringBoot from "../assets/techno/springBoot.png";
import imgSymfony from "../assets/techno/symfony.png";
import imgPHP from "../assets/techno/php.png";
import imgJava from "../assets/techno/java.png";
import imgCpp from "../assets/techno/c++.png";
import imgJavaFX from "../assets/techno/javafx.png";
import imgAngular from "../assets/techno/angular.png";
import imgLaravel from "../assets/techno/laravel.png";
import triosweb from "../assets/companies/triosweb.png";
import esprim from "../assets/companies/esprim.png";
import neuralbey from "../assets/companies/neuralbey.png";
import startup from "../assets/companies/startup.png";
import anypli from "../assets/companies/anypli.png";
import tradrly from "../assets/companies/tradrly.jpg";
import imgDocker from "../assets/techno/docker.jpg";

type Language = "EN" | "FR";

const skills = [
  { id: 1, name: "Python", image: imgPython },
  { id: 2, name: "Pandas", image: imgPandas },
  { id: 3, name: "NumPy", image: imgNumPy },
  { id: 4, name: "Jupyter Notebook", image: imgML },
  { id: 5, name: "Deep Learning", image: imgDL },
  { id: 6, name: "HTML", image: imgHTML },
  { id: 7, name: "CSS", image: imgCSS },
  { id: 8, name: "JavaScript", image: imgJS },
  { id: 9, name: "React", image: imgREACT },
  { id: 10, name: "Next.js", image: imgNEXT },
  { id: 11, name: "Tailwind CSS", image: imgTAILWIND },
  { id: 12, name: "Node.js", image: imgNODE },
  { id: 13, name: "Spring Boot", image: imgSpringBoot },
  { id: 14, name: "Symfony", image: imgSymfony },
  { id: 15, name: "PHP", image: imgPHP },
  { id: 16, name: "Java", image: imgJava },
  { id: 17, name: "C++", image: imgCpp },
  { id: 18, name: "TypeScript", image: imgTYPE },
  { id: 19, name: "JavaFX", image: imgJavaFX },
  { id: 20, name: "Angular", image: imgAngular },
  { id: 21, name: "Laravel", image: imgLaravel },
  { id: 22, name: "Docker", image: imgDocker },

];

// Compétences sans icône dédiée : affichées en badges texte, par catégorie.
const skillGroups = {
  EN: [
    {
      id: "ai",
      title: "AI & Deep Learning",
      items: ["CNN", "EfficientNet", "Grad-CAM", "NLP (spaCy, SBERT, Transformers)", "LLMs & Vision-Language Models (Gemini)", "Speech (Whisper, ONNX)"],
    },
    {
      id: "backend",
      title: "Backend",
      items: ["FastAPI", "Express.js", "Django", "REST APIs", "Microservices", "JWT"],
    },
    {
      id: "databases",
      title: "Databases",
      items: ["PostgreSQL", "MongoDB", "MySQL", "Neo4j", "SQLite", "Prisma"],
    },
    {
      id: "blockchain",
      title: "Blockchain",
      items: ["Hedera Hashgraph"],
    },
    {
      id: "tools",
      title: "Tools",
      items: ["Git", "Vercel", "Postman"],
    },
  ],
  FR: [
    {
      id: "ai",
      title: "IA & Deep Learning",
      items: ["CNN", "EfficientNet", "Grad-CAM", "NLP (spaCy, SBERT, Transformers)", "LLM & modèles vision-langage (Gemini)", "Parole (Whisper, ONNX)"],
    },
    {
      id: "backend",
      title: "Backend",
      items: ["FastAPI", "Express.js", "Django", "API REST", "Microservices", "JWT"],
    },
    {
      id: "databases",
      title: "Bases de données",
      items: ["PostgreSQL", "MongoDB", "MySQL", "Neo4j", "SQLite", "Prisma"],
    },
    {
      id: "blockchain",
      title: "Blockchain",
      items: ["Hedera Hashgraph"],
    },
    {
      id: "tools",
      title: "Outils",
      items: ["Git", "Vercel", "Postman"],
    },
  ],
};

const skillCount =
  skills.length + skillGroups.EN.reduce((total, group) => total + group.items.length, 0);

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
      period: "Jun 2026 - AUG 2026",
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
        "Final year project:creation of an HR dashboard to track resources and indicators.",
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
      role: "Frontend Developer",
      company: "Neuralbey",
      period: "Jul 2025 - Aug 2025",
      description: ["Year-end project: medical desktop management app."],
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
      period: "Juin 2026 - Aout 2026",  
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
      period: "Oct 2023 - Dec 2023",
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
      role: "Développeur Frontend",
      company: "Neuralbey",
      period: "Juil 2025 - Août 2025",
      description: ["Projet de fin d'année : application desktop de gestion médicale."],
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
      period: "Oct 2025 - Dec 2025",
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

const Experiences = ({ lang }: Props) => {
  const isEn = lang === "EN";
  const experienceList = [...(isEn ? experiences.EN : experiences.FR)].sort(
    (a, b) =>
      parseEnd(b.period) - parseEnd(a.period) ||
      parseStart(b.period) - parseStart(a.period)
  );
  return (
    <section id="experiences" className="space-y-6 scroll-mt-28">
      <Title title={isEn ? "My Experiences" : "Mes expériences"} />
      <section className="relative overflow-hidden rounded-3xl border border-base-200/60 bg-base-100/70 p-6 shadow-2xl backdrop-blur-md md:p-10">
        <div className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 -bottom-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-3">
            <p className="text-left text-base text-base-content/80">
              {isEn
                ? "A journey across web, desktop, and data projects, focused on shipping products with polished interfaces."
                : "Un parcours mêlant développement web, desktop et data, avec un focus sur des produits livrables et des interfaces soignées."}
            </p>
            <div className="relative space-y-5 border-l border-base-200/70 pl-6">
              <div className="absolute left-[-1px] top-4 h-[calc(100%-2rem)] w-[2px] bg-gradient-to-b from-accent/70 via-base-200 to-transparent" />
              {experienceList.map((experience) => (
                <article
                  key={experience.id}
                  className="relative rounded-2xl border border-base-200/70 bg-base-100/90 p-5 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
                >
                  <span className="absolute -left-[11px] top-6 h-5 w-5 rounded-full border-4 border-base-100 bg-gradient-to-br from-accent to-primary" />
                  <div className="flex items-center gap-4">
                    <Image
                      src={experience.image}
                      alt={experience.company}
                      className={`h-12 w-12 shrink-0 rounded-full border border-base-200 ${
                        experience.wideLogo ? "bg-white object-contain p-1" : "object-cover"
                      }`}
                      width={48}
                      height={48}
                    />
                    <div className="space-y-1 text-left">
                      <h2 className="text-lg font-bold leading-tight text-accent">
                        {experience.role}
                      </h2>
                      <p className="text-sm font-semibold text-base-content/80">
                        {experience.company}
                      </p>
                      <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
                        {experience.period}
                      </span>
                    </div>
                  </div>
                  <ul className="mt-3 space-y-2 text-left text-sm leading-relaxed text-base-content/80">
                    {experience.description.map((desc, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                  {experience.technologies && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>

          <div
            id="skills"
            className="space-y-4 rounded-2xl border border-base-200/70 bg-base-100/90 p-4 shadow-lg scroll-mt-28"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-left text-xl font-semibold">
                {isEn ? "Stack & tools" : "Stack & outils"}
              </h3>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                {isEn ? `${skillCount} skills` : `${skillCount} compétences`}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {skills.map((skill) => (
                <div
                  key={skill.id}
                  className="group flex flex-col items-center gap-2 rounded-2xl border border-base-200/70 bg-base-100/80 p-3 text-center shadow transition hover:-translate-y-1 hover:border-accent/60 hover:shadow-xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-base-200/60 p-2 transition group-hover:bg-accent/10">
                    <Image
                      src={skill.image}
                      alt={skill.name}
                      className="h-12 w-12 object-contain"
                      width={48}
                      height={48}
                    />
                  </div>
                  <span className="text-xs font-semibold text-base-content/80">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
            <div className="space-y-4 pt-2">
              {(isEn ? skillGroups.EN : skillGroups.FR).map((group) => (
                <div key={group.id} className="space-y-2 text-left">
                  <h4 className="text-sm font-semibold text-accent">{group.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Experiences;
