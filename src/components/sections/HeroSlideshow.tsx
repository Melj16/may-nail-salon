"use client";

import { useState, useEffect, useRef } from "react";

const SLIDES = [
  {
    id: 1,
    desktopImage: "/hero/Slide-1.jpg",
    mobileImage: "/hero/Slide-1-mobile.jpg",
  },
  {
    id: 2,
    desktopImage: "/hero/Slide-2.jpg",
    mobileImage: "/hero/Slide-2-mobile.jpg",
  },
  {
    id: 3,
    desktopImage: "/hero/Slide-3.jpg",
    mobileImage: "/hero/Slide-3-mobile.jpg",
  },
];

export function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const slideRef = useRef<HTMLDivElement>(null);

  const extendedSlides = [
    SLIDES[SLIDES.length - 1], // clone last
    ...SLIDES,
    SLIDES[0], // clone first
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === extendedSlides.length - 1 ? prev : prev + 1
      );
    }, 5000);
  
    return () => clearInterval(timer);
  }, [extendedSlides.length]);

  const handleTransitionEnd = () => {
    if (currentIndex === extendedSlides.length - 1) {
      // Jump from fake last to real first
      setIsTransitioning(false);
      setCurrentIndex(1);
    }

    if (currentIndex === 0) {
      // Jump from fake first to real last
      setIsTransitioning(false);
      setCurrentIndex(extendedSlides.length - 2);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
    }
  }, [isTransitioning]);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={slideRef}
        onTransitionEnd={handleTransitionEnd}
        className={`flex ${
          isTransitioning
            ? "transition-transform duration-700 ease-in-out"
            : ""
        }`}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {extendedSlides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <picture>
              <source
                media="(min-width: 768px)"
                srcSet={slide.desktopImage}
              />
              <img
                src={slide.mobileImage}
                alt="Hero Slide"
                className="w-full h-auto object-cover"
              />
            </picture>
          </div>
        ))}
      </div>

      {/* Indicators (match real slides only) */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index + 1)}
            className={`h-2 w-2 rounded-full ${
              index + 1 === currentIndex
                ? "bg-zinc-900"
                : "bg-zinc-400 hover:bg-zinc-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
