const title = new Map<string, string>();
title.set("en", "Projects");
title.set("fr", "Projets");

const studyTrackerParagraphOne = new Map<string, string>();
studyTrackerParagraphOne.set(
  "en",
  `MVC application with study time tracking, user authentification,
            account management, task management, session management, analytics and
            reporting. `
);
studyTrackerParagraphOne.set(
  "fr",
  `Application MVC avec suivi du temps d'étude, authentification des 
    utilisateurs, gestion des comptes, gestion des tâches, gestion des sessions, analyses et rapports.`
);

const studyTrackerParagraphTwo = new Map<string, string>();
studyTrackerParagraphTwo.set(
  "en",
  `I have recorded over 700 hours of studying.`
);
studyTrackerParagraphTwo.set(
  "fr",
  `J'ai enregistré plus de 700 heures d'études.`
);

const bugTrackerParagraphOne = new Map<string, string>();
bugTrackerParagraphOne.set(
  "en",
  `MVC application with user authentification, account management, roles and permissions.`
);
bugTrackerParagraphOne.set(
  "fr",
  `Application MVC avec authentification des utilisateurs, gestion des comptes, rôles et autorisations.`
);

const bugTrackerParagraphTwo = new Map<string, string>();
bugTrackerParagraphTwo.set("en", `Permits teams to manage bugs.`);
bugTrackerParagraphTwo.set("fr", `Permet aux équipes de gérer les bugs.`);

const alphanumericPlanetAdventuresParagraphOne = new Map<string, string>();
alphanumericPlanetAdventuresParagraphOne.set(
  "en",
  `Educational game for children with authentication and progress tracking.`
);
alphanumericPlanetAdventuresParagraphOne.set(
  "fr",
  `Jeu éducatif pour enfants avec authentification et suivi de progression.`
);

const djangoBlogParagraphOne = new Map<string, string>();
djangoBlogParagraphOne.set(
  "en",
  "Blog with authentication system and article management."
);
djangoBlogParagraphOne.set(
  "fr",
  `Blog avec système d'authentification et gestion d'articles.`
);

export const projectsDictionary = {
  title,
  studyTrackerParagraphOne,
  studyTrackerParagraphTwo,
  bugTrackerParagraphOne,
  bugTrackerParagraphTwo,
  alphanumericPlanetAdventuresParagraphOne,
  djangoBlogParagraphOne
};
