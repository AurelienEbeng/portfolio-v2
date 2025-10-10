const Projects = () => {
  return (
    <div>
      <div className="font-extrabold text-4xl text-white">Projects</div>

      <div className="h-screen py-6">
        <div className="border border-gray-200 w-1/4 h-full">
          <img
            src="src/assets/study_tracker_highlight.png"
            alt="study tracker image"
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
