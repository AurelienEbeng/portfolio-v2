const intro = new Map<string,string>();
intro.set("en","Hi, I'm Aurelien Ebeng");
intro.set("fr", "Bonjour, je suis Aurelien Ebeng")

const profession = new Map<string,string>();
profession.set("en","Full-Stack Developer");
profession.set("fr", "Développeur Full Stack")

const btn1 = new Map<string,string>();
btn1.set("en","Send me an email");
btn1.set("fr", "Envoyer moi un email")

const btn2 = new Map<string,string>();
btn2.set("en","Download CV");
btn2.set("fr", "Télécharger CV")



export const heroDictionary = {
    intro,
    profession,
    btn1,
    btn2
}