"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Does MyFlux upload my videos anywhere?",
    answer:
      "No. MyFlux reads videos directly from your camera roll and stores collection metadata locally on your device. Nothing is uploaded, synced, or sent to any server. Ever.",
    link: { text: "Privacy Policy", href: "/privacy" },
  },
  {
    question: "What's the difference between Monthly and Lifetime?",
    answer:
      "Both unlock the same Pro features. Monthly is $0.99/month — billed by Apple, cancel anytime. Lifetime is a one-time $9.99 — pay once, keep forever, no subscription to manage.",
  },
  {
    question: "Can I loop a playlist of clips?",
    answer:
      "Yes. MyFlux supports both single-clip loop (replay the same video) and playlist loop (cycle through a whole collection). Loop state can be toggled from the player.",
  },
  {
    question: "Does MyFlux use any analytics or tracking?",
    answer:
      "No. There are no third-party SDKs, analytics tools, ad networks, or trackers in the app. The only network call MyFlux makes is to Apple's StoreKit for in-app purchases.",
  },
  {
    question: "Will my collections sync across devices?",
    answer:
      "Not today. MyFlux is intentionally device-local. iCloud-based sync is on the roadmap, but it would always be opt-in and end-to-end private.",
  },
  {
    question: "Will there be an Android version?",
    answer:
      "Not currently. MyFlux is focused on iOS for now. Building one platform well beats two platforms poorly.",
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="rounded-xl border border-mxf-border bg-mxf-surface overflow-hidden"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-4 text-left group"
            aria-expanded={open === i}
          >
            <span className="font-medium text-mxf-text group-hover:text-mxf-amber transition-colors">
              {faq.question}
            </span>
            <span
              className="text-mxf-muted ml-4 flex-shrink-0 transition-transform duration-200"
              style={{
                transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
              }}
              aria-hidden="true"
            >
              +
            </span>
          </button>

          {open === i && (
            <div className="px-6 pb-5 text-sm text-mxf-muted leading-relaxed border-t border-mxf-border pt-4">
              <p>{faq.answer}</p>
              {faq.link && (
                <a
                  href={faq.link.href}
                  className="mt-2 inline-block text-mxf-amber hover:underline"
                >
                  {faq.link.text} →
                </a>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
