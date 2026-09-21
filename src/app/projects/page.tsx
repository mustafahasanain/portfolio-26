import type { Metadata } from "next";
import projects from "@/constants/projects";
import { Navbar, ProjectCard } from "@/components";

export const metadata: Metadata = {
  title: "Projects | Mustafa",
  description: "A collection of projects built by Mustafa.",
};

const ProjectsPage = () => {
  return (
    <main className="flex-1 w-full">
      <Navbar />

      <div className="px-5 md:px-20 pt-32 pb-16 md:pt-40 md:pb-24">
        <h1 className="text-white text-3xl md:text-5xl font-semibold mb-12">
          All Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-[20px]">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;
