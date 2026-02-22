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

      <div className="m-auto w-1/3">
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
          <p className="text-black text-lg text-left">
            Primal training gym website. Still working on it.
          </p>
          <div className="flex justify-center items-center pt-20">
            <a
              href="https://www.figma.com/files/team/1473777758538429276/resources/community/file/1498113978492175844?fuid=1473777754971358507"
              target="blank"
              className="py-2 px-4 rounded-2xl bg-gray-500 hover:bg-black hover:text-white font-bold text-xl"
            >
              Design
            </a>
            <a
              href="https://performancetraininggym.netlify.app/"
              target="blank"
              className="py-2 px-4 rounded-2xl bg-gray-500 hover:bg-black hover:text-white  font-bold text-xl"
            >
              Live
            </a>
            <a
              href="https://github.com/AurelienEbeng/performance-training-gym"
              target="blank"
            >
              <span className="tech-logo github-logo text-black"></span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;
