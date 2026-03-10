export const PERSON = {
  name: "Ojeh Agbaje",
  firstName: "Ojeh",
  lastName: "Agbaje",
  email: "ojehdayo@gmail.com",
  title: "Full Stack Developer",
  location: "Nigeria",
  tagline: "I build fast and ship real things",
  bio: [
    "I'm Ojeh Agbaje, a full stack developer based in Nigeria with 3+ years of experience designing and shipping web applications that are fast, maintainable, and built to scale.",
    "On the frontend I reach for Next.js and React — building interfaces that feel instant. On the backend I'm most at home with FastAPI and Node.js/Express, designing APIs that are a genuine pleasure to integrate with.",
    "I've built a serverless cryptographic vault (CipherSeed), a real-time global crisis monitor (AidNet), and a skills marketplace backend (TechKr). I care about the full picture — the code, the deployment, the developer experience.",
  ],
  currentlyBuilding: [
    "A store-shopping companion app",
    "A personalized web crawler for opportunities on Twitter, LinkedIn & Reddit",
    "Continuing work on AidNet and TechKr",
  ],
  hobbies: [
    "Basketball",
    "Chess",
    "Building things",
    "Swimming",
    "Reading",
    "Working out",
  ],
  availability: "Open to work",
  experience: "3+",
  github: "ojeh-a",
  socials: {
    github: "https://github.com/ojeh-a",
    twitter: "https://twitter.com/o_agbajee",
    instagram: "https://instagram.com/ojeh_a",
    reddit: "https://reddit.com/u/o_genie",
    linkedin: "https://linkedin.com/in/ojeh-agbaje",
    kofi: "https://ko-fi.com/ojeh_agbaje",
  },
  cvUrl:
    "https://docs.google.com/document/d/1XP69qY1suDLhX7wxYnRMscx_bkot1jTj__O2e8CayjA/edit?usp=drive_link",
};

export const PROJECTS = [
  {
    num: "01",
    name: "CipherSeed",
    type: "Full Stack",
    description:
      "A serverless, zero-knowledge wallet seed phrase vault. Encrypted at rest, no single point of failure. Built for people who take crypto security seriously.",
    tags: ["Serverless", "AWS Lambda", "Encryption", "Next.js"],
    url: "#",
    github: "https://github.com/ojeh-a",
  },
  {
    num: "02",
    name: "AidNet",
    type: "Backend",
    description:
      "Backend for a global crisis information platform. Aggregates and surfaces real-time data about ongoing crises worldwide. Built for high-throughput, reliable ingestion.",
    tags: ["FastAPI", "PostgreSQL", "Redis", "Docker"],
    url: "#",
    github: "https://github.com/ojeh-a",
    wip: true,
  },
  {
    num: "03",
    name: "TechKr",
    type: "Backend",
    description:
      "Marketplace backend where technical skills are bought and sold. Auth, listings, search, payments, and matching between buyers and sellers of dev services.",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    url: "#",
    github: "https://github.com/ojeh-a",
    wip: true,
  },
];

export const STACK = [
  {
    label: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML / CSS"],
  },
  {
    label: "Backend",
    items: ["FastAPI", "Node.js", "Express", "Python", "REST APIs"],
  },
  {
    label: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "C", "Bash"],
  },
  {
    label: "Data & Infra",
    items: ["PostgreSQL", "MongoDB", "Redis", "Docker", "AWS"],
  },
  {
    label: "Tools",
    items: ["Git / GitHub", "Linux", "Nginx", "JWT / OAuth", "CI/CD"],
  },
];

export const TICKER_ITEMS = [
  "Next.js",
  "FastAPI",
  "Node.js",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Redis",
  "MongoDB",
  "TypeScript",
  "Python",
  "React",
  "Celery",
  "Express",
  "MySQL",
];

export const BOOKS = [
  {
    title: "A Philosophy of Software Design",
    author: "John Ousterhout",
    note: "Changed how I think about complexity and interfaces. Required reading.",
    rating: 5,
    tag: "Engineering",
  },
  {
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    note: "The definitive guide to distributed systems. Dense but worth every page.",
    rating: 5,
    tag: "Systems",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Thomas & Hunt",
    note: "Timeless advice. I re-read sections every year.",
    rating: 4,
    tag: "Career",
  },
  {
    title: "Staff Engineer",
    author: "Will Larson",
    note: "What technical leadership actually looks like in practice.",
    rating: 4,
    tag: "Leadership",
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    note: "Controversial but foundational. Read critically, apply selectively.",
    rating: 3,
    tag: "Engineering",
  },
  {
    title: "An Elegant Puzzle",
    author: "Will Larson",
    note: "Systems thinking for engineering managers.",
    rating: 4,
    tag: "Leadership",
  },
];

export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
