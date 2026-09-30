import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ExternalLink, 
  Zap, 
  CheckCircle2, 
  ArrowUpRight, 
  Filter, 
  Globe, 
  Award, 
  BarChart3, 
  Layers, 
  MessageSquare,
  ArrowRight,
  X,
  Code2,
  ShieldCheck
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Contact } from './Contact';
import { ProjectBrowserMockup } from './ProjectBrowserMockup';

interface DetailedProject {
  id: string;
  title: string;
  categoryKeys: string[];
  categoryDisplay: string;
  isFigmaToWp?: boolean;
  liveUrl?: string;
  displayUrl?: string;
  description: string;
  metricsBadge: string;
  techStack: string[];
  buttonType: 'live' | 'details' | 'case_study' | 'demo';
  accentGradient: string;
  mockIcon: string;
  deliverables?: string[];
}

export const ProjectsPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<DetailedProject | null>(null);

  useEffect(() => {
    // Reveal animation observer for project elements
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '0px 0px -30px 0px',
      threshold: 0.05,
    });

    const elements = document.querySelectorAll('#projects-page-root .reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [activeFilter]);

  const projects: DetailedProject[] = [
    {
      id: 'camsprep',
      title: 'CAMSPREP LLC — Online LMS & Compliance Platform',
      categoryKeys: ['lms', 'figma-wp'],
      categoryDisplay: 'LMS & Education | Figma to WordPress',
      isFigmaToWp: true,
      liveUrl: 'https://camsprep.com',
      displayUrl: 'camsprep.com',
      description: 'Designed and developed an end-to-end learning platform for CAMS certification candidates. Features mock exams, course modules, custom student dashboards, and automated email flows.',
      metricsBadge: '95+ PageSpeed | High Engagement',
      techStack: ['WordPress', 'Custom UI', 'TutorLMS', 'WooCommerce', 'Speed Optimized'],
      buttonType: 'live',
      accentGradient: 'from-emerald-900/30 via-[var(--bg-surface-strong)] to-[var(--bg-surface)]',
      mockIcon: 'GraduationCap',
      deliverables: [
        'Timed online practice exam engine with instant scoring',
        'Custom student portal & progress analytics dashboard',
        'WooCommerce subscription & automated Stripe integration',
        'PageSpeed score optimized to 98/100 on desktop & mobile'
      ]
    },
    {
      id: 'handyman-sg',
      title: 'Handyman Services SG — Home Repair Business Website',
      categoryKeys: ['business', 'figma-wp'],
      categoryDisplay: 'Business & Agency | Figma to WordPress',
      isFigmaToWp: true,
      liveUrl: 'https://handymanservicesg.net',
      displayUrl: 'handymanservicesg.net',
      description: 'Conversion-focused business website built for a Singapore-based handyman service provider. Structured service offerings, clear lead capture, fast loading times, and local SEO structure.',
      metricsBadge: 'High Lead Conversion | 100% Mobile Responsive',
      techStack: ['WordPress', 'Elementor Pro', 'UX Optimization', 'Local SEO'],
      buttonType: 'live',
      accentGradient: 'from-blue-900/30 via-[var(--bg-surface-strong)] to-[var(--bg-surface)]',
      mockIcon: 'Wrench',
      deliverables: [
        'Mobile-first click-to-call & WhatsApp booking funnel',
        'Local SEO Schema markup tailored for Singapore region',
        'Interactive service quote estimator',
        '100% design fidelity matching Figma wireframes'
      ]
    },
    {
      id: 'litonmiah',
      title: 'MD Liton Miah — Personal Portfolio & Branding',
      categoryKeys: ['business'],
      categoryDisplay: 'Business & Agency',
      liveUrl: 'https://mdlitonmiah.com',
      displayUrl: 'mdlitonmiah.com',
      description: 'Modern, minimalist personal portfolio crafted from scratch to establish a commanding online presence. Features fluid animations, fast page loads, and structured service showcases.',
      metricsBadge: '100% Design Fidelity | Ultra Fast',
      techStack: ['WordPress', 'Elementor Pro', 'Custom CSS', 'JavaScript'],
      buttonType: 'live',
      accentGradient: 'from-amber-900/20 via-[var(--bg-surface-strong)] to-[var(--bg-surface)]',
      mockIcon: 'User',
      deliverables: [
        'Custom dark theme aesthetic with smooth scroll interactions',
        'Lightweight CSS/JS optimization for 100/100 PageSpeed score',
        'Interactive project showcase gallery',
        'Custom contact inquiry workflow'
      ]
    },
    {
      id: 'webxhero',
      title: 'WebXHero — Digital Agency & No-Code Solutions',
      categoryKeys: ['business'],
      categoryDisplay: 'Business & Agency',
      liveUrl: 'https://webxhero.com',
      displayUrl: 'webxhero.com',
      description: 'Agency website focused on modern no-code web architecture, agency service packages, interactive UI elements, and client project onboarding.',
      metricsBadge: 'Modern No-Code Stack',
      techStack: ['WordPress', 'No-Code Architecture', 'Elementor Pro', 'ACF Pro'],
      buttonType: 'live',
      accentGradient: 'from-purple-900/20 via-[var(--bg-surface-strong)] to-[var(--bg-surface)]',
      mockIcon: 'Layers',
      deliverables: [
        'High-converting no-code landing page architecture',
        'ACF Pro custom fields for rapid portfolio case uploads',
        'Integrated lead capture forms & booking automation',
        'Core Web Vitals optimized under 1.2s total load'
      ]
    },
    {
      id: 'foundation-saudi',
      title: 'Foundation Other Chance Commission — Non-Profit Business Portal',
      categoryKeys: ['business'],
      categoryDisplay: 'Business & Agency',
      description: 'Complete website redesign for a Saudi Arabia-based organization, transforming outdated layouts into a clean, modern user experience that boosted user engagement.',
      metricsBadge: 'Enhanced Usability',
      techStack: ['WordPress', 'Elementor', 'Redesign', 'UX Strategy'],
      buttonType: 'case_study',
      accentGradient: 'from-emerald-950/40 via-[var(--bg-surface-strong)] to-[var(--bg-surface)]',
      mockIcon: 'Globe',
      deliverables: [
        'Accessible, multilingual layout with RTL language support',
        'Integrated online donation gateway & volunteer registration',
        'Restructured information architecture for seamless navigation',
        'Full mobile responsiveness across all device sizes'
      ]
    },
    {
      id: 'woocommerce-custom',
      title: 'Custom WooCommerce E-Commerce Store Build',
      categoryKeys: ['ecommerce'],
      categoryDisplay: 'E-Commerce & WooCommerce',
      description: 'Custom e-commerce store with optimized checkout funnels, dynamic product filters, shipping integrations, and payment gateway connections.',
      metricsBadge: 'Conversion Optimized',
      techStack: ['WooCommerce', 'Payment Integration', 'CrocoBlock', 'PHP'],
      buttonType: 'demo',
      accentGradient: 'from-teal-900/30 via-[var(--bg-surface-strong)] to-[var(--bg-surface)]',
      mockIcon: 'ShoppingBag',
      deliverables: [
        '1-Click express checkout funnel & custom cart drawer',
        'CrocoBlock JetSmartFilters for instant AJAX product search',
        'Multi-currency & local payment gateway configurations',
        'Inventory tracking & automated receipt email triggers'
      ]
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter((p) => p.categoryKeys.includes(activeFilter));

  const filterTabs = [
    { key: 'all', label: t.projectsPage.filterAll },
    { key: 'figma-wp', label: t.projectsPage.filterFigmaWp },
    { key: 'ecommerce', label: t.projectsPage.filterEcommerce },
    { key: 'lms', label: t.projectsPage.filterLms },
    { key: 'business', label: t.projectsPage.filterBusiness },
  ];

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="projects-page-root" className="pt-24 pb-16 min-h-screen">
      {/* 1. Page Hero Section */}
      <section className="py-16 sm:py-24 bg-[var(--bg-base)] relative overflow-hidden transition-colors border-b border-[var(--border-color)]">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[var(--accent-color)]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 reveal">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--bg-surface)] border border-[var(--border-color)] text-xs font-semibold text-[var(--accent-color)] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.projectsPage.heroBadge}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text-primary)] leading-tight">
              {t.projectsPage.heroHeading}
            </h1>

            <p className="text-base sm:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto">
              {t.projectsPage.heroSubheading}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Interactive Category Filter Bar & Projects Grid */}
      <section className="py-16 sm:py-24 bg-[var(--bg-surface-strong)] transition-colors border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 reveal">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.key;
              return (
                <button
                  key={tab.key}
                  id={`project-filter-${tab.key}`}
                  onClick={() => setActiveFilter(tab.key)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'bg-[var(--accent-color)] text-black shadow-md accent-glow scale-105'
                      : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-color)] hover:border-[var(--accent-color)]/60 hover:text-[var(--text-primary)]'
                  }`}
                >
                  {isActive && <Filter className="w-3.5 h-3.5 text-black" />}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Featured Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className={`group bg-[var(--bg-surface)] rounded-[17px] border border-[var(--border-color)] clova-card-shadow overflow-hidden flex flex-col justify-between hover:border-[var(--accent-color)]/60 hover:-translate-y-[3px] transition-all duration-300 reveal stagger-${(index % 3) + 1}`}
              >
                <div>
                  {/* Mac-Style Browser Window Frame Mockup */}
                  <div className="p-2 pb-0">
                    <ProjectBrowserMockup
                      title={project.title}
                      displayUrl={project.displayUrl}
                      liveUrl={project.liveUrl}
                      metricsBadge={project.metricsBadge}
                      category={project.categoryDisplay}
                      onClick={() => {
                        if (project.liveUrl) {
                          window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
                        } else {
                          setSelectedProject(project);
                        }
                      }}
                      ctaText={project.liveUrl ? "Visit Live Site ↗" : "Preview Case Study ↗"}
                    />
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 space-y-4">
                    {/* Impact / Metrics Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--accent-color)]/10 border border-[var(--accent-color)]/30 text-[11px] font-bold text-[var(--accent-color)]">
                      <Zap className="w-3.5 h-3.5 shrink-0" />
                      <span>{project.metricsBadge}</span>
                    </div>

                    <h3 className="text-lg font-bold text-[var(--text-primary)] leading-snug group-hover:text-[var(--accent-color)] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-[5px] bg-[var(--bg-surface-strong)] text-[10px] font-semibold text-[var(--text-secondary)] border border-[var(--border-color)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-6 pt-0 mt-2 border-t border-[var(--border-color)]/50 pt-4 flex items-center justify-between">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold text-[var(--text-primary)] hover:text-[var(--accent-color)] transition-colors cursor-pointer group/link"
                    >
                      <span>{t.projectsPage.visitLiveSite}</span>
                      <ArrowUpRight className="w-4 h-4 text-[var(--accent-color)] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
                    </a>
                  ) : (
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 text-xs font-bold text-[var(--text-primary)] hover:text-[var(--accent-color)] transition-colors cursor-pointer"
                    >
                      <span>{project.buttonType === 'case_study' ? t.projectsPage.caseStudy : t.projectsPage.viewDetails}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[var(--accent-color)]" />
                    </button>
                  )}

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-3 py-1.5 rounded-[6px] bg-[var(--bg-surface-strong)] text-[11px] font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-color)] border border-[var(--border-color)] transition-all cursor-pointer"
                  >
                    Quick Overview
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Trust & Impact Summary Bar */}
      <section className="py-16 bg-[var(--bg-base)] border-b border-[var(--border-color)] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 reveal">
            <span className="text-xs font-bold text-[var(--accent-color)] uppercase tracking-widest block mb-2">
              Proven Track Record
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
              {t.projectsPage.trustHeading}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal">
            <div className="p-6 rounded-[14px] bg-[var(--bg-surface)] border border-[var(--border-color)] text-center space-y-2 clova-card-shadow">
              <span className="text-3xl sm:text-4xl font-extrabold text-[var(--accent-color)] block font-mono">
                {t.projectsPage.metric1Value}
              </span>
              <p className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
                {t.projectsPage.metric1Label}
              </p>
            </div>

            <div className="p-6 rounded-[14px] bg-[var(--bg-surface)] border border-[var(--border-color)] text-center space-y-2 clova-card-shadow">
              <span className="text-3xl sm:text-4xl font-extrabold text-[var(--accent-color)] block font-mono">
                {t.projectsPage.metric2Value}
              </span>
              <p className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
                {t.projectsPage.metric2Label}
              </p>
            </div>

            <div className="p-6 rounded-[14px] bg-[var(--bg-surface)] border border-[var(--border-color)] text-center space-y-2 clova-card-shadow">
              <span className="text-3xl sm:text-4xl font-extrabold text-[var(--accent-color)] block font-mono">
                {t.projectsPage.metric3Value}
              </span>
              <p className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
                {t.projectsPage.metric3Label}
              </p>
            </div>

            <div className="p-6 rounded-[14px] bg-[var(--bg-surface)] border border-[var(--border-color)] text-center space-y-2 clova-card-shadow">
              <span className="text-xl sm:text-2xl font-extrabold text-[var(--accent-color)] block font-mono">
                {t.projectsPage.metric4Value}
              </span>
              <p className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
                {t.projectsPage.metric4Label}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Project Inquiry Footer Call-to-Action */}
      <section className="py-16 sm:py-24 bg-[var(--bg-surface-strong)] relative overflow-hidden border-b border-[var(--border-color)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6 reveal">
          <div className="w-16 h-16 rounded-full bg-[var(--accent-color)]/10 border border-[var(--accent-color)]/30 flex items-center justify-center mx-auto text-[var(--accent-color)]">
            <MessageSquare className="w-8 h-8" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] tracking-tight">
            {t.projectsPage.inquiryHeading}
          </h2>

          <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            {t.projectsPage.inquirySubtext}
          </p>

          <div className="pt-4">
            <button
              id="projects-start-project-btn"
              onClick={scrollToContact}
              className="px-8 py-3.5 rounded-full bg-[var(--accent-color)] text-black font-bold text-sm hover:opacity-90 transition-all flex items-center gap-2 mx-auto accent-glow cursor-pointer"
            >
              <span>{t.projectsPage.startProjectBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. Contact Section Form */}
      <Contact />

      {/* Case Study Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-[20px] max-w-2xl w-full p-6 sm:p-8 space-y-6 relative clova-card-shadow max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[var(--bg-surface-strong)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] flex items-center justify-center cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2 pr-8">
              <span className="text-xs font-mono font-bold text-[var(--accent-color)] uppercase tracking-wider">
                {selectedProject.categoryDisplay}
              </span>
              <h3 className="text-2xl font-bold text-[var(--text-primary)]">
                {selectedProject.title}
              </h3>
            </div>

            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              {selectedProject.description}
            </p>

            {selectedProject.deliverables && (
              <div className="space-y-3 border-t border-[var(--border-color)] pt-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)]">
                  Key Technical Deliverables:
                </h4>
                <div className="space-y-2">
                  {selectedProject.deliverables.map((del) => (
                    <div key={del} className="flex items-start gap-2.5 text-xs text-[var(--text-secondary)]">
                      <CheckCircle2 className="w-4 h-4 text-[var(--accent-color)] shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-3 border-t border-[var(--border-color)] pt-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)]">
                Technology Stack:
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-[var(--bg-surface-strong)] text-xs font-medium text-[var(--text-primary)] border border-[var(--border-color)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border-color)]">
              {selectedProject.liveUrl ? (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full bg-[var(--accent-color)] text-black font-bold text-xs flex items-center gap-2 hover:opacity-90 transition-all cursor-pointer"
                >
                  <span>Visit Live Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    scrollToContact();
                  }}
                  className="px-6 py-2.5 rounded-full bg-[var(--accent-color)] text-black font-bold text-xs flex items-center gap-2 hover:opacity-90 transition-all cursor-pointer"
                >
                  <span>Inquire About This Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}

              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 rounded-full bg-[var(--bg-surface-strong)] text-[var(--text-primary)] text-xs font-semibold border border-[var(--border-color)] hover:border-[var(--accent-color)] transition-all cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
