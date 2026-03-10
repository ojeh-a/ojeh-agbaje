import { NextResponse } from "next/server";

export const revalidate = 3600; // ISR: cache for 1 hour

export async function GET() {
  try {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github.v3+json",
    };
    if (process.env.GITHUB_TOKEN) {
      headers["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const res = await fetch("https://api.github.com/users/ojeh-a", { headers });
    const data = await res.json();

    return NextResponse.json({
      public_repos: data.public_repos ?? null,
      created_at: data.created_at ?? null,
    });
  } catch {
    return NextResponse.json(
      { public_repos: null, created_at: null },
      { status: 500 },
    );
  }
}
