import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureGrid from "./components/FeatureGrid";
import AppPreview from "./components/AppPreview";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeatureGrid />
        <AppPreview />
        <HowItWorks />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
