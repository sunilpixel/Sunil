import Image from "next/image";
import Link from "next/link";
import { PROJECTS, getShot } from "@/lib/data";

const ArrowIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M3 11L11 3M11 3H5M11 3V9"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Work() {
  return (
    <section className="work" id="work">
      <div className="work-head">
        <div>
          <span className="eyebrow reveal">Selected Work</span>
          <h2 className="reveal">Recent projects</h2>
        </div>
        <span className="count reveal">[ 09 — Case studies ]</span>
      </div>

      <div className="projects">
        {PROJECTS.map((p) => {
          const cleanUrl = p.url.replace(/^https?:\/\//, "").replace(/\/$/, "");
          return (
            <article className="project" key={p.title}>
              <Link
                className="project-media"
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                data-view
                style={{ "--proj": p.theme }}
              >
                <div className="browserbar">
                  <i />
                  <i />
                  <i />
                  <span className="url">{cleanUrl}</span>
                </div>

                <div className="shot-wrap">
                  <Image
                    className="project-shot"
                    src={getShot(p)}
                    alt={`${p.title} website preview`}
                    fill
                    sizes="(max-width: 820px) 100vw, 50vw"
                    /* remote live screenshots aren't optimised; local ones are */
                    unoptimized={!p.shot}
                  />
                </div>

                <div className="glow" />
              </Link>

              <div className="project-info">
                <div className="row">
                  <span className="cat">{p.cat}</span>
                  <span>/</span>
                  <span>{p.year}</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                {/* container styled inline with Tailwind utilities; the
                    repeated chip uses the @apply-based .tag class */}
                <div className="flex flex-wrap gap-2 mb-7">
                  {p.tags.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                <Link
                  className="visit magnetic"
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor
                >
                  View live site
                  <ArrowIcon />
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
