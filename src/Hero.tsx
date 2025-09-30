const Hero = () => {
  return (
    <div className="font-extrabold text-white text-center flex h-screen items-center justify-center">
      <div>
        <div className="text-6xl">Hi, I'm Aurelien Ebeng</div>
        <div className="text-4xl">Full-Stack Developer</div>
        <div className="font-semibold text-2xl mt-9 flex justify-evenly">
          <button className="border-2 rounded-full bg-white text-[#161513] p-4 w-50">Get In Touch</button>
          <button className="border-2 rounded-full p-4 w-50">Download CV</button>
        </div>
        <div className="flex justify-between mt-9">
          <span className="tech-logo html5-logo"></span>
          <span className="tech-logo css3-logo"></span>
          <span className="tech-logo js-logo"></span>
          <span className="tech-logo react-js-logo"></span>
          <span className="tech-logo typescript-logo"></span>
          <span className="tech-logo tailwindcss-logo"></span>
          <span className="tech-logo material-ui-logo"></span>
          <span className="tech-logo sass-logo"></span>
          <span className="tech-logo bootstrap-logo"></span>
          <span className="tech-logo figma-logo"></span>
        </div>
        <div className="flex justify-evenly mt-2">
          <span className="tech-logo spring-logo"></span>
          <span className="tech-logo dotnet-logo"></span>
          <span className="tech-logo django-logo"></span>
          <span className="tech-logo php-logo"></span>
        </div>
        <div className="flex justify-evenly mt-2">
          <span className="tech-logo mysql-logo"></span>
          <span className="tech-logo microsoftsqlserver-logo"></span>
          <span className="tech-logo sqlite-logo"></span>
          <span className="tech-logo oracle-logo"></span>
          <span className="tech-logo firebase-logo"></span>
        </div>
        <div className="flex justify-evenly mt-2">
          <span className="tech-logo git-logo"></span>
          <span className="tech-logo github-logo"></span>
          <span className="tech-logo docker-logo"></span>
          <span className="tech-logo wordpress-logo"></span>
          <span className="tech-logo graphql-logo"></span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
