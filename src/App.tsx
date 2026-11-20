import { useRef, useState } from "react";
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
import { experiences, personalInfo } from "./data/portfolioData";

const works = [
  {
    name: "Leynai",
    type: "Événementiel",
    stack: "React · Node.js · TypeScript",
    copy: "De la découverte d’un événement à son billet. Une application complète, construite avec la stack MERN.",
    color: "#e6aa72",
    label: "01 / LE RENDEZ-VOUS",
  },
  {
    name: "Bike.comp",
    type: "Comparaison",
    stack: "Next.js · Django · PostgreSQL",
    copy: "Comparer des composants de vélo et vérifier leur compatibilité. Un même produit, du modèle de données à l’interface.",
    color: "#b8c7a5",
    label: "02 / LE BON ASSEMBLAGE",
  },
  {
    name: "Kanboard",
    type: "Organisation",
    stack: "Laravel · MySQL · Blade",
    copy: "Organiser les projets et les tâches en équipe. Un projet académique réalisé en duo, autour d’un tableau Kanban.",
    color: "#aebbd0",
    label: "03 / LE MOUVEMENT",
  },
];

function App() {
  const [active, setActive] = useState<number | null>(null);
  const [visited, setVisited] = useState<number[]>([]);
  const [task, setTask] = useState(0);
  const [compare, setCompare] = useState(50);
  const [ticket, setTicket] = useState(false);
  const [detail, setDetail] = useState(false);
  const stage = useRef<HTMLDivElement>(null);
  const start = useRef<number | null>(null);
  const swiped = useRef(false);
  const work = active === null ? null : works[active];
  function select(index: number) {
    setActive(index);
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
            <span>Développement web & mobile</span>
            <span>Paris, FR — Portfolio / 2026</span>
          </div>
          <h1 id="title">
            Tout commence
            <br />
            par une <em>forme.</em>
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
              MATIÈRE NUMÉRIQUE
              <br />
              {visited.length.toString().padStart(2, "0")} EMPREINTE
              {visited.length > 1 ? "S" : ""}
            </div>
            <div className="object-wrap">
              <button
                className="metal"
                aria-label={
                  work
                    ? "Replier le projet"
                    : "Déplier la matière et découvrir Leynai"
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
                {active === 0 && (
                  <button
                    className={`ticket ${ticket ? "turned" : ""}`}
                    onClick={() => setTicket(!ticket)}
                    aria-label="Retourner le billet de démonstration"
                  >
                    <span>leynai</span>
                    <strong>
                      {ticket ? "Vous y êtes." : "On se retrouve\nce soir."}
                    </strong>
                    <span className="ticket-bottom">
                      {ticket
                        ? "ENTRÉE / 001 — DÉMONSTRATION"
                        : "PARIS · 21:00 · ADMET UNE PERSONNE"}
                      <ArrowUpRight aria-hidden="true" />
                    </span>
                    <span className="barcode" aria-hidden="true" />
                  </button>
                )}
                {active === 1 && (
                  <div className="bike-demo">
                    <div
                      className="bike-image"
                      style={{ clipPath: `inset(0 ${100 - compare}% 0 0)` }}
                    />
                    <div
                      className="bike-line"
                      style={{ left: `${compare}%` }}
                    />
                    <div className="bike-captions">
                      <span>LE PROJET</span>
                      <span>LE DÉTAIL</span>
                    </div>
                    <input
                      aria-label="Explorer la capture Bike.comp"
                      type="range"
                      min="0"
                      max="100"
                      value={compare}
                      onChange={(e) => setCompare(Number(e.target.value))}
                    />
                  </div>
                )}
                {active === 2 && (
                  <div className="kanban">
                    {["À faire", "En cours", "Terminé"].map((label, i) => (
                      <div
                        key={label}
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={() => setTask(i)}
                      >
                        <span>
                          {label} <small>{task === i ? "01" : "00"}</small>
                        </span>
                        {task === i && (
                          <button
                            draggable
                            onDragStart={(e) =>
                              e.dataTransfer.setData("text/plain", "task")
                            }
                            onClick={() => setTask((task + 1) % 3)}
                          >
                            <i />
                            Dessiner la suite
                            <small>Interface · cliquer ou déplacer</small>
                            <span>
                              AH <ArrowRight aria-hidden="true" />
                            </span>
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                )}
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
                  <span>
                    {active === 0
                      ? "Touchez le billet pour le retourner"
                      : active === 1
                        ? "Faites glisser pour explorer"
                        : "Déplacez la tâche ou touchez-la"}
                  </span>
                  <span>Démo d’interaction</span>
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
                ? "Une idée. Puis une interface."
                : "Approchez. Touchez. Dépliez."}
            </span>
          </div>
          <div className="intro-bottom">
            <p>
              Je suis Adlane. Je donne forme à des applications,
              <br />
              de l’interface à ce qui la fait fonctionner.
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
            <h2 id="works-title">Pièces choisies</h2>
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
              {active === i && (
                <div className="work-details">
                  <p>{p.copy}</p>
                  <button
                    onClick={() => setDetail(!detail)}
                    aria-expanded={detail}
                  >
                    {detail ? "Fermer" : "Notes & aperçu"}{" "}
                    {detail ? (
                      <Minus aria-hidden="true" />
                    ) : (
                      <Plus aria-hidden="true" />
                    )}
                  </button>
                  {detail && (
                    <div className="case-study">
                      <p>
                        {p.stack}
                        <br />
                        Projet personnel / académique. Les interactions
                        ci-dessus sont des démonstrations conçues pour ce
                        portfolio.
                      </p>
                      {i > 0 ? (
                        <img
                          src={
                            i === 1
                              ? "/pics/CompBike.png"
                              : "/pics/Kanboard.png"
                          }
                          alt={`Capture de l’interface ${p.name}`}
                          loading="lazy"
                        />
                      ) : (
                        <a
                          href="https://github.com/adlanehzx/Leyani-event"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Explorer le code de Leynai{" "}
                          <ArrowUpRight aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </section>
        <section className="about" id="parcours">
          <div className="section-label">
            <h2>Derrière la matière</h2>
            <span>ADLANE HAMZAOUI</span>
          </div>
          <div className="about-grid">
            <p className="statement">
              Le détail à l’écran.
              <br />
              <em>La logique derrière.</em>
            </p>
            <div>
              <p>
                Développeur full stack à Paris, en Master Ingénierie du Web à
                l’ESGI. Je travaille avec React, React Native et Node.js, et
                j’explore aussi Laravel et Django selon les projets.
              </p>
              <p>
                J’aime construire une application dans son ensemble : ses
                gestes, ses données et les outils qui permettent de la livrer.
              </p>
              <a
                className="text-link"
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noreferrer"
              >
                Ouvrir mon CV <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="timeline">
            {experiences.map((e) => (
              <article key={e.id}>
                <span>{e.period}</span>
                <h3>{e.company}</h3>
                <p>
                  {e.role}
                  <small>{e.description[0]}</small>
                </p>
              </article>
            ))}
          </div>
        </section>
        <footer id="contact">
          <span className="footer-label">LA SUITE SE CONSTRUIT À DEUX.</span>
          <a className="contact" href={`mailto:${personalInfo.email}`}>
            On en parle
            <span>
              <ArrowUpRight aria-hidden="true" />
            </span>
          </a>
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
