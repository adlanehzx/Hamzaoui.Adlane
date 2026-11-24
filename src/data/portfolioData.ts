import { lang } from "../i18n";

export const personalInfo = {
  name: "Adlane Hamzaoui",
  email: "contact.adlanehz@gmail.com",
};

const content = {
  fr: {
    experiences: [
      {
        id: "rmz",
        company: "RMZ GESTION · Paris",
        role: "Alternant — Systèmes d’information",
        period: "Depuis novembre 2025",
        description: [
          "Outils internes et automatisation des opérations d’un groupe hôtelier",
          "Intégration PMS / Channel Manager via APIs REST",
          "Tableaux de bord KPI et suivi des projets jusqu’à la mise en production",
        ],
      },
      {
        id: "ethos",
        company: "Ethos DeFi · Nevada, USA (remote)",
        role: "Ingénieur logiciel",
        period: "Novembre 2024 — Mai 2025",
        description: [
          "Plateforme d’échange crypto et DeFi : React Native, ethers.js, WalletConnect",
          "Organisation des sprints Scrum et revues de code",
          "Tests E2E et pipelines CI/CD",
        ],
      },
    ],
    skills: [
      [
        "Développement",
        "TypeScript, React / Next.js, Node.js, React Native, PostgreSQL",
      ],
      [
        "Blockchain",
        "Solidity, Foundry, Rust, ethers.js / alloy, EVM / BNB Chain",
      ],
      ["IA appliquée", "LLM, RAG (pgvector), agents, MCP, tool calling"],
      ["DevOps", "Docker, GitHub Actions, Traefik, VPS, Linux"],
      ["Qualité", "Playwright, Vitest, fuzzing / invariants, Sentry"],
      ["Pilotage", "Scrum, Jira, cadrage, suivi de livraison, reporting KPI"],
    ],
  },
  en: {
    experiences: [
      {
        id: "rmz",
        company: "RMZ GESTION · Paris",
        role: "Apprentice — Information Systems",
        period: "Since November 2025",
        description: [
          "Internal tools and automation for a hotel group’s operations",
          "PMS / Channel Manager integration through REST APIs",
          "KPI dashboards and project follow-up through to production",
        ],
      },
      {
        id: "ethos",
        company: "Ethos DeFi · Nevada, USA (remote)",
        role: "Software engineer",
        period: "November 2024 — May 2025",
        description: [
          "Crypto exchange and DeFi platform: React Native, ethers.js, WalletConnect",
          "Scrum sprint planning and code reviews",
          "E2E tests and CI/CD pipelines",
        ],
      },
    ],
    skills: [
      [
        "Development",
        "TypeScript, React / Next.js, Node.js, React Native, PostgreSQL",
      ],
      [
        "Blockchain",
        "Solidity, Foundry, Rust, ethers.js / alloy, EVM / BNB Chain",
      ],
      ["Applied AI", "LLMs, RAG (pgvector), agents, MCP, tool calling"],
      ["DevOps", "Docker, GitHub Actions, Traefik, VPS, Linux"],
      ["Quality", "Playwright, Vitest, fuzzing / invariants, Sentry"],
      ["Delivery", "Scrum, Jira, scoping, delivery tracking, KPI reporting"],
    ],
  },
}[lang];

export const experiences = content.experiences;
export const skills = content.skills;
