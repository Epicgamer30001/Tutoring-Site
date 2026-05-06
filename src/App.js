import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Subjects from "./components/Subjects";
import Awards from "./components/Awards";
import Rates from "./components/Rates";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Subjects />
      <Awards />
      <Rates />
      <Footer />
    </div>
  );
}

export default App;
