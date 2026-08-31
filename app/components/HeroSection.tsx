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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-mxf-text text-mxf-bg font-semibold text-sm hover:bg-mxf-amber transition-colors"
            aria-label="Download MyLooper on the App Store"
          >
            <AppleIcon />
            Download on the App Store
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

function AppleIcon() {
  return (
    <svg
      viewBox="0 0 384 512"
      fill="currentColor"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5c0 26.2 4.8 53.3 14.4 81.2 12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}
