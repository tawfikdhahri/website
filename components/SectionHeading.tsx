type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="text-xs uppercase tracking-[0.2em] text-mutedText">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold text-primaryDark sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-relaxed text-mutedText">
        {description}
      </p>
    </div>
  );
}
