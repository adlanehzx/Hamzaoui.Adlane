import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import ProjectGallery from "./components/ProjectGallery";
import { experiences, personalInfo, skills } from "./data/portfolioData";
import { projectCaptures } from "./data/projectCaptures";
import { categories, categoryOrder, projects } from "./data/projects";
import { lang, ui } from "./i18n";

document.documentElement.lang = lang;
document.title = ui.meta.title;
document
  .querySelector('meta[name="description"]')
  ?.setAttribute("content", ui.meta.description);

type Project = (typeof projects)[number];
type Size = "wide" | "half" | "third";

/** Layout rhythm: one wide client case, pairs, then a row of three. */
const sizes: Record<string, Size> = {
  "Corso Motors": "wide",
  "Comp Bike": "half",
  "Hackathon Michelin": "half",
  HankoTrack: "half",
  Kanboard: "half",
  Bastion: "half",
  RugRadar: "half",
  Nexus: "third",
  SORAVYN: "third",
  Specto: "third",
};

const slug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
const firstSentence = (text: string) => text.split(/(?<=\.)\s/)[0] ?? text;
const thumbnail = (name: string) => projectCaptures[name]?.[0]?.src;

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  const size = sizes[project.name] ?? "third";
  const image = thumbnail(project.name);
  return (
    <li className={`card card-${size}`}>
      <button
        className="card-button"
        onClick={onOpen}
        aria-label={ui.open(project.name)}
      >
        {image && (
          <img
            className="card-image"
            src={image}
            alt=""
            width={1440}
            height={960}
            loading="lazy"
            decoding="async"
          />
        )}
        <span className="card-text">
          <span className="card-name">{project.name}</span>
          <span className="card-type">{project.type}</span>
          {size === "wide" && (
            <span className="card-summary">{firstSentence(project.copy)}</span>
          )}
          <span className="card-role">{project.role}</span>
        </span>
      </button>
    </li>
  );
}

function ProjectSheet({
  project,
  onClose,
  onMove,
}: {
  project: Project | null;
  onClose: () => void;
  onMove: (delta: number) => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const index = project ? projects.indexOf(project) : -1;
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  useEffect(() => {
    const node = dialog.current;
    if (!node) return;
    if (project && !node.open) node.showModal();
    if (!project && node.open) node.close();
  }, [project]);

  return (
    <dialog
      ref={dialog}
      className="sheet"
      aria-labelledby="sheet-title"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      {project && (
        <article className="sheet-body" key={project.name}>
          <header className="sheet-head">
            <div>
              <p className="sheet-type">{project.type}</p>
              <h2 id="sheet-title">{project.name}</h2>
            </div>
            <button
              className="icon-button"
              onClick={onClose}
              aria-label={ui.dialog.close}
            >
              <X aria-hidden="true" />
            </button>
          </header>
          <div className="sheet-columns">
            <div className="sheet-text">
              <p className="sheet-copy">{project.copy}</p>
              <dl className="sheet-facts">
                <div>
                  <dt>{ui.dialog.role}</dt>
                  <dd>{project.role}</dd>
                </div>
                <div>
                  <dt>{ui.dialog.stack}</dt>
                  <dd>{project.stack}</dd>
                </div>
                <div>
                  <dt>{ui.dialog.highlights}</dt>
                  <dd>
                    <ul>
                      {project.steps.map((step) => (
                        <li key={step}>{step}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>
              <a
                className="button"
                href={project.url}
                target="_blank"
                rel="noreferrer"
              >
                {project.url.includes("github.com")
                  ? ui.dialog.repo
                  : ui.dialog.site}
              </a>
            </div>
            <ProjectGallery name={project.name} />
          </div>
          <footer className="sheet-foot">
            <button onClick={() => onMove(-1)}>
              <ArrowLeft aria-hidden="true" />
              <span>
                <small>{ui.dialog.previous}</small>
                {previous?.name}
              </span>
            </button>
            <button onClick={() => onMove(1)}>
              <span>
                <small>{ui.dialog.next}</small>
                {next?.name}
              </span>
              <ArrowRight aria-hidden="true" />
            </button>
          </footer>
        </article>
      )}
    </dialog>
  );
}

function App() {
  const [open, setOpen] = useState<number | null>(() => {
    const found = projects.findIndex(
      (p) => `#${slug(p.name)}` === window.location.hash,
    );
    return found >= 0 ? found : null;
  });
  const object = useRef<HTMLButtonElement>(null);
  const current = open === null ? null : (projects[open] ?? null);

  useEffect(() => {
    const url = window.location.pathname;
    if (current)
      window.history.replaceState(null, "", `${url}#${slug(current.name)}`);
    else if (projects.some((p) => `#${slug(p.name)}` === window.location.hash))
      window.history.replaceState(null, "", url);
  }, [current]);

  const move = (delta: number) =>
    setOpen((i) =>
      i === null ? 0 : (i + delta + projects.length) % projects.length,
    );

  return (
    <>
      <a className="skip" href="#projets">
        {ui.skip}
      </a>
      <header className="top">
        <a className="signature" href={lang === "en" ? "/en" : "/"}>
          Adlane Hamzaoui
        </a>
        <nav aria-label={ui.nav.label}>
          <a href="#projets">{ui.nav.work}</a>
          <a href="#parcours">{ui.nav.about}</a>
          <a href="#contact">{ui.nav.contact}</a>
          <a
            className="lang-switch"
            href={lang === "en" ? "/" : "/en"}
            hrefLang={lang === "en" ? "fr" : "en"}
            aria-label={ui.switchLabel}
          >
            <span aria-current={lang === "fr" ? "true" : undefined}>FR</span>
            <span aria-current={lang === "en" ? "true" : undefined}>EN</span>
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" aria-labelledby="title">
          <div className="hero-text">
            <h1 id="title">{ui.hero}</h1>
            <p>{ui.intro}</p>
            <div className="actions">
              <a className="button" href="#projets">
                {ui.seeProjects}
              </a>
              <a
                className="button button-quiet"
                href={`mailto:${personalInfo.email}`}
              >
                {ui.writeMe}
              </a>
            </div>
          </div>
          <div className="object-wrap">
            <button
              ref={object}
              className="metal"
              aria-label={ui.objectLabel}
              onClick={() =>
                document.getElementById("projets")?.scrollIntoView()
              }
              onPointerMove={(e) => {
                if (e.pointerType === "touch") return;
                const r = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty(
                  "--rx",
                  `${(e.clientY - r.top - r.height / 2) / -14}deg`,
                );
                e.currentTarget.style.setProperty(
                  "--ry",
                  `${(e.clientX - r.left - r.width / 2) / 14}deg`,
                );
              }}
              onPointerLeave={() => {
                object.current?.style.setProperty("--rx", "0deg");
                object.current?.style.setProperty("--ry", "0deg");
              }}
            >
              {Array.from({ length: 9 }, (_, i) => (
                <span key={i} style={{ "--i": i } as React.CSSProperties} />
              ))}
            </button>
          </div>
        </section>

        <section className="work" id="projets" aria-labelledby="work-title">
          <div className="work-head">
            <h2 id="work-title">{ui.workTitle}</h2>
            <p>{ui.workIntro}</p>
          </div>
          {categoryOrder.map((category) => {
            const items = projects.filter((p) => p.category === category);
            return (
              <section
                className="group"
                key={category}
                aria-labelledby={`group-${category}`}
              >
                <header className="group-head">
                  <h3 id={`group-${category}`}>{categories[category].title}</h3>
                  <p>{categories[category].intro}</p>
                  <span>
                    {items.length} {ui.project(items.length)}
                  </span>
                </header>
                <ul className="cards">
                  {items.map((project) => (
                    <ProjectCard
                      key={project.name}
                      project={project}
                      onOpen={() => setOpen(projects.indexOf(project))}
                    />
                  ))}
                </ul>
              </section>
            );
          })}
        </section>

        <section className="about" id="parcours" aria-labelledby="about-title">
          <div className="about-intro">
            <h2 id="about-title">{ui.aboutTitle}</h2>
            {ui.about.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
          <div className="about-details">
            <h3>{ui.experience}</h3>
            <ol className="jobs">
              {experiences.map((e) => (
                <li key={e.id}>
                  <p className="job-period">{e.period}</p>
                  <p className="job-title">
                    {e.role}
                    <span>{e.company}</span>
                  </p>
                  <ul>
                    {e.description.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
            <h3>{ui.skillsTitle}</h3>
            <dl className="skills">
              {skills.map(([name, value]) => (
                <div key={name}>
                  <dt>{name}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
            <h3>{ui.education}</h3>
            <p>
              {ui.degree}
              <br />
              <span className="muted">{ui.degreeWhere}</span>
            </p>
            <h3>{ui.languagesTitle}</h3>
            <p>{ui.languages}</p>
          </div>
        </section>
      </main>

      <footer className="contact" id="contact">
        <h2>{ui.contactTitle}</h2>
        <p>{ui.contactText}</p>
        <a className="mail" href={`mailto:${personalInfo.email}`}>
          {personalInfo.email}
        </a>
        <div className="contact-links">
          <span>{ui.location}</span>
          <a
            href="https://www.linkedin.com/in/adlane-hamzaoui/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/adlanehzx"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a href="#title">{ui.backToTop}</a>
        </div>
      </footer>

      <ProjectSheet
        project={current}
        onClose={() => setOpen(null)}
        onMove={move}
      />
    </>
  );
}
export default App;
