import React, { useRef, useState, useEffect } from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Experience: React.FC = () => {
  const { t } = useLanguage();
  const timelineRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState('0%');

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalHeight = rect.height;
      const currentProgress = (windowHeight - rect.top) / (windowHeight + totalHeight);
      const clampedProgress = Math.max(0, Math.min(1, currentProgress * 1.35));
      setLineHeight(`${clampedProgress * 100}%`);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="experience" className="py-20 sm:py-28 bg-[var(--bg-surface-strong)] border-t border-[var(--border-color)] relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4 reveal">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--bg-surface)] border border-[var(--border-color)] text-xs font-semibold text-[var(--accent-color)] uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            {t.experience.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
            {t.experience.title}
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)]">
            {t.experience.subtitle}
          </p>
        </div>

        {/* Experience Timeline */}
        <div ref={timelineRef} className="relative ml-4 sm:ml-8 space-y-12">
          {/* Base Background Track Line */}
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[var(--border-color)] -ml-[1px]" />
          {/* Dynamic Scroll-Animated Line */}
          <div
            className="absolute left-0 top-0 w-[2px] bg-[var(--accent-color)] -ml-[1px] transition-all duration-200 ease-out shadow-[0_0_12px_var(--accent-color)]"
            style={{ height: lineHeight }}
          />

          {EXPERIENCES.map((exp, index) => (
            <div key={exp.id} id={`exp-card-${exp.id}`} className={`relative pl-8 sm:pl-12 group reveal stagger-${(index % 4) + 1}`}>
              {/* Timeline Dot */}
              <div className="absolute -left-[16px] top-1.5 w-8 h-8 rounded-full bg-[var(--bg-surface)] border-2 border-[var(--accent-color)] flex items-center justify-center text-[var(--accent-color)] group-hover:bg-[var(--accent-color)] group-hover:text-black transition-all duration-300 z-10 group-hover:scale-110">
                <Building2 className="w-4 h-4" />
              </div>

              {/* Experience Card */}
              <div className="bg-[var(--bg-surface)] rounded-[17px] p-6 sm:p-8 border border-[var(--border-color)] clova-card-shadow hover:border-[var(--accent-color)]/40 transition-all">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-color)] transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-[var(--accent-color)] mt-0.5">
                      @ {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--text-secondary)]">
                    <span className="px-3 py-1 rounded-full bg-[var(--bg-surface-strong)] border border-[var(--border-color)] font-medium flex items-center gap-1.5 text-[var(--text-primary)]">
                      <Calendar className="w-3.5 h-3.5 text-[var(--accent-color)]" />
                      {exp.period}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[var(--bg-surface-strong)] border border-[var(--border-color)] font-medium flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[var(--accent-color)]" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Responsibilities list */}
                <div className="space-y-3 mb-6">
                  {exp.responsibilities.map((resp, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-[var(--text-primary)]">
                      <CheckCircle2 className="w-4 h-4 text-[var(--accent-color)] shrink-0 mt-1" />
                      <span className="leading-relaxed">{resp}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="pt-4 border-t border-[var(--border-color)]">
                  <div className="text-xs text-[var(--text-secondary)] font-semibold uppercase tracking-wider mb-2">
                    Key Tech & Competencies
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-[8px] bg-[var(--bg-surface-strong)] border border-[var(--border-color)] text-xs text-[var(--text-secondary)] hover:scale-105 hover:border-[var(--accent-color)]/30 transition-all duration-200 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
