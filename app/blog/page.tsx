import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing — Ojeh Agbaje",
  description:
    "Notes on building software. FastAPI, systems design, Docker, and things learned the hard way.",
};

const POSTS = [
  {
    slug: "fastapi-vs-django",
    title: "Why I always reach for FastAPI over Django REST",
    excerpt:
      "Async-first design, automatic OpenAPI docs, and why raw performance matters more than you think for small teams moving fast.",
    tag: "Backend",
    date: "Draft",
  },
  {
    slug: "cipherseed-encryption",
    title: "Zero-knowledge encryption for a crypto seed vault",
    excerpt:
      "How I designed CipherSeed's encryption model using AWS Lambda and envelope encryption — and why the architecture has no single point of failure.",
    tag: "Security",
    date: "Draft",
  },
  {
    slug: "docker-production",
    title: "Docker in production: what I wish I'd known earlier",
    excerpt:
      "Multi-stage builds, secrets management, networking gotchas — everything I learned the hard way from shipping real apps.",
    tag: "DevOps",
    date: "Draft",
  },
];

export default function Blog() {
  return (
    <>
      <Nav />
      <main
        style={{
          minHeight: "100vh",
          background: "var(--light)",
          color: "var(--ink)",
          paddingTop: "48px",
        }}
      >
        <div className="page-hero">
          <span className="page-eyebrow">Writing</span>
          <span className="page-title-big">THE</span>
          <span className="page-title-sub">Blog.</span>
          <p className="page-desc">
            Notes on building software. FastAPI, systems design, Docker, and
            things I figure out the hard way.
          </p>
        </div>
        <div className="section-wrap">
          <ScrollReveal>
            <div className="blog-grid">
              {POSTS.map((post) => (
                <a key={post.slug} href="#" className="blog-card">
                  <div className="blog-card-top">
                    <span className="blog-tag">{post.tag}</span>
                    <span className="blog-date">{post.date}</span>
                  </div>
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <span className="blog-read">Read more →</span>
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
