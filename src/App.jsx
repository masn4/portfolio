import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => (
  <div className='bg-dark-gradient text-gray-300'>
    <Navbar />
    <Hero />
    <Projects />
    <Contact />
    <Footer />
  </div>
);

export default App;
