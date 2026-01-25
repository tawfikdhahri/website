import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import ProjectCard, { type ProjectCardData } from "./ProjectCard";
import widgets from "@/data/widgets.json";

type RegiondoWidget = {
  slug: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
};

const toProjectCardData = (widget: RegiondoWidget): ProjectCardData => ({
  title: widget.title,
  description: widget.description,
  tags: widget.tags,
  imageSrc: widget.image ?? "/projects/project-placeholder.svg",
  href: `/widgets/${widget.slug}`,
  ctaLabel: "View details",
  ctaVariant: "button",
});

export default function RegiondoWidgetsShowcase() {
  const widgetCards = (widgets as RegiondoWidget[]).map(toProjectCardData);

  return (
    <section id="widgets" className="py-20">
      <Reveal className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="Regiondo Widgets"
          title="Regiondo Widgets Showcase"
          description="A production-ready set of embeddable widgets built with Web Components and Shadow DOM."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {widgetCards.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
