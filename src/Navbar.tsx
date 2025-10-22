import { useLanguageContext } from "./context/LanguageContext";
import { languages } from "./enums/Languages";
import { navbarDictionary } from "./language_dictionaries/NavbarDictionary";

const Navbar = () => {
  const {language, changeLanguage} = useLanguageContext();

  const handleLanguageChange = (event: any) => {
    changeLanguage(event.target.value);
  };

  return (
    <div className="flex justify-between w-full px-40 py-6 bg-[#222222] text-white fixed z-100">
      <div className="font-extrabold">Aurelien Ebeng</div>
      <div className="flex">
        <ul className="flex justify-start text-base font-[Plus Jakarta Sans]">
          <li className="px-4">
            <a href="#">{navbarDictionary.home.get(language)}</a>
          </li>
          <li className="px-4">
            <a href="#about">{navbarDictionary.about.get(language)}</a>
          </li>
          <li className="px-4">
            <a href="#projects">{navbarDictionary.projects.get(language)}</a>
          </li>
        </ul>
        <select
          id="languageSelector"
          value={language}
          onChange={handleLanguageChange}
        >
          <option value={languages.en} className="text-black">
            English
          </option>
          <option value={languages.fr} className="text-black">
            Français
          </option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
