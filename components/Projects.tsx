"use client";
import { useMemo, useState } from "react";
import SectionHeading from "./SectionHeading";
import ProjectCard, { type ProjectCardData } from "./ProjectCard";
import cv from "@/data/cv.json";
import widgets from "@/data/widgets.json";

const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

type Project = {
  title: string;
  description: string;
  tags: string[];
  image?: string;
};

type Widget = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
};

const toProjectCardData = (project: Project): ProjectCardData => {
  const slug = slugify(project.title);
  return {
    title: project.title,
    description: project.description,
    tags: project.tags,
    imageSrc: project.image ?? "/projects/new-placeholder.svg",
    href: `/projects/${slug}`,
  };
};

const toWidgetCardData = (widget: Widget): ProjectCardData => ({
  title: widget.title,
  description: widget.description,
  tags: widget.tags,
  imageSrc: widget.image ?? "/projects/new-placeholder.svg",
  href: `/widgets/${widget.slug}`,
  ctaLabel: "View details",
  ctaVariant: "button",
});

export default function Projects() {
  const allProjects = useMemo(() => {
    const regiondoProjects = (cv.projects?.Regiondo as Project[]).map(
      toProjectCardData
    );
    const halalkoomProjects = (cv.projects?.Halalkoom as Project[]).map(
      toProjectCardData
    );
    const otherProjects = (cv.projects?.Others as Project[]).map(
      toProjectCardData
    );
    const widgetCards = (widgets as Widget[]).map(toWidgetCardData);
    return [
      ...widgetCards,
      ...regiondoProjects,
      ...halalkoomProjects,
      ...otherProjects,
    ];
  }, []);

  const filteredProjects = allProjects;

  const [visibleProjects, setVisibleProjects] = useState(6);

  const handleShowMore = () => {
    setVisibleProjects((prev) => prev + 6);
  };

  return (
    <section id="projects" className="py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Selected projects across web and mobile."
          description="A curated set of projects delivered for marketplaces, operations, and consumer apps."
        />

        {/* Projects Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.slice(0, visibleProjects).map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {visibleProjects < filteredProjects.length && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={handleShowMore}
              className="group flex items-center justify-center rounded-full bg-primaryAccent p-3 text-white shadow-md transition-all duration-300 ease-out hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primaryAccent"
              aria-label="Show more projects"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 animate-bounce"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
