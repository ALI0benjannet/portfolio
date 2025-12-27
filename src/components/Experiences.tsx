import Title from "./Title";

import imgPython from "../assets/techno/python.png";
import imgPandas from "../assets/techno/pandas.png";
import imgNumPy from "../assets/techno/numPy.png";
import imgML from "../assets/techno/machineLearning.png";
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
import imgDocker from "../assets/techno/docker.jpg";

type Language = "EN" | "FR";

const skills = [
  { id: 1, name: "Python", image: imgPython },
  { id: 2, name: "Pandas", image: imgPandas },
  { id: 3, name: "NumPy", image: imgNumPy },
  { id: 4, name: "Machine Learning", image: imgML },
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
const experiences = {
  EN: [
    {
      id: 1,
      role: "Full Stack Developer",
      company: "TriosWeb",
      period: "Mar 2023 - Jun 2023",
      description: [
        "Capstone: built an HR dashboard to track resources and metrics.",
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
      period: "Oct 2024 - Dec 2025",
      description: [
        "Semester project: ML model and web app for dental diagnosis.",
      ],
      image: esprim,
    },
  ],
  FR: [
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
      role: "Développeur Full Stack",
      company: "Neuralbey",
      period: "Juil 2025 - Août 2025",
      description: ["Projet de fin d'année : application desktop de gestion médicale."],
      image: neuralbey,
    },
    {
      id: 5,
      role: "Développeur Frontend",
      company: "MyStartup",
      period: "Août 2025 - Sep 2025",
      description: ["Projet perso : portfolio pour présenter mes compétences et projets."],
      image: startup,
    },
    {
      id: 6,
      role: "Développeur Full Stack & Data Science",
      company: "ESPRIM",
      period: "Oct 2024 - Dec 2025",
      description: [
        "Projet de semestre : modèle de machine learning et application web de diagnostic dentaire.",
      ],
      image: esprim,
    },
  ],
};

type Props = {
  lang: Language;
};

const Experiences = ({ lang }: Props) => {
  const isEn = lang === "EN";
  const experienceList = isEn ? experiences.EN : experiences.FR;
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
                    <img
                      src={experience.image}
                      alt={experience.company}
                      className="h-12 w-12 rounded-full border border-base-200 object-cover"
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
                {isEn ? "22 skills" : "22 compétences"}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {skills.map((skill) => (
                <div
                  key={skill.id}
                  className="group flex flex-col items-center gap-2 rounded-2xl border border-base-200/70 bg-base-100/80 p-3 text-center shadow transition hover:-translate-y-1 hover:border-accent/60 hover:shadow-xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-base-200/60 p-2 transition group-hover:bg-accent/10">
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="h-12 w-12 object-contain"
                    />
                  </div>
                  <span className="text-xs font-semibold text-base-content/80">
                    {skill.name}
                  </span>
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
