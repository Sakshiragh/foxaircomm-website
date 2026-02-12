import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/service";
import Portfolio from "./components/portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Services />   
      <Portfolio />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
