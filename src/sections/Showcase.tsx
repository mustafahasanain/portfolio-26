"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import projects from "@/constants/projects";
import { Button } from "@/components";

gsap.registerPlugin(ScrollTrigger);

const ArrowRightIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="size-4"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const Showcase = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const featuredProjects = projects.filter((project) => project.featured);
  const [mainProject, ...otherProjects] = featuredProjects;

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = cardRefs.current;

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <h2 className="text-white text-3xl md:text-5xl font-semibold mb-10">
          My Featured Projects
        </h2>
        <div className="showcaselayout">
          <div
            ref={(el) => {
              cardRefs.current[0] = el;
            }}
            className="first-project-wrapper"
          >
            <div className="image-wrapper">
              <Image
                src={mainProject.imgPath}
                alt={mainProject.alt}
                fill
                sizes="(min-width: 1280px) 60vw, 100vw"
                className="object-cover rounded-xl"
                loading="lazy"
              />
            </div>
            <div className="text-content">
              <h2>{mainProject.title}</h2>
              {mainProject.description && (
                <p className="text-white-50 md:text-xl">
                  {mainProject.description}
                </p>
              )}
              {mainProject.liveUrl && (
                <a
                  href={mainProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-violet-400 hover:text-violet-300 transition-colors duration-300 font-medium mt-3"
                >
                  Check Live Site
                  <ArrowRightIcon />
                </a>
              )}
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            {otherProjects.map((project, index) => (
              <div
                className="project"
                key={project.title}
                ref={(el) => {
                  cardRefs.current[index + 1] = el;
                }}
              >
                <div className={`image-wrapper ${project.bgColor ?? ""}`}>
                  <Image
                    src={project.imgPath}
                    alt={project.alt}
                    fill
                    sizes="(min-width: 1280px) 40vw, 100vw"
                    className="object-contain rounded-xl"
                    loading="lazy"
                  />
                </div>
                <h2>{project.title}</h2>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-violet-400 hover:text-violet-300 transition-colors duration-300 font-medium mt-2"
                  >
                    Check Live Site
                    <ArrowRightIcon />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-14">
          <Button
            text="VIEW ALL PROJECTS"
            className="md:w-80 md:h-16 w-60 h-12"
            href="/projects"
            arrowDirection="right"
          />
        </div>
      </div>
    </div>
  );
};

export default Showcase;