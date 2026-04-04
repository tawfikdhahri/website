import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import cv from "@/data/cv.json";

const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

type ProjectDetailsPageProps = {
  params: {
    slug: string;
  };
};

export default function ProjectDetailsPage({
  params,
}: ProjectDetailsPageProps) {
  // Flatten all projects across companies
  const allProjects = [
    ...((cv.projects?.Regiondo || []) as Project[]),
    ...((cv.projects?.Halalkoom || []) as Project[]),
    ...((cv.projects?.Others || []) as Project[]),
  ];

  const project = allProjects.find(
    (item) => slugify(item.title) === params.slug
  );

  if (!project) {
    notFound();
  }

  const imageSrc = project.image ?? "/projects/project-placeholder.svg";

  return (
    <div className="bg-background">
      <Navbar />
      <main className="py-20">
        <div className="mx-auto w-full max-w-5xl px-6">
          <Link
            href="/#projects"
            className="text-sm font-semibold text-primaryDark transition duration-200 ease-out hover:text-primaryAccent"
          >
            ← Back to projects
          </Link>

          <SectionHeading
            eyebrow="Project"
            title={project.title}
            description={project.description}
          />

          {/* Project Image */}
          <div className="mb-8 overflow-hidden rounded-3xl border border-border">
            <img
              src={imageSrc}
              alt={project.title}
              className="h-72 w-full object-contain"
              loading="lazy"
            />
          </div>

          {/* Tech Stack */}
          <section className="rounded-3xl border border-border bg-background p-6 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-mutedText">
              Tech stack
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-border px-3 py-1 text-xs text-mutedText"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>

          {/* Live demo (external link, e.g. store listing) */}
          {project.liveDemoUrl && (
            <section className="mt-6 rounded-3xl border border-border bg-background p-6 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-mutedText">
                Live demo
              </h3>
              <p className="mt-4">
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primaryDark underline underline-offset-4 transition duration-200 ease-out hover:text-primaryAccent"
                >
                  Download app
                </a>
              </p>
            </section>
          )}

          {/* Demo Link (only for Regiondo widgets/projects) */}
          {project.demoWidgetId && (
            <section className="rounded-3xl border border-border bg-background p-6 shadow-sm mt-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-mutedText">
                Demo Link
              </h3>
              <product-details-widget
                widget-id={project.demoWidgetId}
              ></product-details-widget>
              <Script
                src="https://widgets.dev.regiondo.net/product/v1/product-widget.min.js"
                strategy="afterInteractive"
              />
            </section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
