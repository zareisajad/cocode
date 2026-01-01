"use client";

import { InputHTMLAttributes, ReactNode } from "react";

type GenericInputProps = {
  value: string;
  onChange: (value: string) => void;
  type?: string; 
  icon?: ReactNode;
  loading?: boolean;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "type">;

export function Input({
  value,
  onChange,
  type = "text",
  icon,
  loading = false,
  className = "",
  placeholder,
  disabled,
  ...props
}: GenericInputProps) {
  return (
    <div
      className={`
        relative w-full
        ${disabled ? "opacity-60 pointer-events-none" : ""}
      `}
    >
      {icon && (
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400">
          {icon}
        </div>
      )}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
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
          ${icon ? "pl-12" : "pl-4"} 
          ${className}
        `}
        {...props}
      />
    </div>
  );
}

