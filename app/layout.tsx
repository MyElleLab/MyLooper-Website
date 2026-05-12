import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GridBackground from "./components/GridBackground";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MyFlux — All your videos, beautifully organized.",
  description:
    "Collect, loop, and revisit the moments that matter — all from your camera roll. Fully private — everything stays on your device.",
  keywords: [
    "video collections",
    "video loop",
    "camera roll",
    "iOS",
    "privacy",
    "local-only",
  ],
  openGraph: {
    title: "MyFlux — All your videos, beautifully organized.",
    description:
      "Stop scrolling. Start watching. Collect, loop, and revisit the moments that matter.",
    url: "https://getmyflux.com",
    siteName: "MyFlux",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MyFlux — All your videos, beautifully organized.",
    description:
      "Stop scrolling. Start watching. Collect, loop, and revisit the moments that matter.",
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon-32.png" sizes="32x32" type="image/png" />
      </head>
      <body className="bg-mxf-bg text-mxf-text antialiased">
        <GridBackground />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
