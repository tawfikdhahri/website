"use client";

import cv from "@/data/cv.json";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-32 text-white"
      style={{
        background:
          "linear-gradient(135deg, var(--color-hero-start), var(--color-hero-end))",
      }}
    >
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 pb-20 md:grid-cols-[1.2fr,0.8fr] md:items-center">
        {/* LEFT */}
        <div>
          <Reveal
            as="p"
            delayMs={0}
            className="text-xs uppercase tracking-[0.2em] text-white/70 drop-shadow-md"
          >
            {cv.title}
          </Reveal>

          <Reveal
            as="h1"
            delayMs={80}
            className="mt-4 text-4xl font-bold leading-tight drop-shadow-md sm:text-5xl lg:text-6xl"
          >
            {cv.name}
          </Reveal>

          <Reveal
            as="p"
            delayMs={160}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/90 drop-shadow-sm sm:text-xl"
          >
            {cv.heroSummary}
          </Reveal>

          <Reveal
            delayMs={240}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="rounded-full bg-primaryAccent px-6 py-3 text-sm font-semibold text-white shadow-md transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-primaryAccent/90 hover:shadow-lg"
            >
              View projects
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white transition duration-200 ease-out hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
            >
              Get in touch
            </a>
          </Reveal>
        </div>

        {/* RIGHT CARD */}
        <Reveal
          delayMs={320}
          direction="right"
          className="rounded-3xl border border-border bg-background p-8 text-primaryDark shadow-lg"
        >
          <div className="flex flex-col gap-6 text-sm text-mutedText">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-mutedText/70">
                Currently
              </p>
              <p className="mt-2 text-base font-medium text-primaryDark">
                Fullstack Engineer at Regiondo
              </p>
            </div>
            <div className="h-px w-full bg-border" />
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-mutedText/70">
                Focus
              </p>
              <p className="mt-2 text-base">
                Web components, TypeScript platforms, and scalable services.
              </p>
            </div>
            <div className="h-px w-full bg-border" />
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-mutedText/70">
                Based in
              </p>
              <p className="mt-2 text-base">{cv.location}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
