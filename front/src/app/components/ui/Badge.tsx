"use client";

interface BadgeProps {
  text: string;
  className?: string;
}

export default function Badge({ text, className = "" }: BadgeProps) {
  return (
    <div
     className={`badge uppercase absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-green-700 text-white text-xs px-2 py-1 rounded-lg ${className}`}
    >
      {text}
    </div>
  );
}
