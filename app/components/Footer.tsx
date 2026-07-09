import Link from "next/link";
import Image from "next/image";
import { SUPPORT_EMAIL } from "../constants";

export default function Footer() {
  return (
    <footer className="border-t border-mxf-border px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Image
              src="/app-icon.png"
              alt="MyVideoLooper icon"
              width={24}
              height={24}
              className="rounded-md"
            />
            <span className="font-semibold text-mxf-text">MyVideoLooper</span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-mxf-muted">
            <Link href="/privacy" className="hover:text-mxf-text transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-mxf-text transition-colors">
              Terms of Use
            </Link>
            <Link href="/support" className="hover:text-mxf-text transition-colors">
              Support
            </Link>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="hover:text-mxf-text transition-colors"
            >
              {SUPPORT_EMAIL}
            </a>
          </nav>

          <div className="flex flex-col items-center md:items-end gap-1 text-xs text-mxf-muted">
            <span>© 2026 MyVideoLooper</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
