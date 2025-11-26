import { AuthProvider } from "@context/AuthContext";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
 

  return (
    <html lang="fa" dir="rtl">
      <body className="">

        <Header />
        <main>
          {/* <AuthProvider> */}

              {children}

          {/* </AuthProvider> */}
        </main>
        <Footer />
        
      </body>
    </html>
  );
}