import { Mail } from "lucide-react";
import ali from "../assets/ali.jpg";
const Home = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10">
      <div className="flex flex-col">
        <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
          Bonjour ,<br />
          je suis <span className="text-accent">Ali Ben Jannet</span>{" "}
        </h1>
        <p className="my-4 text-md text-center md:text-left">
          Je suis étudiant à l’École Supérieure Privée d’Ingénieurs de Monastir,
          spécialisé en Data Science et Intelligence Artificielle.
          <br />
          Je conçois et développe des solutions intelligentes basées sur
          l’analyse de données et les modèles d’IA <br />
          en utilisant des outils tels que Python, Pandas et NumPy. En
          parallèle, je possède de solides compétences <br />
          en développement web avec HTML, CSS, JavaScript, React, Node.js,
          Next.js, Spring Boot, Symfony, JavaFX <br />
          ainsi que les bases de données, ce qui me permet de créer des
          applications complètes intégrant des systèmes
          <br />
          intelligents et performants.
          <br />
          Contactez-moi si vous avez besoin de mes services
        </p>
        <a href="#contact" className="btn btn-accent md:w-fit">
          <Mail className="w-5 h-5" />
          Contactez-moi
        </a>
      </div>
      <div className="md:ml-60 mb-10 ">
        <img
          src={ali}
          alt="img Ali Ben Jannet"
          className="w-96 h-96 object-cover border-8 border-accent shadow-xl "
          style={{ borderRadius: "35% 65% 42% 58% / 48% 68% 32% 52%  " }}
        />
      </div>
    </div>
  );
};

export default Home;
