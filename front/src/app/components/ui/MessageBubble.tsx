
"use client";

type MessageBubbleProps = {
  text: string;
  sender: "me" | "other";
  timestamp?: string; // optional, can show time
};

export function MessageBubble({ text, sender, timestamp }: MessageBubbleProps) {
  const isMe = sender === "me";

  return (
    <div
      className={`flex flex-row-reverse ${isMe ? "justify-end" : "justify-start"} w-full`}
    >
      <div
        className={`
          max-w-[75%]
          px-4 py-3
          rounded-2xl
          break-words
          ${isMe ? "bg-purple-700 text-white rounded-tr-none" : "bg-neutral-700 text-neutral-100 rounded-tl-none"}
        `}
      >
        <p className="text-sm">{text}</p>
        {timestamp && (
          <span className="text-xs text-neutral-400 mt-1 block text-right">
            {timestamp}
          </span>
        )}
      </div>
    </div>
  );
}

