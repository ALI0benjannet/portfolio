import { Facebook, Github, Linkedin, Mail } from "lucide-react";
import ali from "../assets/ali.jpg";

type Language = "EN" | "FR";

type Props = {
  lang: Language;
};

const Home = ({ lang }: Props) => {
  const isEn = lang === "EN";

  return (
    <div
      id="home"
      className="flex flex-col-reverse md:flex-row justify-center items-center md:my-20 my-8"
    >
      <div className="flex flex-col">
        <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
          {isEn ? "Hello," : "Bonjour ,"}
          <br />
          {isEn ? "I'm " : "je suis "}
          <span className="text-accent">Ali Ben Jannet</span>
        </h1>
        <p className="my-4 text-md text-center md:text-left">
          {isEn
            ? "I am a student at the Private Engineering School of Monastir, specializing in Data Science and Artificial Intelligence."
            : "Je suis étudiant à l’École Supérieure Privée d’Ingénieurs de Monastir, spécialisé en Data Science et Intelligence Artificielle."}
          <br />
          {isEn
            ? "I design and develop smart solutions based on data analysis and AI models using tools like Python, Pandas, and NumPy."
            : "Je conçois et développe des solutions intelligentes basées sur l’analyse de données et les modèles d’IA en utilisant des outils tels que Python, Pandas et NumPy."}
          <br />
          {isEn
            ? "I also build full-stack web apps with HTML, CSS, JavaScript, React, Node.js, Next.js, Spring Boot, Symfony, JavaFX, and databases to deliver complete, performant applications."
            : "Je développe aussi des applications web complètes avec HTML, CSS, JavaScript, React, Node.js, Next.js, Spring Boot, Symfony, JavaFX et des bases de données afin de livrer des applications complètes et performantes."}
          <br />
          {isEn ? "Contact me if you need my help." : "Contactez-moi si vous avez besoin de mes services."}
        </p>
        <a href="#contact" className="btn btn-accent md:w-fit">
          <Mail className="w-5 h-5" />
          {isEn ? "Contact me" : "Contactez-moi"}
        </a>

        <div className="mt-4 flex flex-col items-start gap-3">
          <span className="text-sm font-semibold text-base-content/80">
            {isEn ? "Or via my socials" : "Ou via mes reseaux"}
          </span>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/ALI0benjannet"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={isEn ? "Open GitHub" : "Ouvrir GitHub"}
              className="rounded-full p-2 transition hover:bg-base-300"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/ali-ben-jannet-2a7746324"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={isEn ? "Open LinkedIn" : "Ouvrir LinkedIn"}
              className="rounded-full p-2 transition hover:bg-base-300"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://www.facebook.com/share/161sBQkeNY/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={isEn ? "Open Facebook" : "Ouvrir Facebook"}
              className="rounded-full p-2 transition hover:bg-base-300"
            >
              <Facebook className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="md:ml-60 mb-10 ">
        <img
          src={ali}
          alt="img Ali Ben Jannet"
          className="w-[65rem] h-[28rem] max-w-full object-cover border-8 border-accent shadow-xl"
          style={{ borderRadius: "35% 65% 42% 58% / 48% 68% 32% 52% " }}
        />
      </div>
    </div>
  );
};

export default Home;
