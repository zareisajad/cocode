"use client";

import { useAuth } from "@context/AuthContext";

export default function AuthGate({ children }: { children: React.ReactNode }) {
  const { isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-gray-900 text-blue-400">
        <div className="text-4xl font-semibold animate-pulse">
          CoCode 
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
