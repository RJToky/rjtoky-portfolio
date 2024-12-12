import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import About from "./components/About";
import Experiences from "./components/Experiences";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className="bg-dark w-full min-h-screen relative overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experiences />
      <Footer />
    </div>
  );
}
