"use client";

import React, { createContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { deleteCookie } from "cookies-next";

interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  pushRouter: (route: string) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  const checkAuth = async () => {
    try {
      const res = await fetch("http://localhost:8000/customers/profile/ping/", {
        credentials: "include",
      });

      if (res.ok) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (err) {
      console.error("Auth check failed", err);
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = async () => {
    deleteCookie("accessToken");
    setIsAuthenticated(false);
    router.push("/auth/login");
  };

  const pushRouter = (route: string) => {
    router.push(route);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, pushRouter }}>
      {children}
    </AuthContext.Provider>
  );
};
