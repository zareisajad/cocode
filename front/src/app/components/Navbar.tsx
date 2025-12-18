"use client";

import Link from "next/link";
import { Trophy, SearchIcon, Home, Signal, Plus, Inbox, Bell, Cog, Logout } from "@components/ui/icons";
import Avatar from "./ui/Avatar";


export default function Navbar() {


  return (
    <aside className="w-80 px-8 py-4 border-l hidden md:flex bg-gray-800 border-gray-700 flex-col gap-8 justify-between sticky top-0">
        <nav className="flex flex-col gap-7">
            <h1 className="text-2xl  text-blue-400 mb-10">کوکُد | CoCode</h1>

            <Link href={'/'} className="flex items-center gap-3 text-gray-200 hover:text-white">
                <Home />
                <span className="text-md">خانه</span>
            </Link>

            <Link href={'/explore'} className="flex items-center gap-3 text-gray-200 hover:text-white">
                <SearchIcon />
                <span className="text-md">اکسپلور</span>
            </Link>


            <Link href={'/create'} className="flex items-center gap-3 text-gray-200 hover:text-white">
                <Plus />
                <span className="text-md">ساخت جدید</span>
            </Link>


            <Link href={'/chats'} className="flex items-center gap-3 text-gray-200 hover:text-white">
                <Inbox />
                <span className="text-md">چت ها</span>
            </Link>


            <Link href={'/notifications'} className="flex items-center gap-3 text-gray-200 hover:text-white">
                <Bell />
                <span className="text-md">پیام ها</span>
            </Link>

            <Link href={'/profile/sajad'} className="flex items-center gap-3 text-gray-200 hover:text-white">
                <Avatar src="https://sajadzarei.ir/images/me.webp" imgClassName="w-7 h-7" />
                
                <span className="text-md">پروفایل</span>

            </Link>

        </nav>

            <div className="border-t pt-6 border-gray-700 flex flex-col gap-5">
                <Link href={'/settings'} className="flex items-center gap-3 text-gray-200 hover:text-white">
                    <Cog />
                    <span className="text-md">تنظیمات</span>
                </Link>

                <Link href={'/auth/logout'} className="flex items-center gap-3 text-gray-200 hover:text-red-400">
                    <Logout />
                    <span className="text-md">خروج</span>
                </Link>
            </div>
    </aside>
  );
}
