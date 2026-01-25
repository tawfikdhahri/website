"use client";

import { useState } from "react";
import cv from "@/data/cv.json";
import MobileMenu from "@/components/MobileMenu";
import ToggleTheme from "@/components/ToggleTheme";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-background shadow-md backdrop-blur supports-[backdrop-filter]:bg-background">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="inline-flex text-sm font-semibold tracking-wide text-primaryDark transition duration-200 ease-out hover:-translate-y-0.5 hover:text-primaryAccent"
        >
          {cv.name}
        </a>

        <nav aria-label="Primary" className="hidden md:block ">
          <ul className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex text-sm text-primaryDark transition duration-200 ease-out hover:-translate-y-0.5 hover:text-primaryAccent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <ToggleTheme />
          <a
            href="#contact"
            className="hidden rounded-full border border-border px-4 py-2 text-xs font-semibold uppercase tracking-widest text-primaryDark transition duration-200 ease-out hover:-translate-y-0.5 hover:border-primaryAccent hover:text-primaryAccent hover:shadow-sm sm:inline-flex"
          >
            Let&apos;s talk
          </a>

          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-primaryDark transition duration-200 ease-out hover:-translate-y-0.5 hover:border-primaryAccent hover:text-primaryAccent md:hidden"
            aria-label="Open navigation menu"
          >
            <i className="fas fa-bars" aria-hidden="true" />
          </button>
        </div>
      </div>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        links={links}
      />
    </header>
  );
}
