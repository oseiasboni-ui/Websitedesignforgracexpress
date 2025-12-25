import { useRef } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { ImageCarousel } from "./components/ImageCarousel";
import { Gallery } from "./components/Gallery";
import { Features } from "./components/Features";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function App() {
  const aboutRef = useRef<HTMLDivElement>(null);

  const handleScrollToContent = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero onScrollToContent={handleScrollToContent} />
      <div ref={aboutRef}>
        <About />
      </div>
      <Services />
      <ImageCarousel />
      <Gallery />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}