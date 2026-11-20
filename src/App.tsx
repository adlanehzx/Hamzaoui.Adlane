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
import {
  experiences,
  personalInfo,
  webSkills,
  iaSkills,
} from "./data/portfolioData";

const portfolios = {
  web: [
    {
      name: "Corso Motors",
      type: "Projet client · Infrastructure",
      stack: "Docker · Traefik · SSO · VPS",
      copy: "Écosystème numérique pour un constructeur automobile algérien : site vitrine avec CMS, analytique RGPD et supervision serveur. Infrastructure privée avec SSO HMAC-SHA256, PLM Cascadia, messagerie SPF / DKIM / DMARC, Nextcloud, Forgejo et BookStack. Durcissement avec Fail2ban et rate limiting.",
      color: "#e6aa72",
      label: "01 / ÉCOSYSTÈME SOUVERAIN",
      url: "https://corso-motors.com",
      steps: ["Site & CMS", "Identité & services", "Infrastructure privée"],
    },
    {
      name: "Comp Bike",
      type: "Hackathon Kiro · En équipe",
      stack: "Next.js · Django REST · PostgreSQL · Redis",
      copy: "Moteur de compatibilité cross-marques pour identifier les composants de vélo compatibles et comparer les prix du marché. Réalisé en équipe lors du hackathon Kiro, sur DevPost.",
      color: "#b8c7a5",
      label: "02 / COMPATIBILITÉ VÉLO",
      url: "https://github.com/ilyas-ya/comp_bike",
      steps: ["Composants", "Compatibilité", "Comparaison des prix"],
    },
    {
      name: "HankoTrack",
      type: "Projet annuel · En équipe",
      stack: "Nuxt · Express · Prisma · Socket.io",
      copy: "Plateforme communautaire de suivi d’anime : watchlist, listes et collections, critiques et recommandations personnalisées. Mises à jour en temps réel, tests E2E Playwright et déploiement continu.",
      color: "#aebbd0",
      label: "03 / COMMUNAUTÉ & TEMPS RÉEL",
      url: "https://github.com/adlanehzx/Projet-Annuel",
      steps: [
        "Watchlist & collections",
        "Critiques & recommandations",
        "Temps réel",
      ],
    },
  ],
  ia: [
    {
      name: "Nexus",
      type: "Assistant IA · Multi-appareils",
      stack: "TypeScript · Expo · Tool calling · pgvector",
      copy: "Assistant IA sur iPhone, PC et web capable d’exécuter des actions : envoyer un email, lancer les tests d’un projet, piloter un navigateur ou opérer des machines appairées. Registre d’outils, permissions et traçabilité, moteur de missions durable, mémoire vectorielle et voix en local.",
      color: "#b8c7a5",
      label: "01 / DE L’INTENTION À L’ACTION",
      url: "https://github.com/adlanehzx/Nexus",
      steps: ["Mission", "Outils & permissions", "Exécution & traçabilité"],
    },
    {
      name: "SORAVYN",
      type: "Marketing · Systèmes multi-agents",
      stack: "TypeScript · Multi-agents · Vidéo · Voix",
      copy: "Agence marketing IA pilotée par agents : workflow de campagnes avec validation humaine, production vidéo automatisée du scénario au rendu MP4, narration et studio de contenus.",
      color: "#e6aa72",
      label: "02 / CAMPAGNES PILOTÉES PAR AGENTS",
      url: "https://github.com/adlanehzx/soravyn",
      steps: ["Campagne", "Validation humaine", "Contenus & vidéo"],
    },
    {
      name: "Specto",
      type: "Qualité · Tests générés par IA",
      stack: "Playwright · BullMQ · CI/CD · IA générative",
      copy: "Génération et exécution de tests E2E Playwright et API REST à partir de descriptions en langage naturel. Exécution en file d’attente, CLI, auto-healing et intégration GitHub Actions, GitLab et Jenkins.",
      color: "#aebbd0",
      label: "03 / DU LANGAGE NATUREL AUX TESTS",
      url: "https://github.com/adlanehzx/specto",
      steps: ["Description", "Génération & file d’attente", "Tests E2E & API"],
    },
  ],
};

function App() {
  const [profile, setProfile] = useState<"web" | "ia">("web");
  const works = portfolios[profile];
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
            Travaux <sup>03</sup>
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
            <span>
              {profile === "web"
                ? "Développeur Full-Stack"
                : "Développeur IA & Full-Stack"}
            </span>
            <span>Paris, FR — Portfolio / 2026</span>
          </div>
          <h1 id="title">
            Des idées aux
            <br />
            <em>{profile === "web" ? "applications." : "agents IA."}</em>
          </h1>
          <div className="profile-switch" aria-label="Choisir un profil">
            <button
              aria-pressed={profile === "web"}
              onClick={() => {
                setProfile("web");
                setActive(null);
                setVisited([]);
                setDetail(false);
              }}
            >
              Développement web
            </button>
            <button
              aria-pressed={profile === "ia"}
              onClick={() => {
                setProfile("ia");
                setActive(null);
                setVisited([]);
                setDetail(false);
              }}
            >
              IA & agents
            </button>
          </div>
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
                    select(((active ?? -1) + 1) % 3);
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
                  <span>{work.label}</span>
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
                    onClick={() => select(((active ?? 0) + 2) % 3)}
                  >
                    <ArrowLeft aria-hidden="true" />
                  </button>
                  <span>
                    {work.name} <small>0{(active ?? 0) + 1} / 03</small>
                  </span>
                  <button
                    aria-label="Projet suivant"
                    onClick={() => select(((active ?? 0) + 1) % 3)}
                  >
                    <ArrowRight aria-hidden="true" />
                  </button>
                </div>
                <div className="surface-caption">
                  <span>{work.stack}</span>
                  <span>Projet du CV {profile === "web" ? "Web" : "IA"}</span>
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
                  <span>0{index + 1}</span>
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
              Adlane Hamzaoui · Paris · Alternance
              <br />1 semaine école / 3 semaines entreprise.
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
            <h2 id="works-title">
              Projets{" "}
              {profile === "web" ? "web & infrastructure" : "IA & agents"}
            </h2>
            <span>01 — 03</span>
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
                  0{i + 1}
                  <i className={visited.includes(i) ? "seen" : ""} />
                </span>
                <span className="work-name">
                  {p.name}
                  <small>{p.type}</small>
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
              Full-Stack.
              <br />
              <em>IA & automatisation.</em>
            </p>
            <div>
              <p>
                Développeur Full-Stack en dernière année de Mastère Ingénierie
                de la Blockchain à l’ESGI, en alternance.{" "}
                {profile === "web"
                  ? "Je conçois des applications web et mobiles de bout en bout : interfaces React / Next.js, APIs Node.js / TypeScript, PostgreSQL, Docker et CI/CD."
                  : "Je conçois des systèmes multi-agents, des outils d’automatisation et des APIs TypeScript / Node.js, de l’architecture jusqu’au déploiement."}
              </p>
              <p>
                {profile === "web"
                  ? "Architecture logicielle, qualité, tests E2E et automatisation."
                  : "Agents autonomes, architecture logicielle et blockchain. Expérience web et mobile avec React, Next.js et React Native."}
              </p>
              <div className="cv-links">
                <a className="text-link" href="/cv-web.pdf" download>
                  CV Développement web <ArrowDown aria-hidden="true" />
                </a>
                <a className="text-link" href="/cv-ia.pdf" download>
                  CV IA & Full-Stack <ArrowDown aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
          <div className="skills-grid">
            {(profile === "web" ? webSkills : iaSkills).map(([name, value]) => (
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
              Français & arabe : langues maternelles · Anglais : professionnel
              technique
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
            ALTERNANCE · 1 SEMAINE ÉCOLE / 3 SEMAINES ENTREPRISE.
          </span>
          <a className="contact" href={`mailto:${personalInfo.email}`}>
            Échangeons
            <span>
              <ArrowUpRight aria-hidden="true" />
            </span>
          </a>
          <p className="contact-info">
            Paris, France · <a href="tel:+33667748988">+33 6 67 74 89 88</a> ·
            Permis B
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
