import { Project, Skill, Experience, SocialLink } from "../types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Leynai",
    description:
      "Développement d'une application événementielle complète avec stack MERN + TypeScript. Fonctionnalités incluant création d'événements, système de billetterie et gestion des utilisateurs.",
    imageUrl: "/pics/leynai.png",
    tags: ["MERN", "TypeScript", "MongoDB", "Express", "React", "Node.js"],
    featured: true,
  },
  {
    id: "2",
    title: "Bike.comp - Plateforme pour cyclistes",
    description:
      "Plateforme permettant de comparer la compatibilité des pièces de vélo. Interface moderne avec Next.js et API robuste avec Django et PostgreSQL.",
    imageUrl: "/pics/CompBike.png",
    tags: ["Next.js", "Django", "PostgreSQL", "TypeScript", "Python"],
    featured: true,
  },
  {
    id: "3",
    title: "Kanboard.app",
    description:
      "Projet académique de gestion de tâches développé en duo avec Laravel. Interface intuitive de type Kanban avec gestion des projets et des équipes.",
    imageUrl: "/pics/Kanboard.png",
    tags: ["Laravel", "PHP", "MySQL", "Blade", "Bootstrap"],
    featured: false,
  },
  {
    id: "4",
    title: "Csseducteur.me",
    description:
      "Projet académique SEO développé avec Gatsby. Site optimisé pour les moteurs de recherche avec performances excellentes et design responsive.",
    imageUrl: "/pics/csseducteur.png",
    tags: ["Gatsby", "React", "GraphQL", "SEO", "Tailwind CSS"],
    demoUrl: "https://csseducteur.me",
    featured: false,
  },
];

export const skills: Skill[] = [
  { name: "JavaScript", level: 4, category: "frontend" },
  { name: "TypeScript", level: 4, category: "frontend" },
  { name: "React", level: 4, category: "frontend" },
  { name: "React Native", level: 4, category: "frontend" },
  { name: "Next.js", level: 3, category: "frontend" },
  { name: "Gatsby", level: 2, category: "frontend" },
  { name: "Tailwind CSS", level: 4, category: "frontend" },
  { name: "SCSS", level: 3, category: "frontend" },
  { name: "HTML/CSS", level: 4, category: "frontend" },
  { name: "Node.js", level: 4, category: "backend" },
  { name: "Express", level: 4, category: "backend" },
  { name: "MongoDB", level: 4, category: "backend" },
  { name: "MySQL", level: 4, category: "backend" },
  { name: "PostgreSQL", level: 4, category: "backend" },
  { name: "Laravel", level: 4, category: "backend" },
  { name: "Django", level: 3, category: "backend" },
  { name: "PHP", level: 4, category: "backend" },
  { name: "Python", level: 3, category: "backend" },
  { name: "Docker", level: 4, category: "tools" },
  { name: "Git", level: 4, category: "tools" },
  { name: "GitHub Actions", level: 3, category: "tools" },
  { name: "Maestro Testing", level: 4, category: "tools" },
  { name: "Insomnia/Postman", level: 4, category: "tools" },
  { name: "UML", level: 3, category: "tools" },
];

export const experiences: Experience[] = [
  {
    id: "1",
    role: "Alternant Développeur React Native",
    company: "Ethos",
    location: "USA (Remote)",
    period: "Novembre 2024 - mai 2025",
    description: [
      "Développement front-end en React Native pour une application crypto",
      "Automatisation de tests E2E avec Maestro pour améliorer la qualité du code",
      "Mise en place de pipelines CI/CD avec GitHub Actions",
      "Collaboration avec une équipe internationale en mode remote",
    ],
  },
  {
    id: "2",
    role: "Stagiaire Développeur Web",
    company: "Keyu",
    location: "Paris, France",
    period: "Juillet - Août 2023",
    description: [
      "Premières bases en développement web avec HTML, CSS et JavaScript",
      "Développement de pages web interactives",
      "Identification et correction de bugs dans le code existant",
      "Optimisation des performances et amélioration de l'expérience utilisateur",
    ],
  },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/Adlanehzx",
    icon: "Github",
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/adlane-hamzaoui",
    icon: "Linkedin",
  },
  {
    platform: "Email",
    url: "mailto:contact.adlanehz@gmail.com",
    icon: "Mail",
  },
];

export const personalInfo = {
  name: "Adlane Hamzaoui",
  title: "Développeur Full Stack",
  location: "Paris, France",
  email: "contact.adlanehz@gmail.com",
  phone: "+33 6 67 74 89 88",
  about:
    "Récemment diplômé d'un Bachelor en Ingénierie du Web à l'ESGI, où je poursuis désormais un Master dans la même spécialité. Passionné par le développement web, mobile et blockchain, j'ai renforcé mes compétences à travers mes expériences chez Keyu et Ethos, ainsi que mes projets personnels et académiques. Ma stack de prédilection : React côté front, Node.js/Express côté back, mais je m'adapte facilement aux nouvelles technologies (Laravel, Django, Next.js).",
  resumeUrl: "/resume.pdf",
  education: [
    {
      degree: "Master en Ingénierie du Web",
      school: "ESGI Paris",
      period: "2025 - 2027",
      status: "En cours",
    },
    {
      degree: "Bachelor en Ingénierie du Web",
      school: "ESGI Paris",
      period: "2024 - 2025",
      status: "Diplômé",
    },
  ],
};
