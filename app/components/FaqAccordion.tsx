"use client";

import { useState } from "react";

const faqs: { question: string; answer: string; link?: { text: string; href: string } }[] = [
  {
    question: "How do I add videos to MyFlux?",
    answer:
      "MyFlux reads videos directly from your iPhone's Photos library. Tap any video in the Library tab to add it to a collection. There's nothing to import or upload — MyFlux just shows you what's already on your phone.",
  },
  {
    question: "How do I create a collection?",
    answer:
      "Go to the Collections tab and tap the + button. Give it a name, then start adding videos from your Library.",
  },
  {
    question: "Are my videos uploaded anywhere?",
    answer:
      "No. Everything stays on your iPhone. MyFlux has no cloud, no servers, and no accounts. Your camera roll never leaves your device.",
    link: { text: "Privacy Policy", href: "/privacy" },
  },
  {
    question: "What's included in MyFlux Pro?",
    answer:
      "Pro removes the 3-collection limit for free users, plus priority support and access to all future features. Available as a $0.99/month subscription or a $9.99 one-time lifetime purchase.",
  },
  {
    question: "How do I cancel my subscription?",
    answer:
      "On your iPhone: Settings → Apple ID → Subscriptions → MyFlux → Cancel. Apple handles all subscriptions directly.",
  },
  {
    question: "I bought Pro on a different device. How do I restore it?",
    answer:
      "Open MyFlux → Settings → Restore Purchases. Make sure you're signed into the same Apple ID you used for the original purchase.",
  },
  {
    question: "How do I request a refund?",
    answer:
      "Apple handles all refunds. Visit reportaproblem.apple.com on any device, sign in, and request a refund for your MyFlux purchase. We have no control over the refund decision, but if you have concerns, email us at support@getmyflux.com and we'll do our best to help.",
  },
  {
    question: "Where is my data stored?",
    answer:
      "All collection information is stored locally on your iPhone in MyFlux's app database. If you uninstall the app, all collection data is deleted with it. Your videos in the Photos library are not affected — they belong to iOS, not to MyFlux.",
  },
  {
    question: "How do I delete all my data?",
    answer:
      "Open MyFlux → Settings → Withdraw Consent & Delete Data. This deletes all your collections and resets the app to its initial state. Your videos in the Photos library are not affected.",
  },
  {
    question: "I have a feature idea or found a bug.",
    answer:
      "Email support@getmyflux.com — we read every message and always appreciate user feedback.",
  },
  {
    question: "Can I get MyFlux on Android?",
    answer:
      "Currently iOS only. No Android plans at this time.",
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
