import type { Metadata } from "next";
import { Anybody, Unbounded, Literata } from "next/font/google";
import "./globals.css";

// Anybody: variable font — axes requires weight:"variable"
const anybody = Anybody({
  subsets: ["latin"],
  axes: ["wdth"],
  weight: "variable",
  style: ["normal", "italic"],
  variable: "--font-anybody",
});

// Unbounded: NOT a variable font — list discrete weights, no axes
const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["200", "300", "400", "700"],
  variable: "--font-unbounded",
});

// Literata: variable font — axes requires weight:"variable"
const literata = Literata({
  subsets: ["latin"],
  axes: ["opsz"],
  weight: "variable",
  style: ["normal", "italic"],
  variable: "--font-literata",
});

export const metadata: Metadata = {
  title: "Ojeh Agbaje — Full Stack Developer",
  description:
    "Full stack developer based in Nigeria. Next.js on the front, FastAPI on the back.",
  keywords: [
    "full stack developer",
    "Nigeria",
    "Next.js",
    "FastAPI",
    "React",
    "Python",
  ],
  authors: [{ name: "Ojeh Agbaje", url: "https://ojehagbaje.dev" }],
  openGraph: {
    title: "Ojeh Agbaje — Full Stack Developer",
    description: "Full stack developer based in Nigeria.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${anybody.variable} ${unbounded.variable} ${literata.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
