import { Download, Facebook, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
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
        <h2 className="mt-3 text-xl md:text-2xl font-semibold text-accent text-center md:text-left">
          {isEn
            ? "Data Science & AI Engineering Student"
            : "Élève ingénieur en Data Science & Intelligence Artificielle"}
        </h2>
        <p className="my-4 text-md text-center md:text-left">
          {isEn
            ? "Data Science & AI engineering student at ESPRIM (Monastir) with hands-on experience building end-to-end AI systems: LLM-powered agents, vision-language document extraction, deep learning for medical imaging and offline speech wake-word detection. Also experienced in the full-stack and microservice platforms that bring these models to users (Python, FastAPI, React / Next.js, Node.js, PostgreSQL, Docker). Hedera Certified Developer Associate."
            : "Élève ingénieur en Data Science & IA à l'ESPRIM (Monastir), avec une expérience concrète de systèmes d'IA de bout en bout : agents à base de LLM, extraction de documents par modèles vision-langage, deep learning pour l'imagerie médicale et détection de mot de réveil hors ligne. Expérience également des plateformes full-stack et microservices qui mettent ces modèles en production (Python, FastAPI, React / Next.js, Node.js, PostgreSQL, Docker). Certifié Hedera Certified Developer Associate."}
          <br />
          {isEn ? "Contact me if you need my help." : "Contactez-moi si vous avez besoin de mes services."}
        </p>
        <div className="flex flex-col md:flex-row md:items-center gap-3">
          <a href="#contact" className="btn btn-accent md:w-fit">
            <Mail className="w-5 h-5" />
            {isEn ? "Contact me" : "Contactez-moi"}
          </a>
          <a
            href="/CV_ALI-BENJ-ANNET.pdf"
            download
            className="btn btn-outline btn-accent md:w-fit"
          >
            <Download className="w-5 h-5" />
            {isEn ? "Download CV" : "Télécharger le CV"}
          </a>
        </div>

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
        <Image
          src={ali}
          alt="Ali Ben Jannet - Data Science & AI Engineering Student"
          className="w-[65rem] h-[28rem] max-w-full object-cover border-8 border-accent shadow-xl"
          style={{ borderRadius: "35% 65% 42% 58% / 48% 68% 32% 52% " }}
          placeholder="blur"
          priority
        />
      </div>
    </div>
  );
};

export default Home;
