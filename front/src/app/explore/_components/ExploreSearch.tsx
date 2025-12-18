"use client";

import { useState } from "react";
import { SearchInput } from "@components/ui/SearchInput";

export function ExploreSearch({ initialQuery }: { initialQuery: string }) {
  const [query, setQuery] = useState("");

  return (
    <SearchInput placeholder="جستجوی کاربر، گروه، مهارت و ..." value={query} onChange={setQuery} autoFocus />
  );
}

