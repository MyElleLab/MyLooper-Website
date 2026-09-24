import Image from "next/image";
import { APP_STORE_URL } from "../constants";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <div className="flex justify-center">
          <Image
            src="/MyLooper.png"
            alt="MyLooper app icon"
            width={120}
            height={120}
            className="rounded-[26px] shadow-[0_20px_60px_rgba(245,158,11,0.25)]"
            priority
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-mxf-text leading-[1.05]">
          <span className="block">Stop scrolling.</span>
          <span
            className="block text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #f59e0b 0%, #d97706 60%, #b45309 100%)",
            }}
          >
            Start watching.
          </span>
        </h1>

        <div className="flex flex-col items-center gap-2 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          <p className="text-mxf-muted">
            Collect, loop, and revisit the moments that matter — all from your
            camera roll.
          </p>
          <p className="text-mxf-text font-bold">
            No uploads. No tracking. Just your videos.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex"
            aria-label="Download MyLooper on the App Store"
          >
            {/* Apple's official badge, unaltered: sized by height only (40px
                minimum), with at least a quarter of its height clear around it. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/app-store-badge.svg"
              alt=""
              aria-hidden="true"
              className="h-11 w-auto"
            />
          </a>
          <a
            href="#features"
            className="text-sm text-mxf-muted hover:text-mxf-text transition-colors"
          >
            See features ↓
          </a>
        </div>
      </div>
    </section>
  );
}
