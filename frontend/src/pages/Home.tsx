import Hero from '../components/sections/Hero';
import Welcome from '../components/sections/Welcome';
import Intro from '../components/sections/Intro';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Education from '../components/sections/Education';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';
import ThankYou from '../components/sections/ThankYou';

const Home = () => (
  <div className="bg-[#0a0a0a]">
    <Hero />
    <Welcome />
    <Intro />
    <About />
    <Skills />
    <Education />
    <Experience />
    <Projects />
    <Contact />
    <ThankYou />
  </div>
);

export default Home;
