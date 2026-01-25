"use client";

import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import cv from "@/data/cv.json";

export default function Experience() {
  return (
    <section id="experience" className="bg-background py-20">
      <Reveal className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Full-stack experience across web and mobile products"
          description="Roles focused on TypeScript platforms, React Native apps, and scalable backend services."
        />

        <div className="relative mt-12 space-y-16">
          {cv.experience.map((role, index) => (
            <Reveal
              as="article"
              key={`${role.company}-${role.title}-${role.dates}`}
              className="relative"
              delayMs={index * 80}
              direction="left"
            >
              <div className="ml-8 rounded-xl border border-border/40 bg-background p-6 shadow-sm transition duration-200 ease-out hover:-translate-y-1 hover:border-primaryAccent hover:shadow-soft">
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-semibold text-primaryDark flex items-center gap-2">
                      {role.title}
                      {index === 0 && (
                        <span className="rounded-full bg-primaryAccent/10 px-2 py-0.5 text-xs font-medium text-primaryAccent">
                          Current
                        </span>
                      )}
                    </h3>
                    <p className="text-sm font-medium text-secondaryDark">
                      {role.company}
                      {role.location ? ` · ${role.location}` : ""}
                    </p>
                  </div>
                  <p className="text-xs uppercase tracking-wide text-mutedText/70">
                    {role.dates}
                  </p>
                </div>

                {/* Summary */}
                {role.summary && (
                  <p className="mt-3 text-sm text-mutedText max-w-3xl leading-relaxed">
                    {role.summary}
                  </p>
                )}

                {/* Highlights */}
                <ul className="mt-4 space-y-2 text-sm text-mutedText">
                  {role.highlights.slice(0, 5).map((highlight) => (
                    <li key={highlight} className="relative pl-5">
                      <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-primaryAccent" />
                      {highlight}
                    </li>
                  ))}
                  {/* Show a "+X more" if there are more highlights */}
                  {role.highlights.length > 5 && (
                    <li className="text-xs text-mutedText/70 pl-5">
                      +{role.highlights.length - 5} more achievements
                    </li>
                  )}
                </ul>

                {/* Tech tags */}
                {role.tech && role.tech.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {role.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-muted px-2 py-1 text-xs text-mutedText"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
