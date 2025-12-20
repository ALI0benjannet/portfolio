import Title from "./Title";
import aliDev from "../assets/aliDev.jpg";
import { Brain, Cpu, Layout, Monitor, Server } from "lucide-react";

const aboutSection = [
  {
    id: 1,
    title: "Passionné par Data Science & Intelligence Artificielle",
    description:
      "Conception et développement de solutions intelligentes basées sur l’analyse de données et les modèles d’IA à l’aide de Python, Pandas et NumPy.",
    icon: <Brain className="text-accent scale-150" />,
  },
  {
    id: 2,
    title: "Développeur Frontend",
    description:
      "Création d’interfaces web modernes et interactives avec HTML, CSS, JavaScript, React et Next.js.",
    icon: <Layout className="text-accent scale-150" />,
  },
  {
    id: 3,
    title: "Développeur Backend",
    description:
      "Développement d’APIs et de systèmes backend robustes avec Node.js, Spring Boot et Symfony, intégrés aux bases de données.",
    icon: <Server className="text-accent scale-150" />,
  },
  {
    id: 4,
    title: "Applications Desktop & Web",
    description:
      "Développement d’applications complètes et performantes en utilisant JavaFX et des technologies web modernes.",
    icon: <Monitor className="text-accent scale-150" />,
  },
  {
    id: 5,
    title: "Intégration IA & Applications",
    description:
      "Intégration de modèles intelligents dans des applications web afin de créer des solutions innovantes et performantes.",
    icon: <Cpu className="text-accent scale-150" />,
  },
];

const About = () => {
  return (
    <div className="bg-base-300 p-10 mb-10 md:mb-32">
      <Title title=" À propos " />
      <div className="md:h-screen flex justify-center items-center">
        <div className="hidden md:block">
          <img
            src={aliDev}
            alt="img Ali Ben Jannet"
            className="w-96 object-cover rounded-xl"
          />
        </div>
        <div className="md:ml-4 space-y-4">
          {aboutSection.map((section) => (
            <div key={section.id} className="flex flex-col md:flex-row items-center bg-base-100 p-5 rounded-xl md:w-96 shadow-xl">
              <div className="md:ml-4 text-center md:text-left">
                {section.icon}
                <h2 className="text-xl font-bold mb-1">{section.title}</h2>
              </div>
              <p className="text-sm">{section.description}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default About;
