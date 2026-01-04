export async function register(email: string, password: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) throw new Error("Invalid credentials");

  const data = await res.json();
  return { access: data.access };
}

export async function login(email: string, password: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) throw new Error("Invalid credentials");

  const data = await res.json();
  return { access: data.access };
}

export async function logout() {
  try {
   await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include", 
  });

  } finally {
    window.location.href = "/"
  }
}

