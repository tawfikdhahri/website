import SectionHeading from "./SectionHeading";
import cv from "@/data/cv.json";

const skillIconMap: Record<string, string> = {
  Frontend: "fas fa-laptop-code",
  Backend: "fas fa-server",
  Testing: "fas fa-vial",
  Databases: "fas fa-database",
  "Web Services": "fas fa-cloud",
  "Tools & Platforms": "fas fa-toolbox",
  "Operating Systems": "fas fa-desktop",
  Languages: "fas fa-language",
};

const iconColorClasses = ["icon-green", "icon-red", "icon-cyan"];

const getIconColorClass = (index: number) =>
  iconColorClasses[index % iconColorClasses.length];

export default function Articles() {
  return (
    <section id="skills" className="bg-background py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="Skills"
          title="Technical skills and tools."
          description="Core technologies grouped by focus area."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {cv.skills.map((skillGroup, index) => (
            <article
              key={skillGroup.category}
              className="rounded-3xl border border-border bg-background p-6 shadow-sm transition duration-200 ease-out hover:-translate-y-1 hover:border-primaryAccent hover:shadow-soft"
            >
              <i
                className={`${
                  skillIconMap[skillGroup.category] ?? "fas fa-layer-group"
                } fa-3x ${getIconColorClass(index)} mb-3`}
                aria-hidden="true"
              />
              <h3 className="mt-3 text-lg font-semibold text-secondaryDark">
                {skillGroup.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-mutedText">
                {skillGroup.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-border px-3 py-1 text-xs text-mutedText"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
