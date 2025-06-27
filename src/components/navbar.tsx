import { cn } from "@/lib/utils";
import Button from "./ui/button";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const routes = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <header className="max-w-[1440px] mx-auto flex items-center justify-between py-8 px-12 lg:px-25">
      <img src="/logo.svg" alt="Logo" className="h-8" />

      <nav
        className={cn(
          "max-md:fixed max-md:inset-0 max-md:backdrop-blur-md max-md:bg-dark/70 max-md:z-50 max-md:p-8 max-md:py-12 flex max-md:flex-col max-md:gap-4 transition-all duration-300",
          open
            ? "max-md:translate-y-0 max-md:opacity-100"
            : "max-md:-translate-y-full max-md:opacity-0"
        )}
      >
        <button
          className="bg-white disabled:bg-gray rounded-full h-10 w-10 inline-flex items-center justify-center ml-auto md:hidden"
          onClick={() => setOpen(false)}
        >
          <X className="text-dark" />
        </button>

        {routes.map((route) => (
          <a
            key={route.name}
            href={route.path}
            className={cn(
              "py-2 px-6 font-syne leading-5 rounded-full text-white hover:bg-white/80 hover:text-dark transition-colors duration-300",
              {
                "bg-white text-dark": window.location.pathname === route.path,
              }
            )}
          >
            {route.name}
          </a>
        ))}

        <Button variant="outline" className="md:hidden w-full mt-8">
          Hire me
        </Button>
      </nav>

      <Button
        variant="outline"
        className="md:hidden"
        onClick={() => {
          setOpen(true);
        }}
      >
        <Menu />
      </Button>

      <Button variant="outline" className="max-md:hidden">
        Hire me
      </Button>
    </header>
  );
}

export default Navbar;
