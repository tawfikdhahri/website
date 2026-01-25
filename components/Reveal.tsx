"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = React.HTMLAttributes<HTMLElement> & {
  as?: keyof JSX.IntrinsicElements;
  delayMs?: number;
  direction?: "up" | "left" | "right" | "none";
};

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);

    handleChange();

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  return prefersReducedMotion;
}

export default function Reveal({
  as = "div",
  className,
  children,
  delayMs,
  direction = "up",
  style,
  ...rest
}: RevealProps) {
  const Component = as;
  const ref = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  const classes = ["reveal", isVisible && "reveal--visible", className]
    .filter(Boolean)
    .join(" ");
  const mergedStyle = {
    ...style,
    ...(delayMs !== undefined ? { "--reveal-delay": `${delayMs}ms` } : {})
  } as React.CSSProperties;

  return (
    <Component
      ref={ref}
      className={classes}
      data-reveal-direction={direction}
      style={mergedStyle}
      {...rest}
    >
      {children}
    </Component>
  );
}
