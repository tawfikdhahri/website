import cv from "@/data/cv.json";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-primary dark:bg-background text-white py-10 ">
      <div className="mx-auto flex w-full max-w-6xl flex-col justify-between gap-4 px-6 text-sm  md:flex-row md:items-center">
        <p>© 2026 {cv.name}. All rights reserved.</p>
        <div className="flex gap-6">
          <a
            href="/#home"
            className="inline-flex transition duration-200 ease-out hover:-translate-y-0.5 hover:text-primaryAccent"
          >
            Back to top
          </a>
          <a
            href="/#contact"
            className="inline-flex transition duration-200 ease-out hover:-translate-y-0.5 hover:text-primaryAccent"
          >
            Start a project
          </a>
        </div>
      </div>
    </footer>
  );
}
