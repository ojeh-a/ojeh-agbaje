"use client";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { PERSON } from "@/lib/constants";

export default function Contact() {
  const [status, setStatus] = useState("All messages go directly to Ojeh.");
  const [statusOk, setOk] = useState<boolean | null>(null);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const data = {
      from_name: (form.elements.namedItem("from_name") as HTMLInputElement)
        .value,
      reply_to: (form.elements.namedItem("reply_to") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };
    try {
      const ejs = (window as any).emailjs;
      if (ejs)
        await ejs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE!,
          data,
        );
      fetch(process.env.NEXT_PUBLIC_API_URL + "/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).catch(() => {});
      setStatus("✓ Sent. I'll be in touch soon.");
      setOk(true);
      form.reset();
    } catch {
      setStatus("Something went wrong — email me directly.");
      setOk(false);
    }
    setSending(false);
  }

  const SOCIALS = [
    {
      handle: "github.com/ojeh-a",
      label: "GitHub",
      url: PERSON.socials.github,
    },
    { handle: "@o_agbajee", label: "X / Twitter", url: PERSON.socials.twitter },
    { handle: "@ojeh_a", label: "Instagram", url: PERSON.socials.instagram },
    { handle: "u/o_genie", label: "Reddit", url: PERSON.socials.reddit },
    { handle: "ojeh-agbaje", label: "LinkedIn", url: PERSON.socials.linkedin },
  ];

  return (
    <section id="contact" className="section-dark">
      <script
        dangerouslySetInnerHTML={{
          __html: `if(!window._ejs){var s=document.createElement('script');s.src='https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';s.onload=function(){emailjs.init({publicKey:'${process.env.NEXT_PUBLIC_EMAILJS_KEY}'})};document.head.appendChild(s);window._ejs=true;}`,
        }}
      />
      <div className="section-wrap">
        <ScrollReveal>
          <div className="sh sh-dark">
            <span className="sh-num">06</span>
            <h2 className="sh-title">
              Let&apos;s <em>talk</em>
            </h2>
          </div>
          <div className="contact-grid">
            <div className="contact-left">
              <h3 className="contact-heading">
                Got something
                <br />
                <em>worth building?</em>
              </h3>
              <p className="contact-sub">
                Open to freelance, contract, and full-time roles. I reply to
                every message — usually within a day.
              </p>
              <form onSubmit={handleSubmit} className="cform">
                <div className="form-row">
                  <div className="field">
                    <label>Name</label>
                    <input
                      name="from_name"
                      type="text"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="field">
                    <label>Email</label>
                    <input
                      name="reply_to"
                      type="email"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div className="field">
                  <label>Subject</label>
                  <select name="subject">
                    <option>Freelance project</option>
                    <option>Full-time role</option>
                    <option>Collaboration</option>
                    <option>Just saying hi</option>
                  </select>
                </div>
                <div className="field">
                  <label>Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell me what you're working on..."
                    required
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: ".25rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-literata)",
                      fontStyle: "italic",
                      fontSize: ".8rem",
                      color:
                        statusOk === true
                          ? "#aaa"
                          : statusOk === false
                            ? "#c77"
                            : "var(--faint)",
                    }}
                  >
                    {status}
                  </span>
                  <button
                    type="submit"
                    disabled={sending}
                    className="btn btn-fill"
                  >
                    {sending ? "Sending..." : "Send →"}
                  </button>
                </div>
              </form>
            </div>
            <div className="contact-right">
              <p
                style={{
                  fontFamily: "var(--font-unbounded)",
                  fontSize: ".48rem",
                  fontWeight: 200,
                  letterSpacing: ".2em",
                  textTransform: "uppercase",
                  color: "var(--faint)",
                  marginBottom: "1.25rem",
                }}
              >
                Find me on
              </p>
              <div style={{ marginBottom: "2rem" }}>
                {SOCIALS.map(({ handle, label, url }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="social-row"
                  >
                    <span className="social-handle">{handle}</span>
                    <span className="social-label">{label}</span>
                  </a>
                ))}
              </div>
              <div className="hire-box">
                <h4>Available for hire</h4>
                <p>
                  Freelance · Contract · Full-time.
                  <br />
                  Next.js frontends, FastAPI backends, full stack.
                </p>
                <a
                  href={`mailto:${PERSON.email}?subject=Hire Ojeh`}
                  className="btn btn-fill"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  → Get in touch
                </a>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "1rem",
                }}
              >
                <a
                  href={PERSON.socials.kofi}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-coffee"
                >
                  ☕ Buy me a coffee (Ko-fi)
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
