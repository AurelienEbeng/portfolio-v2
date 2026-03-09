const paragraphOne = new Map<string, string>();
paragraphOne.set(
  "en",
  `I’m a Full-Stack Developer specializing in Laravel and React, building scalable, production-ready web applications with clean architecture and strong business logic. I focus on bridging modern frontend engineering with robust backend systems to deliver products that are both technically reliable and user focused.`,
);
paragraphOne.set(
  "fr",
  `Je suis développeur full-stack, spécialisé en Laravel et React. Je conçois des applications web évolutives et prêtes pour la production, avec une architecture propre et une logique métier robuste. Mon objectif est de faire le lien entre le développement frontend moderne et les systèmes backend performants afin de fournir des produits à la fois fiables techniquement et centrés sur l'utilisateur.`,
);

const paragraphTwo = new Map<string, string>();
paragraphTwo.set(
  "en",
  `On the frontend, I build responsive, pixel-perfect interfaces from Figma designs, develop component-driven architectures, and manage complex UI state with clarity and maintainability. On the backend, I design RESTful APIs with Laravel, structure business logic through service layers, and ensure data integrity with well-designed models and validation rules.`,
);
paragraphTwo.set(
  "fr",
  `Côté front-end, je crée des interfaces responsives et impeccables à partir de maquettes Figma, je développe des architectures orientées composants et je gère des états d'interface complexes avec clarté et facilité de maintenance. Côté back-end, je conçois des API RESTful avec Laravel, je structure la logique métier à travers des couches de services et je garantis l'intégrité des données grâce à des modèles et des règles de validation robustes.`,
);

const paragraphThree = new Map<string, string>();
paragraphThree.set(
  "en",
  `Recently, I designed and deployed a full-stack reservation management platform for a gym using Laravel and React. The application includes:`);
paragraphThree.set(
  "fr",
  `J'ai récemment conçu et déployé une plateforme de gestion des réservations complète pour une salle de sport, en utilisant Laravel et React. L'application comprend :`,
);

const listOfFunctionalRequirements = [
  new Map([
    ["en", "Complete CRUD functionality for reservations"],
    ["fr", "Implémentation complète du CRUD (Create, Read, Update, Delete)"],
  ]),
  new Map([
    [
      "en",
      `Backend business rules for weekday, weekend, and holiday scheduling`,
    ],
    [
      "fr",
      "Règles métier backend pour la planification des jours de semaine, des week-ends et des jours fériés",
    ],
  ]),

  new Map([
    [
      "en",
      "Validation to prevent invalid bookings (such as past classes) with descriptive API responses",
    ],
    [
      "fr",
      "Validation pour empêcher les réservations invalides (telles que les cours passés) avec des réponses API descriptives",
    ],
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
    [
      "fr",
      "Redirection automatique après création et affichage des réservations sous forme tabulaire",
    ],
  ]),

  new Map([
    ["en", "Persistent storage and secure API integration"],
    ["fr", "Stockage persistant et intégration API sécurisée"],
  ]),

  new Map([
    ["en", "Production deployment (Frontend on Netlify, Backend on Render)"],
    [
      "fr",
      "Déploiement en production (Frontend sur Netlify, Backend sur Render)",
    ],
  ]),
];

const paragraphFour = new Map<string, string>();
paragraphFour.set(
  "en",
  `The project's backend was built in six hours using AI-assisted development, where I leveraged AI tools to accelerate boilerplate creation such as controllers and infrastructure setup while focusing on architecture and business logic.`,
);
paragraphFour.set(
  "fr",
  "Le backend du projet a été construit en six heures grâce au développement assisté par l'IA, où j'ai utilisé des outils d'IA pour accélérer la création de code standard tel que les contrôleurs et la configuration de l'infrastructure, tout en me concentrant sur l'architecture et la logique métier.",
);

const paragraphFive = new Map<string, string>();
paragraphFive.set(
  "en",
  `I prioritize modular, maintainable code and clear separation of concerns — keeping business logic out of controllers, designing scalable APIs, and building reusable frontend components.`,
);
paragraphFive.set(
  "fr",
  `Je privilégie un code modulaire et maintenable, ainsi qu'une séparation claire des responsabilités : en excluant la logique métier des contrôleurs, en concevant des API évolutives et en créant des composants frontend réutilisables.`,
);

const paragraphSix = new Map<string, string>();
paragraphSix.set(
  "en",
  `I’m motivated by solving complex problems, designing clean systems, and collaborating with teams that care about building meaningful and scalable products. If you're building something impactful, let’s connect.`,
);

paragraphSix.set(
  "fr",
  `Je suis motivé par la résolution de problèmes complexes, la conception de systèmes performants et la collaboration avec des équipes soucieuses de créer des produits pertinents et évolutifs. Si vous développez un projet à fort impact, contactez-moi.`,
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
  paragraphSix,
  btnReadLess,
  btnReadMore,
  listOfFunctionalRequirements,
};
