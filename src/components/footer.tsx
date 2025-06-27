import { ArrowUpRight } from "lucide-react";
import Marquee from "react-fast-marquee";

function Footer() {
  return (
    <footer className="pt-16">
      <Marquee>
        <p
          className="font-syne font-[700] text-[3.5rem] leading-[5.5rem] uppercase mx-10"
          style={{
            WebkitTextStroke: "2px #cbcbcb",
            WebkitTextFillColor: "transparent",
            color: "transparent",
          }}
        >
          WEBFLOW
        </p>
        <img
          src="/assets/star.svg"
          alt="star"
          className="w-14 h-14 inline align-middle mb-1"
        />
        <p
          className="font-syne font-[700] text-[3.5rem] leading-[5.5rem] uppercase mx-10"
          style={{
            WebkitTextStroke: "2px #cbcbcb",
            WebkitTextFillColor: "transparent",
            color: "transparent",
          }}
        >
          FIGMA
        </p>
        <img
          src="/assets/star.svg"
          alt="star"
          className="w-14 h-14 inline align-middle mb-1"
        />
        <p
          className="font-syne font-[700] text-[3.5rem] leading-[5.5rem] uppercase mx-10"
          style={{
            WebkitTextStroke: "2px #cbcbcb",
            WebkitTextFillColor: "transparent",
            color: "transparent",
          }}
        >
          DESIGNER
        </p>
        <img
          src="/assets/star.svg"
          alt="star"
          className="w-14 h-14 inline align-middle mb-1"
        />
        <p
          className="font-syne font-[700] text-[3.5rem] leading-[5.5rem] uppercase mx-10"
          style={{
            WebkitTextStroke: "2px #cbcbcb",
            WebkitTextFillColor: "transparent",
            color: "transparent",
          }}
        >
          DEVELOPER
        </p>
        <img
          src="/assets/star.svg"
          alt="star"
          className="w-14 h-14 inline align-middle mb-1"
        />
      </Marquee>
      <div className="max-w-[1440px] mx-auto px-25 pt-28 pb-8 space-y-8">
        <div className="space-y-8">
          <div className="text-center space-y-8">
            <h1>LET’S TALK!</h1>
            <p className="text-white">
              rehanurraihan@gmail.com
              <ArrowUpRight className="inline" />
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between font-syne text-sm">
          <p>&copy; Rehan Raihan - 2023</p>
          <div className="flex items-center gap-8">
            <a href="/" className="font-syne text-sm">
              Dribble
            </a>
            <a href="/" className="font-syne text-sm">
              Behance
            </a>
            <a href="/" className="font-syne text-sm">
              Twitter
            </a>
            <a href="/" className="font-syne text-sm">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
