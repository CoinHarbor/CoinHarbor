import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export default function Button({
  className,
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 cursor-pointer",
        variant === "primary"
          ? "bg-emerald-600 text-white shadow-lg hover:bg-emerald-500 hover:shadow-emerald-500/40"
          : "border border-slate-600 bg-slate-900 text-white hover:bg-slate-800 hover:border-emerald-500",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}