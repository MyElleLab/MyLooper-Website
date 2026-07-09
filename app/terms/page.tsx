import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { Metadata } from "next";
import { SUPPORT_EMAIL } from "../constants";

export const metadata: Metadata = {
  title: "Terms of Use — MyVideoLooper",
  description: "Terms of Use for the MyVideoLooper iOS app.",
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
              <p className="text-sm text-mxf-muted">Effective May 13, 2026</p>
            </header>

            <p className="text-mxf-muted leading-relaxed">
              By downloading and using MyVideoLooper (&quot;the App&quot;), you agree
              to these Terms of Use.
            </p>

            <Section title="License">
              <p className="text-mxf-muted leading-relaxed">
                We grant you a limited, non-exclusive, non-transferable,
                revocable license to use MyVideoLooper on your iOS devices, solely for
                personal, non-commercial purposes, subject to Apple&apos;s App
                Store Terms of Service.
              </p>
            </Section>

            <Section title="Use Restrictions">
              <p className="text-mxf-muted leading-relaxed">You agree not to:</p>
              <ul className="mt-3 space-y-2 text-mxf-muted">
                <ListItem>
                  Reverse engineer, decompile, or disassemble the App
                </ListItem>
                <ListItem>
                  Modify, adapt, or create derivative works of the App
                </ListItem>
                <ListItem>
                  Remove or alter any copyright or proprietary notices
                </ListItem>
                <ListItem>Use the App for any unlawful purpose</ListItem>
              </ul>
            </Section>

            <Section title="Intellectual Property">
              <p className="text-mxf-muted leading-relaxed">
                The App, including all related design, code, graphics, and
                content, is owned by Leonardo Ferhati and protected by
                copyright and other intellectual property laws.
              </p>
            </Section>

            <Section title="Subscriptions">
              <p className="text-mxf-muted leading-relaxed">
                MyVideoLooper Pro is offered via an auto-renewable monthly
                subscription and a one-time lifetime purchase, sold through
                Apple&apos;s App Store. Subscriptions automatically renew until
                cancelled. You can manage or cancel your subscription anytime
                from Settings → Apple ID → Subscriptions on your device.
              </p>
              <p className="text-mxf-muted leading-relaxed">
                Apple&apos;s standard subscription terms and conditions apply:{" "}
                <a
                  href="https://www.apple.com/legal/internet-services/itunes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mxf-amber hover:underline"
                >
                  apple.com/legal/internet-services/itunes
                </a>
              </p>
            </Section>

            <Section title="Disclaimer of Warranties">
              <p className="text-mxf-muted leading-relaxed">
                The App is provided &quot;as is&quot; and &quot;as
                available&quot; without warranties of any kind, either express
                or implied. We do not guarantee that the App will be
                uninterrupted, error-free, or compatible with all devices or
                iOS versions.
              </p>
            </Section>

            <Section title="Limitation of Liability">
              <p className="text-mxf-muted leading-relaxed">
                To the maximum extent permitted by applicable law, we shall not
                be liable for any indirect, incidental, special, consequential,
                or punitive damages, or any loss of profits, data, or use,
                arising from your use of the App.
              </p>
            </Section>

            <Section title="Governing Law">
              <p className="text-mxf-muted leading-relaxed">
                These Terms are governed by the laws of Denmark, without
                regard to conflict of law principles. Any disputes arising
                from these Terms or your use of the App shall be resolved in
                the courts of Copenhagen, Denmark. For consumers residing in
                the European Union, mandatory local consumer protection laws
                apply where they grant greater protection than these Terms.
              </p>
            </Section>

            <Section title="Changes to These Terms">
              <p className="text-mxf-muted leading-relaxed">
                We may update these Terms from time to time. The
                &quot;Effective&quot; date indicates when they were last
                revised. Continued use of the App after changes constitutes
                acceptance of the updated Terms.
              </p>
            </Section>

            <Section title="Contact">
              <p className="text-mxf-muted leading-relaxed">
                Questions about these Terms:{" "}
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
