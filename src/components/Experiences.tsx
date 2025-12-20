import Title from "./Title"

import imgPython from "../assets/techno/python.png"
import imgPandas from "../assets/techno/pandas.png"
import imgNumPy from "../assets/techno/numPy.png"
import imgML from "../assets/techno/machineLearning.png"
import imgDL from "../assets/techno/deepLearning.png"
import imgHTML from "../assets/techno/html.png"
import imgCSS from "../assets/techno/css.png"
import imgJS from "../assets/techno/js.png"
import imgREACT from "../assets/techno/react.png"
import imgNEXT from "../assets/techno/next-js.webp"
import imgTAILWIND from "../assets/techno/tailwind.png"
import imgNODE from "../assets/techno/node-js.png"
import imgTYPE from "../assets/techno/typescript.svg"
import imgSpringBoot from "../assets/techno/springBoot.png"
import imgSymfony from "../assets/techno/symfony.png"
import imgPHP from "../assets/techno/php.png"
import imgJava from "../assets/techno/java.png"
import imgCpp from "../assets/techno/c++.png"
import imgJavaFX from "../assets/techno/javaFx .png"

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
];
const Experiences = () => {
  return (
    <div>
        <Title title=" Expériences " />
        <div>
            <div className="flex flex-wrap gap-4 justify-center items-center md:w-1/3 mt-4 md:mt-0">
                {skills.map((skill) => (
                    <div key={skill.id} className="flex justify-center items-center felx-col ">
                        <div className="w-24 h-24 p-2 rounded-full border-2 border-accent">
                            <img src={skill.image} alt={skill.name} className="object-cover rounded-full h-full w-full"/>
                        </div>
                        <span className="mt-2 text-sm">{skill.name}</span>
                    </div>
                ))}
            </div>
            <div className="md:ml-4 flex flex-col space-y-4">

            </div>
        </div>
    </div>
  )
}

export default Experiences