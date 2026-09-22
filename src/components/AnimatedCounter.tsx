"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

import { counterItems } from "@/constants";
import { useI18n } from "@/i18n/context";

gsap.registerPlugin(useGSAP);

const AnimatedCounter = () => {
  const { dictionary } = useI18n();
  const counterRef = useRef<HTMLDivElement>(null);
  const numberRefs = useRef<Array<HTMLSpanElement | null>>([]);

  useGSAP(
    () => {
      const container = counterRef.current;
      const numbers = numberRefs.current;

      if (!container || numbers.some((number) => !number)) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;

          observer.disconnect();

          const timeline = gsap.timeline();

          counterItems.forEach((item, index) => {
            const number = numbers[index];

            if (!number) return;

            timeline.fromTo(
              number,
              { innerText: 0 },
              {
                innerText: item.value,
                duration: 2,
                ease: "power2.out",
                snap: { innerText: 1 },
              },
              index * 0.1,
            );
          });
        },
        { threshold: 0.2 },
      );

      observer.observe(container);

      return () => observer.disconnect();
    },
    { scope: counterRef },
  );

  return (
    <div ref={counterRef} className="padding-x-lg xl:mt-0 mt-32">
      <ul className="mx-auto grid grid-cols-2 gap-4 xl:grid-cols-4 xl:gap-7">
        {counterItems.map((item, index) => (
          <li
            key={item.label}
            className="bg-zinc-900 rounded-lg p-5 md:p-10 flex flex-col justify-center"
          >
            <span className="sr-only">
              {item.value}
              {item.suffix} {dictionary.counters[index]}
            </span>
            <p
              className="counter-number text-white-50 text-3xl md:text-5xl font-bold mb-2 [contain:layout_paint] [font-variant-numeric:tabular-nums]"
              aria-hidden="true"
            >
              <span
                ref={(element) => {
                  numberRefs.current[index] = element;
                }}
              >
                {item.value}
              </span>
              <span className="text-[#00A19B]">{item.suffix}</span>
            </p>
            <p
              className="text-white-50 text-sm md:text-lg"
              aria-hidden="true"
            >
              {dictionary.counters[index]}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnimatedCounter;
