"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    image: "/asset/images.jpg",
    alt: "Gedung Dinas Ketenagakerjaan Kabupaten Sleman",
  },
  {
    image: "/asset/IMG_3615.jpg",
    alt: "Pelayanan Dinas Ketenagakerjaan Kabupaten Sleman",
  },
];

export default function BannerCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setActiveIndex((index + slides.length) % slides.length);
  };

  return (
    <section
      aria-label="Banner informasi Disnaker Sleman"
      className="relative w-full overflow-hidden bg-white"
    >
      <div className="relative h-[calc(100svh-76px)] min-h-[420px] w-full">
        {slides.map((slide, index) => (
          <img
            key={slide.image}
            src={slide.image}
            alt={slide.alt}
            aria-hidden={index !== activeIndex}
            className={`pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/25" />

        <button
          type="button"
          aria-label="Banner sebelumnya"
          onClick={() => goToSlide(activeIndex - 1)}
          className="absolute left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/20 text-3xl text-white backdrop-blur-sm transition hover:bg-black/45 focus:outline-none focus:ring-2 focus:ring-white"
        >
          ‹
        </button>
        <button
          type="button"
          aria-label="Banner berikutnya"
          onClick={() => goToSlide(activeIndex + 1)}
          className="absolute right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/20 text-3xl text-white backdrop-blur-sm transition hover:bg-black/45 focus:outline-none focus:ring-2 focus:ring-white"
        >
          ›
        </button>

        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.image}
              type="button"
              aria-label={`Pilih banner ${index + 1}`}
              aria-current={index === activeIndex}
              onClick={() => goToSlide(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === activeIndex ? "w-8 bg-white" : "w-2.5 bg-white/55 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
