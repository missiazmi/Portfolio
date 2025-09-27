import React, { useRef } from "react";
import Navbar from "./components/Navbar"
import Hero from './components/Hero'
import About from "./components/About"
import Footer from "./components/Footer";
import Projects from './components/Projects'
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";


function App() {
    const scrollRef = useRef(null);

  return (
    
    <>
       <div
      ref={scrollRef}
      className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth"
    >
      <Navbar scrollContainerRef={scrollRef} />
      <Hero />
      <About />
      <Portfolio/>
      <Projects/>
      <Contact/>
    
      <Footer/>
    </div>
    </>
  )
}

export default App
