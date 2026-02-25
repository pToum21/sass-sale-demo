"use client";

import { useEffect, useRef } from "react";
import { registerGsap, gsap, ScrollTrigger } from "@/lib/gsap";

type AnimationType = "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scaleUp" | "blurUp";

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: AnimationType;
  className?: string;
  style?: React.CSSProperties;
  as?: keyof React.JSX.IntrinsicElements;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

/**
 * Scroll-linked reveal — animation is directly tied to scroll position
 * so it plays forward scrolling down and reverses scrolling back up.
 */
export default function ScrollReveal({
  children,
  animation = "fadeUp",
  className,
  style,
  as: Tag = "div",
  ...rest
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGsap();
    const el = ref.current;
    if (!el) return;

    const from: gsap.TweenVars = {};
    const to: gsap.TweenVars = { opacity: 1, y: 0, x: 0, scale: 1 };

    switch (animation) {
      case "fadeUp":
        from.opacity = 0; from.y = 60; break;
      case "fadeIn":
        from.opacity = 0; break;
      case "slideLeft":
        from.opacity = 0; from.x = -70; break;
      case "slideRight":
        from.opacity = 0; from.x = 70; break;
      case "scaleUp":
        from.opacity = 0; from.scale = 0.88; from.y = 40; break;
      case "blurUp":
        from.opacity = 0; from.y = 50;
        to.filter = "blur(0px)";
        from.filter = "blur(10px)";
        break;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(el, from, {
        ...to,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 92%",
          end: "top 45%",
          scrub: 1.4,
        },
      });
    });

    return () => ctx.revert();
  }, [animation]);

  return (
    // @ts-expect-error dynamic tag
    <Tag ref={ref} className={className} style={style} {...rest}>
      {children}
    </Tag>
  );
}

/** Grid/list stagger — each child animates in sequence, tied to scroll */
export function StaggerReveal({
  children,
  stagger = 0.08,
  className,
  style,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  stagger?: number;
  className?: string;
  style?: React.CSSProperties;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGsap();
    const el = ref.current;
    if (!el || el.children.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        Array.from(el.children),
        { opacity: 0, y: 55, scale: 0.94 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: { each: stagger },
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            end: "top 35%",
            scrub: 1.4,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [stagger]);

  return (
    // @ts-expect-error dynamic tag
    <Tag ref={ref} className={className} style={style}>
      {children}
    </Tag>
  );
}

/** Parallax — element moves at a different speed than the page */
export function Parallax({
  children,
  speed = 0.3,
  className,
  style,
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsap();
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        y: () => -window.innerHeight * speed,
        ease: "none",
        scrollTrigger: {
          trigger: el.parentElement || el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, [speed]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
