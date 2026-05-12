import Image from "next/image";

// Filenames intentionally match disk literally (note: "Library.jpeg" — Leo's typo, kept).
const screens = [
  { src: "/Library.jpeg", alt: "MyFlux library screen", label: "Library" },
  { src: "/Collection.jpeg", alt: "MyFlux collection screen", label: "Collection" },
  { src: "/Settings.jpeg", alt: "MyFlux settings screen", label: "Settings" },
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 justify-items-center max-w-4xl mx-auto">
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
    <div className="flex flex-col items-center gap-3 w-full max-w-[240px]">
      <div
        className="rounded-[2.5rem] border-[3px] border-[#2a2520] overflow-hidden shadow-2xl w-full bg-[#0b0a08]"
        style={{ aspectRatio: "9 / 19.5" }}
      >
        <Image
          src={src}
          alt={alt}
          width={240}
          height={520}
          className="w-full h-full object-cover object-top block"
        />
      </div>
      <span className="text-sm text-mxf-muted">{label}</span>
    </div>
  );
}
