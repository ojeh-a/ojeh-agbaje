import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import Teasers from "@/components/Teasers";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Stack />
      <Teasers />
      <Contact />
      <Footer />
    </>
  );
}
