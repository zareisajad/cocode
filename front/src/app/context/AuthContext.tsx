
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
  const [user, setUser] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    async function restore() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh/`,
          {
            method: "POST",
            credentials: "include",
          }
        );

        if (res.ok) {
          const data = await res.json();
          setAccessToken(data.access);

          // TODO => api endpoint
          const meRes = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/me/`,
            {
              headers: { Authorization: `Bearer ${data.access}` },
            }
          );
          if (meRes.ok) setUser(await meRes.json());
        }
      } finally {
        setIsLoading(false);
      }
    }

    restore();
  }, []);


  return (
    <AuthContext.Provider value={{ accessToken, user, setAccessToken, isLoading ,setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be inside AuthProvider");
  return ctx;
}
