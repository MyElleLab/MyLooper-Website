import Image from "next/image";

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

        <div className="mx-auto max-w-4xl">
          <Image
            src="/MyFlux - Promo v0.png"
            alt="MyVideoLooper on iPhone — Library, Collections, and Loop screens"
            width={1448}
            height={1086}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
