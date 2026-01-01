import { ReactNode } from "react";
import Header from "@components/Header";



interface PageLayoutProps {
  children: ReactNode;
  title: string;
  className: string;
}

export default function PageLayout({ children, title, className}: PageLayoutProps) {
  return(
    <>
    <Header title={title} />
    <div className={`mx-auto max-w-4xl px-5 md:px-3 py-10 flex flex-col gap-3 ${className}`}>
        {children}
    </div>
    </>
  );
}
