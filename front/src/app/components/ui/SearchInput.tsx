"use client";

import { InputHTMLAttributes } from "react";
import SearchIcon from "./icons/SearchIcon";

type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
  loading?: boolean;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "type">;

export function SearchInput({
  value,
  onChange,
  loading = false,
  className = "",
  disabled,
  ...props
}: SearchInputProps) {
  return (
    <div
      className={`
        relative w-full
        ${disabled ? "opacity-60 pointer-events-none" : ""}
      `}
    >
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400">
        <SearchIcon />
        </div>
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="جستجو: کاربر، گروه، مهارت، چالش و ..."
        disabled={disabled}
        className={`
          w-full 
          rounded-xl
          bg-gray-900
          px-4 py-5
          text-neutral-100
          outline-none
          border border-gray-900
          focus:border-blue-700
          transition
          ${className}
        `}
        {...props}
      />
    </div>
  );
}

