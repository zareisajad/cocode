"use client";

import Link from "next/link";
import Avatar from "@components/ui/Avatar";
import People from "@components/ui/icons/People";

const groups = [
    { title: "یادگیری پایتون", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/1024px-Python.svg.png", members: 12, level: "مبتدی", status: "تکمیل" },
{ title: "یادگیری پایتون", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/1024px-Python.svg.png", members: 12, level: "مبتدی", status: "پذیرش", highlight: "گروه برتر ماه" },
];

export default function ExploreGroups() {
    return (
        <div className="mb-10">
        <div className="flex items-center justify-between mb-4">
        <People className="size-7" />
        <h3 className="text-lg font-semibold">آخرین گروه ها</h3>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        {groups.map((group, i) => (
            <Link key={i} href={"/explore"}>
            <div className="bg-gray-900 rounded-lg p-4 flex items-center gap-3">
            <Avatar src={group.img} className="w-20 h-20" />
            <div className="flex flex-col gap-2">
            <span>{group.title}</span>
            <div className="flex items-center gap-2 text-xs">
            <span>{group.members} نفر</span>
            <span className="px-3 rounded-xl border border-dashed border-yellow-400 text-yellow-400 py-1">{group.level}</span>
            <span className={`px-3 rounded-xl border border-dashed ${group.status === "تکمیل" ? "border-red-400 text-red-400" : "border-green-400 text-green-400"} py-1`}>{group.status}</span>
            {group.highlight && <span className="px-3 rounded-xl py-1 bg-purple-700">{group.highlight}</span>}
            </div>
            </div>
            </div>
            </Link>
        ))}
        </div>
        </div>
    );
}
