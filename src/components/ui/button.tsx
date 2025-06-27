import { cn } from "@/lib/utils";
import type React from "react";

interface ButtonProps extends React.ComponentProps<"button"> {
  variant: "default" | "outline" | "tag";
}

function Button({ children, variant, className, ...props }: ButtonProps) {
  const variants = {
    default: "py-4 px-8 bg-white hover:bg-white/80 text-dark text-sm font-[600]",
    outline: "py-2 px-6 bg-transparent hover:bg-white text-white hover:text-dark text-sm uppercase font-[500]",
    tag: "py-2 px-6 bg-transparent text-white text-xs uppercase font-[600] leading-full",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center w-fit font-syne leading-6 border-1 border-white rounded-full transition-all duration-300",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
