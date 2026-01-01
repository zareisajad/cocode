"use client";

import Link from "next/link";
import { Trophy, SearchIcon } from "@components/ui/icons";


export default function Header({ title }: {title : string}) {


  return (
    <header className="hidden md:flex text-gray-200 items-center bg-gray-800 justify-between gap-5 px-8 py-4 border-b border-gray-700 sticky top-0">
      <h2 className=" font-bold">{title}</h2>
      <div className="flex gap-5 items-center">
        <Link className="flex gap-3 items-center" href="/leaderboard">
          <Trophy />
          <span className="text-md">جدول امتیاز</span>
        </Link>
      </div>
    </header>
  );
}
