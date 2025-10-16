import { useState } from "react";

const About = () => {
  const [readMore, setReadMore] = useState<Boolean>(false);
  const readMoreBtnStyle = readMore ? "hidden" : "border-2 rounded-full bg-white text-[#161513] p-4 w-50 mt-5";
  const readLessBtnStyle = readMore ? "border-2 rounded-full bg-white text-[#161513] p-4 w-50 mt-5" : "hidden";
  const pStyle = readMore ? "" : "hidden";
  const toggleReadMore = () => { setReadMore(prevState => !prevState) }
  return (
    <div className="text-lg font-extralight w-1/2 m-auto pb-10" id="about">
      <p>
        I’m a proactive Computer Science graduate from LaSalle College with a
        passion for web development. I am dedicated to developing user
        interfaces and backend systems that work together to create a cohesive
        user experience.
      </p>
      <p>
        We did algorithms, data structures, design patterns, software
        development life cycles, database normalization and object-oriented
        programming to have a solid foundation in programming during my program.
      </p>
      <button className={readMoreBtnStyle} onClick = {toggleReadMore}>Read More</button>
      <p className={pStyle}>
        I had the chance to work on several projects with different people
        across several technologies improving my communication skills and
        ability to learn fast. I also worked on a few personal projects to
        further my discipline and perseverance.
      </p>
      <p className={pStyle}>
        I love reading books on productivity. So Good They Can’t Ignore You
        tells you that to have a fulfilling career you need rare and valuable
        skills. Deep Work proposes ideas to achieve such skills. Both books are
        by Cal Newport. Atomic habits by James Clear teaches you how to build
        good habits and break bad ones. Clean Code by Robert C. Martin
        encourages you write to readable code. Your code should be easy to
        understand. I recommend everyone to read the first three. Every
        developers should also read the last one.
      </p>
      <p className={pStyle}>
        I’m keen on exploring roles in front-end or back-end development where I
        can further my passion for creating impactful, user-friendly technology.
      </p>
      <button className={readLessBtnStyle} onClick={toggleReadMore}>Read Less</button>
    </div>
  );
};

export default About;
