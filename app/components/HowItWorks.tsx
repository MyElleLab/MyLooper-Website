const steps = [
  {
    number: "01",
    icon: "📹",
    title: "Pick from your camera roll",
    description:
      "Tap to pull videos straight from Photos. Nothing gets uploaded. Nothing leaves your phone.",
  },
  {
    number: "02",
    icon: "🗂️",
    title: "Drop them into collections",
    description:
      "Group clips by theme, mood, person, place. Reorder them however you like.",
  },
  {
    number: "03",
    icon: "🔁",
    title: "Loop and revisit",
    description:
      "Single-clip or playlist loop. Replay the moments that matter — no scrolling, no algorithm.",
  },
];

export default function HowItWorks() {
  return (
    <section className="px-6 py-24 bg-mxf-surface/30">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-mxf-text">
            How it works
          </h2>
          <p className="text-mxf-muted max-w-xl mx-auto">
            MyLooper stores everything locally. No uploads, no tracking, no data
            brokers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div
            className="hidden md:block absolute top-10 left-1/6 right-1/6 h-px pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, transparent, #2a2520 20%, #f59e0b 50%, #2a2520 80%, transparent)",
            }}
            aria-hidden="true"
          />

          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col items-center text-center gap-4">
              <div className="relative z-10 w-20 h-20 rounded-2xl bg-mxf-surface border border-mxf-border flex flex-col items-center justify-center">
                <span className="text-2xl">{step.icon}</span>
                <span className="text-[10px] font-mono text-mxf-amber-dim mt-0.5">
                  {step.number}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-mxf-text">{step.title}</h3>
                <p className="text-sm text-mxf-muted leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
