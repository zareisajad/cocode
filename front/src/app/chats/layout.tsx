"use client";

import ChatList from "./_components/ChatList";
import { ChatsProvider } from "./_context/ChatsContext";

export default function ChatsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const chats = [
    { id: "1", name: "سجاد زارعی", lastMessage: "ساعت 3 آپلود میشه" },
    {
      id: "group-42",
      name: "گروه یادگیری پایتون",
      lastMessage: "شرکت در جلسه امروز برای همه اعضا ضروریه و ۱۰۰ امتیاز داره",
    },
  ];

  return (
    <ChatsProvider chats={chats}>
      <div className="flex h-screen bg-neutral-950 text-neutral-100">
        <ChatList />
        <div className="flex-1 flex flex-col">{children}</div>
      </div>
    </ChatsProvider>
  );
}

