import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  useCallback,
} from "react";
import { cn } from "@/lib/utils";
import { useResponsiveSlides } from "@/hooks/use-responsive-slides";

export interface SliderRefType {
  next: () => void;
  prev: () => void;
}

const Slider = forwardRef<
  SliderRefType,
  {
    children: React.ReactNode;
    onActiveSlideChange?: (activeSlide: number) => void;
    slides: number | { [breakpoint: string]: number };
    autoSlide?: boolean;
    autoSlideInterval?: number;
    loop?: boolean;
  }
>(
  (
    { children, onActiveSlideChange, autoSlide, autoSlideInterval, slides },
    ref
  ) => {
    const scrollContainer = useRef<HTMLDivElement>(null);
    const firstItemRef = useRef<HTMLDivElement>(null);
    const [itemWidth, setItemWidth] = useState(0);
    const [activeSlide, setActiveSlide] = useState(0);
    const effectiveSlides = useResponsiveSlides(slides);

    useImperativeHandle(ref, () => ({
      next: () => scrollBy(1),
      prev: () => scrollBy(-1),
    }));

    const scrollBy = (direction: number) => {
      if (scrollContainer.current && itemWidth) {
        scrollContainer.current.scrollTo({
          left: scrollContainer.current.scrollLeft + direction * itemWidth,
          behavior: "smooth",
        });
      }
    };

    useEffect(() => {
      if (!autoSlide) return;
      const interval = setInterval(() => {
        if (activeSlide < React.Children.count(children) - 1) {
          scrollBy(1);
        } else {
          scrollBy(-activeSlide); // Reset to the first slide
        }
      }, autoSlideInterval || 3000);

      return () => {
        clearInterval(interval);
      };
    }, [children, itemWidth, autoSlide, autoSlideInterval]);

    const updateActiveSlide = useCallback(() => {
      if (scrollContainer.current && itemWidth) {
        const index = Math.round(
          scrollContainer.current.scrollLeft / itemWidth
        );

        if (index !== activeSlide) {
          setActiveSlide(index);
          onActiveSlideChange?.(index);
        }
      }
    }, [itemWidth, activeSlide, onActiveSlideChange]);

    useEffect(() => {
      if (scrollContainer.current && effectiveSlides) {
        const containerWidth = scrollContainer.current.offsetWidth;
        const gap = 32;
        const totalGap = gap * (effectiveSlides - 1);
        const availableWidth = containerWidth - totalGap;

        const width = availableWidth / effectiveSlides;
        setItemWidth(width);
      }
    }, [effectiveSlides, children]);

    useEffect(() => {
      const container = scrollContainer.current;
      if (!container) return;

      container.addEventListener("scroll", updateActiveSlide, {
        passive: true,
      });
      return () => {
        container.removeEventListener("scroll", updateActiveSlide);
      };
    }, [updateActiveSlide]);

    const calculateVisibleSlides = useCallback(() => {
      if (scrollContainer.current && itemWidth) {
        const containerWidth = scrollContainer.current.offsetWidth;
        const padding = 32; // p-4 = 16px on each side
        const availableWidth = containerWidth - padding;
        const gap = 32;

        const slidesCount = Math.floor((availableWidth + gap) / itemWidth);

        return Math.max(1, slidesCount);
      }

      return 1;
    }, [itemWidth]);

    const visibleSlidesCount = calculateVisibleSlides();

    return (
      <div
        ref={scrollContainer}
        className={cn(
          "w-full overflow-x-scroll flex gap-8 p-4 hide-scrollbar snap-x snap-mandatory"
        )}
        style={{ height: "100%" }}
      >
        {React.Children.map(children, (child, index) =>
          React.isValidElement(child) ? (
            <div
              ref={index === 0 ? firstItemRef : null}
              style={{ minWidth: `${itemWidth}px` }}
            >
              {child}
            </div>
          ) : null
        )}

        {/* Spacer to fill remaining height dynamically */}
        <div
          style={{
            minWidth: itemWidth * (visibleSlidesCount - 0.5) - 32,
            flex: "1 1 auto",
            height: "100%",
          }}
        />
      </div>
    );
  }
);

Slider.displayName = "Slider";

export default Slider;

export function SliderItem({
  children,
  className,
}: React.ComponentProps<"div">) {
  return <div className={cn("snap-start", className)}>{children}</div>;
}
