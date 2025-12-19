import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ImpactMetrics from "@/components/ImpactMetrics";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <ImpactMetrics />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
