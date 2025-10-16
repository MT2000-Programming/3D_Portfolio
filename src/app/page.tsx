import Image from "next/image";
import styles from "./page.module.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Works from "./components/Works";
import Contact from "./components/Contact";
import StarsCanvas from "./components/canvas/Stars";
import Feedbacks from "./components/Feedbacks";
export default function Home() {
  return (
    <>
    <div className="min-h-screen w-full bg-black text-white bg-cover bg-center ">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center text-white">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech/>
      <Works/>
      <Feedbacks/>
      <div className="relative z-0">
        <Contact/>
        <StarsCanvas/>
      </div>
      
    </div>
      
    
    </>
  );
}
