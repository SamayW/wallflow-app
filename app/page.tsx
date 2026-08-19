import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { TwoPlaces } from "@/components/TwoPlaces";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Requirements } from "@/components/Requirements";
import { Download } from "@/components/Download";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <TwoPlaces />
        <Features />
        <HowItWorks />
        <Requirements />
        <Download />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
