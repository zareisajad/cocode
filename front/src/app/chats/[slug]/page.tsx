// app/chats/[slug]/page.tsx
"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import ChatWindow from "../_components/ChatWindow";
import { useChats } from "../_context/ChatsContext";

type Message = { id: string; text: string; sender: "me" | "other" };

export default function ChatSlugPage() {
  const { slug } = useParams() as { slug: string };
  const chats = useChats();

  const chat = chats.find((c) => c.id === slug);

  const [messages, setMessages] = useState<Record<string, Message[]>>({
    "1": [
      { id: "1", text: "سلام سجاد", sender: "other" },
      { id: "2", text: "سلام", sender: "me" },
    ],
    "group-42": [
      {
        id: "1",
        text: "شرکت در جلسه امروز برای همه اعضا ضروریه",
        sender: "other",
      },
    ],
  });

  function handleSend(text: string) {
    setMessages((prev) => ({
      ...prev,
      [slug]: [
        ...(prev[slug] || []),
        { id: Date.now().toString(), text, sender: "me" },
      ],
    }));
  }

  return (
    <ChatWindow
      messages={messages[slug] || []}
      onSend={handleSend}
      chatName={chat?.name ?? "چت"}
    />
  );
}

