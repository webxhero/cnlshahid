import React, { useState } from 'react';
import { Quote, Star, MapPin, Sparkles, CheckCircle2, Pause, Play } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export const Testimonials: React.FC = () => {
  const { language, t } = useLanguage();
  const [isPaused, setIsPaused] = useState(false);

  // Split reviews into two rows for marquee
  const halfLength = Math.ceil(TESTIMONIALS.length / 2);
  const row1Original = TESTIMONIALS.slice(0, halfLength);
  const row2Original = TESTIMONIALS.slice(halfLength);

  // Repeat items for seamless 100% infinite scroll
  const row1Items = [...row1Original, ...row1Original, ...row1Original, ...row1Original];
  const row2Items = [...row2Original, ...row2Original, ...row2Original, ...row2Original];

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-[var(--bg-surface-strong)] border-t border-[var(--border-color)] relative transition-colors overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[var(--accent-color)]/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--accent-color)]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-8 reveal">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--bg-surface)] border border-[var(--border-color)] text-xs font-semibold text-[var(--accent-color)] uppercase tracking-wider">
              <Quote className="w-3.5 h-3.5" />
              {t.testimonials.badge}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
              {t.testimonials.title}
            </h2>
            <p className="text-base sm:text-lg text-[var(--text-secondary)]">
              {t.testimonials.subtitle}
            </p>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="px-4 py-2.5 rounded-[12px] bg-[var(--bg-surface)] border border-[var(--border-color)] flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-[var(--accent-color)]/10 text-[var(--accent-color)] flex items-center justify-center font-bold text-xs">
                5.0
              </div>
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="text-xs text-[var(--text-secondary)] font-medium hidden sm:inline">{language === 'bn' ? '৫.০ স্টার রেটিং' : '5.0 Star Rating'}</span>
            </div>

            <div className="px-4 py-2.5 rounded-[12px] bg-[var(--bg-surface)] border border-[var(--border-color)] flex items-center gap-2 text-xs font-medium text-[var(--text-primary)]">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>{language === 'bn' ? '১০০% ক্লায়েন্ট সন্তুষ্টি' : '100% Client Satisfaction'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* INFINITE MARQUEE SCROLL */}
      <div className={`relative w-full marquee-container space-y-6 ${isPaused ? 'pause-marquee' : ''}`}>
        {/* Pause / Play Hover Badge Indicator */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-2 flex items-center justify-between">
          <span className="text-xs text-[var(--text-secondary)] italic flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[var(--accent-color)] animate-ping inline-block" />
            Hover any card or click play/pause to inspect
          </span>

          <button
            onClick={() => setIsPaused(!isPaused)}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-surface)] border border-[var(--border-color)] text-xs font-medium text-[var(--text-primary)] hover:border-[var(--accent-color)] transition-colors cursor-pointer"
          >
            {isPaused ? <Play className="w-3 h-3 text-[var(--accent-color)]" /> : <Pause className="w-3 h-3 text-[var(--accent-color)]" />}
            <span>{isPaused ? 'Resume Scroll' : 'Pause Scroll'}</span>
          </button>
        </div>

        {/* Left & Right Smooth Edge Fade Mask */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[var(--bg-surface-strong)] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[var(--bg-surface-strong)] to-transparent z-20 pointer-events-none" />

        {/* Row 1: Scrolling Left */}
        <div className="overflow-hidden w-full py-2">
          <div className="animate-marquee-left gap-6 px-4">
            {row1Items.map((item, index) => (
              <div
                key={`r1-${item.id}-${index}`}
                className="w-[340px] sm:w-[420px] shrink-0 bg-[var(--bg-surface)] rounded-[20px] p-6 border border-[var(--border-color)] hover:border-[var(--accent-color)]/70 clova-card-shadow transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--bg-surface-strong)] border border-[var(--border-color)] text-xs font-medium text-[var(--text-secondary)]">
                      <Sparkles className="w-3 h-3 text-[var(--accent-color)]" />
                      {item.category}
                    </span>
                    <div className="flex items-center gap-0.5 text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-[var(--text-primary)] font-medium leading-relaxed mb-6">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--border-color)] flex items-center justify-between gap-3 mt-auto">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-[10px] bg-[var(--bg-surface-strong)] border border-[var(--border-color)] text-[var(--accent-color)] font-bold flex items-center justify-center text-sm shrink-0 group-hover:border-[var(--accent-color)]/40 transition-colors">
                      {item.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-[var(--text-primary)] leading-tight">
                        {item.name}
                      </h3>
                      <p className="text-[11px] text-[var(--text-secondary)]">
                        {item.role} · <span className="text-[var(--accent-color)] font-medium">{item.company}</span>
                      </p>
                    </div>
                  </div>

                  {item.location && (
                    <span className="text-[10px] text-[var(--text-secondary)] bg-[var(--bg-surface-strong)] px-2 py-0.5 rounded border border-[var(--border-color)] shrink-0 hidden sm:inline-block">
                      {item.location}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Scrolling Right */}
        <div className="overflow-hidden w-full py-2">
          <div className="animate-marquee-right gap-6 px-4">
            {row2Items.map((item, index) => (
              <div
                key={`r2-${item.id}-${index}`}
                className="w-[340px] sm:w-[420px] shrink-0 bg-[var(--bg-surface)] rounded-[20px] p-6 border border-[var(--border-color)] hover:border-[var(--accent-color)]/70 clova-card-shadow transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--bg-surface-strong)] border border-[var(--border-color)] text-xs font-medium text-[var(--text-secondary)]">
                      <Sparkles className="w-3 h-3 text-[var(--accent-color)]" />
                      {item.category}
                    </span>
                    <div className="flex items-center gap-0.5 text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-[var(--text-primary)] font-medium leading-relaxed mb-6">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--border-color)] flex items-center justify-between gap-3 mt-auto">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-[10px] bg-[var(--bg-surface-strong)] border border-[var(--border-color)] text-[var(--accent-color)] font-bold flex items-center justify-center text-sm shrink-0 group-hover:border-[var(--accent-color)]/40 transition-colors">
                      {item.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-[var(--text-primary)] leading-tight">
                        {item.name}
                      </h3>
                      <p className="text-[11px] text-[var(--text-secondary)]">
                        {item.role} · <span className="text-[var(--accent-color)] font-medium">{item.company}</span>
                      </p>
                    </div>
                  </div>

                  {item.location && (
                    <span className="text-[10px] text-[var(--text-secondary)] bg-[var(--bg-surface-strong)] px-2 py-0.5 rounded border border-[var(--border-color)] shrink-0 hidden sm:inline-block">
                      {item.location}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

