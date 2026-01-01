
"use client";
import { createContext, useContext, useState, useEffect } from "react";

type AuthContextType = {
  accessToken: string | null;
  user: any | null;
  isLoading: boolean;
  setAccessToken: (token: string | null) => void;
  setUser: (user: any | null) => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [authUser, setAuthUser] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchUser(token: string) {
    try {
      const meRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/me/`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (meRes.ok) {
        const userData = await meRes.json();
        setAuthUser(userData);
      } else {
        setAuthUser(null);
      }
    } catch (err) {
      setAuthUser(null);
    }
  }

  useEffect(() => {
    async function restore() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/refresh/`, {
          method: "POST",
          credentials: "include",
        });
        if (res.ok) {
          const data = await res.json();
          setAccessToken(data.access);
          await fetchUser(data.access);
        }
      } finally {
        setIsLoading(false);
      }
    }
    restore();
  }, []);

  async function authLogin(token: string) {
    setAccessToken(token);
    await fetchUser(token);
  }

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        authUser,
        setAccessToken,
        setAuthUser,
        isLoading,
        authLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be inside AuthProvider");
  return ctx;
}
