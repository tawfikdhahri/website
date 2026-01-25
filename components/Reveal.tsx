"use client";

import { forwardRef, useEffect, useRef, useState, type ReactNode } from "react";

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

const Reveal = forwardRef<HTMLElement, RevealProps>(
  (
    {
      as: Component = "div",
      className,
      children,
      delayMs,
      direction = "up",
      style,
      ...rest
    },
    forwardedRef
  ) => {
    const internalRef = useRef<HTMLElement | null>(null);
    const ref = (forwardedRef as React.RefObject<HTMLElement>) || internalRef;
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
        { threshold: 0.5, rootMargin: "0px 0px -25% 0px" }
      );

      observer.observe(node);
      return () => observer.disconnect();
    }, [prefersReducedMotion]);

    const classes = ["reveal", isVisible && "reveal--visible", className]
      .filter(Boolean)
      .join(" ");
    const mergedStyle = {
      ...style,
      ...(delayMs !== undefined ? { "--reveal-delay": `${delayMs}ms` } : {}),
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
);

Reveal.displayName = "Reveal";

export default Reveal;
