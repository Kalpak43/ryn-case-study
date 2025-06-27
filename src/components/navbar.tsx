import { cn } from "@/lib/utils";
import Button from "./ui/button";

const routes = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  return (
    <header className="max-w-[1440px] mx-auto flex items-center justify-between py-8 px-25">
      <img src="/logo.svg" alt="Logo" className="h-8" />

      <nav>
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
      </nav>

      <Button variant="outline">Hire me</Button>
    </header>
  );
}

export default Navbar;
