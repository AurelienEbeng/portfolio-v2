import { useLanguageContext } from "./context/LanguageContext";
import { heroDictionary } from "./language_dictionaries/HeroDictionary";

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
        </div>
        <div className="flex justify-between mt-9 px-2 md:px-12 lg:px-0">
          <span className="tech-logo html5-logo"></span>
          <span className="tech-logo css3-logo"></span>
          <span className="tech-logo js-logo"></span>
          <span className="tech-logo react-js-logo"></span>
          <span className="tech-logo typescript-logo"></span>
          <span className="tech-logo tailwindcss-logo"></span>
          <span className="tech-logo figma-logo"></span>
        </div>
        <div className="flex justify-evenly pt-9">
          <span className="tech-logo django-logo"></span>
          <span className="tech-logo git-logo"></span>
          <span className="tech-logo github-logo"></span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
