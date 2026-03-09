const title = new Map<string, string>();
title.set("en", "Projects");
title.set("fr", "Projets");

const projectDescription = new Map([
  ["en", "The server may take up to a minute to load and answer requests"],
  [
    "fr",
    "Le serveur peut prendre jusqu'à une minute pour charger et répondre aux requêtes.",
  ],
]);

export const projectsDictionary = {
  title,
  projectDescription,
};
