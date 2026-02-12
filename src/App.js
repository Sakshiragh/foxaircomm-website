import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/service";
import Portfolio from "./components/portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import WhyChooseUs from "./components/WhyChooseUs";

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300 overflow-hidden">

      {/* 🔵 Top Right Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] 
      bg-blue-100 rounded-full blur-3xl opacity-40"></div>

      {/* 🔵 Bottom Left Glow */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] 
      bg-cyan-100 rounded-full blur-3xl opacity-40"></div>

      {/* Content Wrapper */}
      <div className="relative z-10">
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Portfolio />
        <Testimonials />
        <Contact />
      </div>

    </div>
  );
}


export default App;
