"use client";

// Screenshot placeholders. Drop final screens into /public matching the filenames below.
// LEO: replace these images with real MyFlux screenshots when ready.
const screens = [
  { src: "/screen-library.png", alt: "MyFlux library screen", label: "Library" },
  { src: "/screen-collection.png", alt: "MyFlux collection screen", label: "Collection" },
  { src: "/screen-player.png", alt: "MyFlux player with loop", label: "Player & Loop" },
  { src: "/screen-paywall.png", alt: "MyFlux paywall screen", label: "Pro" },
];

export default function AppPreview() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-mxf-text">
            Your camera roll, finally watchable.
          </h2>
          <p className="text-mxf-muted max-w-xl mx-auto">
            A cinematic, dark interface that puts the videos first.
          </p>
        </div>

        <div className="flex flex-row items-center justify-center gap-6 overflow-x-auto pb-10">
          {screens.map((s) => (
            <PhoneFrame key={s.src} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PhoneFrame({
  src,
  alt,
  label,
}: {
  src: string;
  alt: string;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center gap-3 flex-shrink-0" style={{ width: 220 }}>
      <div
        className="rounded-[2.5rem] border-[3px] border-[#2a2520] overflow-hidden shadow-2xl w-full bg-[#0b0a08] flex items-center justify-center"
        style={{ height: 476 }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          width={220}
          height={476}
          className="w-full h-full object-cover object-top block"
          onError={(e) => {
            const t = e.currentTarget;
            t.style.display = "none";
            const parent = t.parentElement;
            if (parent && !parent.querySelector(".placeholder")) {
              const ph = document.createElement("div");
              ph.className =
                "placeholder w-full h-full flex items-center justify-center text-mxf-muted text-xs text-center px-4";
              ph.textContent = `Screenshot placeholder — drop ${src.split("/").pop()} into /public`;
              parent.appendChild(ph);
            }
          }}
        />
      </div>
      <span className="text-sm text-mxf-muted">{label}</span>
    </div>
  );
}
