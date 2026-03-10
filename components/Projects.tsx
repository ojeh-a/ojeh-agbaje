import ScrollReveal from "./ScrollReveal";
import { PROJECTS } from "@/lib/constants";

export default function Projects() {
  return (
    <section id="projects" className="section-light2">
      <div className="section-wrap">
        <ScrollReveal>
          <div className="sh sh-light">
            <span className="sh-num">02</span>
            <h2 className="sh-title">
              Selected <em>work</em>
            </h2>
            <span className="sh-aside">↻ synced from GitHub</span>
          </div>
          <div>
            {PROJECTS.map((p) => (
              <a key={p.num} href={p.url} className="project">
                <span className="project-num">{p.num}</span>
                <div>
                  <div className="project-title">
                    {p.name}
                    <span className="project-type">{p.type}</span>
                    {p.wip && <span className="project-wip">In progress</span>}
                  </div>
                  <p className="project-desc">{p.description}</p>
                  <div className="project-tags">
                    {p.tags.map((t) => (
                      <span key={t} className="project-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="project-arrow">↗</span>
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
