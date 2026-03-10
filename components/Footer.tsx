import { PERSON } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="footer" style={{ background: "var(--dark)" }}>
      <span>© 2026 {PERSON.name}</span>
      <a href={PERSON.socials.kofi} target="_blank" rel="noreferrer">
        ☕ Ko-fi
      </a>
      <span>Next.js + FastAPI · Vercel</span>
    </footer>
  );
}
