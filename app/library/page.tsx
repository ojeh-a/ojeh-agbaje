import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { BOOKS } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Library — Ojeh Agbaje",
  description:
    "Books that shaped how I think about software, systems, and people.",
};

export default function Library() {
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
          <span className="page-eyebrow">Reading list</span>
          <span className="page-title-big">THE</span>
          <span className="page-title-sub">Library.</span>
          <p className="page-desc">
            Books that shaped how I think about software, systems, and people.
            Rated honestly.
          </p>
        </div>
        <div className="section-wrap">
          <ScrollReveal>
            <div className="books-grid">
              {BOOKS.map((book) => (
                <div key={book.title} className="book-card">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "1rem",
                    }}
                  >
                    <span className="blog-tag">{book.tag}</span>
                    <span
                      style={{
                        fontSize: "11px",
                        color: "#ccc",
                        letterSpacing: ".05em",
                      }}
                    >
                      {"★".repeat(book.rating)}
                      {"☆".repeat(5 - book.rating)}
                    </span>
                  </div>
                  <h3 className="book-title">{book.title}</h3>
                  <p className="book-author">{book.author}</p>
                  <p className="book-note">{book.note}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
