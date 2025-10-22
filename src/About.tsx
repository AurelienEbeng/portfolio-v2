import { useState } from "react";
import { aboutDictionary } from "./language_dictionaries/AboutDictionary";
import { useLanguageContext } from "./context/LanguageContext";

const About = () => {
  const [readMore, setReadMore] = useState<Boolean>(false);
  const readMoreBtnStyle = readMore
    ? "hidden"
    : "border-2 rounded-full bg-white text-[#161513] p-4 w-50 mt-5";
  const readLessBtnStyle = readMore
    ? "border-2 rounded-full bg-white text-[#161513] p-4 w-50 mt-5"
    : "hidden";
  const pStyle = readMore ? "" : "hidden";
  const toggleReadMore = () => {
    setReadMore((prevState) => !prevState);
  };
  const { language } = useLanguageContext();

  return (
    <div
      className="text-lg font-extralight w-1/2 m-auto pb-10 pt-22 text-white"
      id="about"
    >
      <p>{aboutDictionary.paragraphOne.get(language)}</p> <br />
      <p>{aboutDictionary.paragraphTwo.get(language)}</p> <br />
      <button className={readMoreBtnStyle} onClick={toggleReadMore}>
        {aboutDictionary.btnReadMore.get(language)}
      </button>
      <p className={pStyle}>{aboutDictionary.paragraphThree.get(language)}</p>
      <br />
      <p className={pStyle}>
        {aboutDictionary.paragraphFour.get(language)}
      </p>
      <br />
      <p className={pStyle}>{aboutDictionary.paragraphFive.get(language)}</p>
      <button className={readLessBtnStyle} onClick={toggleReadMore}>
        {aboutDictionary.btnReadLess.get(language)}
      </button>
    </div>
  );
};

export default About;
