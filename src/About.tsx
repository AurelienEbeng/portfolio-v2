import { useState } from "react";
import { aboutDictionary } from "./language_dictionaries/AboutDictionary";
import { useLanguageContext } from "./context/LanguageContext";

const About = () => {
  const [readMore, setReadMore] = useState<Boolean>(false);
  const readMoreBtnStyle = readMore
    ? "hidden"
    : "border-2 rounded-full bg-white text-[#161513] p-4 w-50 mt-2 cursor-pointer";
  const readLessBtnStyle = readMore
    ? "border-2 rounded-full bg-white text-[#161513] p-4 w-50 mt-2 cursor-pointer"
    : "hidden";
  const pStyle = readMore ? "text-left" : "hidden text-left";
  const ulStyle = pStyle + " list-disc list-inside text-white pl-4";
  const toggleReadMore = () => {
    setReadMore((prevState) => !prevState);
  };
  const { language } = useLanguageContext();

  function openEmailClient() {
    const mailtoLink = `mailto:ebengaurelien@gmail.com`;
    window.location.href = mailtoLink;
  }

  return (
    <div
      className="text-lg font-extralight w-full px-5 pb-10 pt-22 text-white sm:px-30 lg:px-60 font-poppins"
      id="about"
    >
      <p className="text-left">{aboutDictionary.paragraphOne.get(language)}</p>{" "}
      <br />
      <p className="text-left">
        {aboutDictionary.paragraphTwo.get(language)}
      </p>{" "}
      <br />
      <button className={readMoreBtnStyle} onClick={toggleReadMore}>
        {aboutDictionary.btnReadMore.get(language)}
      </button>
      <p className={pStyle}>{aboutDictionary.paragraphThree.get(language)}</p>
      <br />
      <ul className={ulStyle}>
        {aboutDictionary.listOfFunctionalRequirements.map((requirement) => (
          <li>{requirement.get(language)}</li>
        ))}
      </ul>
      <br />
      <p className={pStyle}>{aboutDictionary.paragraphFour.get(language)}</p>
      <br />
      <p className={pStyle}>
        <button onClick={openEmailClient} className="text-left cursor-pointer">
          {aboutDictionary.paragraphFive.get(language)}
        </button>
      </p>
      <br />
      <button className={readLessBtnStyle} onClick={toggleReadMore}>
        {aboutDictionary.btnReadLess.get(language)}
      </button>
    </div>
  );
};

export default About;
