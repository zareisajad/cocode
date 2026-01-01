"use client";

import { MessageBubble } from "@/app/components/ui/MessageBubble";
import ChatInput from "./ChatInput";
import { ChevronLeft } from "@/app/components/ui/icons";

type ChatWindowProps = {
  messages: { id: string; text: string; sender: "me" | "other" }[];
  onSend: (message: string) => void;
};

export default function ChatWindow({ messages, onSend, chatName }: ChatWindowProps) {
  return (
    <div className="flex-1 flex flex-col bg-gray-900 py-4 px-4 md:px-8">

      <div className="flex-shrink-0 py-4 mb-5 flex items-center gap-2">
        <ChevronLeft />
        <h2>{chatName}</h2>
      </div>

      <div className="flex flex-col flex-1 overflow-y-auto  gap-3">
        {messages.map((msg) => (
          <MessageBubble key={msg.id} text={msg.text} sender={msg.sender} />
        ))}
      </div>

      <ChatInput onSend={onSend} />
    </div>
  );
}

