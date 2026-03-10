"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PERSON } from "@/lib/constants";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Work" },
  { href: "/#stack", label: "Stack" },
  { href: "/blog", label: "Writing" },
  { href: "/library", label: "Library" },
  { href: "/shop", label: "Shop" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="nav">
      <Link href="/" className="nav-logo">
        Ojeh.
      </Link>
      <ul className="nav-links">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={
                pathname === href ||
                (href !== "/" &&
                  pathname.startsWith(href) &&
                  !href.includes("#"))
                  ? "active"
                  : ""
              }
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="nav-right">
        <span className="nav-pulse">
          <span className="nav-dot" />
          Available
        </span>
        <a
          href={`mailto:${PERSON.email}?subject=Hire Ojeh`}
          className="nav-hire"
        >
          Hire me
        </a>
      </div>
    </nav>
  );
}
