import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, CheckCircle2, Sun, Moon, FileText, Download, Languages } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { downloadCvPdf } from '../utils/downloadCv';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  currentView: 'home' | 'services' | 'projects';
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, activeSection, onNavigate }) => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('portfolio-theme') as 'dark' | 'light') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: t.nav.home },
    { id: 'services', label: t.nav.services },
    { id: 'projects', label: t.nav.projects },
    { id: 'experience', label: t.nav.experience },
    { id: 'skills', label: t.nav.skills },
    { id: 'testimonials', label: t.nav.testimonials },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--bg-base)]/90 backdrop-blur-md border-b border-[var(--border-color)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Status */}
          <button
            id="brand-logo-btn"
            onClick={() => onNavigate('hero')}
            className="flex items-center gap-3 group text-left cursor-pointer"
          >
            <div className="w-9 h-9 rounded-[8px] overflow-hidden flex items-center justify-center transition-transform group-hover:scale-105 shrink-0">
              <svg viewBox="0 0 512 512" className="w-full h-full">
                <circle cx="256" cy="256" r="240" fill="#0A0A0A" stroke="#222222" strokeWidth="16" />
                <path d="M 330 160 L 210 160 C 170 160, 150 190, 150 256 C 150 322, 170 352, 210 352 L 330 352" fill="none" stroke="#F4F4F4" strokeWidth="36" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 220 330 L 320 180" fill="none" stroke="#A2BA92" strokeWidth="36" strokeLinecap="round" />
                <circle cx="330" cy="330" r="20" fill="#A2BA92" />
              </svg>
            </div>
            <div>
              <span className="font-semibold text-[var(--text-primary)] tracking-tight block text-base leading-tight group-hover:text-[var(--accent-color)] transition-colors">
                {PERSONAL_INFO.brandName}
              </span>
              <span className="text-xs text-[var(--text-secondary)] flex items-center gap-1.5 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>{t.nav.available}</span>
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-1 bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-full px-4 py-1.5">
            {navItems.map((item) => {
              const isActive =
                currentView === 'services'
                  ? item.id === 'services'
                  : currentView === 'projects'
                  ? item.id === 'projects'
                  : activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => onNavigate(item.id)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[var(--accent-color)] text-black shadow-sm font-semibold'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--border-color)]/20'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Header Action Buttons (Language Switcher, Theme Toggle, Download CV & Contact) */}
          <div className="hidden md:flex items-center gap-2">
            {/* Language Switcher Toggle Button */}
            <button
              id="language-switcher-btn"
              onClick={toggleLanguage}
              className="px-3 py-2 rounded-full bg-[var(--bg-surface)] text-[var(--text-primary)] border border-[var(--border-color)] hover:border-[var(--accent-color)] text-xs font-bold hover:bg-[var(--bg-surface-strong)] transition-all flex items-center gap-1.5 cursor-pointer"
              title={`Switch language to ${language === 'en' ? 'Bengali (বাংলা)' : 'English'}`}
              aria-label="Toggle Site Language"
            >
              <Languages className="w-3.5 h-3.5 text-[var(--accent-color)]" />
              <span className={language === 'bn' ? 'font-serif' : ''}>
                {language === 'en' ? 'বাংলা' : 'English'}
              </span>
            </button>

            {/* Light / Dark Mode Toggle Button */}
            <button
              id="theme-toggle-btn"
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-[var(--bg-surface)] text-[var(--text-primary)] border border-[var(--border-color)] hover:border-[var(--accent-color)] transition-all cursor-pointer flex items-center justify-center"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Night/Dark'} Mode`}
              aria-label="Toggle Night/Day Mode"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-300 hover:rotate-45 transition-transform" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600 hover:-rotate-12 transition-transform" />
              )}
            </button>

            {/* Contact CTA */}
            <button
              id="header-cta-btn"
              onClick={() => onNavigate('contact')}
              className="px-5 py-2 rounded-full bg-[var(--accent-color)] text-black text-xs font-semibold hover:opacity-90 transition-all flex items-center gap-1.5 accent-glow cursor-pointer"
            >
              <span>{t.nav.getInTouch}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Actions & Menu Toggle */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile Language Switcher */}
            <button
              id="mobile-language-switcher"
              onClick={toggleLanguage}
              className="px-2.5 py-1.5 rounded-lg bg-[var(--bg-surface)] text-[var(--text-primary)] border border-[var(--border-color)] text-xs font-bold flex items-center gap-1 cursor-pointer"
              aria-label="Toggle Language"
            >
              <Languages className="w-4 h-4 text-[var(--accent-color)]" />
              <span>{language === 'en' ? 'বাংলা' : 'EN'}</span>
            </button>

            <button
              id="mobile-theme-toggle"
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-[var(--bg-surface)] text-[var(--text-primary)] border border-[var(--border-color)] cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-amber-300" />
              ) : (
                <Moon className="w-5 h-5 text-indigo-600" />
              )}
            </button>

            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-[var(--bg-surface)] text-[var(--text-primary)] border border-[var(--border-color)] hover:border-[var(--accent-color)] focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-[var(--accent-color)]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div id="mobile-menu-drawer" className="md:hidden bg-[var(--bg-surface)] border-b border-[var(--border-color)] px-4 pt-4 pb-6 space-y-2 mt-2 animate-fadeIn">
          {navItems.map((item) => {
            const isActive =
              currentView === 'services'
                ? item.id === 'services'
                : currentView === 'projects'
                ? item.id === 'projects'
                : activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`mobile-nav-item-${item.id}`}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-[8px] text-base font-medium flex items-center justify-between cursor-pointer ${
                  isActive
                    ? 'bg-[var(--accent-color)] text-black font-semibold'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--border-color)]/20'
                }`}
              >
                <span>{item.label}</span>
                {isActive && <CheckCircle2 className="w-4 h-4 text-black" />}
              </button>
            );
          })}
          <div className="pt-3 border-t border-[var(--border-color)] mt-2 flex flex-col gap-2">
            <button
              id="mobile-lang-toggle-cta"
              onClick={() => {
                toggleLanguage();
              }}
              className="w-full py-2.5 rounded-full bg-[var(--bg-surface-strong)] text-[var(--text-primary)] border border-[var(--border-color)] text-center font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <Languages className="w-4 h-4 text-[var(--accent-color)]" />
              <span>{language === 'en' ? 'বাংলা ভাষায় দেখুন' : 'Switch to English'}</span>
            </button>

            <button
              id="mobile-cv-download-cta"
              onClick={() => {
                downloadCvPdf();
                setIsMobileMenuOpen(false);
              }}
              className="w-full py-2.5 rounded-full bg-[var(--bg-surface-strong)] text-[var(--text-primary)] border border-[var(--border-color)] text-center font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-[var(--accent-color)]" />
              <span>{t.nav.downloadCv}</span>
            </button>

            <button
              id="mobile-contact-cta"
              onClick={() => {
                onNavigate('contact');
                setIsMobileMenuOpen(false);
              }}
              className="w-full py-3 rounded-full bg-[var(--accent-color)] text-black text-center font-semibold flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{t.nav.getInTouch}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
