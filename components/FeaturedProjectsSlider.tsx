"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import ProjectCard, { type ProjectCardData } from "./ProjectCard";

type FeaturedProjectsSliderProps = {
  projects: ProjectCardData[];
  title?: string; // optional custom title for slider
  description?: string; // optional custom description
};

const getGap = (container: HTMLElement) => {
  const styles = window.getComputedStyle(container);
  const gap = styles.columnGap || styles.gap;
  return Number.parseFloat(gap || "0");
};

export default function FeaturedProjectsSlider({
  projects,
  title = "Regiondo Featured Projects",
  description = "Selected Regiondo projects focused on widgets, booking flows, POS, and platform automation.",
}: FeaturedProjectsSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slideCount = projects.length;

  const getSlideWidth = useCallback(() => {
    const container = containerRef.current;
    if (!container) return null;

    const slide = container.querySelector<HTMLElement>("[data-slide]");
    if (!slide) return null;

    return slide.offsetWidth + getGap(container);
  }, []);

  const scrollToIndex = useCallback(
    (index: number) => {
      const container = containerRef.current;
      const slideWidth = getSlideWidth();
      if (!container || !slideWidth) return;

      container.scrollTo({
        left: slideWidth * index,
        behavior: "smooth",
      });
    },
    [getSlideWidth]
  );

  const updateActiveIndex = useCallback(() => {
    const container = containerRef.current;
    const slideWidth = getSlideWidth();
    if (!container || !slideWidth) return;

    const index = Math.round(container.scrollLeft / slideWidth);
    setActiveIndex(Math.min(Math.max(index, 0), slideCount - 1));
  }, [getSlideWidth, slideCount]);

  const handleArrowClick = useCallback(
    (direction: "prev" | "next") => {
      const next = direction === "prev" ? activeIndex - 1 : activeIndex + 1;
      scrollToIndex(Math.min(Math.max(next, 0), slideCount - 1));
    },
    [activeIndex, scrollToIndex, slideCount]
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onScroll = () => requestAnimationFrame(updateActiveIndex);

    container.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateActiveIndex);

    updateActiveIndex();

    return () => {
      container.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateActiveIndex);
    };
  }, [updateActiveIndex]);

  const dots = useMemo(
    () => projects.map((p, i) => ({ id: p.title, index: i })),
    [projects]
  );

  return (
    <section className="mt-12">
      {/* Header */}
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-mutedText">
            {title}
          </p>
          <p className="mt-2 max-w-xl text-base text-mutedText">
            {description}
          </p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => handleArrowClick("prev")}
            disabled={activeIndex === 0}
            aria-label="Previous project"
            className="rounded-full border border-border px-3 py-2 text-sm font-semibold transition hover:border-primaryAccent hover:text-primaryAccent disabled:opacity-40"
          >
            ←
          </button>
          <button
            onClick={() => handleArrowClick("next")}
            disabled={activeIndex === slideCount - 1}
            aria-label="Next project"
            className="rounded-full border border-border px-3 py-2 text-sm font-semibold transition hover:border-primaryAccent hover:text-primaryAccent disabled:opacity-40"
          >
            →
          </button>
        </div>
      </div>

      {/* Slider */}
      <div
        ref={containerRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="Featured Regiondo projects slider"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") handleArrowClick("next");
          if (e.key === "ArrowLeft") handleArrowClick("prev");
        }}
        className="mt-6 flex gap-6 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth pb-4 [scrollbar-width:none]"
      >
        {projects.map((project) => (
          <div
            key={project.title}
            data-slide
            className="flex min-w-full snap-start md:min-w-[80%] lg:min-w-[55%] xl:min-w-[48%]"
          >
            <ProjectCard project={project} className="flex h-full flex-1" />
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="mt-4 flex justify-center gap-2 md:justify-end">
        {dots.map((dot) => (
          <button
            key={dot.id}
            onClick={() => scrollToIndex(dot.index)}
            aria-label={`Go to slide ${dot.index + 1}`}
            className={`h-2.5 w-2.5 rounded-full transition ${
              dot.index === activeIndex
                ? "bg-primaryAccent"
                : "bg-border hover:bg-primaryAccent/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
