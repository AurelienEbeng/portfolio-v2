const Projects = () => {
  return (
    <div className="bg-white">
      <div className="font-extrabold text-4xl pt-4">Projects</div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 p-10">
        <div className="border border-gray-200 rounded-2xl h-130 p-4">
          <div className="relative">
            <div className="w-full h-full bg-gradient-to-b from-transparent to-white absolute"></div>
            <img
              src="src/assets/study_tracker_highlight.png"
              alt="study tracker image"
              className="rounded-2xl"
            />
          </div>
          <p className="text-black">
            MVC application with study time tracking, user authentification,
            account management, task and session management, and analytics and
            reporting.
          </p>
          <a
            href="https://github.com/AurelienEbeng/StudyTracker"
            target="blank"
          >
            <span className="tech-logo github-logo text-white"></span>
          </a>
        </div>
        <div className="border border-gray-200 rounded-2xl h-130 p-4">
          <img
            src="src/assets/study_tracker_highlight.png"
            alt="study tracker image"
            className="rounded-2xl"
          />
          <p>
            MVC application with study time tracking, user authentification,
            account management, task and session management, and analytics and
            reporting.
          </p>
          <a
            href="https://github.com/AurelienEbeng/StudyTracker"
            target="blank"
          >
            <span className="tech-logo github-logo text-white"></span>
          </a>
        </div>
        <div className="border border-gray-200 rounded-2xl h-130 p-4">
          <img
            src="src/assets/study_tracker_highlight.png"
            alt="study tracker image"
            className="rounded-2xl"
          />
          <p>
            MVC application with study time tracking, user authentification,
            account management, task and session management, and analytics and
            reporting.
          </p>
          <a
            href="https://github.com/AurelienEbeng/StudyTracker"
            target="blank"
          >
            <span className="tech-logo github-logo text-white"></span>
          </a>
        </div>
        <div></div>
        <div className="border border-gray-200 rounded-2xl h-130 p-4">
          <img
            src="src/assets/study_tracker_highlight.png"
            alt="study tracker image"
            className="rounded-2xl"
          />
          <p>
            MVC application with study time tracking, user authentification,
            account management, task and session management, and analytics and
            reporting.
          </p>
          <a
            href="https://github.com/AurelienEbeng/StudyTracker"
            target="blank"
          >
            <span className="tech-logo github-logo text-white"></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
