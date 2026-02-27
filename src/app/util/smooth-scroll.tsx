"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Standard Lenis initialization
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.2,
      touchMultiplier: 2,
      infinite: false,
    });

    // Add lenis class for CSS
    document.documentElement.classList.add('lenis');

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    const scrollHandler = () => {
      window.dispatchEvent(new Event("scroll"));
      
      // Update data attribute for scroll detection in CSS if needed
      document.documentElement.setAttribute('data-scroll', window.scrollY.toString());
    };
    lenis.on("scroll", scrollHandler);

    return () => {
      lenis.destroy();
      lenis.off("scroll", scrollHandler);
      document.documentElement.classList.remove('lenis');
    };
  }, []);

  return <>{children}</>;
}
