import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Aside from "@/components/Aside";
import Cursor from "@/components/Cursor";
import Projects from "@/components/Projects";

export default function HomePage() {
  return (
    <div className="bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <Aside />
      <Cursor />
    </div>
  );
}
