import "./globals.css";

import Navbar from "./components/Navbar";
import { AuthProvider } from "@context/AuthContext";
import AuthGate from "./components/AuthGate";

export const metadata = {
  title: {
    default: "CoCode",
    template: "CoCode - %s",
  },
};


export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="h-screen">
        <AuthProvider>
          <AuthGate>
          <div className="flex h-full">
            <Navbar />
            <div className="flex-1 bg-gray-800 overflow-y-auto ">
              { children }
            </div>
          </div>
          </AuthGate>
        </AuthProvider>
      </body>
    </html>
  );
}
