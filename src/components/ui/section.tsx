import { cn } from "@/lib/utils";
import type React from "react";

function Section({
  children,
  className,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section className={cn("px-8 md:px-12 lg:px-25 py-16 space-y-8", className)} {...props}>
      {children}
    </section>
  );
}

export default Section;
