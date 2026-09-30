/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { ServicesPage } from './components/ServicesPage';
import { ProjectsPage } from './components/ProjectsPage';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'services' | 'projects'>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path.includes('/projects') || path.includes('projects.html')) {
        return 'projects';
      }
      if (path.includes('/services') || path.includes('services.html')) {
        return 'services';
      }
    }
    return 'home';
  });

  const [activeSection, setActiveSection] = useState<string>('hero');
  const lenisRef = useRef<Lenis | null>(null);

  // Sync route on browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path.includes('/projects') || path.includes('projects.html')) {
        setCurrentView('projects');
      } else if (path.includes('/services') || path.includes('services.html')) {
        setCurrentView('services');
      } else {
        setCurrentView('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  /* Initialize Lenis Smooth Scroll with custom physics & inertia */
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom smooth easing
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const reqId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(reqId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const handleNavigate = (target: string) => {
    if (target === 'projects' || target === '/projects' || target === 'projects.html') {
      if (window.location.pathname !== '/projects') {
        window.history.pushState({}, '', '/projects');
      }
      setCurrentView('projects');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (target === 'services' || target === '/services' || target === 'services.html') {
      if (window.location.pathname !== '/services') {
        window.history.pushState({}, '', '/services');
      }
      setCurrentView('services');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Navigating to home view or section on home page
    if (currentView !== 'home') {
      if (window.location.pathname !== '/') {
        window.history.pushState({}, '', target === 'hero' || target === 'home' ? '/' : `/#${target}`);
      }
      setCurrentView('home');
      if (target === 'hero' || target === 'home') {
        setActiveSection('hero');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setActiveSection(target);
        setTimeout(() => {
          if (lenisRef.current) {
            lenisRef.current.scrollTo(`#${target}`, { offset: -70, duration: 1.2 });
          } else {
            const el = document.getElementById(target);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 120);
      }
    } else {
      // Already on home view
      if (target === 'hero' || target === 'home') {
        setActiveSection('hero');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setActiveSection(target);
        if (lenisRef.current) {
          lenisRef.current.scrollTo(`#${target}`, { offset: -70, duration: 1.2 });
        } else {
          const el = document.getElementById(target);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  useEffect(() => {
    if (currentView !== 'home') return;

    const handleScroll = () => {
      const sections = ['hero', 'services', 'projects', 'experience', 'skills', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  /* Lightweight IntersectionObserver for scroll-triggered reveal animations */
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.05,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [currentView]);

  return (
    <LanguageProvider>
      <div id="portfolio-root" className="min-h-screen bg-[var(--bg-base)] text-[var(--text-primary)] selection:bg-[var(--accent-color)] selection:text-black transition-colors duration-300">
        {/* Sticky Navigation */}
        <Navbar currentView={currentView} activeSection={activeSection} onNavigate={handleNavigate} />

        {/* Main Sections */}
        <main id="main-content">
          {currentView === 'services' ? (
            <ServicesPage />
          ) : currentView === 'projects' ? (
            <ProjectsPage />
          ) : (
            <>
              <Hero onNavigate={handleNavigate} />
              <Services />
              <Projects onNavigate={handleNavigate} />
              <Experience />
              <Skills />
              <Testimonials />
              <Contact />
            </>
          )}
        </main>

        {/* Footer */}
        <Footer onNavigate={handleNavigate} />
      </div>
    </LanguageProvider>
  );
}


