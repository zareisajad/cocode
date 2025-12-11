import { ButtonHTMLAttributes, ReactNode } from "react";
import { LoadingSpinner } from "./LoadingSpinner";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
  outline?: boolean;
  processing?: boolean;
}

export function MainButton({
  className = "",
  children,
  outline = false,
  processing = false,
  ...props
}: Props) {
  return (
    <button
      className={`
        w-full p-2 text-sm font-medium flex justify-center items-center rounded-lg cursor-pointer
        ${outline 
          ? "bg-transparent text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white transition" 
          : "bg-blue-500 text-white border border-transparent hover:bg-blue-600 transition"}
        ${className}
      `}
      disabled={processing || props.disabled}
      {...props}
    >
      {processing ? <LoadingSpinner /> : children}
    </button>
  );
}
