const features = [
  {
    icon: <CollectionsIcon />,
    title: "Collections by theme",
    description:
      "Group your clips into collections that actually make sense.",
  },
  {
    icon: <LoopIcon />,
    title: "Loop anything",
    description:
      "Single-clip or playlist loop. Replay the moments you love.",
  },
  {
    icon: <LocalIcon />,
    title: "Everything stays local",
    description:
      "No uploads. No tracking. No data brokers. Your camera roll, your business.",
  },
  {
    icon: <InstantIcon />,
    title: "Instant access",
    description:
      "Skip endless scrolling. Your videos, one tap away.",
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-mxf-text">
            Everything you need. Nothing you don&apos;t.
          </h2>
          <p className="text-mxf-muted max-w-xl mx-auto">
            Built for people who watch the moments that matter — not the feed.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, i) => (
            <FeatureCard key={i} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative p-6 rounded-xl bg-mxf-surface border border-mxf-border hover:border-mxf-amber-dim transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(245,158,11,0.10)]">
      <div className="mb-4">{icon}</div>
      <h3 className="font-semibold text-mxf-text mb-2">{title}</h3>
      <p className="text-sm text-mxf-muted leading-relaxed">{description}</p>
    </div>
  );
}

function CollectionsIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="10" height="10" rx="2" stroke="#f59e0b" strokeWidth="1.5" />
      <rect x="15" y="3" width="10" height="10" rx="2" stroke="#f59e0b" strokeWidth="1.5" />
      <rect x="3" y="15" width="10" height="10" rx="2" stroke="#f59e0b" strokeWidth="1.5" />
      <rect x="15" y="15" width="10" height="10" rx="2" stroke="#f59e0b" strokeWidth="1.5" />
    </svg>
  );
}

function LoopIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path
        d="M7 9h12a4 4 0 010 8h-2M21 19H9a4 4 0 010-8h2"
        stroke="#f59e0b"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 6l-3 3 3 3M19 22l3-3-3-3"
        stroke="#f59e0b"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LocalIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="6" y="13" width="16" height="12" rx="2" stroke="#f59e0b" strokeWidth="1.5" />
      <path
        d="M9 13V9a5 5 0 0110 0v4"
        stroke="#f59e0b"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="14" cy="19" r="1.5" fill="#f59e0b" />
    </svg>
  );
}

function InstantIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path
        d="M14 2L4 16h8l-2 10 12-14h-8l2-10z"
        stroke="#f59e0b"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
