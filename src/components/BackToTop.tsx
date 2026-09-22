"use client";

import { useEffect, useState } from "react";

const SCROLL_THRESHOLD = 400;

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setIsVisible(window.scrollY > SCROLL_THRESHOLD);

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed end-5 bottom-5 z-[90] grid size-12 place-items-center rounded-full border border-white/20 bg-black/80 text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#00A19B] hover:bg-[#00A19B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00A19B] ${
        isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="size-5">
        <path d="m18 15-6-6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
