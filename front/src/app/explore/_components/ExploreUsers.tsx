"use client";

import Link from "next/link";
import Avatar from "@components/ui/Avatar";

const users = [
    { name: "zareisajad@", img: "https://sajadzarei.ir/images/me.webp", rank: "1% برتر" },
{ name: "zareisajad@", img: "https://sajadzarei.ir/images/me.webp", rank: "1% برتر" },
{ name: "zareisajad@", img: "https://sajadzarei.ir/images/me.webp", rank: "1% برتر" },
{ name: "zareisajad@", img: "https://sajadzarei.ir/images/me.webp", rank: "1% برتر" },
{ name: "zareisajad@", img: "https://sajadzarei.ir/images/me.webp", rank: "1% برتر" },
];

export default function ExploreUsers() {
    return (
        <div className="mb-10">
        <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">در حال یادگیری پایتون</h3>
        <Link className="text-blue-500" href={"/explore"}>بیشتر</Link>
        </div>

        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4">
        {users.map((user, i) => (
            <Link key={i} href={`/profile/sajad`}>
            <div className="flex flex-col items-center gap-3 bg-gray-900 p-4 rounded-lg">
            <Avatar src={user.img} className="w-22 h-22" />
            <span className="text-bold text-lg">{user.name}</span>
            <span className="bg-green-700 w-full text-center p-2 text-xs rounded-lg">{user.rank}</span>
            </div>
            </Link>
        ))}
        </div>
        </div>
    );
}
