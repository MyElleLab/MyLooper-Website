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
              <p className="text-sm text-mxf-muted">Last updated: May 12, 2026</p>
            </header>

            <div className="p-4 rounded-xl border border-mxf-border bg-mxf-amber-1/30">
              <p className="text-sm text-mxf-muted italic">
                LEO: replace this draft with reviewed legal text before
                publishing. The structure below is accurate, but should be
                verified by counsel for GDPR/CCPA compliance.
              </p>
            </div>

            <p className="text-mxf-muted leading-relaxed">
              MyFlux (&quot;the App&quot;) is committed to protecting your privacy.
              This policy explains how we handle your data.
            </p>

            <Section title="The Short Version">
              <div className="p-4 rounded-xl border border-mxf-amber-dim bg-mxf-amber-1/20">
                <p className="font-semibold text-mxf-amber">
                  We don&apos;t collect any data. Everything stays on your device.
                </p>
              </div>
            </Section>

            <Section title="What Data Is Stored">
              <p className="text-mxf-muted leading-relaxed">
                The App stores the following data locally on your iPhone:
              </p>
              <ul className="mt-3 space-y-2 text-mxf-muted">
                <ListItem>
                  Collection metadata (collection names, ordering, clip
                  references)
                </ListItem>
                <ListItem>
                  Playback preferences (loop mode, playback speed, sort order)
                </ListItem>
                <ListItem>
                  App preferences (theme, onboarding status, paywall state)
                </ListItem>
              </ul>
              <p className="mt-3 text-mxf-muted leading-relaxed">
                MyFlux reads videos directly from your Photos library — it does
                not duplicate or upload them. Collection data is stored using
                iOS on-device storage. It never leaves your device.
              </p>
            </Section>

            <Section title="What We Don't Collect">
              <ul className="space-y-2 text-mxf-muted">
                <ListItem>
                  No personal information (name, email, phone, location)
                </ListItem>
                <ListItem>No usage analytics or crash reports</ListItem>
                <ListItem>No advertising identifiers</ListItem>
                <ListItem>No cookies or tracking pixels</ListItem>
                <ListItem>No data is transmitted to any server</ListItem>
              </ul>
            </Section>

            <Section title="Third-Party Services">
              <p className="text-mxf-muted leading-relaxed">
                None. The App contains no third-party SDKs, analytics tools, ad
                networks, or cloud services. The only network calls MyFlux
                makes are to Apple&apos;s StoreKit for in-app purchases.
              </p>
            </Section>

            <Section title="Your Rights (GDPR / CCPA)">
              <p className="text-mxf-muted leading-relaxed mb-4">
                Under GDPR and CCPA, you have the right to:
              </p>
              <ul className="space-y-3 text-mxf-muted">
                <ListItem>
                  <strong className="text-mxf-text">Access</strong> your data:
                  visible directly in the app at any time
                </ListItem>
                <ListItem>
                  <strong className="text-mxf-text">Delete</strong> your data:
                  remove collections in-app, or uninstall the app to wipe all
                  data
                </ListItem>
                <ListItem>
                  <strong className="text-mxf-text">Rectify</strong> your data:
                  edit collections at any time within the app
                </ListItem>
              </ul>
              <p className="mt-4 text-mxf-muted leading-relaxed">
                Since all data is stored exclusively on your device, exercising
                these rights requires no request to us — you have full control.
              </p>
            </Section>

            <Section title="Data Retention">
              <p className="text-mxf-muted leading-relaxed">
                Your data persists on your device until you delete it within
                the app or uninstall the app. Uninstalling permanently removes
                all MyFlux data.
              </p>
            </Section>

            <Section title="Children's Privacy">
              <p className="text-mxf-muted leading-relaxed">
                The App does not knowingly collect data from children under 16.
                Since no personal information is collected from any user, the
                App is compliant with COPPA and GDPR age requirements.
              </p>
            </Section>

            <Section title="Changes to This Policy">
              <p className="text-mxf-muted leading-relaxed">
                If we update this policy, we will post the revised version on
                this page with an updated date.
              </p>
            </Section>

            <Section title="Contact">
              <p className="text-mxf-muted leading-relaxed">
                For privacy questions or concerns:{" "}
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
