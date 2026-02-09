"use client";

import { useState, useEffect } from "react";

const SLIDES = [
  {
    id: 1,
    title: "Welcome to May Nail Spa",
    subtitle: "Where beauty meets relaxation",
    bgClass: "bg-gradient-to-br from-rose-100 to-pink-200",
  },
  {
    id: 2,
    title: "Premium Nail Care",
    subtitle: "Expert manicures & pedicures",
    bgClass: "bg-gradient-to-br from-violet-100 to-purple-200",
  },
  {
    id: 3,
    title: "Book Your Visit",
    subtitle: "Treat yourself today",
    bgClass: "bg-gradient-to-br from-amber-100 to-orange-200",
  },
];

export function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden">
      {SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`w-full flex flex-col items-center justify-center transition-opacity duration-700 ${slide.bgClass} ${
            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <h2 className="text-3xl font-bold text-zinc-900 sm:text-4xl md:text-5xl">
            {slide.title}
          </h2>
          <p className="mt-2 text-lg text-zinc-700 sm:text-xl">
            {slide.subtitle}
          </p>
        </div>
      ))}

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === currentSlide ? "bg-zinc-900" : "bg-zinc-400 hover:bg-zinc-600"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
