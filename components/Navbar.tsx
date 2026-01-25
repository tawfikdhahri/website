"use client";

import { useEffect, useState } from "react";
import cv from "@/data/cv.json";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const nextTheme =
      storedTheme === "light" || storedTheme === "dark"
        ? storedTheme
        : prefersDark
        ? "dark"
        : "light";

    setTheme(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  }, []);

  const toggleTheme = () => {
    setTheme((current) => {
      const nextTheme = current === "dark" ? "light" : "dark";
      document.documentElement.classList.toggle("dark", nextTheme === "dark");
      window.localStorage.setItem("theme", nextTheme);
      return nextTheme;
    });
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-background shadow-md backdrop-blur supports-[backdrop-filter]:bg-background">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="inline-flex text-sm font-semibold tracking-wide text-primaryDark transition duration-200 ease-out hover:-translate-y-0.5 hover:text-primaryAccent"
        >
          {cv.name}
        </a>

        <nav aria-label="Primary" className="hidden md:block">
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
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-primaryDark transition duration-200 ease-out hover:-translate-y-0.5 hover:border-primaryAccent hover:text-primaryAccent"
            aria-label="Toggle dark mode"
          >
            <i
              className={`fas ${theme === "dark" ? "fa-sun" : "fa-moon"}`}
              aria-hidden="true"
            />
          </button>

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

      <div
        className={`fixed inset-0 z-40 md:hidden ${
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <button
          type="button"
          onClick={() => setIsMenuOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          aria-label="Close navigation menu"
        />
        <aside
          className={`absolute right-0 top-0 flex h-full w-72 max-w-[85%] flex-col border-l border-border bg-background shadow-lg transition-transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-border px-6 py-5">
            <span className="text-sm font-semibold text-primaryDark">
              Navigation
            </span>
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-primaryDark transition duration-200 ease-out hover:-translate-y-0.5 hover:border-primaryAccent hover:text-primaryAccent"
              aria-label="Close navigation menu"
            >
              <i className="fas fa-times" aria-hidden="true" />
            </button>
          </div>
          <nav aria-label="Mobile primary">
            <ul className="flex flex-col gap-4 px-6 py-6">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between text-base font-medium text-primaryDark transition duration-200 ease-out hover:text-primaryAccent"
                  >
                    {link.label}
                    <i
                      className="fas fa-arrow-right text-sm"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-auto border-t border-border px-6 py-5">
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="inline-flex w-full items-center justify-center rounded-full border border-border px-4 py-3 text-xs font-semibold uppercase tracking-widest text-primaryDark transition duration-200 ease-out hover:border-primaryAccent hover:text-primaryAccent hover:shadow-sm"
            >
              Let&apos;s talk
            </a>
          </div>
        </aside>
      </div>
    </header>
  );
}
