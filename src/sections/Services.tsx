"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useI18n } from "@/i18n/context";

const Services = () => {
  const { dictionary } = useI18n();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeAll = () => setActiveIndex(null);

    const handlePointerDown = (event: PointerEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        closeAll();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  const toggleActive = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="services" className="px-5 md:px-20 mt-10 md:mt-20">
      <div className="w-full">
        <h2 className="text-white text-3xl md:text-5xl font-semibold mb-10">
          {dictionary.servicesTitle}
        </h2>

        <div
          ref={containerRef}
          onMouseLeave={() => setActiveIndex(null)}
          className="rounded-2xl border border-white/10 overflow-hidden"
        >
          {dictionary.services.map((service, index) => {
            const isActive = index === activeIndex;

            return (
              <motion.div
                key={service.title}
                layout
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => toggleActive(index)}
                animate={{
                  backgroundColor: isActive
                    ? "rgba(217, 236, 255, 0.08)"
                    : "rgba(255, 255, 255, 0)",
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="relative flex flex-col gap-4 border-b border-white/10 px-8 py-10 last:border-b-0 md:flex-row md:items-start md:gap-24 md:px-16 md:py-12 lg:gap-[180px] xl:gap-[260px]"
              >
                <span className="text-lg md:text-xl text-[#00A19B] font-mono md:pt-2">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="flex-1">
                  <h3
                    className={`text-2xl md:text-4xl font-semibold transition-colors duration-300 ${
                      isActive ? "text-[#00A19B]" : "text-white"
                    }`}
                  >
                    {service.title}
                  </h3>

                  <div className="mt-3 flex flex-wrap items-center gap-2 text-xs md:text-sm text-white-50">
                    {service.tags.map((tag, tagIndex) => (
                      <span key={tag} className="flex items-center gap-2">
                        {tag}
                        {tagIndex < service.tags.length - 1 && (
                          <span className="size-1 rounded-full bg-white-50" />
                        )}
                      </span>
                    ))}
                  </div>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="mt-6 max-w-2xl text-sm md:text-base text-white-50">
                          {service.description}
                        </p>

                        <a
                          href="#contact"
                          onClick={(event) => event.stopPropagation()}
                          className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-white transition-colors duration-300 hover:bg-white hover:text-black"
                        >
                          {dictionary.discuss}
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
