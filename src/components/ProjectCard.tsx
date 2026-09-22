"use client";

import Image from "next/image";
import techIcons from "@/constants/techIcons";
import { PinContainer } from "@/components/ui/3d-pin";

type Project = {
  title: string;
  description?: string;
  imgPath: string;
  alt: string;
  bgColor?: string;
  techStack?: string[];
  githubUrl?: string;
  liveUrl?: string;
};

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.34-1.28-1.7-1.28-1.7-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.26 3.34.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.73 0c2.18-1.49 3.14-1.18 3.14-1.18.63 1.59.23 2.76.12 3.05.73.8 1.18 1.83 1.18 3.09 0 4.41-2.7 5.38-5.27 5.67.42.36.78 1.07.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5Z" />
  </svg>
);

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

const ProjectCard = ({ project }: { project: Project }) => {
  const {
    title,
    description,
    imgPath,
    alt,
    bgColor,
    techStack,
    githubUrl,
    liveUrl,
  } = project;

  const hasLinks = githubUrl || liveUrl;
  const primaryHref = liveUrl || githubUrl || "#";
  const primaryTitle = liveUrl ? "Check Live Site" : githubUrl ? "View Code" : title;

  const openInNewTab =
    (url: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      e.stopPropagation();
      window.open(url, "_blank", "noopener,noreferrer");
    };

  return (
    <div className="h-[38rem] flex items-center justify-center">
      <PinContainer
        title={primaryTitle}
        href={primaryHref}
        containerClassName="w-full h-full"
        className="w-[24rem] md:w-[27rem]"
      >
        <div className="flex flex-col gap-4 w-full">
          <div
            className={`relative h-56 md:h-64 rounded-lg overflow-hidden ${
              bgColor ?? ""
            }`}
          >
            <Image
              src={imgPath}
              alt={alt}
              fill
              sizes="27rem"
              className="object-contain rounded-lg"
              loading="lazy"
            />
          </div>

          <h2 className="text-white text-lg md:text-xl font-semibold line-clamp-2">
            {title}
          </h2>

          {description && (
            <p className="text-white-50 text-sm md:text-base line-clamp-2">
              {description}
            </p>
          )}

          {techStack && techStack.length > 0 && (
            <div className="flex items-center gap-2 flex-wrap">
              {techStack.map((tech) =>
                techIcons[tech] ? (
                  <div
                    key={tech}
                    title={tech}
                    className="relative size-10 rounded-full bg-black-100 border border-black-50 flex items-center justify-center overflow-hidden"
                  >
                    <Image
                      src={techIcons[tech]}
                      alt={tech}
                      fill
                      sizes="20px"
                      className="object-contain p-2"
                    />
                  </div>
                ) : (
                  <span
                    key={tech}
                    className="text-xs text-white-50 px-2 py-1 rounded-full border border-black-50"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          )}

          {hasLinks && (
            <div className="flex items-center justify-between gap-4 flex-wrap pt-1">
              {githubUrl ? (
                <button
                  type="button"
                  onClick={openInNewTab(githubUrl)}
                  className="flex items-center gap-2 text-white-50 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  <GithubIcon />
                  <span className="text-sm md:text-base">View Code</span>
                </button>
              ) : (
                <span />
              )}

              {liveUrl && (
                <button
                  type="button"
                  onClick={openInNewTab(liveUrl)}
                  className="flex items-center gap-1 text-[#00A19B] hover:text-[#00c1ba] transition-colors duration-300 font-medium text-sm md:text-base cursor-pointer"
                >
                  Check Live Site
                  <ArrowRightIcon />
                </button>
              )}
            </div>
          )}
        </div>
      </PinContainer>
    </div>
  );
};

export default ProjectCard;
