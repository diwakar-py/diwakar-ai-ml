import { useCallback, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';
import { profile } from './data/profile';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'awards', label: 'Awards' },
  { id: 'contact', label: 'Contact' },
];

function App() {
  const [theme, setTheme] = useState('dark');
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.35, rootMargin: '-20% 0px -35% 0px' },
    );

    const sectionElements = sections
      .map((section) => document.getElementById(section.id))
      .filter(Boolean);
    sectionElements.forEach((element) => observer.observe(element));
    return () => {
      sectionElements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  const handleNavigate = useCallback((sectionId) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  }, []);

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <>
      <CursorGlow />
      <Navbar
        sections={sections}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <main>
        <Hero profile={profile} onContactClick={() => handleNavigate('contact')} />
        <About summary={profile.about} infoHighlights={profile.infoHighlights} />
        <Skills skills={profile.skills} />
        <Experience experience={profile.experience} />
        <Education education={profile.education} />
        <Certifications certifications={profile.certifications} />
        <Awards awards={profile.awards} />
        <Contact contact={profile.contact} />
      </main>
      <Footer />
    </>
  );
}

export default App;
