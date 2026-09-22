import type { Metadata } from "next";
import { notFound } from "next/navigation";
import projects from "@/constants/projects";
import { Navbar, ProjectCard } from "@/components";
import { dictionaries, isLocale } from "@/i18n/dictionaries";

export async function generateMetadata({ params }: PageProps<"/[lang]/projects">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const seo = dictionaries[lang].seo;
  return {
    title: seo.projectsTitle,
    description: seo.projectsDescription,
    alternates: { canonical: lang === "en" ? "/projects" : "/ar/projects", languages: { en: "/projects", ar: "/ar/projects" } },
    openGraph: { title: seo.projectsTitle, description: seo.projectsDescription, locale: lang === "ar" ? "ar_IQ" : "en_US" },
  };
}

export default async function ProjectsPage({ params }: PageProps<"/[lang]/projects">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dictionary = dictionaries[lang];
  return (
    <main className="flex-1 w-full">
      <Navbar page="projects" />
      <div className="px-5 md:px-20 pt-32 pb-16 md:pt-40 md:pb-24">
        <h1 className="text-white text-3xl md:text-5xl font-semibold mb-12">{dictionary.projectsPage}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-[20px]">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={{ ...project, ...dictionary.projects[index] }} labels={dictionary.showcase} />
          ))}
        </div>
      </div>
    </main>
  );
}
