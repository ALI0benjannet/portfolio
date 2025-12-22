import Title from "./Title";
import login from "../assets/projects/login.png";
import emedical from "../assets/projects/emedical.png";
import neuralbey from "../assets/projects/neuralbey.png";
import portfolio from "../assets/projects/portfrlio.png";
import diagnostique from "../assets/projects/diagnostique.png";
const projects = [
  {
    id: 1,
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
  {
    id: 2,
    title: "Développement d'une application desktop de gestion médicale",
    description: [
      "Reprise des fonctionnalités du site web (chatbot, messagerie, gestion des pharmacies,gestion des rendez-vous)",
      "Interface utilisateur intuitive avec JavaFX",
    ],
    technologies: ["JavaFX"],
    demoLink: "#",
    repoLink: "#",
    image: emedical,
  },
  {
    id: 3,
    title:
      "Développement d'un site web moderne et professionnel de gestion médicale",
    description: [
      "Développement d'un chatbot intelligent pour l'assistance aux patients",
      "Implémentation d'un système de gestion de messagerie",
      "Conception d'un module de gestion des pharmacies",
      "Conception d'un module de gestion des des rendez-vous",
    ],
    technologies: ["Symfony","Docker"],
    demoLink: "#",
    repoLink: "#",
    image: emedical,
  },
  {
    id: 4,
    title: "Développeur d'un site web moderne et professionnel pour Neuralbey",

    description: [
      "Développement d'une page d'accueil (landing page) attrayante",
      "Implémentation d'une page 'Contactez-nous' avec formulaire",
      "Création d'une section dédiée aux offres de stages avec système de candidature en ligne",
      "Conception d'un espace interne (back-office) pour la gestion des candidatures et des stagiaires",
    ],
    technologies: ["React", "Django"],
    demoLink: "#",
    repoLink: "#",
    image: neuralbey,
  },
  {
    id: 5,
    title: "Développeur d'un site web portfolio personnel moderne",
    description: [
      "Design responsive et optimisé pour le SEO(Search Engine Optimization)",
      "Animation et interactions fluides",
    ],
    technologies: ["ReactJS", "Tailwind CSS"],
    demoLink: "#",
    repoLink: "#",
    image: portfolio,
  },
  {
    id: 6,
    title:
      "Développement d'un site web de diagnostic dentaire avec Angular et développement d'un modèle de diagnostic avec machine learning",
    description: [
      "Analyse des données et création de rapports avec Jupyter Notebook (Python)",
      "Production de métriques et visualisations pour le diagnostic",
    ],
    technologies: ["Angular", "Python", "VS Code"],
    demoLink: "#",
    repoLink: "#",
    image: diagnostique,
  },
];
const Projects = () => {
  return (
    <section id="projects" className="mt-10 scroll-mt-28">
      <Title title=" Projects " />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
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
                <a href={project.demoLink} className="btn btn-sm btn-accent">
                  Demo
                </a>
                <a href={project.repoLink} className="btn btn-sm btn-outline">
                  Code
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
