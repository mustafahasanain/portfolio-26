"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { techStackIcons } from "../constants";
import { TitleHeader } from "@/components";
import TechIcon from "@/components/models/tech-logos/TechIcon";

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      }
    );
  });

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader title="The Stack" sub="🤝 What I Bring to the Table" />
        <div className="tech-grid">
          {techStackIcons.map((techStackIcon, index) => (
            <div
              key={techStackIcon.name}
              className={`card-border tech-card overflow-hidden group xl:rounded-full rounded-lg ${
                index === 4 ? "hidden md:block" : ""
              }`}
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <TechIcon model={techStackIcon} />
                </div>
                <div className="padding-x w-full">
                  <p>{techStackIcon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
