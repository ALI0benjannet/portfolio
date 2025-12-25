import Title from "./Title";
import login from "../assets/projects/login.png";
import emedical from "../assets/projects/emedical.png";
import neuralbey from "../assets/projects/neuralbey.png";
import portfolio from "../assets/projects/portfrlio.png";
import diagnostique from "../assets/projects/diagnostique.png";
import { Github } from "lucide-react";

type Language = "EN" | "FR";

const projects = {
  EN: [
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
      technologies: ["ReactJS", "Tailwind CSS"],
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
      technologies: ["ReactJS","Express/Nodemailer"],
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
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col gap-3 p-4 text-left">
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-accent leading-tight">
                  {project.title}
                </h3>
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
              <div className="flex items-center gap-2 pt-2">
                <a href={project.demoLink} className="btn btn-sm btn-accent w-2/3">
                  {isEn ? "Demo" : "Démo"}
                </a>
                <a href={project.repoLink} className="btn btn-sm btn-outline  w-1/3">
                  <Github className="w-4" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
