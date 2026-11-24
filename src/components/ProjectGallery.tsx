import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Maximize2, X } from "lucide-react";
import { projectCaptures } from "../data/projectCaptures";
import { ui } from "../i18n";

const g = ui.gallery;

export default function ProjectGallery({ name }: { name: string }) {
  const captures = projectCaptures[name];
  const [index, setIndex] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  if (!captures?.length) return null;
  const capture = captures[index];
  const move = (delta: number) =>
    setIndex(
      (current) => (current + delta + captures.length) % captures.length,
    );
  return (
    <section className="project-gallery" aria-label={`${g.section} ${name}`}>
      <div className="gallery-image-wrap">
        <button
          className="gallery-image"
          aria-label={`${g.enlargeOf} ${name} : ${capture.label}`}
          onClick={() => dialog.current?.showModal()}
        >
          <img
            src={capture.src}
            alt={capture.label}
            width={1440}
            height={960}
            loading="lazy"
            decoding="async"
          />
          <span className="gallery-zoom">
            <Maximize2 aria-hidden="true" /> {g.enlarge}
          </span>
        </button>
      </div>
      <div className="gallery-caption">
        <div>
          <span className="gallery-count">
            {index + 1}/{captures.length}
          </span>
          <p aria-live="polite">{capture.label}</p>
          <small>{capture.note}</small>
        </div>
        {captures.length > 1 && (
          <div className="gallery-controls">
            <button
              aria-label={`${g.previousOf} ${name}`}
              onClick={() => move(-1)}
            >
              <ArrowLeft aria-hidden="true" />
            </button>
            <button aria-label={`${g.nextOf} ${name}`} onClick={() => move(1)}>
              <ArrowRight aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
      {captures.length > 1 && (
        <div className="gallery-thumbs" aria-label={`${g.views} ${name}`}>
          {captures.map((item, i) => (
            <button
              key={item.src}
              aria-label={`${g.show} ${item.label}`}
              aria-pressed={index === i}
              onClick={() => setIndex(i)}
            >
              <img
                src={item.src}
                alt=""
                width={1440}
                height={960}
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}
      <dialog
        ref={dialog}
        className="gallery-dialog"
        aria-label={`${g.dialog} ${name}`}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            move(-1);
          }
          if (event.key === "ArrowRight") {
            event.preventDefault();
            move(1);
          }
        }}
      >
        <div className="gallery-dialog-bar">
          <span>
            <strong>{name}</strong> {capture.label}
          </span>
          <button
            autoFocus
            aria-label={g.closeShot}
            onClick={() => dialog.current?.close()}
          >
            <X aria-hidden="true" />
          </button>
        </div>
        <img src={capture.src} alt={capture.label} width={1440} height={960} />
        <div className="gallery-dialog-bottom">
          <small>{capture.note}</small>
          {captures.length > 1 && (
            <div className="gallery-controls">
              <button aria-label={g.previousBig} onClick={() => move(-1)}>
                <ArrowLeft aria-hidden="true" />
              </button>
              <span>
                {index + 1} / {captures.length}
              </span>
              <button aria-label={g.nextBig} onClick={() => move(1)}>
                <ArrowRight aria-hidden="true" />
              </button>
            </div>
          )}
        </div>
      </dialog>
    </section>
  );
}
