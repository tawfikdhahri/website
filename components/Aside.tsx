import React from "react";
import cv from "@/data/cv.json";

export default function Aside() {
  return (
    <aside className="fixed left-0 top-1/2 -translate-y-1/2 z-30 hidden w-20 flex-col items-center px-6 py-5 md:flex">
      <div className="flex flex-col items-center justify-center gap-6">
        <a
          href={cv.contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex text-primaryDark transition duration-200 ease-out hover:-translate-y-0.5 hover:text-primaryAccent"
          aria-label="GitHub profile"
        >
          <i className="fab fa-github text-xl" aria-hidden="true" />
        </a>
        <a
          href={cv.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex text-primaryDark transition duration-200 ease-out hover:-translate-y-0.5 hover:text-primaryAccent"
          aria-label="LinkedIn profile"
        >
          <i className="fab fa-linkedin-in text-xl" aria-hidden="true" />
        </a>
        <a
          href={`mailto:${cv.contact.email}`}
          className="inline-flex text-primaryDark transition duration-200 ease-out hover:-translate-y-0.5 hover:text-primaryAccent"
          aria-label="Email"
        >
          <i className="fas fa-envelope text-xl" aria-hidden="true" />
        </a>
      </div>
      <div className="mt-8 h-24 w-px bg-border" />
    </aside>
  );
}
