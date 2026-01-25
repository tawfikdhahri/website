import Image from "next/image";
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
  const ctaLabel = project.ctaLabel ?? "View details";

  return (
    <Link
      href={project.href}
      aria-label={`View details for ${project.title}`}
      className={`group relative flex h-[30rem] flex-col overflow-hidden rounded-3xl border border-border bg-background shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primaryAccent ${
        className ?? ""
      }`}
    >
      {/* Half for image */}
      <div className="relative h-1/2 w-full">
        <Image
          src={project.imageSrc}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      {/* Half for content */}
      <div className="relative flex h-1/2 w-full flex-col justify-between p-6 text-foreground">
        <div>
          <h3 className="text-xl font-semibold tracking-tight">
            {project.title}
          </h3>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-border px-3 py-1 text-xs text-mutedText"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-5 flex justify-center rounded-full text-primaryAccent px-4 py-2 text-xs font-semibold uppercase tracking-wide text-accent-foreground backdrop-blur transition group-hover:from-primaryAccent/80 group-hover:to-accent/80">
          {ctaLabel}
        </div>
      </div>
    </Link>
  );
}
