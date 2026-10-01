import Image, { type StaticImageData } from "next/image";
import { Blocks, BrainCircuit, Database, Server, Wrench } from "lucide-react";
import Title from "./Title";
import Reveal from "./Reveal";
import type { Language } from "@/lib/site";

import imgPython from "../assets/techno/python.png";
import imgPandas from "../assets/techno/pandas.png";
import imgNumPy from "../assets/techno/numPy.png";
import imgJupyter from "../assets/techno/jupyternotebook.png";
import imgDL from "../assets/techno/deepLearning.png";
import imgHTML from "../assets/techno/html.png";
import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgReact from "../assets/techno/react.png";
import imgNext from "../assets/techno/next-js.webp";
import imgTailwind from "../assets/techno/tailwind.png";
import imgNode from "../assets/techno/node-js.png";
import imgTS from "../assets/techno/typescript.svg";
import imgSpringBoot from "../assets/techno/springBoot.png";
import imgSymfony from "../assets/techno/symfony.png";
import imgPHP from "../assets/techno/php.png";
import imgJava from "../assets/techno/java.png";
import imgCpp from "../assets/techno/c++.png";
import imgJavaFX from "../assets/techno/javafx.png";
import imgAngular from "../assets/techno/angular.png";
import imgLaravel from "../assets/techno/laravel.png";
import imgDocker from "../assets/techno/docker.jpg";

type Tool = { name: string; image: StaticImageData };

// Technologies avec logo, regroupées par domaine.
const toolGroups: { id: string; title: Record<Language, string>; tools: Tool[] }[] = [
  {
    id: "data",
    title: { EN: "Data & AI", FR: "Data & IA" },
    tools: [
      { name: "Python", image: imgPython },
      { name: "Pandas", image: imgPandas },
      { name: "NumPy", image: imgNumPy },
      { name: "Jupyter", image: imgJupyter },
      { name: "Deep Learning", image: imgDL },
    ],
  },
  {
    id: "frontend",
    title: { EN: "Frontend", FR: "Frontend" },
    tools: [
      { name: "TypeScript", image: imgTS },
      { name: "JavaScript", image: imgJS },
      { name: "React", image: imgReact },
      { name: "Next.js", image: imgNext },
      { name: "Angular", image: imgAngular },
      { name: "Tailwind CSS", image: imgTailwind },
      { name: "HTML", image: imgHTML },
      { name: "CSS", image: imgCSS },
    ],
  },
  {
    id: "backend",
    title: { EN: "Backend & DevOps", FR: "Backend & DevOps" },
    tools: [
      { name: "Node.js", image: imgNode },
      { name: "Spring Boot", image: imgSpringBoot },
      { name: "Symfony", image: imgSymfony },
      { name: "Laravel", image: imgLaravel },
      { name: "PHP", image: imgPHP },
      { name: "Docker", image: imgDocker },
    ],
  },
  {
    id: "languages",
    title: { EN: "Languages & Desktop", FR: "Langages & Desktop" },
    tools: [
      { name: "Java", image: imgJava },
      { name: "JavaFX", image: imgJavaFX },
      { name: "C++", image: imgCpp },
    ],
  },
];

// Compétences sans logo dédié : affichées en badges texte.
const skillGroups: Record<Language, { id: string; title: string; icon: typeof Server; items: string[] }[]> = {
  EN: [
    {
      id: "ai",
      title: "AI & Deep Learning",
      icon: BrainCircuit,
      items: ["CNN", "EfficientNet", "Grad-CAM", "NLP (spaCy, SBERT, Transformers)", "LLMs & Vision-Language Models (Gemini)", "Speech (Whisper, ONNX)"],
    },
    {
      id: "backend",
      title: "Backend",
      icon: Server,
      items: ["FastAPI", "Express.js", "Django", "REST APIs", "Microservices", "JWT"],
    },
    {
      id: "databases",
      title: "Databases",
      icon: Database,
      items: ["PostgreSQL", "MongoDB", "MySQL", "Neo4j", "SQLite", "Prisma"],
    },
    {
      id: "blockchain",
      title: "Blockchain",
      icon: Blocks,
      items: ["Hedera Hashgraph"],
    },
    {
      id: "tools",
      title: "Tools",
      icon: Wrench,
      items: ["Git", "Vercel", "Postman"],
    },
  ],
  FR: [
    {
      id: "ai",
      title: "IA & Deep Learning",
      icon: BrainCircuit,
      items: ["CNN", "EfficientNet", "Grad-CAM", "NLP (spaCy, SBERT, Transformers)", "LLM & modèles vision-langage (Gemini)", "Parole (Whisper, ONNX)"],
    },
    {
      id: "backend",
      title: "Backend",
      icon: Server,
      items: ["FastAPI", "Express.js", "Django", "API REST", "Microservices", "JWT"],
    },
    {
      id: "databases",
      title: "Bases de données",
      icon: Database,
      items: ["PostgreSQL", "MongoDB", "MySQL", "Neo4j", "SQLite", "Prisma"],
    },
    {
      id: "blockchain",
      title: "Blockchain",
      icon: Blocks,
      items: ["Hedera Hashgraph"],
    },
    {
      id: "tools",
      title: "Outils",
      icon: Wrench,
      items: ["Git", "Vercel", "Postman"],
    },
  ],
};

const skillCount =
  toolGroups.reduce((total, group) => total + group.tools.length, 0) +
  skillGroups.EN.reduce((total, group) => total + group.items.length, 0);

const labels = {
  EN: { title: "Skills & Stack", subtitle: `${skillCount} technologies I use to take ideas from notebook to production.` },
  FR: { title: "Compétences & Stack", subtitle: `${skillCount} technologies pour passer d'une idée au notebook, puis à la production.` },
};

type Props = { lang: Language };

const Skills = ({ lang }: Props) => {
  const t = labels[lang];

  return (
    <section id="skills" className="scroll-mt-24 py-20 md:py-28">
      <Title eyebrow="03" title={t.title} subtitle={t.subtitle} />

      <div className="grid gap-4 md:grid-cols-2">
        {toolGroups.map((group, index) => (
          <Reveal key={group.id} delay={index * 80}>
            <div className="h-full rounded-2xl border border-base-content/10 bg-base-200/40 p-5">
              <h3 className="mb-4 font-mono text-xs font-semibold uppercase tracking-widest text-accent">
                {group.title[lang]}
              </h3>
              <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
                {group.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="group flex flex-col items-center gap-2 rounded-xl p-2 text-center transition hover:bg-base-content/5"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 p-2 shadow-sm transition group-hover:-translate-y-0.5 group-hover:shadow-md">
                      <Image src={tool.image} alt="" className="h-full w-full object-contain" width={40} height={40} />
                    </span>
                    <span className="text-xs font-medium text-base-content/80">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups[lang].map((group, index) => {
          const Icon = group.icon;
          return (
            <Reveal key={group.id} delay={index * 60}>
              <div className="h-full rounded-2xl border border-base-content/10 bg-base-200/40 p-5">
                <h3 className="flex items-center gap-2 font-semibold">
                  <Icon className="h-4 w-4 text-accent" />
                  {group.title}
                </h3>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-base-content/10 bg-base-100/60 px-2.5 py-1 text-xs font-medium text-base-content/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
