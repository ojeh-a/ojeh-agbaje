import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const PRODUCTS = [
  {
    name: "OA Classic Tee",
    price: "From $28",
    label: "OA",
    style: {
      fontFamily: "var(--font-anybody)",
      fontWeight: 700,
      fontStretch: "125%",
      fontSize: "3rem",
      color: "#2a2a2a",
    },
  },
  {
    name: "Name Hoodie",
    price: "From $52",
    label: "Agbaje",
    style: {
      fontFamily: "var(--font-anybody)",
      fontWeight: 300,
      fontStretch: "75%",
      fontStyle: "italic",
      fontSize: "1.8rem",
      color: "#2a2a2a",
    },
  },
  {
    name: "OA Sticker Pack",
    price: "$8",
    label: "◼ ◼ ◼",
    style: {
      fontFamily: "var(--font-unbounded)",
      fontWeight: 200,
      fontSize: ".8rem",
      letterSpacing: ".3em",
      color: "#2a2a2a",
    },
  },
  {
    name: "Dev Tote",
    price: "From $22",
    label: "BUILT\nBY\nOJEH",
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
];

export default function ShopTeaser() {
  return (
    <section id="shop-teaser" className="section-light">
      <div className="section-wrap">
        <ScrollReveal>
          <div className="sh sh-light">
            <span className="sh-num">05</span>
            <h2 className="sh-title">
              The <em>shop</em>
            </h2>
            <Link
              href="/shop"
              className="sh-aside"
              style={{ cursor: "pointer" }}
            >
              View all →
            </Link>
          </div>
          <div className="shop-teaser">
            <div className="shop-teaser-inner">
              <div className="shop-left">
                <div>
                  <span className="shop-left-eyebrow">
                    Personal brand · Quaint · Limited drops
                  </span>
                  <h3 className="shop-left-title">
                    WEAR
                    <br />
                    <em>the brand.</em>
                  </h3>
                  <p className="shop-left-sub">
                    Minimal pieces built around the OA identity. No clutter. No
                    slogans. Clean design you can actually wear.
                  </p>
                </div>
                <Link
                  href="/shop"
                  className="btn btn-fill"
                  style={{ width: "fit-content" }}
                >
                  Visit Quaint →
                </Link>
              </div>
              <div className="shop-products-grid">
                {PRODUCTS.map(({ name, price, label, style }) => (
                  <Link key={name} href="/shop" className="shop-product">
                    <div className="shop-product-img">
                      <span style={style}>{label}</span>
                    </div>
                    <span className="shop-product-name">{name}</span>
                    <span className="shop-product-price">{price}</span>
                    <span className="shop-product-soon">Coming soon</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
