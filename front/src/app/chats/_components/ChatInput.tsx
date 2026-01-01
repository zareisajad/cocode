"use client";

import SendIcon from "@/app/components/ui/icons/SendIcon";
import { useState } from "react";

type ChatInputProps = {
  onSend: (message: string) => void;
};

export default function ChatInput({ onSend }: ChatInputProps) {
  const [message, setMessage] = useState("");

  function handleSend() {
    if (!message.trim()) return;
    onSend(message.trim());
    setMessage("");
  }

  return (
    <div className="flex gap-2 p-0 md:p-4 bg-gray-900">
      <button onClick={handleSend} className="px-4 py-3 bg-blue-700 rounded-xl cursor-pointer">
        <SendIcon />
      </button>
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="یه چیزی تایپ کن..."
        className="flex-1 border rounded-xl border-gray-700 transition focus:border-blue-700 p-5 outline-none"
      />
   </div>
  );
}

