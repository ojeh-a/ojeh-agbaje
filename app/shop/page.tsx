"use client";
import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { PERSON } from "@/lib/constants";
import type { Metadata } from "next";

const PRODUCTS = [
  {
    name: "OA Classic Tee",
    price: "From $28",
    cat: "tops",
    desc: "Heavyweight cotton, oversized fit. The OA monogram large on the chest — nothing else.",
    variants: ["XS", "S", "M", "L", "XL", "2XL"],
    display: {
      text: "OA",
      style: {
        fontFamily: "var(--font-anybody)",
        fontWeight: 700,
        fontStretch: "125%",
        fontSize: "3.5rem",
        color: "#2a2a2a",
      },
    },
  },
  {
    name: "Name Hoodie",
    price: "From $52",
    cat: "hoodies",
    desc: "The surname in condensed italic across the back. Premium fleece, dropped shoulders.",
    variants: ["XS", "S", "M", "L", "XL", "2XL"],
    display: {
      text: "Agbaje",
      style: {
        fontFamily: "var(--font-anybody)",
        fontWeight: 300,
        fontStretch: "75%",
        fontStyle: "italic",
        fontSize: "2rem",
        color: "#2a2a2a",
      },
    },
  },
  {
    name: "OA Sticker Pack",
    price: "$8",
    cat: "stickers",
    desc: "5 die-cut stickers. OA monogram, full name, wordmark, and two abstracts. Matte, weatherproof.",
    variants: [],
    display: {
      text: "◼ ◼ ◼",
      style: {
        fontFamily: "var(--font-unbounded)",
        fontWeight: 200,
        fontSize: ".9rem",
        letterSpacing: ".3em",
        color: "#2a2a2a",
      },
    },
  },
  {
    name: "Dev Tote",
    price: "From $22",
    cat: "accessories",
    desc: "Heavy canvas tote. 'Built by Ojeh' in Unbounded condensed on the front. Laptop-safe pocket.",
    variants: [],
    display: {
      text: "BUILT\nBY\nOJEH",
      style: {
        fontFamily: "var(--font-unbounded)",
        fontWeight: 200,
        fontSize: ".55rem",
        letterSpacing: ".22em",
        color: "#2a2a2a",
        whiteSpace: "pre" as const,
        textAlign: "center" as const,
        lineHeight: "2",
      },
    },
  },
  {
    name: "OA Long Sleeve",
    price: "From $34",
    cat: "tops",
    desc: "Name and title in Unbounded ultralight on the chest. Fitted cut, breathable cotton.",
    variants: ["S", "M", "L", "XL"],
    display: {
      text: "OJEH\nAGBAJE",
      style: {
        fontFamily: "var(--font-unbounded)",
        fontWeight: 200,
        fontSize: ".55rem",
        letterSpacing: ".2em",
        color: "#2a2a2a",
        whiteSpace: "pre" as const,
        textAlign: "center" as const,
        lineHeight: "2.2",
      },
    },
  },
  {
    name: "OA Cap",
    price: "$32",
    cat: "accessories",
    desc: "6-panel structured cap. Embroidered OA monogram. One size, adjustable back. Black only.",
    variants: [],
    display: {
      text: "OA",
      style: {
        fontFamily: "var(--font-anybody)",
        fontWeight: 700,
        fontStretch: "125%",
        fontSize: "3rem",
        color: "#2a2a2a",
      },
    },
  },
];

const FILTERS = ["All", "Tops", "Hoodies", "Accessories", "Stickers"];

export default function Shop() {
  const [filter, setFilter] = useState("All");
  const [notifyEmail, setNotifyEmail] = useState("");
  const [notifyStatus, setNotifyStatus] = useState("");

  const visible =
    filter === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.cat === filter.toLowerCase());

  async function handleNotify(e: React.FormEvent) {
    e.preventDefault();
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/newsletter`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: notifyEmail, source: "shop" }),
      });
      setNotifyStatus("✓ You're on the list. I'll let you know.");
      setNotifyEmail("");
    } catch {
      setNotifyStatus("Could not save — try again shortly.");
    }
  }

  return (
    <>
      <Nav />
      <main
        style={{
          minHeight: "100vh",
          background: "var(--dark)",
          color: "var(--fg)",
          paddingTop: "48px",
        }}
      >
        {/* hero */}
        <div
          className="page-hero page-hero-dark"
          style={{ background: "var(--dark)" }}
        >
          <span className="page-eyebrow page-eyebrow-dark">
            Personal brand · Quaint · Limited drops
          </span>
          <span className="page-title-big page-title-big-dark">THE</span>
          <span className="page-title-sub page-title-sub-dark">Shop.</span>
          <p className="page-desc page-desc-dark">
            Minimal pieces built around the OA identity. No clutter. No slogans.
            Clean design you can actually wear.
          </p>
        </div>

        {/* filter */}
        <div className="filter-bar">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`filter-btn${filter === f ? " active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* products */}
        <div className="section-wrap">
          <ScrollReveal>
            <div
              style={{
                border: "1px solid var(--ruled)",
                marginBottom: "1.5rem",
                padding: ".75rem 1.25rem",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-unbounded)",
                  fontSize: ".46rem",
                  fontWeight: 200,
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  background: "var(--dark-3)",
                  color: "var(--dim)",
                  padding: ".25rem .6rem",
                }}
              >
                Coming soon
              </span>
              <span
                style={{
                  fontFamily: "var(--font-literata)",
                  fontStyle: "italic",
                  fontSize: ".88rem",
                  color: "var(--faint)",
                }}
              >
                All pieces are in production. Sign up below to be notified when
                the first drop goes live.
              </span>
            </div>
            <div className="products-grid">
              {visible.map((p) => (
                <div key={p.name} className="product-card">
                  <div className="product-img">
                    <span style={p.display.style}>{p.display.text}</span>
                    <span className="product-badge">Coming soon</span>
                  </div>
                  <div className="product-info">
                    <div className="product-name">{p.name}</div>
                    <p className="product-desc">{p.desc}</p>
                    {p.variants.length > 0 && (
                      <div className="product-variants">
                        {p.variants.map((v) => (
                          <span key={v} className="pv">
                            {v}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="product-footer">
                      <span className="product-price">{p.price}</span>
                      <button
                        className="product-action"
                        onClick={() =>
                          document
                            .getElementById("notify")
                            ?.scrollIntoView({
                              behavior: "smooth",
                              block: "center",
                            })
                        }
                      >
                        Notify me
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* notify */}
          <div id="notify" className="notify-strip">
            <div>
              <span
                style={{
                  fontFamily: "var(--font-anybody)",
                  fontWeight: 700,
                  fontStretch: "125%",
                  fontSize: "1.8rem",
                  letterSpacing: "-.02em",
                  color: "var(--fg)",
                  lineHeight: 1,
                  display: "block",
                }}
              >
                First to
              </span>
              <span
                style={{
                  fontFamily: "var(--font-anybody)",
                  fontWeight: 300,
                  fontStretch: "75%",
                  fontStyle: "italic",
                  fontSize: "1.8rem",
                  letterSpacing: "-.02em",
                  color: "var(--dim)",
                  lineHeight: 1,
                  display: "block",
                }}
              >
                know.
              </span>
              <p
                style={{
                  fontFamily: "var(--font-literata)",
                  fontStyle: "italic",
                  fontWeight: 300,
                  fontSize: ".88rem",
                  color: "var(--dim)",
                  lineHeight: 1.8,
                  marginTop: ".75rem",
                }}
              >
                Drop your email and you&apos;ll be the first to hear when the shop
                goes live. One email, when it&apos;s ready.
              </p>
            </div>
            <form onSubmit={handleNotify}>
              <div className="notify-form">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={notifyEmail}
                  onChange={(e) => setNotifyEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn btn-fill">
                  Notify me →
                </button>
              </div>
              {notifyStatus && (
                <p
                  style={{
                    fontFamily: "var(--font-literata)",
                    fontStyle: "italic",
                    fontSize: ".8rem",
                    color: "var(--faint)",
                    marginTop: ".5rem",
                  }}
                >
                  {notifyStatus}
                </p>
              )}
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
