import { useRef, useState } from "react";
import ProjectGallery from "./components/ProjectGallery";
import {
  ArrowUpRight,
  ArrowDown,
  ArrowUp,
  ArrowLeft,
  ArrowRight,
  X,
  Plus,
  Minus,
} from "lucide-react";
import { experiences, personalInfo, skills } from "./data/portfolioData";

const projects: {
  name: string;
  type: string;
  role: string;
  stack: string;
  copy: string;
  color: string;
  label: string;
  url: string;
  steps: string[];
}[] = [
  {
    name: "Corso Motors",
    type: "Projet client",
    role: "Chef de projet & développeur",
    stack: "Docker · Traefik · SSO · VPS",
    copy: "Écosystème numérique pour un constructeur automobile : site vitrine avec CMS, analytique RGPD et supervision serveur. Infrastructure privée sur VPS avec SSO, PLM, Git, wiki, drive et messagerie. Projet mené de bout en bout, du cadrage des besoins à la mise en production.",
    color: "#e6aa72",
    label: "ÉCOSYSTÈME SOUVERAIN",
    url: "https://corso-motors.com",
    steps: [
      "Cadrage & planification",
      "Site & outils internes",
      "Infrastructure privée",
    ],
  },
  {
    name: "Bastion",
    type: "Projet personnel · DeFi",
    role: "Concepteur & développeur",
    stack: "Solidity · Foundry · Rust · Chainlink",
    copy: "Coffre DeFi non custodial sur BNB Chain qui exécute automatiquement des ordres DCA, limites, stop-loss et take-profit. Les prix viennent de Chainlink ; un keeper en Rust déclenche les ordres sans pouvoir retirer les fonds. Tests unitaires, fuzzing et invariants avec Foundry.",
    color: "#d9c27a",
    label: "ORDRES AUTOMATISÉS ON-CHAIN",
    url: "https://github.com/adlanehzx/bastion",
    steps: ["Smart contract", "Keeper Rust", "Fuzzing & invariants"],
  },
  {
    name: "RugRadar",
    type: "Projet personnel · Sécurité",
    role: "Concepteur & développeur",
    stack: "Rust · alloy · Solidity · SQLite",
    copy: "Scanner de risque en temps réel des nouveaux tokens listés sur PancakeSwap. Chaque paire est analysée en quelques secondes : honeypot simulé en un seul eth_call, taxes cachées, liquidité et fonctions dangereuses du bytecode. Score sur 100 et alertes Telegram.",
    color: "#c9a9a0",
    label: "ANALYSE DE TOKENS EN TEMPS RÉEL",
    url: "https://github.com/adlanehzx/rugradar",
    steps: ["Détection des paires", "Simulation & bytecode", "Score & alertes"],
  },
  {
    name: "Nexus",
    type: "Projet personnel · Assistant IA",
    role: "Concepteur & développeur",
    stack: "TypeScript · Expo · Tool calling · pgvector",
    copy: "Assistant IA sur iPhone, PC et web capable d’exécuter des actions : envoyer un email, lancer les tests d’un projet, piloter un navigateur ou opérer des machines appairées. Registre d’outils, permissions et traçabilité de chaque action.",
    color: "#b8c7a5",
    label: "DE L’INTENTION À L’ACTION",
    url: "https://github.com/adlanehzx/Nexus",
    steps: ["Mission", "Outils & permissions", "Exécution & traçabilité"],
  },
  {
    name: "SORAVYN",
    type: "Projet personnel · Marketing",
    role: "Concepteur & développeur",
    stack: "TypeScript · Multi-agents · Vidéo · Voix",
    copy: "Agence marketing IA pilotée par agents : workflow de campagnes avec validation humaine, production vidéo automatisée du scénario au rendu MP4, narration et studio de contenus.",
    color: "#e3b48c",
    label: "CAMPAGNES PILOTÉES PAR AGENTS",
    url: "https://github.com/adlanehzx/soravyn",
    steps: ["Campagne", "Validation humaine", "Contenus & vidéo"],
  },
  {
    name: "Specto",
    type: "Projet personnel · Qualité",
    role: "Concepteur & développeur",
    stack: "Playwright · BullMQ · CI/CD · IA générative",
    copy: "Génération et exécution de tests E2E Playwright et API REST à partir de descriptions en langage naturel. Exécution en file d’attente, CLI, auto-healing et intégration GitHub Actions, GitLab et Jenkins.",
    color: "#aebbd0",
    label: "DU LANGAGE NATUREL AUX TESTS",
    url: "https://github.com/adlanehzx/specto",
    steps: ["Description", "Génération & file d’attente", "Tests E2E & API"],
  },
  {
    name: "HankoTrack",
    type: "Projet annuel ESGI · En équipe",
    role: "Scrum Master & développeur",
    stack: "Nuxt · Express · Prisma · Socket.io",
    copy: "Plateforme communautaire de suivi d’anime : watchlist, collections, critiques et recommandations personnalisées, avec mises à jour en temps réel. Organisation de l’équipe en sprints, revues de code, tests E2E Playwright et déploiement continu.",
    color: "#b9b2cf",
    label: "COMMUNAUTÉ & TEMPS RÉEL",
    url: "https://github.com/adlanehzx/Projet-Annuel",
    steps: ["Sprints & répartition", "Watchlist & critiques", "Temps réel"],
  },
  {
    name: "Comp Bike",
    type: "Hackathon Kiro · En équipe",
    role: "Chef de projet & développeur",
    stack: "Next.js · Django REST · PostgreSQL · Redis",
    copy: "Moteur de compatibilité cross-marques pour identifier les composants de vélo compatibles et comparer les prix du marché. Réalisé en équipe lors du hackathon Kiro : cadrage d’un périmètre minimal, répartition des tâches et livraison dans les délais.",
    color: "#b8c7a5",
    label: "COMPATIBILITÉ VÉLO",
    url: "https://github.com/ilyas-ya/comp_bike",
    steps: ["Composants", "Compatibilité", "Comparaison des prix"],
  },
  {
    name: "Hackathon Michelin",
    type: "Hackathon Michelin · En équipe",
    role: "Développeur full-stack",
    stack: "React Native · Expo · Express · Supabase",
    copy: "Application mobile autour du Guide Michelin : création de parcours gastronomiques personnalisés (distinctions, cuisine, budget, distance), restaurants et hôtels, badges et niveaux. Authentification JWT, réinitialisation du mot de passe par email et version web.",
    color: "#dfa49b",
    label: "PARCOURS GASTRONOMIQUES",
    url: "https://github.com/adlanehzx/Hackathon-michelin",
    steps: [
      "Parcours personnalisés",
      "Restaurants & hôtels",
      "Badges & niveaux",
    ],
  },
];

function App() {
  const works = projects;
  const count = works.length;
  const pad = (n: number) => n.toString().padStart(2, "0");
  const [step, setStep] = useState(0);
  const [active, setActive] = useState<number | null>(null);
  const [visited, setVisited] = useState<number[]>([]);
  const [detail, setDetail] = useState(false);
  const stage = useRef<HTMLDivElement>(null);
  const start = useRef<number | null>(null);
  const swiped = useRef(false);
  const work = active === null ? null : works[active];
  function select(index: number) {
    setActive(index);
    setStep(0);
    setDetail(false);
    setVisited((v) => (v.includes(index) ? v : [...v, index]));
  }
  return (
    <>
      <a className="skip" href="#projets">
        Aller aux projets
      </a>
      <header>
        <a className="signature" href="#">
          adlane<span>hamzaoui</span>
        </a>
        <nav aria-label="Navigation principale">
          <a href="#projets">
            Travaux <sup>{pad(projects.length)}</sup>
          </a>
          <a href="#parcours">À propos</a>
          <a href="mailto:contact.adlanehz@gmail.com">
            Parlons-en{" "}
            <span>
              <ArrowUpRight aria-hidden="true" />
            </span>
          </a>
        </nav>
      </header>
      <main>
        <section className="atelier" aria-labelledby="title">
          <div className="edition">
            <span>Ingénieur logiciel & projets IT</span>
            <span>Paris, FR — Portfolio / 2026</span>
          </div>
          <h1 id="title">
            Des idées aux
            <br />
            <em>produits.</em>
          </h1>
          <div
            className={`stage ${work ? "unfolded" : ""}`}
            ref={stage}
            style={
              { "--accent": work?.color ?? "#c3c0b8" } as React.CSSProperties
            }
            onPointerMove={(e) => {
              if (e.pointerType === "touch") return;
              const r = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty(
                "--rx",
                `${(e.clientY - r.top - r.height / 2) / 35}deg`,
              );
              e.currentTarget.style.setProperty(
                "--ry",
                `${(e.clientX - r.left - r.width / 2) / 35}deg`,
              );
            }}
            onPointerLeave={() => {
              stage.current?.style.setProperty("--rx", "0deg");
              stage.current?.style.setProperty("--ry", "0deg");
            }}
          >
            <div className="coordinates" aria-hidden="true">
              AH—001
              <br />
              ADLANE HAMZAOUI
              <br />
              {visited.length.toString().padStart(2, "0")} EMPREINTE
              {visited.length > 1 ? "S" : ""}
            </div>
            <div className="object-wrap">
              <button
                className="metal"
                aria-label={
                  work ? "Replier le projet" : "Découvrir le premier projet"
                }
                onClick={() => {
                  if (swiped.current) {
                    swiped.current = false;
                    return;
                  }
                  if (work) setActive(null);
                  else select(0);
                }}
                onPointerDown={(e) => {
                  start.current = e.clientX;
                  swiped.current = false;
                  e.currentTarget.setPointerCapture(e.pointerId);
                }}
                onPointerUp={(e) => {
                  if (
                    start.current !== null &&
                    Math.abs(e.clientX - start.current) > 45
                  ) {
                    swiped.current = true;
                    select(((active ?? -1) + 1) % count);
                    start.current = null;
                    e.preventDefault();
                  }
                }}
              >
                {Array.from({ length: 9 }, (_, i) => (
                  <span key={i} style={{ "--i": i } as React.CSSProperties} />
                ))}
                <span className="object-stamp">
                  AH / {visited.length.toString().padStart(2, "0")}
                </span>
              </button>
            </div>
            {work && (
              <div className="project-surface" key={active}>
                <div className="surface-top">
                  <span>
                    {pad((active ?? 0) + 1)} / {work.label}
                  </span>
                  <button
                    onClick={() => setActive(null)}
                    aria-label="Replier le projet"
                  >
                    <X aria-hidden="true" />
                  </button>
                </div>
                <div
                  className="project-brief"
                  style={{ background: work.color }}
                >
                  <span>{work.type}</span>
                  <h2>{work.name}</h2>
                  <div
                    className="project-steps"
                    aria-label="Parcours du projet"
                  >
                    {work.steps.map((label, index) => (
                      <button
                        key={label}
                        aria-pressed={step === index}
                        onClick={() => setStep(index)}
                      >
                        <small>0{index + 1}</small>
                        {label}
                      </button>
                    ))}
                  </div>
                  <p aria-live="polite">{work.steps[step]}</p>
                  <a href={work.url} target="_blank" rel="noreferrer">
                    {work.name === "Corso Motors"
                      ? "Visiter le site"
                      : "Explorer le dépôt"}{" "}
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                </div>
                <div className="surface-paging">
                  <button
                    aria-label="Projet précédent"
                    onClick={() => select(((active ?? 0) + count - 1) % count)}
                  >
                    <ArrowLeft aria-hidden="true" />
                  </button>
                  <span>
                    {work.name}{" "}
                    <small>
                      {pad((active ?? 0) + 1)} / {pad(count)}
                    </small>
                  </span>
                  <button
                    aria-label="Projet suivant"
                    onClick={() => select(((active ?? 0) + 1) % count)}
                  >
                    <ArrowRight aria-hidden="true" />
                  </button>
                </div>
                <div className="surface-caption">
                  <span>{work.stack}</span>
                  <span>{work.role}</span>
                </div>
              </div>
            )}
            <div className="project-navigation" aria-label="Choisir un projet">
              {works.map((project, index) => (
                <button
                  key={project.name}
                  aria-pressed={active === index}
                  onClick={() => select(index)}
                >
                  <span>{pad(index + 1)}</span>
                  {project.name}
                </button>
              ))}
            </div>
            <span className="stage-note">
              {work
                ? "Architecture, outils, réalisation."
                : "Choisissez un projet pour l’explorer."}
            </span>
          </div>
          <div className="intro-bottom">
            <p>
              Adlane Hamzaoui · Paris <br />
              Dernière année de Mastère à l’ESGI.
            </p>
            <a href="#projets">
              Explorer les travaux{" "}
              <span>
                <ArrowDown aria-hidden="true" />
              </span>
            </a>
          </div>
        </section>
        <section className="works" id="projets" aria-labelledby="works-title">
          <div className="section-label">
            <h2 id="works-title">Projets sélectionnés</h2>
            <span>01 — {pad(count)}</span>
          </div>
          {works.map((p, i) => (
            <div
              className={`work-row ${active === i ? "selected" : ""}`}
              key={p.name}
            >
              <button
                className="work-select"
                aria-expanded={active === i}
                onClick={() => {
                  select(i);
                  document.querySelector(".stage")?.scrollIntoView({
                    behavior: matchMedia("(prefers-reduced-motion: reduce)")
                      .matches
                      ? "instant"
                      : "smooth",
                    block: "center",
                  });
                }}
              >
                <span className="work-number">
                  {pad(i + 1)}
                  <i className={visited.includes(i) ? "seen" : ""} />
                </span>
                <span className="work-name">
                  {p.name}
                  <small>
                    {p.type} · {p.role}
                  </small>
                </span>
                <span className="work-stack">{p.stack}</span>
                <ArrowUpRight className="work-arrow" aria-hidden="true" />
              </button>
              <ProjectGallery name={p.name} />
              {active === i && (
                <div className="work-details">
                  <p>{p.copy}</p>
                  <button
                    onClick={() => setDetail(!detail)}
                    aria-expanded={detail}
                  >
                    {detail ? "Fermer" : "Détails du projet"}{" "}
                    {detail ? (
                      <Minus aria-hidden="true" />
                    ) : (
                      <Plus aria-hidden="true" />
                    )}
                  </button>
                  {detail && (
                    <div className="case-study">
                      <p>{p.stack}</p>
                      <p>{p.copy}</p>
                      <a href={p.url} target="_blank" rel="noreferrer">
                        {p.name === "Corso Motors"
                          ? "Visiter le site"
                          : "Explorer le dépôt"}{" "}
                        <ArrowUpRight aria-hidden="true" />
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </section>
        <section className="about" id="parcours">
          <div className="section-label">
            <h2>Parcours & compétences</h2>
            <span>ADLANE HAMZAOUI</span>
          </div>
          <div className="about-grid">
            <p className="statement">
              Du besoin
              <br />
              <em>à la production.</em>
            </p>
            <div>
              <p>
                Actuellement en dernière année de Mastère Ingénierie de la
                Blockchain à l’ESGI, à la recherche de nouvelles opportunités.
              </p>
              <p>
                Je conçois et livre des produits numériques de bout en bout :
                cadrage du besoin, développement, déploiement et coordination
                des équipes.
              </p>
            </div>
          </div>
          <div className="skills-grid">
            {skills.map(([name, value]) => (
              <div key={name}>
                <h3>{name}</h3>
                <p>{value}</p>
              </div>
            ))}
          </div>
          <div className="timeline">
            {experiences.map((e) => (
              <article key={e.id}>
                <span>{e.period}</span>
                <h3>{e.company}</h3>
                <p>
                  {e.role}
                  <small>{e.description.join(" · ")}</small>
                </p>
              </article>
            ))}
          </div>
          <div className="education">
            <h3>Formation</h3>
            <p>
              Mastère en Ingénierie de la Blockchain{" "}
              <span>ESGI Paris · Septembre 2025 — Août 2027</span>
            </p>
            <p>
              Bachelor en Ingénierie du Web{" "}
              <span>ESGI Paris · Septembre 2024 — Août 2025</span>
            </p>
            <p>
              Français : langue maternelle · Anglais : professionnel technique
            </p>
            <p>
              Travail en équipe agile (Scrum), code review, documentation
              technique, résolution de problèmes et développement orienté
              produit.
            </p>
          </div>
        </section>
        <footer id="contact">
          <span className="footer-label">
            OUVERT AUX NOUVELLES OPPORTUNITÉS.
          </span>
          <a className="contact" href={`mailto:${personalInfo.email}`}>
            Échangeons
            <span>
              <ArrowUpRight aria-hidden="true" />
            </span>
          </a>
          <p className="contact-info">
            Paris, France · <a href="tel:+33667748988">+33 6 67 74 89 88</a>
          </p>
          <div className="footer-bottom">
            <span>Adlane Hamzaoui © {new Date().getFullYear()}</span>
            <a
              href="https://github.com/adlanehzx"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <ArrowUpRight aria-hidden="true" />
            </a>
            <a
              href="https://linkedin.com/in/adlane-hamzaoui"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <ArrowUpRight aria-hidden="true" />
            </a>
            <a href={`mailto:${personalInfo.email}`}>
              Email <ArrowUpRight aria-hidden="true" />
            </a>
            <a href="#">
              Retour en haut <ArrowUp aria-hidden="true" />
            </a>
          </div>
        </footer>
      </main>
    </>
  );
}
export default App;
