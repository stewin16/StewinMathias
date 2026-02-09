import { CursorProvider } from './CursorContext';
import AnimatedCursor from './AnimatedCursor';
import Contact from './Contact';
import Education from './Education';
import Skills from './Skills';
import Hackathons from './Hackathons';
import Projects from './Projects';
import Hero from './Hero';
import Navbar from './Navbar';
import SocialLinks from './SocialLinks';
import Footer from './Footer';
import LiveStats from './LiveStats';
import ScrollProgress from './ScrollProgress';
import BackToTop from './BackToTop';

function App() {
  return (
    <CursorProvider>
      <ScrollProgress />
      <AnimatedCursor />
      <Navbar />
      <SocialLinks />
      <LiveStats />
      <BackToTop />
      <main className="container">
        <Hero id="hero" />
        <Projects id="projects" />
        <Hackathons id="hackathons" />
        <Skills id="skills" />
        <Education id="education" />
        <Contact id="contact" />
      </main>
      <Footer />
    </CursorProvider>
  );
}

export default App;