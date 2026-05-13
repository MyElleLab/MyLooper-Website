import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { Metadata } from "next";
import { SUPPORT_EMAIL } from "../constants";

export const metadata: Metadata = {
  title: "Privacy Policy — MyFlux",
  description:
    "MyFlux collects no data. Everything stays on your device. Read our full privacy policy.",
};

export default function PrivacyPage() {
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

          <article className="space-y-8">
            <header className="space-y-2">
              <h1 className="text-4xl font-bold text-mxf-text">Privacy Policy</h1>
              <p className="text-sm text-mxf-muted">Effective May 13, 2026</p>
            </header>

            <p className="text-mxf-muted leading-relaxed">
              This Privacy Policy explains how MyFlux handles information when
              you use our iOS application.
            </p>

            <Section title="The Short Version">
              <div className="p-4 rounded-xl border border-mxf-amber-dim bg-mxf-amber-1/20">
                <p className="text-mxf-muted leading-relaxed">
                  MyFlux does not collect, store, or transmit any personal data
                  from your device. MyFlux does not use analytics, tracking, or
                  advertising frameworks. All your videos and collection data
                  stay on your iPhone.
                </p>
              </div>
            </Section>

            <Section title="What MyFlux Accesses">
              <p className="text-mxf-muted leading-relaxed">
                MyFlux requests permission to access your iOS Photos library so
                it can display and organize your videos. This access is
                read-only and limited to your device. We do not upload, copy,
                or transmit any video content to our servers or any third
                party.
              </p>
              <p className="text-mxf-muted leading-relaxed">
                The list of which videos belong to which collection is stored
                entirely in your device&apos;s local app database. This
                information never leaves your phone.
              </p>
            </Section>

            <Section title="Subscriptions">
              <p className="text-mxf-muted leading-relaxed">
                MyFlux Pro is offered through Apple&apos;s App Store as an
                in-app purchase. We use RevenueCat to validate purchase
                receipts with Apple — this is the only network communication
                MyFlux performs. RevenueCat receives an Apple-issued anonymous
                identifier and your purchase status to verify your
                subscription. No personal information, email addresses, or
                Apple ID details are shared.
              </p>
              <p className="text-mxf-muted leading-relaxed">
                Apple&apos;s standard subscription terms apply. You can manage
                and cancel your subscription at any time from Settings → Apple
                ID → Subscriptions on your device.
              </p>
            </Section>

            <Section title="No Analytics, No Tracking">
              <p className="text-mxf-muted leading-relaxed">
                MyFlux does not include any third-party analytics, advertising,
                or tracking SDKs. We do not collect crash reports through third
                parties. We may receive aggregated, anonymized crash reports
                through Apple&apos;s first-party App Store Connect tools, which
                contain no personally identifiable information.
              </p>
            </Section>

            <Section title="Children's Privacy">
              <p className="text-mxf-muted leading-relaxed">
                MyFlux is not directed to children under 13. We do not
                knowingly collect any data from anyone, including children.
              </p>
            </Section>

            <Section title="Your Rights">
              <p className="text-mxf-muted leading-relaxed">
                Since MyFlux does not collect personal data, there is no
                personal data to access, correct, or delete on our end. You can
                delete all collection data stored on your device at any time
                from MyFlux → Settings → Withdraw Consent & Delete Data.
              </p>
            </Section>

            <Section title="Changes to This Policy">
              <p className="text-mxf-muted leading-relaxed">
                We may update this policy from time to time. The
                &quot;Effective&quot; date at the top indicates when it was
                last revised. Continued use of MyFlux after changes constitutes
                acceptance of the updated policy.
              </p>
            </Section>

            <Section title="Contact">
              <p className="text-mxf-muted leading-relaxed">
                Questions about this policy:{" "}
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="text-mxf-amber hover:underline"
                >
                  {SUPPORT_EMAIL}
                </a>
              </p>
              <p className="text-mxf-muted leading-relaxed">
                MyFlux is developed by Leonardo Ferhati, based in Copenhagen,
                Denmark.
              </p>
            </Section>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold text-mxf-text border-b border-mxf-border pb-2">
        {title}
      </h2>
      {children}
    </section>
  );
}
