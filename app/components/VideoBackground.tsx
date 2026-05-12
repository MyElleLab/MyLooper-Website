"use client";

import { useEffect, useState } from "react";

// Fixed full-viewport video background. On `prefers-reduced-motion: reduce`
// we render only the poster image — the <video> never mounts, so no decode.
export default function VideoBackground() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-mxf-bg"
    >
      {reducedMotion ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/bg-poster.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      ) : (
        <video
          className="absolute inset-0 w-full h-full object-cover object-center"
          src="/bg.mp4"
          poster="/bg-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      )}

      {/* Dark overlay — keeps foreground text WCAG AA against brightest frames */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/45 to-black/70" />
    </div>
  );
}
