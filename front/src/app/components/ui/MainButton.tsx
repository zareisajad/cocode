import { LoadingSpinner } from "./LoadingSpinner";

export function MainButton({
  className = "",
  children,
  outline = false,
  processing = false,
  ...props
}: Props) {
  const isDisabled = processing || props.disabled;

  return (
    <button
      className={`
        w-full p-2 text-sm font-medium flex justify-center items-center rounded-lg cursor-pointer
        ${outline
          ? `bg-transparent text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white transition
             ${isDisabled ? "opacity-50 cursor-not-allowed hover:bg-transparent hover:text-blue-500" : ""}`
          : `bg-blue-500 text-white border border-transparent hover:bg-blue-600 transition
             ${isDisabled ? "opacity-50 cursor-not-allowed hover:bg-blue-500" : ""}`
        }
        ${className}
      `}
      disabled={isDisabled}
      {...props}
    >
      {processing ? <LoadingSpinner /> : children}
    </button>
  );
}

