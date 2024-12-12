import Header from "../../layout/Header";
import About from "./components/About";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="bg-dark w-full min-h-screen relative overflow-hidden">
      <Header />
      <Hero />
      <About />
      {/* <div className="h-screen"></div> */}
    </div>
  );
}
