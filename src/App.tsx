import './App.css';
import Header from './sections/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import FocusAreas from './sections/FocusAreas';
import Projects from './sections/Projects';
import Team from './sections/Team';
import News from './sections/News';
import Partners from './sections/Partners';
import Donate from './sections/Donate';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[hsl(35,30%,96%)]">
      <Header />
      <main>
        <Hero />
        <About />
        <FocusAreas />
        <Projects />
        <Team />
        <News />
        <Partners />
        <Donate />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
