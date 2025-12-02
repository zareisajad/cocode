"use client";

import Link from "next/link";
import { Trophy, SearchIcon } from "@components/ui/icons";


export default function Header() {


  return (
    <header className="hidden md:flex text-gray-200 items-center gap-5 p-8 border-b border-gray-700 sticky top-0">
        <Link className="flex gap-3 items-center" href="/search">
          <SearchIcon />
          <span className="text-md">جستجو</span>
        </Link>
        
        <Link className="flex gap-3 items-center" href="/search">
          <Trophy />
          <span className="text-md">جدول امتیاز</span>
        </Link>
    </header>
  );
}
