"use client";

import Avatar from "@/app/components/ui/Avatar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useChats } from "../_context/ChatsContext";
import { Input } from "@components/ui/Input";
import { SearchIcon } from "@/app/components/ui/icons";

export default function ChatList() {
  const chats = useChats();
  const pathname = usePathname();
  const activeId = pathname?.split("/").pop();

  return (
    <div className="w-100 bg-gray-800 p-4 hidden md:flex flex-col gap-3">
      <Input icon={<SearchIcon />} placeholder="جستجو" />

      {chats.map((chat) => {
        const isActive = chat.id === activeId;

        return (
          <Link
            key={chat.id}
            href={`/chats/${chat.id}`}
            className={`
              flex items-center gap-3 p-3 rounded-lg
              hover:bg-gray-900
              ${isActive ? "bg-gray-900" : ""}
            `}
          >
            <Avatar
              src="https://sajadzarei.ir/images/me.webp"
              imgClassName="w-15 h-15"
            />
            <div className="flex-1 space-y-2 min-w-0">
              <p className="font-semibold">{chat.name}</p>
              <p className="text-sm text-neutral-400 truncate">
                {chat.lastMessage}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

