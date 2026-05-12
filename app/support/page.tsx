import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FaqAccordion from "../components/FaqAccordion";
import type { Metadata } from "next";
import { APP_STORE_URL, SUPPORT_EMAIL } from "../constants";

export const metadata: Metadata = {
  title: "Support — MyFlux",
  description: "Get help with MyFlux. FAQ, contact, and more.",
};

export default function SupportPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 px-6">
        <div className="mx-auto max-w-2xl">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-sm text-mxf-muted hover:text-mxf-amber transition-colors mb-10"
          >
            ← Back to Home
          </Link>

          <header className="mb-12 space-y-2">
            <h1 className="text-4xl font-bold text-mxf-text">Support</h1>
            <p className="text-mxf-muted">
              Answers to common questions. If you can&apos;t find what you
              need, email us.
            </p>
          </header>

          <section className="mb-16">
            <h2 className="text-xl font-semibold text-mxf-text mb-6">
              Frequently asked questions
            </h2>
            <FaqAccordion />
          </section>

          <section className="p-6 rounded-xl border border-mxf-border bg-mxf-surface space-y-4">
            <h2 className="text-xl font-semibold text-mxf-text">
              Still need help?
            </h2>
            <p className="text-mxf-muted leading-relaxed">
              Have a question, found a bug, or want to share feedback? We read
              every email.
            </p>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-mxf-amber text-mxf-bg font-semibold text-sm hover:bg-mxf-amber-3 transition-colors"
            >
              Email {SUPPORT_EMAIL}
            </a>

            <div className="pt-2 border-t border-mxf-border">
              <p className="text-xs text-mxf-muted">
                You can also{" "}
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mxf-amber hover:underline"
                >
                  leave a review on the App Store
                </a>{" "}
                — it helps more than you know.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
