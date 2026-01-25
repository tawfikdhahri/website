"use client";

"use client";

import SectionHeading from "./SectionHeading";
import cv from "@/data/cv.json";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build something together."
          description="Let's connect! Reach me directly or connect on social platforms."
        />
        <div className="rounded-3xl border border-border bg-background p-8 transition duration-200 ease-out hover:-translate-y-1 hover:shadow-soft">
          <h3 className="text-lg font-semibold text-secondaryDark">
            Contact details
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-mutedText">
            Prefer email? Reach me directly or connect on social platforms.
          </p>
          <div className="mt-6 space-y-4 text-sm text-mutedText">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-mutedText/70">
                Email
              </p>
              <p className="mt-2 font-medium text-secondaryDark">
                {cv.contact.email}
              </p>
              <a
                href="mailto:tawfikdhahri1993@gmail.com?subject=Portfolio Contact"
                className="mt-4 inline-flex items-center rounded-full bg-primaryAccent px-6 py-3 text-sm font-semibold text-background shadow-soft transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-primaryDark hover:shadow-soft"
              >
                Contact Me
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-mutedText/70">
                Location
              </p>
              <p className="mt-2">{cv.location}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-mutedText/70">
                Social
              </p>
              <div className="mt-2 flex flex-wrap gap-4 font-medium text-secondaryDark">
                <a
                  href={`https://github.com/${cv.contact.github}`}
                  className="inline-flex transition duration-200 ease-out hover:-translate-y-0.5 hover:text-primaryAccent"
                >
                  GitHub
                </a>
                <a
                  href={`https://www.linkedin.com/in${cv.contact.linkedin}`}
                  className="inline-flex transition duration-200 ease-out hover:-translate-y-0.5 hover:text-primaryAccent"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
