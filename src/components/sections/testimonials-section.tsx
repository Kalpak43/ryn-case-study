import { useRef, useState } from "react";
import TestimonialCard from "../testimonial-card";
import Slider, { SliderItem, type SliderRefType } from "../ui/slider";
import Section from "../ui/section";

const testimonials = [
  {
    profileImage: "/assets/profile.png",
    name: "Floyd Miles",
    company: "eBay",
    testimonial:
      "Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers.",
  },
  {
    profileImage: "/assets/profile.png",
    name: "John Doe",
    company: "Tech Innovations",
    testimonial:
      "Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers.",
  },
  {
    profileImage: "/assets/profile.png",
    name: "John Doe",
    company: "Tech Innovations",
    testimonial:
      "Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers.",
  },
];

function Testimonials() {
  const sliderRef = useRef<SliderRefType>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <Section>
      <h2 className="h2-bold">
        <img
          src="/assets/star.svg"
          alt="star"
          className="w-8 h-8 inline align-middle mb-1"
        />
        <span> What they say</span>
      </h2>

      <div>
        <Slider
          ref={sliderRef}
          slides={1}
          onActiveSlideChange={setActiveSlide}
          autoSlide
        >
          {testimonials.map((testimonial, index) => (
            <SliderItem>
              <TestimonialCard
                key={index}
                profileImage={testimonial.profileImage}
                name={testimonial.name}
                company={testimonial.company}
                testimonial={testimonial.testimonial}
              />
            </SliderItem>
          ))}
        </Slider>

        <div className="flex items-center justify-center gap-4">
          <button
            className="bg-white disabled:bg-gray rounded-full h-10 w-10 inline-flex items-center justify-center"
            onClick={() => {
              if (sliderRef.current) {
                sliderRef.current.prev();
              }
            }}
            disabled={activeSlide === 0}
          >
            <img src="/assets/arrow-left.svg" alt="" />
          </button>
          <button
            className="bg-white disabled:bg-gray rounded-full h-10 w-10 inline-flex items-center justify-center"
            onClick={() => {
              if (sliderRef.current) {
                sliderRef.current.next();
              }
            }}
            disabled={activeSlide === testimonials.length - 1}
          >
            <img src="/assets/arrow-right.svg" alt="" />
          </button>
        </div>
      </div>
    </Section>
  );
}

export default Testimonials;
