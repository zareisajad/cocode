"use client";

import { useState } from "react";
import { Input } from "@components/ui/Input";
import { SearchIcon } from "@/app/components/ui/icons";

export function ExploreSearch({ initialQuery }: { initialQuery: string }) {
  const [query, setQuery] = useState("");

  return (
    <Input icon={<SearchIcon />} placeholder="جستجوی کاربر، گروه، مهارت و ..." value={query} onChange={setQuery} autoFocus />
  );
}

