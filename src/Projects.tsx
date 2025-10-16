const Projects = () => {
  return (
    <div className="bg-white pt-22 pb-10" id="projects">
      <div className="font-extrabold text-4xl pb-4">Projects</div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 px-10">
        <div className="projectCard">
          <div className="relative">
            <div className="w-full h-full bg-gradient-to-b from-transparent to-white absolute"></div>
            <img
              src="src/assets/study_tracker_highlight.png"
              alt="study tracker image"
              className="rounded-2xl"
            />
          </div>
          <div className="text-4xl font-bold mt-2">Study Tracker</div>
          <p className="text-black text-lg">
            MVC application with study time tracking, user authentification,
            account management, task management, session management, analytics and
            reporting. 
          </p>
          <p className="text-black text-lg">I have recorded over 700 hours of studying.</p>
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
              src="src/assets/bug_tracker.png"
              alt="bug tracker image"
              className="rounded-2xl"
            />
          </div>
          <div className="text-4xl font-bold mt-2">Bug Tracker</div>
          <p className="text-black text-lg">
            MVC application with user authentification,
            account management, roles and permissions.
          </p>
          <p className="text-black text-lg">Permits teams to manage bugs.</p>
          <a
            href="https://github.com/AurelienEbeng/BugTracker"
            target="blank"
          >
            <span className="tech-logo github-logo text-black"></span>
          </a>
        </div>
        <div className="projectCard">
          <div className="relative">
            <div className="w-full h-full bg-gradient-to-b from-transparent to-white absolute"></div>
            <img
              src="src/assets/alphanumeric_planet_adventures.png"
              alt="alphanumeric planet adventures image"
              className="rounded-2xl"
            />
          </div>
          <div className="text-4xl font-bold mt-2">Alphanumeric Planet Adventures</div>
          <p className="text-black text-lg">
            Educational game with authentication and progress tracking.
          </p>
          <a
            href="https://github.com/AurelienEbeng/Alphanumeric-Planet-Adventures"
            target="blank"
          >
            <span className="tech-logo github-logo text-black"></span>
          </a>
        </div>
        <div></div>
        <div className="projectCard">
          <div className="relative">
            <div className="w-full h-full bg-gradient-to-b from-transparent to-white absolute"></div>
            <img
              src="src/assets/django_blog.png"
              alt="django blog image"
              className="rounded-2xl"
            />
          </div>
          <div className="text-4xl font-bold mt-2">Django Blog</div>
          <p className="text-black text-lg">
            Blog with authentication system and article management.
          </p>
          <a
            href="https://github.com/AurelienEbeng/Django-Blog"
            target="blank"
          >
            <span className="tech-logo github-logo text-black"></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
