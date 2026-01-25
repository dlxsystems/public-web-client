"use client";

import Slider from "react-slick";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { useRef } from "react";
import { customerStories } from "../config/data";
import { CustomerStoryCard } from "./ui/cards.component";

const sliderSettings = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 800,
  cssEase: "cubic-bezier(0.23, 1, 0.32, 1)",
  autoplay: true,
  autoplaySpeed: 8000,
  pauseOnHover: true,
  arrows: false,
  dots: false,
  adaptiveHeight: true,
};

export function Story() {
  const sliderRef = useRef<Slider | null>(null);

  return (
    <div className="relative mx-auto">
      <Slider ref={sliderRef} {...sliderSettings}>
        {customerStories.map((story) => (
          <div key={story.id}>
            <CustomerStoryCard story={story} />
          </div>
        ))}
      </Slider>

      {/* Navigation Controls */}
      <div className="flex justify-end gap-3">
        <button
          onClick={() => sliderRef.current?.slickPrev()}
          className="group h-14 w-14 rounded-full bg-white border border-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-500 shadow-xl shadow-black/5"
          aria-label="Previous story"
        >
          <IconChevronLeft
            size={24}
            className="group-hover:-translate-x-0.5 transition-transform"
          />
        </button>

        <button
          onClick={() => sliderRef.current?.slickNext()}
          className="group h-14 w-14 rounded-full bg-white border border-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-500 shadow-xl shadow-black/5"
          aria-label="Next story"
        >
          <IconChevronRight
            size={24}
            className="group-hover:translate-x-0.5 transition-transform"
          />
        </button>
      </div>
    </div>
  );
}
