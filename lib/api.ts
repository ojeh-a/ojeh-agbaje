import { API_URL } from "./constants";

export async function fetchBlogPosts(published = true) {
  try {
    const res = await fetch(`${API_URL}/blog?published=${published}`, {
      next: { revalidate: 300 }, // ISR: revalidate every 5 mins
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export async function fetchBlogPost(slug: string) {
  try {
    const res = await fetch(`${API_URL}/blog/${slug}`, {
      next: { revalidate: 300 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function submitContact(data: {
  from_name: string;
  reply_to: string;
  subject: string;
  message: string;
}) {
  const res = await fetch(`${API_URL}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.ok;
}

export async function subscribeNewsletter(email: string) {
  const res = await fetch(`${API_URL}/newsletter`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });
  return res.ok;
}

export async function trackPageView(path: string, referrer?: string) {
  try {
    await fetch(`${API_URL}/analytics/view`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path, referrer }),
    });
  } catch {
    // silent — never block the user
  }
}
