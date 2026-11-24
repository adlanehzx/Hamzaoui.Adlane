export type Lang = "fr" | "en";

/** The English version lives under /en; everything else is French. */
export const lang: Lang = /^\/en(\/|$)/.test(window.location.pathname)
  ? "en"
  : "fr";

export const ui = {
  fr: {
    meta: {
      title: "Adlane Hamzaoui, ingénieur logiciel",
      description:
        "Adlane Hamzaoui, ingénieur logiciel à Paris. Applications web, blockchain, IA et pilotage de projets, du besoin à la production.",
    },
    switchLabel: "Read in English",
    skip: "Aller aux projets",
    nav: {
      label: "Navigation principale",
      work: "Projets",
      about: "Parcours",
      contact: "Contact",
    },
    hero: "Des idées aux produits.",
    intro:
      "Ingénieur logiciel à Paris, en dernière année de Mastère Ingénierie de la Blockchain à l’ESGI. Je conçois et livre des applications web, des smart contracts et des outils d’IA, et je pilote les projets qui vont avec.",
    seeProjects: "Voir les projets",
    writeMe: "M’écrire",
    objectLabel: "Aller aux projets",
    workTitle: "Projets",
    workIntro:
      "Dix projets, du client réel aux outils que j’utilise moi-même. Ouvrez une fiche pour voir les captures, le rôle tenu et le code.",
    project: (n: number) => (n > 1 ? "projets" : "projet"),
    open: (name: string) => `Ouvrir la fiche ${name}`,
    dialog: {
      close: "Fermer",
      previous: "Projet précédent",
      next: "Projet suivant",
      role: "Rôle",
      stack: "Stack",
      highlights: "Points clés",
      site: "Visiter le site",
      repo: "Voir le code sur GitHub",
    },
    aboutTitle: "Parcours",
    about: [
      "Actuellement en dernière année de Mastère à l’ESGI, à la recherche de nouvelles opportunités.",
      "J’aime prendre un besoin flou et le transformer en produit livré : cadrer, développer, déployer, et coordonner l’équipe quand il y en a une.",
    ],
    experience: "Expérience",
    skillsTitle: "Compétences",
    education: "Formation",
    degree: "Mastère en Ingénierie de la Blockchain",
    degreeWhere: "ESGI Paris, 2025–2027",
    languagesTitle: "Langues",
    languages: "Français, langue maternelle. Anglais, niveau professionnel.",
    contactTitle: "Contact",
    contactText:
      "Un poste, un projet ou une question : le plus simple est de m’écrire.",
    location: "Basé à Paris",
    backToTop: "Retour en haut",
    gallery: {
      section: "Captures de",
      enlargeOf: "Agrandir la capture de",
      enlarge: "Agrandir",
      previousOf: "Capture précédente de",
      nextOf: "Capture suivante de",
      views: "Vues de",
      show: "Afficher",
      dialog: "Capture agrandie de",
      closeShot: "Fermer la capture",
      previousBig: "Capture précédente agrandie",
      nextBig: "Capture suivante agrandie",
    },
  },
  en: {
    meta: {
      title: "Adlane Hamzaoui, software engineer",
      description:
        "Adlane Hamzaoui, software engineer in Paris. Web, blockchain, AI and project delivery, from the brief to production.",
    },
    switchLabel: "Lire en français",
    skip: "Skip to projects",
    nav: {
      label: "Main navigation",
      work: "Projects",
      about: "Background",
      contact: "Contact",
    },
    hero: "From ideas to products.",
    intro:
      "Software engineer in Paris, in the final year of a Master’s in Blockchain Engineering at ESGI. I design and ship web apps, smart contracts and AI tools, and I run the projects around them.",
    seeProjects: "See the projects",
    writeMe: "Email me",
    objectLabel: "Go to the projects",
    workTitle: "Projects",
    workIntro:
      "Ten projects, from a real client to tools I use myself. Open one to see screenshots, my role and the code.",
    project: (n: number) => (n > 1 ? "projects" : "project"),
    open: (name: string) => `Open the ${name} project`,
    dialog: {
      close: "Close",
      previous: "Previous project",
      next: "Next project",
      role: "Role",
      stack: "Stack",
      highlights: "Highlights",
      site: "Visit the site",
      repo: "View the code on GitHub",
    },
    aboutTitle: "Background",
    about: [
      "Currently in the final year of a Master’s at ESGI, open to new opportunities.",
      "I like taking a fuzzy need and turning it into a shipped product: scoping, building, deploying, and coordinating the team when there is one.",
    ],
    experience: "Experience",
    skillsTitle: "Skills",
    education: "Education",
    degree: "Master’s in Blockchain Engineering",
    degreeWhere: "ESGI Paris, 2025–2027",
    languagesTitle: "Languages",
    languages: "French, native. English, professional working proficiency.",
    contactTitle: "Contact",
    contactText:
      "A role, a project or a question: the easiest way is to email me.",
    location: "Based in Paris",
    backToTop: "Back to top",
    gallery: {
      section: "Screenshots of",
      enlargeOf: "Enlarge the screenshot of",
      enlarge: "Enlarge",
      previousOf: "Previous screenshot of",
      nextOf: "Next screenshot of",
      views: "Views of",
      show: "Show",
      dialog: "Enlarged screenshot of",
      closeShot: "Close the screenshot",
      previousBig: "Previous enlarged screenshot",
      nextBig: "Next enlarged screenshot",
    },
  },
}[lang];
