import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FaqAccordion from "../components/FaqAccordion";
import type { Metadata } from "next";
import { SUPPORT_EMAIL } from "../constants";

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
            <p className="text-mxf-muted leading-relaxed">
              Need help? Email{" "}
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="text-mxf-amber hover:underline"
              >
                {SUPPORT_EMAIL}
              </a>{" "}
              and we&apos;ll get back to you within 1–2 business days.
            </p>
          </header>

          <section className="mb-16">
            <h2 className="text-xl font-semibold text-mxf-text mb-6">
              Frequently Asked Questions
            </h2>
            <FaqAccordion />
          </section>

          <section className="p-6 rounded-xl border border-mxf-border bg-mxf-surface space-y-3 text-sm text-mxf-muted leading-relaxed">
            <p>MyFlux is developed by Leonardo Ferhati in Copenhagen.</p>
            <p>
              Privacy Policy:{" "}
              <Link href="/privacy" className="text-mxf-amber hover:underline">
                getmyflux.com/privacy
              </Link>
            </p>
            <p>
              Terms of Use:{" "}
              <Link href="/terms" className="text-mxf-amber hover:underline">
                getmyflux.com/terms
              </Link>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
