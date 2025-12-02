import "./globals.css";

import Header from "./components/Header";
import Navbar from "./components/Navbar";

export default async function RootLayout({ children }: { children: React.ReactNode }) {


  return (
    <html lang="fa" dir="rtl">
      <body className="h-screen">
        <div className="flex h-full">
          <Navbar />

          <div className="flex-1 bg-gray-800 overflow-y-auto ">
            <Header />
            { children }
          </div>
        </div>
      </body>
    </html>
  );
}