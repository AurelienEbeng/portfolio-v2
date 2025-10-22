import { useState } from "react";
import { aboutDictionary } from "./language_dictionaries/AboutDictionary";
import { useLanguageContext } from "./context/LanguageContext";

const About = () => {
  const [readMore, setReadMore] = useState<Boolean>(false);
  const readMoreBtnStyle = readMore
    ? "hidden"
    : "border-2 rounded-full bg-white text-[#161513] p-4 w-50 mt-2";
  const readLessBtnStyle = readMore
    ? "border-2 rounded-full bg-white text-[#161513] p-4 w-50 mt-2"
    : "hidden";
  const pStyle = readMore ? "text-left" : "hidden text-left";
  const toggleReadMore = () => {
    setReadMore((prevState) => !prevState);
  };
  const { language } = useLanguageContext();

  return (
    <div
      className="text-lg font-extralight w-full px-5 pb-10 pt-22 text-white"
      id="about"
    >
      <p className="text-left">{aboutDictionary.paragraphOne.get(language)}</p> <br />
      <p className="text-left">{aboutDictionary.paragraphTwo.get(language)}</p> <br />
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
