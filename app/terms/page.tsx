import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { Metadata } from "next";
import { SUPPORT_EMAIL } from "../constants";

export const metadata: Metadata = {
  title: "Terms of Use — MyFlux",
  description: "Terms of Use for the MyFlux iOS app.",
};

export default function TermsPage() {
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
              <h1 className="text-4xl font-bold text-mxf-text">Terms of Use</h1>
              <p className="text-sm text-mxf-muted">Last updated: May 12, 2026</p>
            </header>

            <div className="p-4 rounded-xl border border-mxf-border bg-mxf-amber-1/30">
              <p className="text-sm text-mxf-muted italic">
                LEO: replace this draft with reviewed legal text before
                publishing. Counsel should verify governing law, EULA, and IAP
                terms before shipping.
              </p>
            </div>

            <p className="text-mxf-muted leading-relaxed">
              Welcome to MyFlux (&quot;the App&quot;). By downloading or using the
              App, you agree to these terms.
            </p>

            <Section title="Acceptance of Terms">
              <p className="text-mxf-muted leading-relaxed">
                By accessing or using MyFlux, you agree to be bound by these
                Terms of Use. If you do not agree, do not use the App.
              </p>
            </Section>

            <Section title="Description of Service">
              <p className="text-mxf-muted leading-relaxed">
                MyFlux is a video-organization app for iOS. It lets you group
                videos from your camera roll into collections, loop single
                clips or playlists, and revisit moments — all stored locally
                on your device.
              </p>
            </Section>

            <Section title="User Responsibilities">
              <ul className="space-y-2 text-mxf-muted">
                <ListItem>
                  You are responsible for the content you organize in MyFlux
                </ListItem>
                <ListItem>
                  You retain all rights to the videos in your camera roll —
                  MyFlux claims no ownership
                </ListItem>
                <ListItem>
                  You must not use the App for any unlawful purpose
                </ListItem>
                <ListItem>
                  You must not attempt to reverse-engineer, decompile, or
                  tamper with the App
                </ListItem>
              </ul>
            </Section>

            <Section title="Data and Privacy">
              <ul className="space-y-2 text-mxf-muted">
                <ListItem>All data is stored locally on your device</ListItem>
                <ListItem>
                  We do not collect, transmit, or have access to any of your
                  videos or collection data
                </ListItem>
                <ListItem>
                  For full details, see our{" "}
                  <Link href="/privacy" className="text-mxf-amber hover:underline">
                    Privacy Policy
                  </Link>
                </ListItem>
              </ul>
            </Section>

            <Section title="Intellectual Property">
              <p className="text-mxf-muted leading-relaxed">
                MyFlux, including its design, code, and visual assets, is the
                intellectual property of its developer. You are granted a
                limited, non-exclusive, non-transferable license to use the
                App for personal, non-commercial purposes.
              </p>
            </Section>

            <Section title="In-App Purchases">
              <p className="text-mxf-muted leading-relaxed">
                MyFlux offers Pro features via in-app purchase — a $0.99
                monthly subscription or a $9.99 lifetime unlock. All purchases
                are processed by Apple through the App Store and are subject
                to Apple&apos;s terms and conditions. Refunds are handled by
                Apple per their refund policy.
              </p>
            </Section>

            <Section title="Disclaimer of Warranties">
              <p className="text-mxf-muted leading-relaxed">
                The App is provided &quot;as is&quot; without warranties of any
                kind, express or implied. We do not guarantee that the App
                will be error-free, uninterrupted, or free of harmful
                components.
              </p>
            </Section>

            <Section title="Limitation of Liability">
              <p className="text-mxf-muted leading-relaxed">
                To the maximum extent permitted by law, the developer shall
                not be liable for any indirect, incidental, special, or
                consequential damages arising from your use of the App,
                including but not limited to data loss.
              </p>
            </Section>

            <Section title="Data Loss">
              <p className="text-mxf-muted leading-relaxed">
                Since all data is stored locally on your device, we are not
                responsible for data loss due to device failure, iOS updates,
                app deletion, or any other cause. Your camera roll videos
                themselves are managed by Apple Photos, not by MyFlux.
              </p>
            </Section>

            <Section title="Modifications">
              <p className="text-mxf-muted leading-relaxed">
                We reserve the right to update these Terms at any time.
                Continued use of the App after changes constitutes acceptance
                of the new Terms. The latest version will always be available
                at this page.
              </p>
            </Section>

            <Section title="Governing Law">
              <p className="text-mxf-muted leading-relaxed">
                {/* LEO: confirm governing-law jurisdiction with counsel */}
                These Terms are governed by the laws of Denmark, without
                regard to conflict of law principles.
              </p>
            </Section>

            <Section title="Contact">
              <p className="text-mxf-muted leading-relaxed">
                For questions about these Terms:{" "}
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="text-mxf-amber hover:underline"
                >
                  {SUPPORT_EMAIL}
                </a>
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

function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-mxf-amber flex-shrink-0" />
      <span>{children}</span>
    </li>
  );
}
