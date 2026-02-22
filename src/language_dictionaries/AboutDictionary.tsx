const paragraphOne = new Map<string, string>();
paragraphOne.set(
  "en",
  `I’m a Full-Stack Developer specializing in React and Django, building scalable, production-ready web applications with clean architecture and strong business logic. I bridge modern frontend engineering with robust backend systems to deliver products that are both technically sound and user-centered.`,
);
paragraphOne.set(
  "fr",
  `Je suis Développeur Full Stack spécialisé en React et Django, avec une forte expertise dans la conception d’applications web performantes, évolutives et orientées métier. J’allie ingénierie frontend moderne et architecture backend robuste afin de transformer des exigences fonctionnelles complexes en solutions techniques propres, maintenables et efficaces.`,
);

const paragraphTwo = new Map<string, string>();
paragraphTwo.set(
  "en",
  `On the frontend, I craft pixel-perfect, responsive interfaces directly from Figma designs, architect component-driven systems, and manage complex UI state with clarity and precision. On the backend, I design RESTful APIs using Django and Django Rest Framework, implement structured service layers for business logic, and ensure data integrity through well-designed models and validation rules.`,
);
paragraphTwo.set(
  "fr",
  `Côté frontend, je conçois des interfaces pixel-perfect à partir de maquettes Figma, j’architecture des systèmes basés sur des composants réutilisables et je gère des états applicatifs complexes avec rigueur. Côté backend, je développe des APIs REST sécurisées avec Django et Django Rest Framework, en structurant clairement la logique métier dans des couches dédiées (service layer) afin de garantir séparation des responsabilités, testabilité et scalabilité.`,
);

const paragraphThree = new Map<string, string>();
paragraphThree.set(
  "en",
  `Recently, I designed and deployed a full-stack reservation management platform using React and Django Rest Framework. The application includes:`,
);
paragraphThree.set(
  "fr",
  `J’ai récemment conçu et déployé une plateforme complète de gestion de réservations avec React et Django Rest Framework comprenant :`,
);

const listOfFunctionalRequirements = [
  new Map([
    ["en", "Complete CRUD functionality for reservations"],
    ["fr", "Implémentation complète du CRUD (Create, Read, Update, Delete)"],
  ]),
  new Map([
    [
      "en",
      "Backend-driven business rules (weekday, weekend, and holiday time validations) implemented in a dedicated service layer",
    ],
    [
      "fr",
      "Validation avancée des règles métier (jours de semaine, week-ends, jours fériés)",
    ],
  ]),

  new Map([
    ["en", "Prevention of invalid registrations (e.g., past classes)"],
    ["fr", "Blocage des inscriptions à des cours passés"],
  ]),
  new Map([
    ["en", "Descriptive error responses returned by the API"],
    ["fr", "Messages d’erreur descriptifs renvoyés par l’API"],
  ]),
  new Map([
    ["en", "Dynamic frontend forms with class-based time filtering"],
    [
      "fr",
      "Formulaires dynamiques avec mise à jour des créneaux selon la classe sélectionnée",
    ],
  ]),

  new Map([
    ["en", "Modal-based Create/Update workflows"],
    ["fr", "Modales pour la création et la modification"],
  ]),

  new Map([
    [
      "en",
      "Global request state management using React Context to disable action buttons during processing",
    ],
    [
      "fr",
      "Gestion globale de l’état des requêtes via React Context (désactivation des boutons pendant le traitement)",
    ],
  ]),

  new Map([
    ["en", "Post-submission routing and tabular reservation management views"],
    ["fr", "Redirection automatique après création"],
  ]),

  new Map([
    ["en", "Persistent storage and secure API integration"],
    ["fr", "Affichage des réservations sous forme tabulaire"],
  ]),

  new Map([
    [
      "en",
      "Production deployment (Frontend on Netlify, Backend on PythonAnywhere)",
    ],
    [
      "fr",
      "Déploiement en production (Frontend sur Netlify, Backend sur PythonAnywhere)",
    ],
  ]),
];

const paragraphFour = new Map<string, string>();
paragraphFour.set(
  "en",
  `I focus on writing modular, maintainable code with clear separation of concerns — keeping business logic out of views, structuring scalable API layers, and building reusable frontend components that remain easy to extend.`,
);
paragraphFour.set(
  "fr",
  `Je privilégie une architecture claire, modulaire et évolutive, en séparant strictement la logique métier des vues et en construisant des composants frontend réutilisables et maintenables.`,
);

const paragraphFive = new Map<string, string>();
paragraphFive.set(
  "en",
  `I’m motivated by complex problems, clean architecture, and collaborating with teams that care about building meaningful, scalable products. If you’re building something impactful, send me an email.`,
);

paragraphFive.set(
  "fr",
  `Je suis motivé par les environnements ambitieux, les produits à fort impact et les défis techniques qui nécessitent réflexion et rigueur architecturale. Si vous développez un produit innovant, écrivez moi.`,
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
  listOfFunctionalRequirements,
};
