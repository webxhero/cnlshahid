import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { ProjectBrowserMockup } from './ProjectBrowserMockup';
import { ArrowUpRight, Gauge, ExternalLink, Sparkles, LayoutGrid } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ProjectsProps {
  onNavigate?: (route: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onNavigate }) => {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Fix: Ensure filtered projects activate reveal state immediately when filter category changes
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '0px 0px -20px 0px',
      threshold: 0.01,
    });

    const elements = document.querySelectorAll('#projects .reveal');
    elements.forEach((el) => {
      el.classList.add('active');
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [selectedCategory]);

  const getCategoryLabel = (cat: string) => {
    if (language === 'bn') {
      switch (cat) {
        case 'All': return t.projects.filterAll;
        case 'Agency': return t.projects.filterAgency;
        case 'LMS': return t.projects.filterLms;
        case 'E-commerce': return t.projects.filterEcommerce;
        case 'Portfolio': return t.projects.filterPortfolio;
        default: return cat;
      }
    }
    return cat === 'All' ? 'All Works' : cat;
  };

  const categories = ['All', 'Agency', 'LMS', 'E-commerce', 'Portfolio'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <section id="projects" className="py-20 sm:py-28 bg-[var(--bg-base)] relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 reveal">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--bg-surface)] border border-[var(--border-color)] text-xs font-semibold text-[var(--accent-color)] uppercase tracking-wider">
              <LayoutGrid className="w-3.5 h-3.5" />
              {t.projects.badge}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
              {t.projects.title}
            </h2>
            <p className="text-base sm:text-lg text-[var(--text-secondary)]">
              {t.projects.subtitle}
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 bg-[var(--bg-surface)] p-1.5 rounded-full border border-[var(--border-color)] self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`filter-${cat.toLowerCase()}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[var(--accent-color)] text-black shadow-sm'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {getCategoryLabel(cat)}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className={`bg-[var(--bg-surface)] rounded-[20px] p-6 sm:p-8 border border-[var(--border-color)] clova-card-shadow flex flex-col justify-between group hover:border-[var(--accent-color)]/50 hover:-translate-y-[3px] transition-all duration-300 relative reveal stagger-${(index % 4) + 1}`}
            >
              <div>
                {/* Mac-Style Browser Window Frame Mockup */}
                <div className="mb-5">
                  <ProjectBrowserMockup
                    title={project.title}
                    displayUrl={project.displayUrl}
                    liveUrl={project.url}
                    pageSpeed={project.pageSpeedScore}
                    category={project.category}
                    onClick={() => setActiveProject(project)}
                    ctaText="Preview Project ↗"
                  />
                </div>

                {/* Top Header info */}
                <div className="flex items-center justify-between gap-2 mb-4 transition-transform duration-300 group-hover:-translate-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-[var(--bg-surface-strong)] border border-[var(--border-color)] text-xs font-semibold text-[var(--accent-color)]">
                      {project.category}
                    </span>
                    <span className="text-xs text-[var(--text-secondary)] font-medium">• {project.year}</span>
                  </div>

                  {/* PageSpeed Badge */}
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold border border-emerald-500/20 flex items-center gap-1">
                    <Gauge className="w-3.5 h-3.5" />
                    {project.pageSpeedScore}/100 Speed
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-color)] transition-colors mb-2">
                  {project.title}
                </h3>

                {/* Live URL Link */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[var(--accent-color)] font-semibold hover:underline mb-4"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>{project.displayUrl}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                {/* Short Description */}
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                  {project.shortDescription}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-6 transition-transform duration-300 group-hover:-translate-y-0.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-[8px] bg-[var(--bg-surface-strong)] border border-[var(--border-color)] text-xs text-[var(--text-primary)] hover:scale-105 hover:border-[var(--accent-color)]/30 transition-all duration-200 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-6 border-t border-[var(--border-color)] flex items-center justify-between gap-4">
                <div className="text-xs text-[var(--text-secondary)]">
                  Client: <strong className="text-[var(--text-primary)] font-medium">{project.client}</strong>
                </div>

                <button
                  id={`view-details-${project.id}`}
                  onClick={() => setActiveProject(project)}
                  className="px-4 py-2 rounded-full bg-[var(--bg-surface-strong)] hover:bg-[var(--accent-color)] hover:text-black text-[var(--text-primary)] border border-[var(--border-color)] text-xs font-semibold transition-all flex items-center gap-1.5 group-hover:border-[var(--accent-color)] cursor-pointer cta-hover-lift"
                >
                  <span>{t.projects.viewCaseStudy}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Explore Full Portfolio Dedicated Page Button */}
        {onNavigate && (
          <div className="mt-14 text-center reveal">
            <button
              id="home-explore-full-projects-btn"
              onClick={() => onNavigate('projects')}
              className="px-8 py-3.5 rounded-full bg-[var(--bg-surface-strong)] text-[var(--text-primary)] hover:text-black border border-[var(--border-color)] hover:border-[var(--accent-color)] hover:bg-[var(--accent-color)] font-bold text-sm transition-all duration-300 inline-flex items-center gap-2 cursor-pointer shadow-sm group"
            >
              <span>Explore All Case Studies & Live Projects</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        )}

        {/* Project Modal */}
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      </div>
    </section>
  );
};
