import { APP_STORE_URL } from "../constants";

const tiers = [
  {
    name: "Monthly",
    price: "$0.99",
    cadence: "/ month",
    description: "Try Pro. Cancel anytime in the App Store.",
    highlight: false,
  },
  {
    name: "Lifetime",
    price: "$9.99",
    cadence: "one-time",
    description: "Pay once. Own it forever. No subscriptions.",
    highlight: true,
    badge: "Best Value",
  },
];

const proFeatures = [
  "Unlimited collections",
  "Single-clip & playlist loop",
  "All future Pro features",
  "Local-only, no uploads, ever",
];

export default function Pricing() {
  return (
    <section id="pricing" className="px-6 py-24 border-t border-mxf-border">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-mxf-text">
            Simple pricing. No tricks.
          </h2>
          <p className="text-mxf-muted max-w-xl mx-auto">
            Pay once or pay monthly. Either way, your videos stay on your
            phone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative p-7 rounded-2xl border ${
                tier.highlight
                  ? "border-mxf-amber bg-gradient-to-b from-mxf-amber-1/40 to-mxf-surface shadow-[0_20px_60px_rgba(245,158,11,0.12)]"
                  : "border-mxf-border bg-mxf-surface"
              }`}
            >
              {tier.badge && (
                <span className="absolute -top-3 right-6 px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full bg-mxf-amber text-mxf-bg">
                  {tier.badge}
                </span>
              )}

              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-mxf-text">
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-mxf-text">
                    {tier.price}
                  </span>
                  <span className="text-sm text-mxf-muted">{tier.cadence}</span>
                </div>
                <p className="text-sm text-mxf-muted">{tier.description}</p>
              </div>

              <ul className="mt-6 space-y-2">
                {proFeatures.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-mxf-text"
                  >
                    <CheckIcon />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-7 inline-flex w-full items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-colors ${
                  tier.highlight
                    ? "bg-mxf-amber text-mxf-bg hover:bg-mxf-amber-3"
                    : "bg-mxf-text text-mxf-bg hover:bg-mxf-amber"
                }`}
              >
                Get MyLooper
              </a>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-mxf-muted">
          Prices shown in USD. Local currency and exact rates set by the App
          Store.
        </p>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="flex-shrink-0 mt-0.5"
      aria-hidden="true"
    >
      <path
        d="M3 8l3.5 3.5L13 5"
        stroke="#f59e0b"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
