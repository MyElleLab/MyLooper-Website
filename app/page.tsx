import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureGrid from "./components/FeatureGrid";
import AppPreview from "./components/AppPreview";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeatureGrid />
        <AppPreview />
        <HowItWorks />
      </main>
      <Footer />
    </>
  );
}
