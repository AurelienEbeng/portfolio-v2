import { useLanguageContext } from "./context/LanguageContext";
import { projectsDictionary } from "./language_dictionaries/ProjectsDictionary";
import primalTrainingGym from "./assets/primal-training.png";

const Projects = () => {
  const { language } = useLanguageContext();
  return (
    <div className="bg-white pt-22 pb-10 font-poppins" id="projects">
      <div className="font-extrabold text-4xl pb-4">
        {projectsDictionary.title.get(language)}
      </div>

      <div className="m-auto lg:w-1/3 md:w-1/2 px-4">
        <div className="projectCard">
          <div className="relative">
            <div className="w-full h-full bg-gradient-to-b from-transparent to-white absolute"></div>
            <img
              src={primalTrainingGym}
              alt="primal training gym image"
              className="rounded-2xl"
            />
          </div>
          <div className="text-4xl font-bold mt-2">Primal Training Gym</div>
          <div className="flex justify-evenly items-end h-1/2 pb-2">
            <a
              href="https://www.figma.com/community/file/1498113978492175844/performance-driven-gym"
              target="blank"
             >
              <span className="tech-logo figma-logo"></span>
            </a>
            <a
              href="https://primal-training-gym.netlify.app/"
              target="blank"
             >
              <span className="world-icon"></span>
            </a>
            <a
              href="https://github.com/AurelienEbeng/primal-training-gym"
              target="blank"
            >
              <span className="github-logo text-black"></span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;
