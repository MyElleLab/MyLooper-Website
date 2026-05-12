"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/#features", label: "Features" },
    { href: "/#pricing", label: "Pricing" },
    { href: "/privacy", label: "Privacy" },
    { href: "/support", label: "Support" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-mxf-border bg-mxf-bg/90 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/app-icon.png"
            alt="MyFlux icon"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span className="font-semibold text-mxf-text group-hover:text-mxf-amber transition-colors">
            MyFlux
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors ${
                pathname === link.href
                  ? "text-mxf-amber"
                  : "text-mxf-muted hover:text-mxf-text"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-[2px] w-full bg-mxf-text rounded transition-transform duration-200 ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-full bg-mxf-text rounded transition-opacity duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-full bg-mxf-text rounded transition-transform duration-200 ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-mxf-border bg-mxf-bg/95 backdrop-blur-md">
          <div className="flex flex-col px-6 py-4 gap-4 text-sm">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`transition-colors ${
                  pathname === link.href
                    ? "text-mxf-amber"
                    : "text-mxf-muted hover:text-mxf-text"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
