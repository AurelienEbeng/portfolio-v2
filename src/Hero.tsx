import { useLanguageContext } from "./context/LanguageContext";
import { heroDictionary } from "./language_dictionaries/HeroDictionary";
import cv from "./assets/Aurelien-Ebeng-CV.pdf";

const Hero = () => {
  const { language } = useLanguageContext();
  function openEmailClient() {
    const mailtoLink = `mailto:ebengaurelien@gmail.com`;
    window.location.href = mailtoLink;
  }

  return (
    <div className="font-extrabold text-white text-center lg:flex lg:flex-row lg:h-screen lg:items-center lg:justify-center sm:pt-22 pt-40">
      <div>
        <div className="text-4xl sm:text-6xl">
          {heroDictionary.intro.get(language)}
        </div>
        <div className="text-2xl sm:text-4xl pt-2">
          {heroDictionary.profession.get(language)}
        </div>
        <div className="font-semibold text-2xl flex flex-col items-center justify-center sm:flex-row sm:gap-8">
          <button
            className="border-2 rounded-full bg-white text-[#161513] p-4 w-70 mt-4"
            onClick={openEmailClient}
          >
            {heroDictionary.btn1.get(language)}
          </button>
          <button className="border-2 rounded-full p-4 w-70 mt-4">
            <a href={cv} download>
              {heroDictionary.btn2.get(language)}
            </a>
          </button>
        </div>
        <div className="flex justify-between mt-9 px-2 md:px-12 lg:px-0">
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
