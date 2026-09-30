import React, { useState } from 'react';
import { SERVICES } from '../data/portfolioData';
import { Service } from '../types';
import { Figma, Code, ShoppingBag, GraduationCap, CheckCircle2, ChevronRight, Layers, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ServicesProps {
  onSelectService?: (service: Service) => void;
}

export const Services: React.FC<ServicesProps> = () => {
  const { language, t } = useLanguage();
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Figma':
        return <Figma className="w-7 h-7 text-[var(--accent-color)]" />;
      case 'Code':
        return <Code className="w-7 h-7 text-[var(--accent-color)]" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-7 h-7 text-[var(--accent-color)]" />;
      case 'GraduationCap':
        return <GraduationCap className="w-7 h-7 text-[var(--accent-color)]" />;
      default:
        return <Layers className="w-7 h-7 text-[var(--accent-color)]" />;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-[var(--bg-surface-strong)] border-y border-[var(--border-color)] relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4 reveal">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--bg-surface)] border border-[var(--border-color)] text-xs font-semibold text-[var(--accent-color)] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            {t.services.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
            {t.services.title}
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Grid (Surface Muted cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className={`bg-[var(--bg-surface)] rounded-[17px] p-6 sm:p-8 border border-[var(--border-color)] clova-card-shadow flex flex-col justify-between group hover:border-[var(--accent-color)]/40 transition-all duration-300 reveal stagger-${(index % 4) + 1}`}
            >
              <div>
                {/* Header Icon + Popular Tag */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="w-14 h-14 rounded-[12px] bg-[var(--bg-surface-strong)] border border-[var(--border-color)] flex items-center justify-center group-hover:border-[var(--accent-color)] group-hover:scale-105 transition-all">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[var(--bg-surface-strong)] border border-[var(--border-color)] text-xs font-medium text-[var(--text-secondary)]">
                    {service.popularFor}
                  </span>
                </div>

                {/* Service Titles */}
                <h3 className="text-2xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-color)] transition-colors mb-2">
                  {service.title}
                </h3>
                <p className="text-xs text-[var(--accent-color)] font-semibold tracking-wide uppercase mb-4">
                  {service.subtitle}
                </p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Key Features Chips */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feat) => (
                    <span
                      key={feat}
                      className="px-2.5 py-1 rounded-[8px] bg-[var(--bg-surface-strong)] border border-[var(--border-color)] text-xs text-[var(--text-primary)] hover:scale-105 hover:border-[var(--accent-color)]/30 transition-all duration-200 cursor-default"
                    >
                      {feat}
                    </span>
                  ))}
                </div>

                {/* Top Deliverables */}
                <div className="space-y-2.5 border-t border-[var(--border-color)] pt-5">
                  <div className="text-xs text-[var(--text-secondary)] font-semibold uppercase tracking-wider mb-2">
                    {t.services.deliverablesHeader}
                  </div>
                  {service.deliverables.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[var(--text-primary)]">
                      <CheckCircle2 className="w-4 h-4 text-[var(--accent-color)] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-[var(--border-color)]">
                <button
                  id={`view-service-${service.id}`}
                  onClick={() => setSelectedService(service)}
                  className="w-full py-2.5 px-4 rounded-[8px] bg-[var(--bg-surface-strong)] hover:bg-[var(--accent-color)] hover:text-black text-[var(--text-primary)] border border-[var(--border-color)] text-sm font-semibold transition-all flex items-center justify-center gap-2 group-hover:border-[var(--accent-color)] cursor-pointer"
                >
                  <span>{language === 'bn' ? 'বিস্তারিত ডেলিভারেবল দেখুন' : 'Explore Full Deliverables'}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div id="service-detail-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-[20px] w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 relative text-left shadow-2xl">
            <div className="flex items-start justify-between gap-4 border-b border-[var(--border-color)] pb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-[12px] bg-[var(--bg-surface-strong)] border border-[var(--accent-color)]">
                  {getIcon(selectedService.iconName)}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)]">{selectedService.title}</h3>
                  <p className="text-xs text-[var(--accent-color)] font-semibold">{selectedService.subtitle}</p>
                </div>
              </div>
              <button
                id="close-service-modal"
                onClick={() => setSelectedService(null)}
                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] p-2 rounded-full hover:bg-[var(--border-color)]/20 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              {selectedService.description}
            </p>

            <div>
              <h4 className="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-3">
                Full Deliverables Checklist
              </h4>
              <ul className="space-y-3">
                {selectedService.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[var(--text-primary)] bg-[var(--bg-surface-strong)] p-3 rounded-[8px] border border-[var(--border-color)]">
                    <CheckCircle2 className="w-5 h-5 text-[var(--accent-color)] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-[var(--border-color)] flex justify-end gap-3">
              <button
                onClick={() => setSelectedService(null)}
                className="px-5 py-2 rounded-full bg-[var(--bg-surface-strong)] text-[var(--text-primary)] border border-[var(--border-color)] text-sm font-medium hover:bg-[var(--border-color)]/20 cursor-pointer"
              >
                Close
              </button>
              <a
                href="#contact"
                onClick={() => setSelectedService(null)}
                className="px-5 py-2 rounded-full bg-[var(--accent-color)] text-black text-sm font-semibold hover:opacity-90 cursor-pointer"
              >
                Request This Service
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
