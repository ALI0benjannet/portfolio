import Title from "./Title";
import aliDev from "../assets/aliDev.jpg";
import { Brain, Cpu, Layout, Monitor, Server } from "lucide-react";

type Language = "EN" | "FR";

const aboutSections = {
  EN: [
    {
      id: 1,
      title: "Passionate about Data Science & AI",
      description:
        "Designing intelligent solutions powered by data analysis and AI models using Python, Pandas, and NumPy.",
      icon: <Brain className="text-accent scale-150" />,
    },
    {
      id: 2,
      title: "Frontend Developer",
      description: "Building modern, interactive web interfaces with HTML, CSS, JavaScript, React, and Next.js.",
      icon: <Layout className="text-accent scale-150" />,
    },
    {
      id: 3,
      title: "Backend Developer",
      description: "Creating robust APIs and backend systems with Node.js, Spring Boot, and Symfony, connected to databases.",
      icon: <Server className="text-accent scale-150" />,
    },
    {
      id: 4,
      title: "Desktop & Web Apps",
      description: "Delivering complete, performant applications using JavaFX and modern web technologies.",
      icon: <Monitor className="text-accent scale-150" />,
    },
    {
      id: 5,
      title: "AI Integration",
      description: "Embedding smart models into web applications to craft innovative, high-performing solutions.",
      icon: <Cpu className="text-accent scale-150" />,
    },
  ],
  FR: [
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
  ],
};

type Props = {
  lang: Language;
};

const About = ({ lang }: Props) => {
  const isEn = lang === "EN";
  const sections = isEn ? aboutSections.EN : aboutSections.FR;

  return (
    <section
      id="about"
      className="bg-gradient-to-b from-base-100 to-base-200/50 py-12 md:py-20 px-4 scroll-mt-28"
    >
      <div className="max-w-6xl mx-auto">
        <Title title={isEn ? "About" : "À propos"} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="flex justify-center md:justify-start sticky top-32">
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/20 rounded-2xl blur-2xl opacity-60"></div>
              <img
                src={aliDev}
                alt="Ali Ben Jannet - Developer"
                className="relative w-80 h-80 md:w-96 md:h-96 object-cover rounded-2xl shadow-2xl border-4 border-accent/30 hover:border-accent/70 transition-all duration-300 hover:shadow-accent/50 hover:scale-105"
              />
            </div>
          </div>

          <div className="space-y-4">
            {sections.map((section, index) => (
              <div
                key={section.id}
                className="group bg-base-100 hover:bg-accent/5 border-2 border-base-300 hover:border-accent/40 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 cursor-default"
                style={{ 
                  animation: `slideIn 0.6s ease-out forwards`,
                  animationDelay: `${index * 100}ms`,
                  opacity: 0
                }}
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0 text-accent group-hover:scale-110 transition-transform duration-300 pt-1">
                    {section.icon}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-base-content mb-2 group-hover:text-accent transition-colors duration-300">
                      {section.title}
                    </h3>
                    <p className="text-sm text-base-content/70 leading-relaxed group-hover:text-base-content/80 transition-colors">
                      {section.description}
                    </p>
                  </div>
                </div>
                
                <div className="mt-4 h-0.5 bg-gradient-to-r from-accent/0 via-accent/40 to-accent/0 group-hover:via-accent/70 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default About;
