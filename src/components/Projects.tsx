"use client";

import Title from "./Title";
import Image from "next/image";
import login from "../assets/projects/login.png";
import emedical from "../assets/projects/emedical.png";
import neuralbey from "../assets/projects/neuralbey.png";
import portfolio from "../assets/projects/portfrlio.png";
import diagnostique from "../assets/projects/diagnostique.png";
import forsatech from "../assets/projects/forsatech.jpg";
import tumor from "../assets/projects/tumor.jpg";
import touribook from "../assets/projects/TouriBook.jpg";
import astro from "../assets/projects/Agent_IA.png";
import dooby from "../assets/projects/dooby.jpg";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import Reveal from "./Reveal";
import { GithubIcon } from "./SocialLinks";
import { site, type Language } from "@/lib/site";

// demoLink / repoLink vides = boutons masqués sur la carte.
const projects = {
  EN: [
    {
      id: 7,
      title: "TouriBook – Tourism Activity Booking Platform (Microservices)",
      context: "Anypli · Aug 2026",
      description: [
        "Tourism activity booking platform for Tunisia: 7 FastAPI microservices (one PostgreSQL database each) behind an API gateway, a Next.js SSR client and a React admin",
        "Booking saga with atomic SQL updates guaranteeing zero overselling, Stripe with signed idempotent webhooks, QR-code vouchers, revocable JWT sessions, FR / EN / AR with RTL",
      ],
      technologies: ["FastAPI", "PostgreSQL", "SQLAlchemy", "Next.js", "React", "TypeScript", "Tailwind CSS", "Stripe", "MapLibre GL", "Docker Compose"],
      demoLink: "",
      repoLink: "",
      image: touribook,
    },
    {
      id: 9,
      title: "DOOBY – Timetable Extraction & \"Hey Dooby\" Wake-Word Detection",
      context: "Tradrly · Jul 2026 - Aug 2026",
      description: [
        "Timetable extraction: zero-shot vision-language pipeline converting Arabic–French school timetables (image or PDF) into schema-constrained JSON (precision 93.9%, recall 81.6%, F1 87.3%, 100% exact Arabic subject labels on annotated ground truth)",
        "Wake-word detection: made the offline \"Hey Dooby\" detector (OpenWakeWord, ONNX) truly operational after diagnosing a silent fallback that faked detections; built a real-time bench to calibrate the threshold (6/6 detections, no false triggers)",
      ],
      technologies: ["Gemini VLM", "Prompt Engineering", "JSON Schema", "Node.js", "Express", "Python", "OpenWakeWord", "ONNX", "Tkinter"],
      demoLink: "",
      repoLink: "",
      image: dooby,
    },
    {
      id: 8,
      title: "Astro – Local-First AI Agent",
      context: "Tradrly · Jun 2026 - Jul 2026",
      description: [
        "AI agent (Electron + React app, Node.js orchestrator, FastAPI AI layer) that understands French and English commands, typos included, and controls apps, volume, brightness, files, windows, agenda and Pomodoro",
        "A regex → spaCy → Gemini / GPT-4o fallback cascade keeps it working offline; voice via faster-whisper and TTS",
      ],
      technologies: ["Python", "FastAPI", "spaCy", "Gemini API", "faster-whisper", "Node.js", "Electron", "React", "Tailwind CSS", "SQLite", "ChromaDB"],
      demoLink: "",
      repoLink: "",
      image: astro,
    },
    {
      id: 0,
      title: "ForsaTech — AI-Powered Recruitment Platform",
      context: "ESPRIM · Oct 2025 - Apr 2026",
      description: [
        "MERN stack web app with AI-driven CV parsing (spaCy Transformer + NER) and semantic matching (SBERT)",
        "FastAPI microservice for ML model serving and candidate-job scoring",
        "Multi-role dashboards (recruiter / candidate / admin) with interview management and real-time chat",
      ],
      technologies: ["React", "Node.js", "FastAPI", "MongoDB", "spaCy", "SBERT"],
      demoLink: "",
      repoLink: "",
      image: forsatech,
    },
    {
      id: -1,
      title: "Brain Tumor Detection — Web App & ML Pipeline",
      context: "ESPRIM · Feb 2026 - Apr 2026",
      description: [
        "Built and trained deep learning models (CNN, EfficientNet) for MRI brain tumor classification with GradCAM explainability and uncertainty estimation",
        "Developed a REST API (FastAPI) and interactive dashboard (Streamlit) containerized with Docker",
      ],
      technologies: ["Python", "PyTorch", "FastAPI", "Streamlit", "Docker"],
      demoLink: "",
      repoLink: "",
      image: tumor,
    },
    {
      id: 1,
      title: "Dental diagnosis web app & ML model",
      context: "ESPRIM · Oct 2025 - Dec 2025",
      description: [
        "Data analysis and reporting with Jupyter Notebook (Python)",
        "Metrics and visualizations for diagnosis",
      ],
      technologies: ["Angular", "Python", "Jupyter"],
      demoLink: "",
      repoLink: "",
      image: diagnostique,
    },
    {
      id: 2,
      title: "Personal portfolio site",
      context: "Personal project · Aug 2025 - Sep 2025",
      description: [
        "Responsive, SEO-optimized design",
        "Smooth animations and interactions",
      ],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Nodemailer"],
      demoLink: site.url,
      repoLink: site.repo,
      image: portfolio,
    },
    {
      id: 3,
      title: "Neuralbey web application",
      context: "Neuralbey internship · Jul 2025 - Aug 2025",
      description: [
        "Landing page",
        "Contact page with form",
        "Internship offers section with application flow",
        "Back-office to manage applications and interns",
      ],
      technologies: ["ReactJS", "Django"],
      demoLink: "",
      repoLink: "",
      image: neuralbey,
    },
    {
      id: 4,
      title: "Modern medical management website",
      context: "ESPRIM · Jan 2024 - Mar 2024",
      description: [
        "Smart chatbot for patient assistance",
        "Messaging system implementation",
        "Pharmacy management module",
        "Appointments management module",
      ],
      technologies: ["Symfony", "Docker"],
      demoLink: "",
      repoLink: "",
      image: emedical,
    },
    {
      id: 5,
      title: "Medical desktop management app",
      context: "ESPRIM · Oct 2023 - Dec 2023",
      description: [
        "Rebuilt web features: chatbot, messaging, pharmacy and appointment management",
        "User-friendly interface with JavaFX",
      ],
      technologies: ["JavaFX"],
      demoLink: "",
      repoLink: "",
      image: emedical,
    },
    {
      id: 6,
      title: "HR dashboard",
      context: "TriosWeb · Mar 2023 - Jun 2023",
      description: [
        "Admin interface with advanced features",
        "Manage employees, leave, and performance reviews",
      ],
      technologies: ["Laravel", "React JS"],
      demoLink: "",
      repoLink: "",
      image: login,
    },
  ],
  FR: [
    {
      id: 7,
      title: "TouriBook – Réservation d'activités touristiques (Microservices)",
      context: "Anypli · Août 2026",
      description: [
        "Plateforme de réservation d'activités touristiques en Tunisie : 7 microservices FastAPI (une base PostgreSQL chacun) derrière une passerelle API, client Next.js SSR et admin React",
        "Saga de réservation avec mises à jour SQL atomiques garantissant zéro survente, Stripe avec webhooks signés idempotents, justificatifs QR code, sessions JWT révocables, FR / EN / AR avec RTL",
      ],
      technologies: ["FastAPI", "PostgreSQL", "SQLAlchemy", "Next.js", "React", "TypeScript", "Tailwind CSS", "Stripe", "MapLibre GL", "Docker Compose"],
      demoLink: "",
      repoLink: "",
      image: touribook,
    },
    {
      id: 9,
      title: "DOOBY – Emplois du temps & mot de réveil « Hey Dooby »",
      context: "Tradrly · Juil 2026 - Août 2026",
      description: [
        "Extraction d'emplois du temps : pipeline vision-langage zero-shot convertissant des emplois du temps arabe–français (image ou PDF) en JSON contraint par schéma (précision 93,9 %, rappel 81,6 %, F1 87,3 %, 100 % des libellés arabes exacts sur une vérité terrain annotée)",
        "Mot de réveil : remise en fonctionnement réel du détecteur hors ligne « Hey Dooby » (OpenWakeWord, ONNX) après diagnostic d'un repli silencieux qui simulait les détections ; banc temps réel pour calibrer le seuil (6/6 détections, aucune fausse alerte)",
      ],
      technologies: ["Gemini VLM", "Prompt Engineering", "JSON Schema", "Node.js", "Express", "Python", "OpenWakeWord", "ONNX", "Tkinter"],
      demoLink: "",
      repoLink: "",
      image: dooby,
    },
    {
      id: 8,
      title: "Astro – Agent IA à exécution locale",
      context: "Tradrly · Juin 2026 - Juil 2026",
      description: [
        "Agent IA (application Electron + React, orchestrateur Node.js, couche IA FastAPI) qui comprend les commandes en français et en anglais, fautes comprises, et pilote applications, volume, luminosité, fichiers, fenêtres, agenda et Pomodoro",
        "Cascade de repli regex → spaCy → Gemini / GPT-4o pour fonctionner hors ligne ; voix via faster-whisper et TTS",
      ],
      technologies: ["Python", "FastAPI", "spaCy", "Gemini API", "faster-whisper", "Node.js", "Electron", "React", "Tailwind CSS", "SQLite", "ChromaDB"],
      demoLink: "",
      repoLink: "",
      image: astro,
    },
    {
      id: 0,
      title: "ForsaTech — Plateforme de recrutement propulsée par l'IA",
      context: "ESPRIM · Oct 2025 - Avr 2026",
      description: [
        "Application web MERN avec parsing de CV basé sur l'IA (spaCy Transformer + NER) et matching sémantique (SBERT)",
        "Microservice FastAPI pour le service de modèles ML et le scoring candidat-poste",
        "Dashboards multi-rôles (recruteur / candidat / admin) avec gestion des entretiens et chat temps réel",
      ],
      technologies: ["React", "Node.js", "FastAPI", "MongoDB", "spaCy", "SBERT"],
      demoLink: "",
      repoLink: "",
      image: forsatech,
    },
    {
      id: -1,
      title: "Détection de tumeurs cérébrales — App web & pipeline ML",
      context: "ESPRIM · Fév 2026 - Avr 2026",
      description: [
        "Modèles de deep learning (CNN, EfficientNet) entraînés pour la classification de tumeurs cérébrales sur IRM, avec explicabilité GradCAM et estimation d'incertitude",
        "API REST (FastAPI) et dashboard interactif (Streamlit) conteneurisés avec Docker",
      ],
      technologies: ["Python", "PyTorch", "FastAPI", "Streamlit", "Docker"],
      demoLink: "",
      repoLink: "",
      image: tumor,
    },
    {
      id: 1,
      title: "Site de diagnostic dentaire + modèle ML",
      context: "ESPRIM · Oct 2025 - Déc 2025",
      description: [
        "Analyse de données et rapports avec Jupyter Notebook (Python)",
        "Métriques et visualisations pour le diagnostic",
      ],
      technologies: ["Angular", "Python", "Jupyter"],
      demoLink: "",
      repoLink: "",
      image: diagnostique,
    },
    {
      id: 2,
      title: "Portfolio personnel moderne",
      context: "Projet personnel · Août 2025 - Sep 2025",
      description: [
        "Design responsive et optimisé SEO",
        "Animations et interactions fluides",
      ],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Nodemailer"],
      demoLink: site.url,
      repoLink: site.repo,
      image: portfolio,
    },
    {
      id: 3,
      title: "Application web pour Neuralbey",
      context: "Stage Neuralbey · Juil 2025 - Août 2025",
      description: [
        "Page d'accueil",
        "Page contact avec formulaire",
        "Section offres de stages avec candidature",
        "Back-office pour gérer candidatures et stagiaires",
      ],
      technologies: ["ReactJS", "Django"],
      demoLink: "",
      repoLink: "",
      image: neuralbey,
    },
    {
      id: 4,
      title: "Site web de gestion médicale",
      context: "ESPRIM · Jan 2024 - Mars 2024",
      description: [
        "Chatbot intelligent pour l'assistance patient",
        "Implémentation d'une messagerie",
        "Gestion des pharmacies",
        "Gestion des rendez-vous",
      ],
      technologies: ["Symfony", "Docker"],
      demoLink: "",
      repoLink: "",
      image: emedical,
    },
    {
      id: 5,
      title: "Application desktop de gestion médicale",
      context: "ESPRIM · Oct 2023 - Déc 2023",
      description: [
        "Reprise des fonctionnalités web : chatbot, messagerie, gestion des pharmacies et des rendez-vous",
        "Interface utilisateur intuitive avec JavaFX",
      ],
      technologies: ["JavaFX"],
      demoLink: "",
      repoLink: "",
      image: emedical,
    },
    {
      id: 6,
      title: "Tableau de bord des ressources humaines",
      context: "TriosWeb · Mars 2023 - Juin 2023",
      description: [
        "Développement d'interface admin avec fonctionnalités avancées",
        "Gestion des employés, congés et évaluations",
      ],
      technologies: ["Laravel", "React JS"],
      demoLink: "",
      repoLink: "",
      image: login,
    },
  ],
};

type Props = {
  lang: Language;
};

const labels = {
  EN: {
    title: "Featured Projects",
    subtitle: "A selection of AI systems, data pipelines and full-stack platforms I have designed and built.",
    featured: "Featured",
    demo: "Live site",
    code: "Code",
    more: "Show all projects",
    less: "Show fewer projects",
  },
  FR: {
    title: "Projets",
    subtitle: "Une sélection de systèmes d'IA, de pipelines de données et de plateformes full-stack que j'ai conçus et réalisés.",
    featured: "À la une",
    demo: "Voir le site",
    code: "Code",
    more: "Voir tous les projets",
    less: "Voir moins de projets",
  },
};

// Nombre de projets affichés avant le bouton « Voir tous les projets ».
const INITIAL_COUNT = 6;
// Les projets les plus récents (2026) sont mis en avant.
const FEATURED_COUNT = 3;

const Projects = ({ lang }: Props) => {
  const [showAll, setShowAll] = useState(false);
  const t = labels[lang];
  const projectList = projects[lang];
  const visible = showAll ? projectList : projectList.slice(0, INITIAL_COUNT);

  return (
    <section id="projects" className="scroll-mt-24 py-20 md:py-28">
      <Title eyebrow="04" title={t.title} subtitle={t.subtitle} />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((project, index) => (
          <Reveal key={project.id} as="article" delay={(index % 3) * 80} className="h-full">
            <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-base-content/10 bg-base-200/40 transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-2xl hover:shadow-black/30">
              <div className="relative aspect-[16/9] overflow-hidden bg-base-300">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  placeholder="blur"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base-100/70 via-transparent to-transparent" />
                {index < FEATURED_COUNT && (
                  <span className="absolute left-3 top-3 rounded-full bg-accent px-2.5 py-1 text-[0.7rem] font-bold uppercase tracking-wide text-accent-content shadow">
                    {t.featured}
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col gap-3 p-5">
                <div>
                  {project.context && (
                    <p className="font-mono text-[0.7rem] uppercase tracking-wider text-base-content/50">
                      {project.context}
                    </p>
                  )}
                  <h3 className="mt-1.5 text-lg font-bold leading-snug transition group-hover:text-accent">
                    {project.title}
                  </h3>
                </div>

                <ul className="space-y-1.5 text-sm leading-relaxed text-base-content/70">
                  {project.description.map((line, idx) => (
                    <li key={idx} className="flex gap-2.5">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-primary/10 px-2 py-0.5 font-mono text-[0.7rem] font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {(project.demoLink || project.repoLink) && (
                  <div className="flex items-center gap-2 border-t border-base-content/10 pt-4">
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-accent rounded-full"
                      >
                        {t.demo}
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    )}
                    {project.repoLink && (
                      <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-ghost rounded-full"
                      >
                        <GithubIcon />
                        {t.code}
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {projectList.length > INITIAL_COUNT && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((value) => !value)}
            aria-expanded={showAll}
            className="btn btn-outline rounded-full px-6"
          >
            {showAll ? t.less : `${t.more} (${projectList.length})`}
            <ChevronDown className={`h-4 w-4 transition ${showAll ? "rotate-180" : ""}`} />
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
