import { useLanguageContext } from "./context/LanguageContext";
import { languages } from "./enums/Languages";
import { navbarDictionary } from "./language_dictionaries/NavbarDictionary";

const Navbar = () => {
  const { language, changeLanguage } = useLanguageContext();

  const handleLanguageChange = (event: any) => {
    changeLanguage(event.target.value);
  };

  return (
    <div className="w-full top-0 flex flex-row justify-center py-6 bg-[#222222] text-white fixed z-100 font-poppins">
      <ul className="flex  text-base font-jakarta">
        <li className="px-2 md:px-4">
          <a href="#">{navbarDictionary.home.get(language)}</a>
        </li>
        <li className="px-2 md:px-4">
          <a href="#about">{navbarDictionary.about.get(language)}</a>
        </li>
        <li className="px-2 md:px-4">
          <a href="#projects">{navbarDictionary.projects.get(language)}</a>
        </li>
      </ul>
      <select
        id="languageSelector"
        value={language}
        onChange={handleLanguageChange}
        className="px-2 md:px-4"
      >
        <option value={languages.en} className="text-black">
          English
        </option>
        <option value={languages.fr} className="text-black">
          Français
        </option>
      </select>
    </div>
  );
};

export default Navbar;
