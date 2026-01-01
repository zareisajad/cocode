"use client";

import { MainButton } from "@components/ui/MainButton";

const challenge = {
    title: "چالش ۷ روز طراحی UI",
    description: "هر روز یک کامپوننت جدید بساز و مهارتت رو پیشرفت بده.",
    participants: 132,
    tags: ["۱۲۳ امتیاز", "۷ روز", "مبتدی"]
};

export default function ExploreChallenges() {
    return (
        <div className="mb-10">
        <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">چالش های فعال</h3>
        </div>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        <div className="rounded-lg bg-gray-900 p-4">
        <h3 className="text-lg font-bold mb-2">{challenge.title}</h3>
        <p className="text-xs text-neutral-400 line-clamp-2 mb-3">{challenge.description}</p>

        <div className="flex items-center justify-between text-xs text-neutral-400 mb-4">
        <span>{challenge.participants} شرکت کننده</span>
        </div>

        <div className="flex gap-2 flex-wrap mb-4">
        {challenge.tags.map((t, i) => (
            <span key={i} className="px-2 py-0.5 rounded-md bg-neutral-800 text-xs text-neutral-300">{t}</span>
        ))}
        </div>

        <MainButton>شروع چالش</MainButton>
        </div>
        </div>
        </div>
    );
}
