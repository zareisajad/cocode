"use client";

async function login(email: string, password: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include", // ✅ critical
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) throw new Error("Invalid credentials");

  const data = await res.json();
  return { access: data.access };
}

