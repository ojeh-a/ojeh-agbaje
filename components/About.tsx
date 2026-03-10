import ScrollReveal from "./ScrollReveal";
import { PERSON } from "@/lib/constants";

export default function About() {
  return (
    <section id="about" className="section-light">
      <div className="section-wrap">
        <ScrollReveal>
          <div className="sh sh-light">
            <span className="sh-num">01</span>
            <h2 className="sh-title">
              About <em>me</em>
            </h2>
          </div>
          <div className="about-grid">
            <div>
              {PERSON.bio.map((para, i) => (
                <p key={i} className="about-para">
                  {para}
                </p>
              ))}
              <div
                style={{
                  marginTop: "1.5rem",
                  paddingTop: "1.5rem",
                  borderTop: "1px solid var(--rulel)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-unbounded)",
                    fontSize: ".46rem",
                    fontWeight: 200,
                    letterSpacing: ".2em",
                    textTransform: "uppercase",
                    color: "#bbb",
                    display: "block",
                    marginBottom: ".75rem",
                  }}
                >
                  Outside the code
                </span>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: ".5rem",
                    marginBottom: "1rem",
                  }}
                >
                  {PERSON.hobbies.map((h) => (
                    <span key={h} className="hobby-tag">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: ".5rem",
                  marginTop: ".5rem",
                }}
              >
                <span className="badge badge-dark">● Open to work</span>
                {["Freelance", "Contract", "Full-time"].map((b) => (
                  <span key={b} className="badge">
                    {b}
                  </span>
                ))}
              </div>
            </div>

            <div>
              {[
                { k: "Location", v: `${PERSON.location} 🇳🇬` },
                { k: "Experience", v: `${PERSON.experience} years` },
                { k: "Frontend", v: "Next.js / React" },
                { k: "Backend", v: "FastAPI / Node.js" },
                { k: "Languages", v: "Python · TypeScript · JS" },
              ].map(({ k, v }) => (
                <div key={k} className="meta-row">
                  <span className="meta-key">{k}</span>
                  <span className="meta-val">{v}</span>
                </div>
              ))}
              <div className="meta-row">
                <span className="meta-key">LinkedIn</span>
                <a
                  href={PERSON.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="meta-val"
                  style={{ color: "var(--ink)" }}
                >
                  ojeh-agbaje ↗
                </a>
              </div>
              <div className="meta-row">
                <span className="meta-key">Resume</span>
                <a href={PERSON.cvUrl} download className="badge badge-dark">
                  ↓ PDF
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
