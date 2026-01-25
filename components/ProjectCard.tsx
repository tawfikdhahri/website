"use client";

import Link from "next/link";

export type ProjectCardData = {
  title: string;
  description: string;
  tags: string[];
  imageSrc: string;
  href: string;
  ctaLabel?: string;
  ctaVariant?: "text" | "button";
};

type ProjectCardProps = {
  project: ProjectCardData;
  className?: string;
};

export default function ProjectCard({ project, className }: ProjectCardProps) {
  const ctaLabel = project.ctaLabel ?? "View case study →";
  const ctaVariant = project.ctaVariant ?? "text";

  return (
    <Link
      href={project.href}
      aria-label={`View details for ${project.title}`}
      className={`group relative flex min-h-[22rem] overflow-hidden rounded-3xl border border-border bg-background shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primaryAccent ${
        className ?? ""
      }`}
    >
      {/* Background image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-105"
        style={{ backgroundImage: `url(${project.imageSrc})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 transition-opacity duration-300 group-hover:from-black/90" />

      {/* Content */}
      <div className="relative mt-auto w-full p-6 text-white">
        <div className="transition-transform duration-300 ease-out group-hover:-translate-y-1">
          <h3 className="text-xl font-semibold tracking-tight">
            {project.title}
          </h3>

          <p className="mt-2 line-clamp-2 text-sm text-white/85">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/30 bg-success px-3 py-1 text-xs text-white/90 font-medium backdrop-blur"
              >
                {tag}
              </span>
            ))}
          </div>

          {ctaVariant === "button" ? (
            <div className="mt-5 inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/90 backdrop-blur transition group-hover:bg-white/20">
              {ctaLabel}
            </div>
          ) : (
            <div className="mt-5 text-sm font-medium text-white/90">
              {ctaLabel}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
