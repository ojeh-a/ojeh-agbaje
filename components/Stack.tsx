import ScrollReveal from "./ScrollReveal";
import { STACK } from "@/lib/constants";

export default function Stack() {
  return (
    <section id="stack" className="section-light">
      <div className="section-wrap">
        <ScrollReveal>
          <div className="sh sh-light">
            <span className="sh-num">03</span>
            <h2 className="sh-title">
              The <em>stack</em>
            </h2>
          </div>
          <div className="stack-grid">
            {STACK.map(({ label, items }) => (
              <div key={label} className="stack-col">
                <span className="stack-label">{label}</span>
                <ul>
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
