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
import { Github } from "lucide-react";

type Language = "EN" | "FR";

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
      id: 9,
      title: "DOOBY – Timetable Extraction & \"Hey Dooby\" Wake-Word Detection",
      context: "Tradrly · Jun 2026 - Jul 2026",
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
      id: 0,
      title: "ForsaTech — AI-Powered Recruitment Platform",
      description: [
        "MERN stack web app with AI-driven CV parsing (spaCy Transformer + NER) and semantic matching (SBERT)",
        "FastAPI microservice for ML model serving and candidate-job scoring",
        "Multi-role dashboards (recruiter / candidate / admin) with interview management and real-time chat",
      ],
      technologies: ["React", "Node.js", "FastAPI", "MongoDB", "spaCy", "SBERT"],
      demoLink: "#",
      repoLink: "#",
      image: forsatech,
    },
    {
      id: -1,
      title: "Brain Tumor Detection — Web App & ML Pipeline",
      description: [
        "Built and trained deep learning models (CNN, EfficientNet) for MRI brain tumor classification with GradCAM explainability and uncertainty estimation",
        "Developed a REST API (FastAPI) and interactive dashboard (Streamlit) containerized with Docker",
      ],
      technologies: ["Python", "PyTorch", "FastAPI", "Streamlit", "Docker"],
      demoLink: "#",
      repoLink: "#",
      image: tumor,
    },
    {
      id: 1,
      title: "Dental diagnosis web app & ML model",
      description: [
        "Data analysis and reporting with Jupyter Notebook (Python)",
        "Metrics and visualizations for diagnosis",
      ],
      technologies: ["Angular", "Python", "VS Code"],
      demoLink: "#",
      repoLink: "#",
      image: diagnostique,
    },
    {
      id: 2,
      title: "Personal portfolio site",
      description: [
        "Responsive, SEO-optimized design",
        "Smooth animations and interactions",
      ],
      technologies: ["Next.js", "Tailwind CSS"],
      demoLink: "#",
      repoLink: "#",
      image: portfolio,
    },
    {
      id: 3,
      title: "Neuralbey modern professional website",
      description: [
        "Landing page",
        "Contact page with form",
        "Internship offers section with application flow",
        "Back-office to manage applications and interns",
      ],
      technologies: ["ReactJS", "Django"],
      demoLink: "#",
      repoLink: "#",
      image: neuralbey,
    },
    {
      id: 4,
     title: "Modern medical management website",
      description: [
        "Smart chatbot for patient assistance",
        "Messaging system implementation",
        "Pharmacy management module",
        "Appointments management module",
      ],
      technologies: ["Symfony", "Docker"],
      demoLink: "#",
      repoLink: "#",
      image: emedical,
    },
    {
      id: 5,
      title: "Medical desktop management app",
      description: [
        "Rebuilt web features: chatbot, messaging, pharmacy and appointment management",
        "User-friendly interface with JavaFX",
      ],
      technologies: ["JavaFX"],
      demoLink: "#",
      repoLink: "#",
      image: emedical,
    },
    {
      id: 6,
      title: "HR dashboard",
      description: [
        "Admin interface with advanced features",
        "Manage employees, leave, and performance reviews",
      ],
      technologies: ["Laravel", "React JS"],
      demoLink: "#",
      repoLink: "#",
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
      id: 9,
      title: "DOOBY – Emplois du temps & mot de réveil « Hey Dooby »",
      context: "Tradrly · Juin 2026 - Juil 2026",
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
      id: 0,
      title: "ForsaTech — Plateforme de recrutement propulsée par l'IA",
      description: [
        "Application web MERN avec parsing de CV basé sur l'IA (spaCy Transformer + NER) et matching sémantique (SBERT)",
        "Microservice FastAPI pour le service de modèles ML et le scoring candidat-poste",
        "Dashboards multi-rôles (recruteur / candidat / admin) avec gestion des entretiens et chat temps réel",
      ],
      technologies: ["React", "Node.js", "FastAPI", "MongoDB", "spaCy", "SBERT"],
      demoLink: "#",
      repoLink: "#",
      image: forsatech,
    },
    {
      id: -1,
      title: "Détection de tumeurs cérébrales — App web & pipeline ML",
      description: [
        "Modèles de deep learning (CNN, EfficientNet) entraînés pour la classification de tumeurs cérébrales sur IRM, avec explicabilité GradCAM et estimation d'incertitude",
        "API REST (FastAPI) et dashboard interactif (Streamlit) conteneurisés avec Docker",
      ],
      technologies: ["Python", "PyTorch", "FastAPI", "Streamlit", "Docker"],
      demoLink: "#",
      repoLink: "#",
      image: tumor,
    },
    {
      id: 1,
  title: "Site de diagnostic dentaire + modèle ML",
      description: [
        "Analyse de données et rapports avec Jupyter Notebook (Python)",
        "Métriques et visualisations pour le diagnostic",
      ],
      technologies: ["Angular", "Python", "VS Code"],
      demoLink: "#",
      repoLink: "#",
      image: diagnostique,
    },
    {
      id: 2,
     title: "Portfolio personnel moderne",
      description: [
        "Design responsive et optimisé SEO",
        "Animations et interactions fluides",
      ],
      technologies: ["Next.js","Express/Nodemailer"],
      demoLink: "#",
      repoLink: "#",
      image: portfolio,
    },
    {
      id: 3,
         title: "Site vitrine professionnel pour Neuralbey",
      description: [
        "Page d'acceuil",
        "Page contact avec formulaire",
        "Section offres de stages avec candidature",
        "Back-office pour gérer candidatures et stagiaires",
      ],
      technologies: ["ReactJS", "Django"],
      demoLink: "#",
      repoLink: "#",
      image: neuralbey,
    },
    {
      id: 4,
      title: "Site web de gestion médicale",
      description: [
        "Chatbot intelligent pour l'assistance patient",
        "Implémentation d'une messagerie",
        "Gestion des pharmacies",
        "Gestion des rendez-vous",
      ],
      technologies: ["Symfony", "Docker"],
      demoLink: "#",
      repoLink: "#",
      image: emedical,
    },
    {
      id: 5,
     title: "Application desktop de gestion médicale",
      description: [
        "Reprise des fonctionnalités web : chatbot, messagerie, gestion des pharmacies et des rendez-vous",
        "Interface utilisateur intuitive avec JavaFX",
      ],
      technologies: ["JavaFX"],
      demoLink: "#",
      repoLink: "#",
      image: emedical,
    },
    {
      id: 6,
     title: "Tableau de bord des ressources humaines",
      description: [
        "Développement d'interface admin avec fonctionnalités avancées",
        "Gestion des employés, congés et évaluations",
      ],
      technologies: ["Laravel", "React JS"],
      demoLink: "#",
      repoLink: "#",
      image: login,
    },
  ],
};

type Props = {
  lang: Language;
};

const Projects = ({ lang }: Props) => {
  const isEn = lang === "EN";
  const projectList = isEn ? projects.EN : projects.FR;
  return (
    <section id="projects" className="mt-10 scroll-mt-28">
      <Title title={isEn ? "My Projects" : "Mes Projets"} />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projectList.map((project) => (
          <article
            key={project.id}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-base-200/70 bg-base-100 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="relative h-40 overflow-hidden bg-base-200">
              <Image
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                placeholder="blur"
              />
            </div>
            <div className="flex flex-1 flex-col gap-3 p-4 text-left">
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-accent leading-tight">
                  {project.title}
                </h3>
                {project.context && (
                  <p className="text-xs font-semibold uppercase tracking-wide text-base-content/60">
                    {project.context}
                  </p>
                )}
              </div>
              <ul className="space-y-1 text-sm text-base-content/70">
                {project.description.map((line, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {(project.demoLink || project.repoLink) && (
                <div className="flex items-center gap-2 pt-2">
                  {project.demoLink && (
                    <a href={project.demoLink} className="btn btn-sm btn-accent w-2/3">
                      {isEn ? "Demo" : "Démo"}
                    </a>
                  )}
                  {project.repoLink && (
                    <a
                      href={project.repoLink}
                      className="btn btn-sm btn-outline  w-1/3"
                      aria-label="GitHub"
                    >
                      <Github className="w-4" />
                    </a>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
