"use client";

import { useEffect, useRef, useState } from "react";

// Playback speed for the ambient background video. 1 = native, <1 = slower.
const PLAYBACK_RATE = 0.5;

// Fixed full-viewport video background. Falls back to a static poster image
// when the browser blocks autoplay (iOS Low Power Mode, Data Saver, etc.) or
// when the user has `prefers-reduced-motion: reduce` set.
export default function VideoBackground() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [autoplayFailed, setAutoplayFailed] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const v = videoRef.current;
    if (!v) return;

    v.muted = true;
    v.playbackRate = PLAYBACK_RATE;

    const apply = () => {
      v.playbackRate = PLAYBACK_RATE;
    };
    v.addEventListener("loadedmetadata", apply);
    v.addEventListener("play", apply);

    const p = v.play();
    if (p && typeof p.catch === "function") {
      p.catch(() => {
        setAutoplayFailed(true);
      });
    }

    return () => {
      v.removeEventListener("loadedmetadata", apply);
      v.removeEventListener("play", apply);
    };
  }, [reducedMotion]);

  const showPoster = reducedMotion || autoplayFailed;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-mxf-bg"
    >
      {showPoster ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/bg-poster.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      ) : (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover object-center"
          poster="/bg-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
        >
          <source src="/bg.webm" type="video/webm" />
          <source src="/bg.mp4" type="video/mp4" />
        </video>
      )}

      {/* Dark overlay — keeps foreground text WCAG AA against brightest frames */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/45 to-black/70" />
    </div>
  );
}
