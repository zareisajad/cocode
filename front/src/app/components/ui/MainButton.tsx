import { ButtonHTMLAttributes, ReactNode } from "react";
import { LoadingSpinner } from "./LoadingSpinner";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
  outline?: boolean;
  processing?: boolean;
}

export function MainButton({ className = "", children, outline, processing = false, ...props }: Props) {
  return (
    <button
      className={`${outline ? 'text-black border-black bg-white' : 'bg-black border-black text-white'} flex justify-center items-center w-full border p-3 text-sm font-medium ${className}`}
      disabled={processing || props.disabled}
      {...props}
    >
      {processing ? (
        <LoadingSpinner />
      ) : (
        children
      )}
    </button>
  );
}
