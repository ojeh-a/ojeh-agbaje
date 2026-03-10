"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PERSON, TICKER_ITEMS } from "@/lib/constants";

export default function Hero() {
  const [repos, setRepos] = useState("—");
  const [years, setYears] = useState(PERSON.experience);

  useEffect(() => {
    fetch(`https://api.github.com/users/${PERSON.github}`)
      .then((r) => r.json())
      .then((d) => {
        if (d.public_repos) setRepos(`${d.public_repos}+`);
        if (d.created_at) {
          const y = Math.floor(
            (Date.now() - new Date(d.created_at).getTime()) /
              (1000 * 60 * 60 * 24 * 365),
          );
          if (y > 0) setYears(`${y}+`);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <>
      <section className="hero">
        {/* kicker */}
        <p className="hero-kicker anim-1">
          {PERSON.title} · {PERSON.location}
        </p>

        {/* name + photo */}
        <div className="hero-name-row anim-2">
          <div>
            <span className="hero-name-first">OJEH</span>
            <span className="hero-name-last">Agbaje.</span>
          </div>

          <div className="hero-photo-slot rounded-2xl">
            <Image src="/sketch.png" alt="Ojeh Agbaje" width={100} height={100}></Image>
          </div>
        </div>

        {/* bio + actions */}
        <div className="hero-lower anim-3">
          <div>
            <p className="hero-bio">
              I build <strong>fast frontends</strong> and{" "}
              <strong>resilient backends</strong> — software that&apos;s a
              pleasure to use and a pleasure to work on.{" "}
              <strong>Next.js</strong> on the front. <strong>FastAPI</strong>{" "}
              and <strong>Node.js</strong> on the back.
            </p>
            <div className="hero-now">
              <span className="hero-now-label">Currently building</span>
              {PERSON.currentlyBuilding.map((item) => (
                <p key={item} className="hero-now-item">
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="hero-actions">
            <a href={PERSON.cvUrl} download className="btn btn-fill">
              ↓ Download CV
            </a>
            <Link href="#projects" className="btn btn-ghost">
              View work →
            </Link>
            <Link href="/blog" className="btn btn-ghost">
              Writing →
            </Link>
            <Link href="/shop" className="btn btn-ghost">
              Shop →
            </Link>
          </div>
        </div>

        {/* stats */}
        <div className="hero-stats anim-4">
          {[
            { val: years, label: "Years active" },
            { val: repos, label: "Public repos" },
            { val: "3", label: "Projects shipped" },
            { val: "4", label: "In progress" },
            { val: "∞", label: "Coffee consumed" },
          ].map(({ val, label }) => (
            <div key={label} className="hstat">
              <div className="hstat-val">{val}</div>
              <div className="hstat-label">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ticker */}
      <div className="ticker">
        <div className="ticker-track">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="ticker-item">
              {item}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
