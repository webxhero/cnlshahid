import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Cpu, Star, Zap, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Skills: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-20 sm:py-28 bg-[var(--bg-base)] border-t border-[var(--border-color)] relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4 reveal">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--bg-surface)] border border-[var(--border-color)] text-xs font-semibold text-[var(--accent-color)] uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            {t.skills.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
            {t.skills.title}
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)]">
            {t.skills.subtitle}
          </p>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              id={`skill-cat-${idx}`}
              className={`bg-[var(--bg-surface)] rounded-[17px] p-6 sm:p-8 border border-[var(--border-color)] clova-card-shadow hover:border-[var(--accent-color)]/30 transition-all reveal stagger-${(idx % 4) + 1}`}
            >
              <div className="flex items-center justify-between pb-4 border-b border-[var(--border-color)] mb-6">
                <h3 className="text-xl font-bold text-[var(--text-primary)] flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-color)]" />
                  {cat.category}
                </h3>
                <span className="text-xs text-[var(--text-secondary)]">
                  {cat.skills.length} Technical Units
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`p-3 rounded-[8px] border flex items-center justify-between gap-2 transition-colors ${
                      skill.isCore
                        ? 'bg-[var(--bg-surface-strong)] border-[var(--accent-color)]/40 text-[var(--text-primary)]'
                        : 'bg-[var(--bg-surface-strong)] border-[var(--border-color)] text-[var(--text-secondary)]'
                    }`}
                  >
                    <div className="flex items-center gap-2 overflow-hidden">
                      {skill.isCore ? (
                        <Star className="w-3.5 h-3.5 text-[var(--accent-color)] shrink-0" />
                      ) : (
                        <Check className="w-3.5 h-3.5 text-[var(--text-secondary)] shrink-0" />
                      )}
                      <span className="text-xs font-semibold truncate text-[var(--text-primary)]">
                        {skill.name}
                      </span>
                    </div>

                    <span
                      className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-[999px] shrink-0 ${
                        skill.isCore
                          ? 'bg-[var(--accent-color)] text-black'
                          : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-color)]'
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Speed Optimization Highlight Card */}
        <div className="mt-12 bg-[var(--bg-surface)] rounded-[20px] p-6 sm:p-8 border border-[var(--accent-color)]/30 flex flex-col md:flex-row items-center justify-between gap-6 accent-glow reveal">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-[12px] bg-[var(--bg-surface-strong)] border border-[var(--accent-color)] flex items-center justify-center shrink-0">
              <Zap className="w-7 h-7 text-[var(--accent-color)]" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-[var(--text-primary)]">Google PageSpeed & Core Web Vitals Guarantee</h4>
              <p className="text-sm text-[var(--text-secondary)] mt-1 max-w-2xl">
                Every website built is tuned for 95%+ Google PageSpeed scores, WebP image formats, lightweight CSS execution, clean DOM trees, and zero unnecessary plugin bloat.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-[var(--accent-color)] text-black font-bold text-sm whitespace-nowrap hover:opacity-90 transition-all cursor-pointer"
          >
            Audit Your Website
          </a>
        </div>
      </div>
    </section>
  );
};
