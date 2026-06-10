import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ImpactDashboard from './components/ImpactDashboard';
import About from './components/About';
import InteractiveCV from './components/InteractiveCV';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Mentorship from './components/Mentorship';
import Workshops from './components/Workshops';
import Certifications from './components/Certifications';
import GitHubDashboard from './components/GitHubDashboard';
import Testimonials from './components/Testimonials';
import TechRoadmap from './components/TechRoadmap';
import LearningHub from './components/LearningHub';
import DevTools from './components/DevTools';
import TechQuiz from './components/TechQuiz';
import TechTips from './components/TechTips';
import Newsletter from './components/Newsletter';
import Blog from './components/Blog';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';

function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setWidth(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return <div id="scroll-progress" style={{ width: `${width}%` }} />;
}

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-slate-200 overflow-x-hidden">
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero />
        <ImpactDashboard />
        <About />
        <InteractiveCV />
        <Skills />
        <Timeline />
        <Projects />
        <Mentorship />
        <Workshops />
        <Certifications />
        <GitHubDashboard />
        <Testimonials />
        <TechRoadmap />
        <LearningHub />
        <DevTools />
        <TechQuiz />
        <TechTips />
        <Newsletter />
        <Blog />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <AIAssistant />
    </div>
  );
}
