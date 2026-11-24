import { Fragment, useRef, useState } from "react";
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
import { categories, categoryOrder as order, projects } from "./data/projects";
import { lang, ui } from "./i18n";

document.documentElement.lang = lang;
document.title = ui.meta.title;
document
  .querySelector('meta[name="description"]')
  ?.setAttribute("content", ui.meta.description);

function App() {
  const works = projects;
  const count = works.length;
  const pad = (n: number) => n.toString().padStart(2, "0");
  const groupSize = (c: (typeof works)[number]["category"]) =>
    works.filter((w) => w.category === c).length;
  const startsGroup = (i: number) =>
    i === 0 || works[i - 1].category !== works[i].category;
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
        {ui.skip}
      </a>
      <header>
        <a className="signature" href="#">
          adlane<span>hamzaoui</span>
        </a>
        <nav aria-label={ui.nav.label}>
          <a href="#projets">
            {ui.nav.work} <sup>{pad(projects.length)}</sup>
          </a>
          <a className="nav-about" href="#parcours">
            {ui.nav.about}
          </a>
          <a
            className="lang-switch"
            href={lang === "en" ? "/" : "/en"}
            hrefLang={lang === "en" ? "fr" : "en"}
            aria-label={ui.switchLabel}
          >
            <span aria-current={lang === "fr" ? "true" : undefined}>FR</span>
            <span aria-current={lang === "en" ? "true" : undefined}>EN</span>
          </a>
          <a href={`mailto:${personalInfo.email}`}>
            {ui.nav.talk}{" "}
            <span>
              <ArrowUpRight aria-hidden="true" />
            </span>
          </a>
        </nav>
      </header>
      <main>
        <section className="atelier" aria-labelledby="title">
          <div className="edition">
            <span>{ui.edition}</span>
            <span>Paris, FR — Portfolio / 2026</span>
          </div>
          <h1 id="title">
            {ui.hero[0]}
            <br />
            <em>{ui.hero[1]}</em>
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
              {pad(count)} {ui.projectsCount}
              <br />
              <span className="coordinates-groups">{ui.groupsLine}</span>
            </div>
            <div className="object-wrap">
              <button
                className="metal"
                aria-label={work ? ui.closeProject : ui.openFirst}
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
                    aria-label={ui.closeProject}
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
                  <div className="project-steps" aria-label={ui.projectSteps}>
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
                    {work.name === "Corso Motors" ? ui.visitSite : ui.viewRepo}{" "}
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                </div>
                <div className="surface-paging">
                  <button
                    aria-label={ui.previous}
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
                    aria-label={ui.next}
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
            <div className="project-navigation" aria-label={ui.chooseProject}>
              {works.map((project, index) => (
                <Fragment key={project.name}>
                  {startsGroup(index) && (
                    <small className="nav-group">
                      {categories[project.category].short}
                    </small>
                  )}
                  <button
                    aria-pressed={active === index}
                    onClick={() => select(index)}
                  >
                    <span>{pad(index + 1)}</span>
                    {project.name}
                  </button>
                </Fragment>
              ))}
            </div>
            <span className="stage-note">
              {work ? ui.noteOpen : ui.noteIdle}
            </span>
          </div>
          <div className="intro-bottom">
            <p>
              Adlane Hamzaoui · Paris <br />
              {ui.introLine}
            </p>
            <a href="#projets">
              {ui.explore}{" "}
              <span>
                <ArrowDown aria-hidden="true" />
              </span>
            </a>
          </div>
        </section>
        <section className="works" id="projets" aria-labelledby="works-title">
          <div className="section-label">
            <h2 id="works-title">{ui.workTitle}</h2>
            <span>
              {pad(count)} {ui.project(count)}
            </span>
          </div>
          {works.map((p, i) => (
            <Fragment key={p.name}>
              {startsGroup(i) && (
                <div className="group-head">
                  <span className="group-index">
                    {pad(order.indexOf(p.category) + 1)}
                  </span>
                  <h3>{categories[p.category].title}</h3>
                  <p>{categories[p.category].intro}</p>
                  <span className="group-count">
                    {pad(groupSize(p.category))}{" "}
                    {ui.project(groupSize(p.category))}
                  </span>
                </div>
              )}
              <div className={`work-row ${active === i ? "selected" : ""}`}>
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
                      {detail ? ui.close : ui.details}{" "}
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
                            ? ui.visitSite
                            : ui.viewRepo}{" "}
                          <ArrowUpRight aria-hidden="true" />
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </Fragment>
          ))}
        </section>
        <section className="about" id="parcours">
          <div className="section-label">
            <h2>{ui.aboutTitle}</h2>
            <span>ADLANE HAMZAOUI</span>
          </div>
          <div className="about-grid">
            <p className="statement">
              {ui.statement[0]}
              <br />
              <em>{ui.statement[1]}</em>
            </p>
            <div>
              {ui.about.map((text) => (
                <p key={text}>{text}</p>
              ))}
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
            <h3>{ui.education}</h3>
            <p>
              {ui.degree} <span>{ui.degreeWhere}</span>
            </p>
            <p>{ui.languages}</p>
            <p>{ui.softSkills}</p>
          </div>
        </section>
        <footer id="contact">
          <span className="footer-label">{ui.footerLabel}</span>
          <a className="contact" href={`mailto:${personalInfo.email}`}>
            {ui.contact}
            <span>
              <ArrowUpRight aria-hidden="true" />
            </span>
          </a>
          <p className="contact-info">{ui.location}</p>
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
              {ui.backToTop} <ArrowUp aria-hidden="true" />
            </a>
          </div>
        </footer>
      </main>
    </>
  );
}
export default App;
