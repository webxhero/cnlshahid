import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, MessageCircle, Mail, Download, FileText } from 'lucide-react';
import { downloadCvPdf } from '../utils/downloadCv';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { language, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[var(--bg-base)] border-t border-[var(--border-color)] py-12 text-[var(--text-secondary)] text-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-[var(--border-color)]">
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-[8px] overflow-hidden flex items-center justify-center shrink-0">
              <svg viewBox="0 0 512 512" className="w-full h-full">
                <circle cx="256" cy="256" r="240" fill="#0A0A0A" stroke="#222222" strokeWidth="16" />
                <path d="M 330 160 L 210 160 C 170 160, 150 190, 150 256 C 150 322, 170 352, 210 352 L 330 352" fill="none" stroke="#F4F4F4" strokeWidth="36" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 220 330 L 320 180" fill="none" stroke="#A2BA92" strokeWidth="36" strokeLinecap="round" />
                <circle cx="330" cy="330" r="20" fill="#A2BA92" />
              </svg>
            </div>
            <div>
              <span className="font-bold text-[var(--text-primary)] text-base tracking-tight block">
                {language === 'bn' ? 'মো: সাহিদ আহমদ' : PERSONAL_INFO.name}
              </span>
              <span className="text-xs text-[var(--text-secondary)]">
                {language === 'bn' ? 'সিএমএস ও নো-কোড স্পেশালিস্ট • সিলেট, বাংলাদেশ' : `${PERSONAL_INFO.title} • ${PERSONAL_INFO.location}`}
              </span>
            </div>
          </div>

          {/* Nav Quick Links */}
          <nav className="flex flex-wrap items-center gap-6 text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
            <button onClick={() => onNavigate('hero')} className="hover:text-[var(--accent-color)] transition-colors cursor-pointer">
              {t.nav.home}
            </button>
            <button onClick={() => onNavigate('services')} className="hover:text-[var(--accent-color)] transition-colors cursor-pointer">
              {t.nav.services}
            </button>
            <button onClick={() => onNavigate('projects')} className="hover:text-[var(--accent-color)] transition-colors cursor-pointer">
              {t.nav.projects}
            </button>
            <button onClick={() => onNavigate('experience')} className="hover:text-[var(--accent-color)] transition-colors cursor-pointer">
              {t.nav.experience}
            </button>
            <button onClick={() => onNavigate('skills')} className="hover:text-[var(--accent-color)] transition-colors cursor-pointer">
              {t.nav.skills}
            </button>
            <button onClick={() => onNavigate('testimonials')} className="hover:text-[var(--accent-color)] transition-colors cursor-pointer">
              {t.nav.testimonials}
            </button>
            <button onClick={() => onNavigate('contact')} className="hover:text-[var(--accent-color)] transition-colors cursor-pointer">
              {t.nav.contact}
            </button>
          </nav>

          {/* CV Button, Social Icons & Back to top */}
          <div className="flex items-center gap-3">
            <button
              id="footer-cv-download-btn"
              onClick={downloadCvPdf}
              className="px-3.5 py-2 rounded-full bg-[var(--bg-surface)] text-[var(--text-primary)] border border-[var(--border-color)] hover:border-[var(--accent-color)] text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer"
              title="Download CV PDF"
            >
              <Download className="w-3.5 h-3.5 text-[var(--accent-color)]" />
              <span>{t.hero.downloadCv}</span>
            </button>

            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-[var(--bg-surface)] hover:bg-[var(--accent-color)] hover:text-black text-[var(--text-primary)] border border-[var(--border-color)] transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-[var(--bg-surface)] hover:bg-[var(--accent-color)] hover:text-black text-[var(--text-primary)] border border-[var(--border-color)] transition-colors"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-[var(--bg-surface)] hover:bg-[var(--accent-color)] hover:text-black text-[var(--text-primary)] border border-[var(--border-color)] transition-colors"
              title="WhatsApp Direct Chat"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-full bg-[var(--bg-surface)] hover:bg-[var(--accent-color)] hover:text-black text-[var(--text-primary)] border border-[var(--border-color)] transition-colors"
              title="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              id="back-to-top-btn"
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-[var(--accent-color)] text-black hover:opacity-90 font-bold transition-all ml-1 cursor-pointer"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[var(--text-secondary)] gap-4">
          <p>© {new Date().getFullYear()} {language === 'bn' ? 'মো: সাহিদ আহমদ' : PERSONAL_INFO.name}. {language === 'bn' ? 'সর্বস্বত্ব সংরক্ষিত।' : 'All rights reserved.'}</p>
          <p className="flex items-center gap-2">
            <span>{language === 'bn' ? 'ওয়ার্ডপ্রেস ও এলিমেন্টর স্পেশালিস্ট' : 'WordPress & Elementor Specialist'}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
