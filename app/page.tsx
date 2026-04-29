import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { AISection } from "@/components/sections/AISection";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { Vision } from "@/components/sections/Vision";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="site-main">
        <Hero />
        <Experience />
        <Skills />
        <AISection />
        <Vision />
        <Education />
      </main>
      <Footer />
    </>
  );
}
