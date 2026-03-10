import ScrollReveal from "./ScrollReveal";

const POSTS = [
  {
    slug: "fastapi-vs-django",
    title: "Why I always reach for FastAPI over Django REST",
    excerpt:
      "Async-first design, automatic OpenAPI docs, and why raw performance matters more than you think.",
    tag: "Backend",
    date: "Draft",
  },
  {
    slug: "cipherseed-encryption",
    title: "Zero-knowledge encryption for a crypto seed vault",
    excerpt:
      "How I designed CipherSeed's encryption model using AWS Lambda and envelope encryption.",
    tag: "Security",
    date: "Draft",
  },
  {
    slug: "docker-production",
    title: "Docker in production: what I wish I'd known earlier",
    excerpt:
      "Multi-stage builds, secrets management, networking gotchas — everything I learned the hard way.",
    tag: "DevOps",
    date: "Draft",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="section-light2">
      <div className="section-wrap">
        <ScrollReveal>
          <div className="sh sh-light">
            <span className="sh-num">04</span>
            <h2 className="sh-title">
              <em>Writing</em>
            </h2>
            <span className="sh-aside">FastAPI CMS — connect to publish</span>
          </div>
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
    </section>
  );
}
