import { lang } from "../i18n";

export type Category = "client" | "hackathon" | "ecole" | "perso";
export const categoryOrder: Category[] = [
  "client",
  "hackathon",
  "ecole",
  "perso",
];

interface Text {
  title: string;
  short: string;
  intro: string;
}

const categoryText: Record<"fr" | "en", Record<Category, Text>> = {
  fr: {
    client: {
      title: "Projet client",
      short: "Client",
      intro:
        "Conçu et livré pour un client, du cadrage à la mise en production.",
    },
    hackathon: {
      title: "Hackathons",
      short: "Hackathons",
      intro: "Des produits construits en équipe, en temps limité.",
    },
    ecole: {
      title: "Projets annuels ESGI",
      short: "ESGI",
      intro:
        "Projets de fin d’année menés en équipe à l’ESGI, de la conception au déploiement.",
    },
    perso: {
      title: "Projets personnels",
      short: "Perso",
      intro:
        "Des projets menés de bout en bout, pour apprendre et pour mon propre usage.",
    },
  },
  en: {
    client: {
      title: "Client project",
      short: "Client",
      intro: "Built and delivered for a client, from scoping to production.",
    },
    hackathon: {
      title: "Hackathons",
      short: "Hackathons",
      intro: "Products built as a team, against the clock.",
    },
    ecole: {
      title: "ESGI annual projects",
      short: "ESGI",
      intro: "End-of-year team projects at ESGI, from design to deployment.",
    },
    perso: {
      title: "Personal projects",
      short: "Personal",
      intro: "Projects built end to end, to learn and for my own use.",
    },
  },
};
export const categories = categoryText[lang];

interface ProjectText {
  type: string;
  role: string;
  copy: string;
  label: string;
  steps: string[];
}

interface ProjectSource {
  name: string;
  category: Category;
  stack: string;
  color: string;
  url: string;
  fr: ProjectText;
  en: ProjectText;
}

const sources: ProjectSource[] = [
  {
    name: "Corso Motors",
    category: "client",
    stack: "Docker · Traefik · SSO · VPS",
    color: "#e6aa72",
    url: "https://corso-motors.com",
    fr: {
      type: "Constructeur automobile",
      role: "Chef de projet & développeur",
      copy: "Écosystème numérique pour un constructeur automobile : site vitrine avec CMS, analytique RGPD et supervision serveur. Infrastructure privée sur VPS avec SSO, PLM, Git, wiki, drive et messagerie. Projet mené de bout en bout, du cadrage des besoins à la mise en production.",
      label: "ÉCOSYSTÈME SOUVERAIN",
      steps: [
        "Cadrage & planification",
        "Site & outils internes",
        "Infrastructure privée",
      ],
    },
    en: {
      type: "Car manufacturer",
      role: "Project lead & developer",
      copy: "Digital ecosystem for a car manufacturer: showcase website with a CMS, GDPR-friendly analytics and server monitoring. Private infrastructure on a VPS with SSO, PLM, Git, wiki, file storage and email. Run end to end, from gathering requirements to production.",
      label: "SELF-HOSTED ECOSYSTEM",
      steps: [
        "Scoping & planning",
        "Website & internal tools",
        "Private infrastructure",
      ],
    },
  },
  {
    name: "Comp Bike",
    category: "hackathon",
    stack: "Next.js · Django REST · PostgreSQL · Redis",
    color: "#b8c7a5",
    url: "https://github.com/ilyas-ya/comp_bike",
    fr: {
      type: "Hackathon Kiro · En équipe",
      role: "Chef de projet & développeur",
      copy: "Moteur de compatibilité cross-marques pour identifier les composants de vélo compatibles et comparer les prix du marché. Réalisé en équipe lors du hackathon Kiro : cadrage d’un périmètre minimal, répartition des tâches et livraison dans les délais.",
      label: "COMPATIBILITÉ VÉLO",
      steps: ["Composants", "Compatibilité", "Comparaison des prix"],
    },
    en: {
      type: "Kiro hackathon · Team project",
      role: "Project lead & developer",
      copy: "Cross-brand compatibility engine that finds which bike components fit together and compares market prices. Built as a team during the Kiro hackathon: scoped to a minimal product, tasks split across the team, delivered on time.",
      label: "BIKE COMPATIBILITY",
      steps: ["Components", "Compatibility", "Price comparison"],
    },
  },
  {
    name: "Hackathon Michelin",
    category: "hackathon",
    stack: "React Native · Expo · Express · Supabase",
    color: "#dfa49b",
    url: "https://github.com/adlanehzx/Hackathon-michelin",
    fr: {
      type: "Hackathon Michelin · En équipe",
      role: "Développeur full-stack",
      copy: "Application mobile autour du Guide Michelin : création de parcours gastronomiques personnalisés (distinctions, cuisine, budget, distance), restaurants et hôtels, badges et niveaux. Authentification JWT, réinitialisation du mot de passe par email et version web.",
      label: "PARCOURS GASTRONOMIQUES",
      steps: [
        "Parcours personnalisés",
        "Restaurants & hôtels",
        "Badges & niveaux",
      ],
    },
    en: {
      type: "Michelin hackathon · Team project",
      role: "Full-stack developer",
      copy: "Mobile app built around the Michelin Guide: personalised food trails (distinctions, cuisine, budget, distance), restaurants and hotels, badges and levels. JWT authentication, password reset by email and a web version.",
      label: "FOOD TRAILS",
      steps: ["Personalised trails", "Restaurants & hotels", "Badges & levels"],
    },
  },
  {
    name: "HankoTrack",
    category: "ecole",
    stack: "Nuxt · Express · Prisma · Socket.io",
    color: "#b9b2cf",
    url: "https://github.com/adlanehzx/Projet-Annuel",
    fr: {
      type: "Suivi d’anime · En équipe",
      role: "Scrum Master & développeur",
      copy: "Plateforme communautaire de suivi d’anime : watchlist, collections, critiques et recommandations personnalisées, avec mises à jour en temps réel. Organisation de l’équipe en sprints, revues de code, tests E2E Playwright et déploiement continu.",
      label: "COMMUNAUTÉ & TEMPS RÉEL",
      steps: ["Sprints & répartition", "Watchlist & critiques", "Temps réel"],
    },
    en: {
      type: "Anime tracking · Team project",
      role: "Scrum Master & developer",
      copy: "Community platform for tracking anime: watchlist, collections, reviews and personalised recommendations, with real-time updates. Team organised in sprints, code reviews, Playwright E2E tests and continuous deployment.",
      label: "COMMUNITY & REAL TIME",
      steps: ["Sprints & planning", "Watchlist & reviews", "Real time"],
    },
  },
  {
    name: "Kanboard",
    category: "ecole",
    stack: "Laravel · Blade · MySQL · Tailwind CSS",
    color: "#a9c2c4",
    url: "https://github.com/ilyes-i-ben/kanboard",
    fr: {
      type: "Gestion de projet · En binôme",
      role: "Développeur full-stack",
      copy: "Application de gestion de projet en Kanban : tableaux, listes et cartes déplaçables, membres et assignations, vue calendrier jour, semaine et mois avec export ICS, partage public d’une carte. Chargement des tableaux optimisé de 179 à 15 requêtes, déploiement sur DigitalOcean derrière Traefik.",
      label: "TABLEAUX & CALENDRIER",
      steps: [
        "Tableaux & cartes",
        "Calendrier & export ICS",
        "Partage & déploiement",
      ],
    },
    en: {
      type: "Project management · Pair project",
      role: "Full-stack developer",
      copy: "Kanban project management app: boards, draggable lists and cards, members and assignees, day, week and month calendar views with ICS export, public card sharing. Board loading cut from 179 to 15 queries, deployed on DigitalOcean behind Traefik.",
      label: "BOARDS & CALENDAR",
      steps: [
        "Boards & cards",
        "Calendar & ICS export",
        "Sharing & deployment",
      ],
    },
  },
  {
    name: "Bastion",
    category: "perso",
    stack: "Solidity · Foundry · Rust · Chainlink",
    color: "#d9c27a",
    url: "https://github.com/adlanehzx/bastion",
    fr: {
      type: "Finance décentralisée",
      role: "Concepteur & développeur",
      copy: "Coffre DeFi non custodial sur BNB Chain qui exécute automatiquement des ordres DCA, limites, stop-loss et take-profit. Les prix viennent de Chainlink ; un keeper en Rust déclenche les ordres sans pouvoir retirer les fonds. Tests unitaires, fuzzing et invariants avec Foundry.",
      label: "ORDRES AUTOMATISÉS ON-CHAIN",
      steps: ["Smart contract", "Keeper Rust", "Fuzzing & invariants"],
    },
    en: {
      type: "Decentralised finance",
      role: "Designer & developer",
      copy: "Non-custodial DeFi vault on BNB Chain that automatically executes DCA, limit, stop-loss and take-profit orders. Prices come from Chainlink; a Rust keeper triggers orders but can never withdraw funds. Unit, fuzz and invariant tests with Foundry.",
      label: "AUTOMATED ON-CHAIN ORDERS",
      steps: ["Smart contract", "Rust keeper", "Fuzzing & invariants"],
    },
  },
  {
    name: "RugRadar",
    category: "perso",
    stack: "Rust · alloy · Solidity · SQLite",
    color: "#c9a9a0",
    url: "https://github.com/adlanehzx/rugradar",
    fr: {
      type: "Sécurité blockchain",
      role: "Concepteur & développeur",
      copy: "Scanner de risque en temps réel des nouveaux tokens listés sur PancakeSwap. Chaque paire est analysée en quelques secondes : honeypot simulé en un seul eth_call, taxes cachées, liquidité et fonctions dangereuses du bytecode. Score sur 100 et alertes Telegram.",
      label: "ANALYSE DE TOKENS EN TEMPS RÉEL",
      steps: [
        "Détection des paires",
        "Simulation & bytecode",
        "Score & alertes",
      ],
    },
    en: {
      type: "Blockchain security",
      role: "Designer & developer",
      copy: "Real-time risk scanner for new tokens listed on PancakeSwap. Each pair is analysed within seconds: honeypot simulated in a single eth_call, hidden taxes, liquidity and dangerous bytecode functions. Score out of 100 and Telegram alerts.",
      label: "REAL-TIME TOKEN ANALYSIS",
      steps: ["Pair detection", "Simulation & bytecode", "Score & alerts"],
    },
  },
  {
    name: "Nexus",
    category: "perso",
    stack: "TypeScript · Expo · Tool calling · pgvector",
    color: "#b8c7a5",
    url: "https://github.com/adlanehzx/Nexus",
    fr: {
      type: "Assistant IA",
      role: "Concepteur & développeur",
      copy: "Assistant IA sur iPhone, PC et web capable d’exécuter des actions : envoyer un email, lancer les tests d’un projet, piloter un navigateur ou opérer des machines appairées. Registre d’outils, permissions et traçabilité de chaque action.",
      label: "DE L’INTENTION À L’ACTION",
      steps: ["Mission", "Outils & permissions", "Exécution & traçabilité"],
    },
    en: {
      type: "AI assistant",
      role: "Designer & developer",
      copy: "AI assistant on iPhone, PC and web that takes real actions: sending an email, running a project’s tests, driving a browser or operating paired machines. Tool registry, permissions and an audit trail for every action.",
      label: "FROM INTENT TO ACTION",
      steps: ["Mission", "Tools & permissions", "Execution & audit trail"],
    },
  },
  {
    name: "SORAVYN",
    category: "perso",
    stack: "TypeScript · Multi-agents · Vidéo · Voix",
    color: "#e3b48c",
    url: "https://github.com/adlanehzx/soravyn",
    fr: {
      type: "Agence marketing IA",
      role: "Concepteur & développeur",
      copy: "Agence marketing IA pilotée par agents : workflow de campagnes avec validation humaine, production vidéo automatisée du scénario au rendu MP4, narration et studio de contenus.",
      label: "CAMPAGNES PILOTÉES PAR AGENTS",
      steps: ["Campagne", "Validation humaine", "Contenus & vidéo"],
    },
    en: {
      type: "AI marketing agency",
      role: "Designer & developer",
      copy: "Agent-driven AI marketing agency: campaign workflow with human approval, automated video production from script to MP4, voice-over and a content studio.",
      label: "AGENT-DRIVEN CAMPAIGNS",
      steps: ["Campaign", "Human approval", "Content & video"],
    },
  },
  {
    name: "Specto",
    category: "perso",
    stack: "Playwright · BullMQ · CI/CD · IA générative",
    color: "#aebbd0",
    url: "https://github.com/adlanehzx/specto",
    fr: {
      type: "Tests générés par IA",
      role: "Concepteur & développeur",
      copy: "Génération et exécution de tests E2E Playwright et API REST à partir de descriptions en langage naturel. Exécution en file d’attente, CLI, auto-healing et intégration GitHub Actions, GitLab et Jenkins.",
      label: "DU LANGAGE NATUREL AUX TESTS",
      steps: ["Description", "Génération & file d’attente", "Tests E2E & API"],
    },
    en: {
      type: "AI-generated tests",
      role: "Designer & developer",
      copy: "Generates and runs Playwright E2E and REST API tests from plain-language descriptions. Queued execution, CLI, self-healing and integrations with GitHub Actions, GitLab and Jenkins.",
      label: "FROM PLAIN LANGUAGE TO TESTS",
      steps: ["Description", "Generation & queue", "E2E & API tests"],
    },
  },
];

export const projects = sources.map(({ fr, en, ...rest }) => ({
  ...rest,
  ...(lang === "en" ? en : fr),
  stack:
    lang === "en"
      ? rest.stack
          .replace("Vidéo · Voix", "Video · Voice")
          .replace("IA générative", "Generative AI")
      : rest.stack,
}));
