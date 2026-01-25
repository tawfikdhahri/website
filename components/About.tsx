import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import cv from "@/data/cv.json";

const aboutIconMap: Record<string, string> = {
  "Product-driven full-stack delivery": "fas fa-laptop-code",
  "Backend and platform fundamentals": "fas fa-server",
};

const iconColorClasses = ["icon-green", "icon-red", "icon-cyan"];

const getIconColorClass = (index: number) =>
  iconColorClasses[index % iconColorClasses.length];

export default function About() {
  return (
    <section id="about" className="bg-background py-20">
      <Reveal className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="About"
          title="Full-stack delivery with a product mindset."
          description={cv.aboutSummary}
        />
        <div className="grid gap-10 md:grid-cols-2">
          {cv.aboutCards.map((card, index) => (
            <div
              key={card.title}
              className="rounded-3xl border border-border bg-background p-8 transition duration-200 ease-out hover:-translate-y-1 hover:border-primaryAccent hover:shadow-soft"
            >
              <i
                className={`${
                  aboutIconMap[card.title] ?? "fas fa-star"
                } fa-3x ${getIconColorClass(index)} mb-3`}
                aria-hidden="true"
              />
              <h3 className="text-lg font-semibold text-secondaryDark">
                {card.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-mutedText">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
