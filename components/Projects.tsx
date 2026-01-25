"use client";
import { useState } from "react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import FeaturedProjectsSlider from "./FeaturedProjectsSlider";
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
    imageSrc: project.image ?? "/projects/project-placeholder.svg",
    href: `/projects/${slug}`,
  };
};

const toWidgetCardData = (widget: Widget): ProjectCardData => ({
  title: widget.title,
  description: widget.description,
  tags: widget.tags,
  imageSrc: widget.image ?? "/projects/project-placeholder.svg",
  href: `/widgets/${widget.slug}`,
  ctaLabel: "View details",
  ctaVariant: "button",
});

export default function Projects() {
  const [showAllOthers, setShowAllOthers] = useState(false);

  // Pre-classified projects
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

  // Slice for show more
  const displayedOtherProjects = showAllOthers ? otherProjects : [];

  return (
    <section id="projects" className="py-20">
      <Reveal className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Selected projects across web and mobile."
          description="A curated set of projects delivered for marketplaces, operations, and consumer apps."
        />

        {/* Regiondo Widgets Grid */}
        {widgetCards.length > 0 && (
          <section className="mt-10">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-mutedText">
                Regiondo Widgets
              </h3>
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {widgetCards.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </section>
        )}

        {/* Featured Regiondo Projects Slider */}
        {regiondoProjects.length > 0 && (
          <FeaturedProjectsSlider projects={regiondoProjects} />
        )}

        {/* Halalkoom Projects Grid */}
        {halalkoomProjects.length > 0 && (
          <section className="mt-10">
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {halalkoomProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </section>
        )}

        {/* Other Projects Grid */}
        {otherProjects.length > 0 && (
          <section className="mt-10">
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {displayedOtherProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>

            {/* Show More / Show Less */}
            {otherProjects.length > 3 && (
              <div className="mt-6 text-center">
                <button
                  className="px-6 py-2 font-semibold text-white bg-primary rounded hover:bg-primary-dark transition"
                  onClick={() => setShowAllOthers(!showAllOthers)}
                >
                  {showAllOthers ? "Show Less" : "Show More"}
                </button>
              </div>
            )}
          </section>
        )}
      </Reveal>
    </section>
  );
}
