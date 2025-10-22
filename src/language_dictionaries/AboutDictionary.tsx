const paragraphOne = new Map<string, string>();
paragraphOne.set(
  "en",
  `I’m a proactive Computer Science graduate from LaSalle College with a
        passion for web development. I am dedicated to developing user
        interfaces and backend systems that work together to create a cohesive
        user experience.`
);
paragraphOne.set(
  "fr",
  `Diplômé en informatique du Collège LaSalle, je suis dynamique et passionné 
    par le développement web. Je me consacre au développement d'interfaces utilisateur et de systèmes 
    back-end qui fonctionnent ensemble pour créer une expérience utilisateur cohérente.`
);

const paragraphTwo = new Map<string, string>();
paragraphTwo.set(
  "en",
  `We did algorithms, data structures, design patterns, software
        development life cycles, database normalization and object-oriented
        programming to have a solid foundation in programming during my program.`
);
paragraphTwo.set(
  "fr",
  `Nous avons étudié les algorithmes, les structures de données, les modèles de conception, les cycles de 
  vie de développement logiciel, la normalisation des bases de données et la programmation orientée objet 
  afin d'acquérir des bases solides en programmation au cours de mon programme.`
);

const paragraphThree = new Map<string, string>();
paragraphThree.set(
  "en",
  `I had the chance to work on several projects with different people
        across several technologies improving my communication skills and
        ability to learn fast. I also worked on a few personal projects to
        further my discipline and perseverance.`
);
paragraphThree.set(
  "fr",
  `J'ai eu la chance de travailler sur plusieurs projets avec différentes personnes et sur différentes 
  technologies, ce qui a amélioré mes compétences en communication et ma capacité d'apprentissage rapide. 
  J'ai également travaillé sur quelques projets personnels pour renforcer ma discipline et ma persévérance.`
);

const paragraphFour = new Map<string, string>();
paragraphFour.set(
  "en",
  `I love reading books on productivity. " So Good They Can’t Ignore You "
        tells you that to have a fulfilling career you need rare and valuable
        skills. " Deep Work " proposes ideas to achieve such skills. Both books are
        by Cal Newport. " Atomic habits " by James Clear teaches you how to build
        good habits and break bad ones. " Clean Code " by Robert C. Martin
        encourages you write to readable code. Your code should be easy to
        understand. I recommend everyone to read the first three. Every
        developers should also read the last one.`
);
paragraphFour.set(
  "fr",
  `J'adore lire des livres sur la productivité. « So Good They Can’t Ignore You »
    explique que pour une carrière épanouissante, il faut des compétences rares et précieuses. 
    « Deep Work » propose des idées pour acquérir ces compétences. Les deux livres sont de Cal Newport. 
    « Atomic Habits » de James Clear vous apprend à développer de bonnes habitudes et à vous débarrasser des mauvaises. 
    « Clean Code » de Robert C. Martin vous encourage à écrire du code lisible. Votre code doit être facile à comprendre. 
    Je recommande à tous de lire les trois premiers. Tous les développeurs devraient également lire le dernier.`
);

const paragraphFive = new Map<string, string>();
paragraphFive.set(
  "en",
  `I’m keen on exploring opportunities in front-end or back-end development where I
        can further my passion for creating impactful, user-friendly technology.`
);
paragraphFive.set(
  "fr",
  `Je suis intéressé par des opportunités de développement front-end ou back-end où je pourrai développer ma passion pour la 
  création de technologies percutantes et conviviales.`
);

const btnReadMore = new Map<string, string>();
btnReadMore.set("en", "Read More");
btnReadMore.set("fr", "Lire Plus");

const btnReadLess = new Map<string, string>();
btnReadLess.set("en", "Read Less");
btnReadLess.set("fr", "Lire Moins");

export const aboutDictionary = {
  paragraphOne,
  paragraphTwo,
  paragraphThree,
  paragraphFour,
  paragraphFive,
  btnReadLess,
  btnReadMore,
};
