"use client";

import { createContext, useContext } from "react";

export type Chat = {
  id: string;
  name: string;
  lastMessage: string;
};

const ChatsContext = createContext<Chat[] | null>(null);

export function ChatsProvider({
  chats,
  children,
}: {
  chats: Chat[];
  children: React.ReactNode;
}) {
  return (
    <ChatsContext.Provider value={chats}>
      {children}
    </ChatsContext.Provider>
  );
}

export function useChats() {
  const ctx = useContext(ChatsContext);
  if (!ctx) throw new Error("useChats must be used inside ChatsProvider");
  return ctx;
}

