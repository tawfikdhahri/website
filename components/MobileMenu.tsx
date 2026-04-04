import { useState } from "react";
import cv from "@/data/cv.json";
import ToggleTheme from "@/components/ToggleTheme";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
}

export default function MobileMenu({
  isOpen,
  onClose,
  links,
}: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-0 z md:hidden   ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        onClick={onClose}
        className={`absolute inset-0 bg-black/40 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        aria-label="Close navigation menu"
      />
      <aside
        className={`absolute right-0 top-0 flex  h-full w-72 max-w-[85%] flex-col border-l bg-background border-border shadow-lg transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <span className="text-sm font-semibold text-primaryDark">
            Navigation
          </span>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-primaryDark transition duration-200 ease-out hover:-translate-y-0.5 hover:border-primaryAccent hover:text-primaryAccent"
            aria-label="Close navigation menu"
          >
            <i className="fas fa-times" aria-hidden="true" />
          </button>
        </div>
        <nav aria-label="Mobile primary " className="bg-background">
          <ul className="flex flex-col gap-4 px-6 py-6 ">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={onClose}
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
        <div className="mt-auto border-t border-border px-6 py-5 bg-background">
          <ToggleTheme />
          <a
            href="/#contact"
            onClick={onClose}
            className="inline-flex w-full items-center justify-center rounded-full border border-border px-4 py-3 text-xs font-semibold uppercase tracking-widest text-primaryDark transition duration-200 ease-out hover:border-primaryAccent hover:text-primaryAccent hover:shadow-sm"
          >
            Let&apos;s talk
          </a>
        </div>
      </aside>
    </div>
  );
}
