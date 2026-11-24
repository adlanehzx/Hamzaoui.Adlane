import { lang } from "../i18n";

export interface ProjectCapture {
  src: string;
  label: string;
  note: string;
}

type Source = {
  src: string;
  srcEn?: string;
  fr: [label: string, note: string];
  en: [label: string, note: string];
};

const OWNER = "Capture fournie par le propriétaire du projet.";
const OWNER_EN = "Screenshot provided by the project owner.";
const owner = (fr: string, en: string): Pick<Source, "fr" | "en"> => ({
  fr: [fr, OWNER],
  en: [en, OWNER_EN],
});

const sources: Record<string, Source[]> = {
  "Corso Motors": [
    {
      src: "/projects/corso-home.webp",
      ...owner("Site vitrine — accueil", "Showcase website — home"),
    },
    {
      src: "/projects/corso-models.webp",
      ...owner("Présentation de la gamme", "Model line-up"),
    },
    {
      src: "/projects/corso-login.webp",
      ...owner("Portail unifié — connexion", "Unified portal — sign-in"),
    },
    {
      src: "/projects/corso-hub.webp",
      ...owner(
        "Hub opérationnel et supervision",
        "Operations hub and monitoring",
      ),
    },
    {
      src: "/projects/corso-plm.webp",
      ...owner(
        "Gestion du cycle de vie produit",
        "Product lifecycle management",
      ),
    },
    {
      src: "/projects/corso-git.webp",
      ...owner("Hébergement Git", "Git hosting"),
    },
    {
      src: "/projects/corso-docs.webp",
      ...owner("Documentation interne", "Internal documentation"),
    },
    {
      src: "/projects/corso-drive.webp",
      ...owner("Espace documentaire et fichiers", "Document and file storage"),
    },
    {
      src: "/projects/corso-mail.webp",
      fr: [
        "Messagerie professionnelle",
        "Capture fournie par le propriétaire du projet. Identifiants personnels anonymisés.",
      ],
      en: [
        "Business email",
        "Screenshot provided by the project owner. Personal identifiers anonymised.",
      ],
    },
  ],
  "Comp Bike": [
    {
      src: "/projects/comp-bike.webp",
      fr: [
        "Interface de Comp Bike — capture originale",
        "Capture conservée depuis la première version du portfolio.",
      ],
      en: [
        "Comp Bike interface — original screenshot",
        "Kept from the first version of this portfolio.",
      ],
    },
    {
      src: "/projects/comp-bike-home.webp",
      fr: [
        "Accueil et présentation du produit",
        "Application lancée localement · novembre 2026.",
      ],
      en: [
        "Home page and product overview",
        "App run locally · November 2026.",
      ],
    },
    {
      src: "/projects/comp-bike-config.webp",
      fr: [
        "Configuration et sélection des composants",
        "Interface locale · données de démonstration présentes dans le dépôt.",
      ],
      en: [
        "Build configuration and component picker",
        "Local run · demo data shipped with the repository.",
      ],
    },
  ],
  "Hackathon Michelin": [
    {
      src: "/projects/michelin-search.webp",
      fr: [
        "Recherche d’établissements et distinctions",
        "Version web Expo locale · données de démonstration fictives.",
      ],
      en: [
        "Venue search and distinctions",
        "Local Expo web build · fictional demo data.",
      ],
    },
    {
      src: "/projects/michelin-parcours.webp",
      fr: [
        "Création de parcours personnalisé",
        "Version web Expo locale, sans backend.",
      ],
      en: [
        "Building a personalised trail",
        "Local Expo web build, no backend.",
      ],
    },
    {
      src: "/projects/michelin-profil.webp",
      fr: [
        "Profil, badges et parcours complétés",
        "Version web Expo locale, sans backend.",
      ],
      en: [
        "Profile, badges and completed trails",
        "Local Expo web build, no backend.",
      ],
    },
  ],
  HankoTrack: [
    {
      src: "/projects/hankotrack-home.webp",
      fr: [
        "Accueil de HankoTrack",
        "Frontend Nuxt lancé localement · vue publique, sans connexion au backend.",
      ],
      en: [
        "HankoTrack home page",
        "Nuxt frontend run locally · public view, no backend connection.",
      ],
    },
    {
      src: "/projects/hankotrack-features.webp",
      fr: [
        "Fonctionnalités et parcours de découverte",
        "Page publique de l’application · novembre 2026.",
      ],
      en: [
        "Features and discovery flow",
        "Public page of the app · November 2026.",
      ],
    },
  ],
  Kanboard: [
    {
      src: "/projects/kanboard-board.webp",
      fr: ["Vue d’un tableau Kanban", "Capture issue du dépôt du projet."],
      en: ["Kanban board view", "Screenshot from the project repository."],
    },
    {
      src: "/projects/kanboard-boards.webp",
      fr: ["Liste des tableaux", "Capture issue du dépôt du projet."],
      en: ["Boards list", "Screenshot from the project repository."],
    },
    {
      src: "/projects/kanboard-card.webp",
      fr: ["Détail d’une carte", "Capture issue du dépôt du projet."],
      en: ["Card details", "Screenshot from the project repository."],
    },
    {
      src: "/projects/kanboard-members.webp",
      fr: ["Gestion des membres", "Capture issue du dépôt du projet."],
      en: ["Member management", "Screenshot from the project repository."],
    },
  ],
  Bastion: [
    {
      src: "/projects/bastion-archi.webp",
      srcEn: "/projects/bastion-archi-en.webp",
      fr: [
        "Architecture : coffre, keeper, oracle et DEX",
        "Schéma établi à partir du code du dépôt.",
      ],
      en: [
        "Architecture: vault, keeper, oracle and DEX",
        "Diagram drawn from the repository code.",
      ],
    },
    {
      src: "/projects/bastion-tests.webp",
      fr: [
        "24 tests unitaires et de fuzzing au vert",
        "Sortie réelle de forge test · novembre 2026.",
      ],
      en: [
        "24 passing unit and fuzz tests",
        "Actual forge test output · November 2026.",
      ],
    },
    {
      src: "/projects/bastion-invariants.webp",
      fr: [
        "Invariants : 128 campagnes de 8 192 appels",
        "Sortie réelle de forge test · novembre 2026.",
      ],
      en: [
        "Invariants: 128 runs of 8,192 calls",
        "Actual forge test output · November 2026.",
      ],
    },
    {
      src: "/projects/bastion-e2e.webp",
      fr: [
        "Bout en bout : le keeper Rust exécute un DCA",
        "Chaîne locale anvil · sortie réelle de scripts/e2e.sh.",
      ],
      en: [
        "End to end: the Rust keeper executes a DCA order",
        "Local anvil chain · actual scripts/e2e.sh output.",
      ],
    },
  ],
  RugRadar: [
    {
      src: "/projects/rugradar-telegram.webp",
      fr: [
        "Alertes Telegram : token taxé et honeypot",
        "Messages générés par RugRadar sur une chaîne BNB locale, affichés dans une interface de type Telegram.",
      ],
      en: [
        "Telegram alerts: taxed token and honeypot",
        "Messages produced by RugRadar on a local BNB chain, shown in a Telegram-style view.",
      ],
    },
    {
      src: "/projects/rugradar-watch.webp",
      fr: [
        "Mode watch : trois paires détectées et notées",
        "Chaîne BNB locale (ganache) · sortie réelle du scanner.",
      ],
      en: [
        "Watch mode: three new pairs found and scored",
        "Local BNB chain (ganache) · actual scanner output.",
      ],
    },
    {
      src: "/projects/rugradar-check.webp",
      fr: [
        "Analyse détaillée d’un honeypot",
        "Sortie réelle de rugradar check · chaîne BNB locale.",
      ],
      en: [
        "Detailed analysis of a honeypot",
        "Actual rugradar check output · local BNB chain.",
      ],
    },
  ],
  Nexus: [
    {
      src: "/projects/nexus-login.webp",
      fr: [
        "Connexion à la supervision Nexus",
        "Interface locale · les vues internes nécessitent le backend et une session administrateur.",
      ],
      en: [
        "Nexus console sign-in",
        "Local run · internal views need the backend and an admin session.",
      ],
    },
  ],
  SORAVYN: [
    {
      src: "/projects/soravyn-studio.webp",
      fr: [
        "Campaign Studio — identité et campagnes",
        "Instance locale avec une base de démonstration isolée.",
      ],
      en: [
        "Campaign Studio — brand and campaigns",
        "Local instance with an isolated demo database.",
      ],
    },
    {
      src: "/projects/soravyn-dashboard.webp",
      fr: [
        "Command Center — tableau de bord initial",
        "Installation locale vierge · aucun agent ni campagne en cours.",
      ],
      en: [
        "Command Center — initial dashboard",
        "Fresh local install · no agents or campaigns running.",
      ],
    },
  ],
  Specto: [
    {
      src: "/projects/specto-home.webp",
      fr: [
        "Accueil de Specto",
        "Frontend Next.js lancé localement · page publique.",
      ],
      en: ["Specto home page", "Next.js frontend run locally · public page."],
    },
    {
      src: "/projects/specto-features.webp",
      fr: [
        "Présentation des types de tests",
        "Vue publique · aucun test IA exécuté pour cette capture.",
      ],
      en: [
        "Supported test types",
        "Public view · no AI test run for this screenshot.",
      ],
    },
  ],
};

export const projectCaptures: Record<string, ProjectCapture[]> =
  Object.fromEntries(
    Object.entries(sources).map(([name, list]) => [
      name,
      list.map(({ src, srcEn, fr, en }) => {
        const [label, note] = lang === "en" ? en : fr;
        return { src: lang === "en" && srcEn ? srcEn : src, label, note };
      }),
    ]),
  );
