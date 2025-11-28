import { useLanguageContext } from "./context/LanguageContext";
import { projectsDictionary } from "./language_dictionaries/ProjectsDictionary";
import studyTrackerImage from "./assets/study-tracker-highlight.png";
import bugTrackerImage from "./assets/bug-tracker.png";
import alphanumericImage from "./assets/alphanumeric-planet-adventures.png";
import djangoBlogImage from "./assets/django-blog.png";
import primalTrainingGym from "./assets/primal-training.png";

const Projects = () => {
  const { language } = useLanguageContext();
  return (
    <div className="bg-white pt-22 pb-10" id="projects">
      <div className="font-extrabold text-4xl pb-4">
        {projectsDictionary.title.get(language)}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
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
        <div className="projectCard">
          <div className="relative">
            <div className="w-full h-full bg-gradient-to-b from-transparent to-white absolute"></div>
            <img
              src={studyTrackerImage}
              alt="study tracker image"
              className="rounded-2xl"
            />
          </div>
          <div className="text-4xl font-bold mt-2">Study Tracker</div>
          <p className="text-black text-lg text-left">
            {projectsDictionary.studyTrackerParagraphOne.get(language)}
          </p>
          <p className="text-black text-lg text-left">
            {projectsDictionary.studyTrackerParagraphTwo.get(language)}
          </p>
          <a
            href="https://github.com/AurelienEbeng/StudyTracker"
            target="blank"
          >
            <span className="tech-logo github-logo text-black"></span>
          </a>
        </div>
        <div className="projectCard">
          <div className="relative">
            <div className="w-full h-full bg-gradient-to-b from-transparent to-white absolute"></div>
            <img
              src={bugTrackerImage}
              alt="bug tracker image"
              className="rounded-2xl"
            />
          </div>
          <div className="text-4xl font-bold mt-2">Bug Tracker</div>
          <p className="text-black text-lg text-left">
            {projectsDictionary.bugTrackerParagraphOne.get(language)}
          </p>
          <p className="text-black text-lg text-left">
            {projectsDictionary.bugTrackerParagraphTwo.get(language)}
          </p>
          <a href="https://github.com/AurelienEbeng/BugTracker" target="blank">
            <span className="tech-logo github-logo text-black"></span>
          </a>
        </div>
        <div className="projectCard">
          <div className="relative">
            <div className="w-full h-full bg-gradient-to-b from-transparent to-white absolute"></div>
            <img
              src={alphanumericImage}
              alt="alphanumeric planet adventures image"
              className="rounded-2xl"
            />
          </div>
          <div className="text-4xl font-bold mt-2">
            Alphanumeric Planet Adventures
          </div>
          <p className="text-black text-lg text-left">
            {projectsDictionary.alphanumericPlanetAdventuresParagraphOne.get(
              language
            )}
          </p>
          <a
            href="https://github.com/AurelienEbeng/Alphanumeric-Planet-Adventures"
            target="blank"
          >
            <span className="tech-logo github-logo text-black"></span>
          </a>
        </div>
        <div className="projectCard">
          <div className="relative">
            <div className="w-full h-full bg-gradient-to-b from-transparent to-white absolute"></div>
            <img
              src={djangoBlogImage}
              alt="django blog image"
              className="rounded-2xl"
            />
          </div>
          <div className="text-4xl font-bold mt-2">Django Blog</div>
          <p className="text-black text-lg text-left">
            {projectsDictionary.djangoBlogParagraphOne.get(language)}
          </p>
          <a href="https://github.com/AurelienEbeng/Django-Blog" target="blank">
            <span className="tech-logo github-logo text-black"></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
