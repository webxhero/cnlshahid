import React from 'react';
import { Project } from '../types';
import { ExternalLink, Gauge, CheckCircle2, X, Globe, Calendar, UserCheck, MapPin } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div id="project-detail-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-[20px] w-full max-w-3xl max-h-[92vh] overflow-y-auto p-6 sm:p-8 space-y-6 relative text-left shadow-2xl">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-[var(--border-color)] pb-5">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-3 py-0.5 rounded-full bg-[var(--accent-color)]/10 text-[var(--accent-color)] text-xs font-semibold border border-[var(--accent-color)]/20">
                {project.category}
              </span>
              <span className="px-3 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-semibold flex items-center gap-1 border border-emerald-500/20">
                <Gauge className="w-3.5 h-3.5" />
                PageSpeed {project.pageSpeedScore}/100
              </span>
            </div>
            <h3 className="text-3xl font-bold text-[var(--text-primary)] tracking-tight">{project.title}</h3>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--accent-color)] hover:underline flex items-center gap-1.5 mt-1 font-medium"
            >
              <span>{project.displayUrl}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <button
            id="close-project-modal"
            onClick={onClose}
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] p-2 rounded-full hover:bg-[var(--border-color)]/20 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Project Meta Info */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-[12px] bg-[var(--bg-surface-strong)] border border-[var(--border-color)] text-xs">
          <div>
            <span className="text-[var(--text-secondary)] block font-medium flex items-center gap-1">
              <UserCheck className="w-3.5 h-3.5 text-[var(--accent-color)]" /> Client
            </span>
            <span className="text-[var(--text-primary)] font-semibold mt-1 block">{project.client}</span>
          </div>
          <div>
            <span className="text-[var(--text-secondary)] block font-medium flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[var(--accent-color)]" /> Region
            </span>
            <span className="text-[var(--text-primary)] font-semibold mt-1 block">{project.location}</span>
          </div>
          <div>
            <span className="text-[var(--text-secondary)] block font-medium flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[var(--accent-color)]" /> Year
            </span>
            <span className="text-[var(--text-primary)] font-semibold mt-1 block">{project.year}</span>
          </div>
          <div>
            <span className="text-[var(--text-secondary)] block font-medium flex items-center gap-1">
              <Globe className="w-3.5 h-3.5 text-[var(--accent-color)]" /> Role
            </span>
            <span className="text-[var(--text-primary)] font-semibold mt-1 block">{project.role}</span>
          </div>
        </div>

        {/* Full Overview */}
        <div>
          <h4 className="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-2">
            Project Overview & Objectives
          </h4>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            {project.fullDescription}
          </p>
        </div>

        {/* Tech Stack */}
        <div>
          <h4 className="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-3">
            Technologies & Tools
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-[8px] bg-[var(--bg-surface-strong)] border border-[var(--border-color)] text-xs text-[var(--text-primary)] font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Key Deliverables */}
        <div>
          <h4 className="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider mb-3">
            Key Deliverables & Technical Achievements
          </h4>
          <div className="space-y-2.5">
            {project.keyDeliverables.map((deliv, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-[8px] bg-[var(--bg-surface-strong)] border border-[var(--border-color)] text-sm text-[var(--text-primary)]">
                <CheckCircle2 className="w-5 h-5 text-[var(--accent-color)] shrink-0 mt-0.5" />
                <span>{deliv}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial if available */}
        {project.testimonial && (
          <div className="p-5 rounded-[12px] bg-[var(--bg-surface-strong)] border border-[var(--accent-color)]/30 space-y-2">
            <p className="text-sm italic text-[var(--text-primary)]">
              "{project.testimonial.quote}"
            </p>
            <div className="text-xs text-[var(--accent-color)] font-semibold">
              — {project.testimonial.author}, <span className="text-[var(--text-secondary)]">{project.testimonial.role}</span>
            </div>
          </div>
        )}

        {/* Modal Actions */}
        <div className="pt-4 border-t border-[var(--border-color)] flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full bg-[var(--bg-surface-strong)] text-[var(--text-primary)] border border-[var(--border-color)] text-sm font-medium hover:bg-[var(--border-color)]/20 cursor-pointer"
          >
            Close Window
          </button>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full bg-[var(--accent-color)] text-black text-sm font-bold hover:opacity-90 transition-all flex items-center gap-2 accent-glow cursor-pointer"
          >
            <span>Visit Live Website ({project.displayUrl})</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
