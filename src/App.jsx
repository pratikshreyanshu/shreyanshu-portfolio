import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import Education from "./components/education";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <div className="w-full min-h-screen bg-[#050816] overflow-x-hidden">
      <Navbar />

      <main className="w-full">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;