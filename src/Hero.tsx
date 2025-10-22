import { useLanguageContext } from "./context/LanguageContext";
import { hero_dict } from "./language_dictionaries/Hero_dict";

const Hero = () => {
  const { language } = useLanguageContext();

  return (
    <div className="font-extrabold text-white text-center flex h-screen items-center justify-center pt-22">
      <div>
        <div className="text-6xl">{hero_dict.intro.get(language)}</div>
        <div className="text-4xl">{hero_dict.profession.get(language)}</div>
        <div className="font-semibold text-2xl mt-9 flex justify-evenly">
          <button className="border-2 rounded-full bg-white text-[#161513] p-4 w-70">
            {hero_dict.btn1.get(language)}
          </button>
          <a
            href="./src/assets/Aurelien Ebeng CV.pdf"
            className="border-2 rounded-full p-4 w-70"
            download
          >
            {hero_dict.btn2.get(language)}
          </a>
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
