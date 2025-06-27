import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ComponentProps<"button"> {
  variant: "default" | "outline" | "tag";
  asChild?: boolean;
}

function Button({
  children,
  variant,
  className,
  asChild = false,
  ...props
}: ButtonProps) {
  const variants = {
    default:
      "py-4 px-8 bg-white hover:bg-white/80 text-dark text-sm font-[600]",
    outline:
      "py-2 px-6 bg-transparent hover:bg-white text-white hover:text-dark text-sm uppercase font-[500]",
    tag: "py-2 px-6 bg-transparent text-white text-xs uppercase font-[600] leading-full",
  };

  const buttonClasses = cn(
    "inline-flex items-center justify-center w-fit font-syne leading-6 border-1 border-white rounded-full transition-all duration-300",
    variants[variant],
    className
  );

  if (asChild) {
    const child = React.Children.only(children) as React.ReactElement<any>;
    return React.cloneElement(child, {
      className: cn(buttonClasses, child.props.className),
      ...props,
      ...child.props,
    });
  }

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
}

export default Button;
