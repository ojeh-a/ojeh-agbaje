import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function Teasers() {
  return (
    <section className="section-light2">
      <div className="section-wrap">
        <ScrollReveal>
          <div className="sh sh-light">
            <span className="sh-num">05</span>
            <h2 className="sh-title">
              More <em>pages</em>
            </h2>
          </div>
          <div className="teaser-grid">
            {/* Blog teaser */}
            <Link href="/blog" className="teaser-card">
              <span className="teaser-eyebrow">Writing · FastAPI CMS</span>
              <h3 className="teaser-title">
                The <em>blog.</em>
              </h3>
              <p className="teaser-desc">
                Notes on building software — FastAPI vs Django REST,
                zero-knowledge encryption, Docker in production, and things I
                figure out the hard way.
              </p>
              <span className="teaser-cta">Read the blog →</span>
            </Link>

            {/* Shop teaser */}
            <Link href="/shop" className="teaser-card teaser-card-dark">
              <span className="teaser-eyebrow">Personal brand · Quaint</span>
              <h3 className="teaser-title">
                The <em>shop.</em>
              </h3>
              <p className="teaser-desc">
                Minimal pieces built around the OA identity. No clutter, no
                slogans. Clean design you can actually wear. First drop coming
                soon.
              </p>
              <span className="teaser-cta">Visit Quaint →</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
