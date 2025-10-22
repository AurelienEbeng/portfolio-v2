import { useLanguageContext } from "./context/LanguageContext";

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
            <a href="#">Home</a>
          </li>
          <li className="px-4">
            <a href="#about">About</a>
          </li>
          <li className="px-4">
            <a href="#projects">Projects</a>
          </li>
        </ul>
        <select
          id="languageSelector"
          value={language}
          onChange={handleLanguageChange}
        >
          <option value="en" className="text-black">
            English
          </option>
          <option value="fr" className="text-black">
            Français
          </option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
