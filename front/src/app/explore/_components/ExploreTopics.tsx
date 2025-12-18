"use client";
import React from "react";

const topics = [
    "frontend","backend","fullstack","javascript","typescript","python",
"react","nextjs","nodejs","django","html","css","tailwind","ui-design",
"ux","git","github","docker","linux","devops","database","postgres",
"mongodb","api-design","rest","graphql","algorithms","data-structures",
"testing","unit-testing","mobile-dev","flutter","react-native","machine-learning",
"ai","deep-learning","cloud","aws","azure","gcp","security","cybersecurity",
"networking"
];

export default function ExploreTopics() {
    return (
        <div className="my-10">
        <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">مهارت ها</h3>
        </div>

        <div className="w-full flex items-center flex-wrap gap-2">
        {topics.map((t, i) => (
            <span
            key={`${t}-${i}`}
            className="
            py-3 px-4
            rounded-xl
            bg-purple-900
            text-sm
            text-neutral-300
            hover:bg-purple-800
            hover:border-neutral-700
            transition
            flex items-center justify-center
            cursor-pointer
            "
            >
            {t}
            </span>
        ))}
        </div>
        </div>
    );
}
