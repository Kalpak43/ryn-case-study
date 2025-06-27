import { useState, useEffect } from "react";

const breakpoints = {
  base: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

export function useResponsiveSlides(
  slides: number | { [key: string]: number }
): number {
  const [currentSlides, setCurrentSlides] = useState(
    typeof slides === "number" ? slides : 1
  );

  useEffect(() => {
    if (typeof slides === "number") {
      setCurrentSlides(slides);
      return;
    }

    const updateSlides = () => {
      const width = window.innerWidth;
      let selected = 1;

      Object.entries(breakpoints).forEach(([key, bp]) => {
        if (width >= bp && slides[key] !== undefined) {
          selected = slides[key];
        }
      });

      setCurrentSlides(selected);
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, [slides]);

  return currentSlides;
}
