"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";

import AnimatedCounter from "../components/AnimatedCounter";
import { useI18n } from "@/i18n/context";
import { Button } from "@/components";
import HeroExperience from "@/components/models/hero-models/HeroExperience";

gsap.registerPlugin(useGSAP);

const Hero = () => {
  const { dictionary } = useI18n();
  const words = [...dictionary.hero.words, ...dictionary.hero.words].map((text, index) => ({ text, imgPath: ["/images/ideas.svg", "/images/concepts.svg", "/images/designs.svg", "/images/code.svg"][index % 4] }));
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      gsap.fromTo(
        ".hero-line",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1,
          ease: "power2.inOut",
        },
      );
    },
    { scope: container },
  );

  return (
    <section ref={container} id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10" aria-hidden="true">
        <Image
          src="/images/bg.png"
          alt=""
          width={418}
          height={327}
          loading="eager"
        />
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center w-full md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                <span className="hero-line block">
                  {dictionary.hero.shaping}
                  <span className="slide">
                    <span className="wrapper">
                      {words.map((word, index) => (
                        <span
                          key={`${word.text}-${index}`}
                          className="flex items-center md:gap-3 gap-1 pb-2"
                        >
                          <Image
                            src={word.imgPath}
                            alt=""
                            width={24}
                            height={24}
                            className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                          />
                          <span className="text-[#00A19B]">{word.text}</span>
                        </span>
                      ))}
                    </span>
                  </span>
                </span>
                <span className="hero-line block">{dictionary.hero.line2}</span>
                <span className="hero-line block">{dictionary.hero.line3}</span>
              </h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              {dictionary.hero.intro}
            </p>

            <Button
              text={dictionary.hero.explore}
              className="md:w-80 md:h-16 w-60 h-12"
              targetId="counter"
            />
          </div>
        </header>

        {/* RIGHT: 3D Model or Visual */}
        <div aria-hidden="true">
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </div>
      </div>

      <div id="counter" className="scroll-mt-[15vh]">
        <AnimatedCounter />
      </div>
    </section>
  );
};

export default Hero;
