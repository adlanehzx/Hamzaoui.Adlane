export interface ProjectCapture {
  src: string;
  label: string;
  note: string;
}
export const projectCaptures: Record<string, ProjectCapture[]> = {
  "Corso Motors": [
    {
      src: "/projects/corso-home.webp",
      label: "Site vitrine — accueil",
      note: "Capture fournie par le propriétaire du projet.",
    },
    {
      src: "/projects/corso-models.webp",
      label: "Présentation de la gamme",
      note: "Capture fournie par le propriétaire du projet.",
    },
    {
      src: "/projects/corso-login.webp",
      label: "Portail unifié — connexion",
      note: "Capture fournie par le propriétaire du projet.",
    },
    {
      src: "/projects/corso-hub.webp",
      label: "Hub opérationnel et supervision",
      note: "Capture fournie par le propriétaire du projet.",
    },
    {
      src: "/projects/corso-plm.webp",
      label: "Gestion du cycle de vie produit",
      note: "Capture fournie par le propriétaire du projet.",
    },
    {
      src: "/projects/corso-git.webp",
      label: "Hébergement Git",
      note: "Capture fournie par le propriétaire du projet.",
    },
    {
      src: "/projects/corso-docs.webp",
      label: "Documentation interne",
      note: "Capture fournie par le propriétaire du projet.",
    },
    {
      src: "/projects/corso-drive.webp",
      label: "Espace documentaire et fichiers",
      note: "Capture fournie par le propriétaire du projet.",
    },
    {
      src: "/projects/corso-mail.webp",
      label: "Messagerie professionnelle",
      note: "Capture fournie par le propriétaire du projet. Identifiants personnels anonymisés.",
    },
  ],
  "Comp Bike": [
    {
      src: "/projects/comp-bike.webp",
      label: "Interface de Comp Bike — capture originale",
      note: "Capture conservée depuis la première version du portfolio.",
    },
    {
      src: "/projects/comp-bike-home.webp",
      label: "Accueil et présentation du produit",
      note: "Application lancée localement · novembre 2026.",
    },
    {
      src: "/projects/comp-bike-config.webp",
      label: "Configuration et sélection des composants",
      note: "Interface locale · données de démonstration présentes dans le dépôt.",
    },
  ],
  HankoTrack: [
    {
      src: "/projects/hankotrack-home.webp",
      label: "Accueil de HankoTrack",
      note: "Frontend Nuxt lancé localement · vue publique, sans connexion au backend.",
    },
    {
      src: "/projects/hankotrack-features.webp",
      label: "Fonctionnalités et parcours de découverte",
      note: "Page publique de l’application · novembre 2026.",
    },
  ],
  Nexus: [
    {
      src: "/projects/nexus-login.webp",
      label: "Connexion à la supervision Nexus",
      note: "Interface locale · les vues internes nécessitent le backend et une session administrateur.",
    },
  ],
  SORAVYN: [
    {
      src: "/projects/soravyn-studio.webp",
      label: "Campaign Studio — identité et campagnes",
      note: "Instance locale avec une base de démonstration isolée.",
    },
    {
      src: "/projects/soravyn-dashboard.webp",
      label: "Command Center — tableau de bord initial",
      note: "Installation locale vierge · aucun agent ni campagne en cours.",
    },
  ],
  Specto: [
    {
      src: "/projects/specto-home.webp",
      label: "Accueil de Specto",
      note: "Frontend Next.js lancé localement · page publique.",
    },
    {
      src: "/projects/specto-features.webp",
      label: "Présentation des types de tests",
      note: "Vue publique · aucun test IA exécuté pour cette capture.",
    },
  ],
  "Hackathon Michelin": [
    {
      src: "/projects/michelin-parcours.webp",
      label: "Création de parcours personnalisé",
      note: "Version web Expo locale, sans backend.",
    },
    {
      src: "/projects/michelin-profil.webp",
      label: "Profil, badges et parcours complétés",
      note: "Version web Expo locale, sans backend.",
    },
  ],
  Kanboard: [
    {
      src: "/projects/kanboard-board.webp",
      label: "Vue d’un tableau Kanban",
      note: "Capture issue du dépôt du projet.",
    },
    {
      src: "/projects/kanboard-boards.webp",
      label: "Liste des tableaux",
      note: "Capture issue du dépôt du projet.",
    },
    {
      src: "/projects/kanboard-card.webp",
      label: "Détail d’une carte",
      note: "Capture issue du dépôt du projet.",
    },
    {
      src: "/projects/kanboard-members.webp",
      label: "Gestion des membres",
      note: "Capture issue du dépôt du projet.",
    },
  ],
};
