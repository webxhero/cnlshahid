import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardHeaderProps {
  title: string;
  displayUrl?: string;
  liveUrl?: string;
  tag?: string;
  categorySublabel?: string;
  onClick?: () => void;
  ctaText?: string;
}

export const ProjectCardHeader: React.FC<ProjectCardHeaderProps> = ({
  title,
  displayUrl = '',
  liveUrl,
  tag,
  categorySublabel,
  onClick,
  ctaText = 'Preview Project ↗'
}) => {
  // Clean domain URL for right side top bar
  const domain = displayUrl || (liveUrl ? liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '') : 'project-demo.com');

  // Glassmorphic tag badge (e.g. FIGMA TO CODE or CMS & NO-CODE)
  const badgeText = tag || (
    title.toLowerCase().includes('figma') ? 'FIGMA TO CODE' :
    title.toLowerCase().includes('lms') ? 'LMS & EDUCATION' :
    title.toLowerCase().includes('woocommerce') || title.toLowerCase().includes('e-commerce') ? 'E-COMMERCE BUILD' :
    'CMS & NO-CODE'
  );

  // Category sublabel
  const categoryText = categorySublabel || 'WORDPRESS & NO-CODE ARCHITECTURE';

  return (
    <div
      onClick={onClick}
      className="group/card-header relative w-full h-44 sm:h-48 rounded-[14px] overflow-hidden p-5 flex flex-col justify-between cursor-pointer transition-all duration-400 ease-out select-none border border-white/10 hover:border-[#a2ba92]/40"
      style={{
        background: 'linear-gradient(135deg, #18181b 0%, #09090b 100%)',
      }}
    >
      {/* 1. CSS Radial Grid Texture Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '16px 16px',
        }}
      />

      {/* 2. Ambient Top-Left Accent Radial Glow */}
      <div
        className="absolute -top-12 -left-12 w-48 h-48 rounded-full pointer-events-none transition-opacity duration-400 opacity-70 group-hover/card-header:opacity-100"
        style={{
          background: 'radial-gradient(circle, rgba(162, 186, 146, 0.16) 0%, transparent 70%)',
        }}
      />

      {/* 3. Top Bar Layout */}
      <div className="relative z-10 flex items-center justify-between gap-3">
        {/* Left: Glassmorphic Tag Badge */}
        <span
          className="inline-block px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold uppercase tracking-[1px] text-zinc-200 border border-white/10 shrink-0"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(8px)',
          }}
        >
          {badgeText}
        </span>

        {/* Right: Clean Monospace Domain URL */}
        <span className="text-[11px] font-mono text-[#9b9b9b] truncate max-w-[150px] sm:max-w-[200px] text-right shrink-0">
          {domain}
        </span>
      </div>

      {/* 4. Bottom Area Layout */}
      <div className="relative z-10 space-y-1 mt-auto">
        {/* Category Sub-Label in Accent Green */}
        <span className="block text-[11px] font-mono font-bold uppercase tracking-wider text-[#a2ba92]">
          {categoryText}
        </span>

        {/* Main Project Name in Crisp Bold White */}
        <h4 className="text-base sm:text-lg font-bold text-[#f4f4f4] tracking-tight line-clamp-1 group-hover/card-header:text-white transition-colors">
          {title}
        </h4>
      </div>

      {/* 5. Glassmorphism Hover Overlay & Accent CTA Pill */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[4px] opacity-0 group-hover/card-header:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 z-20">
        <span className="px-5 py-2.5 rounded-full bg-[#a2ba92] text-black font-extrabold text-xs tracking-wider uppercase shadow-xl flex items-center gap-1.5 transform translate-y-2 group-hover/card-header:translate-y-0 transition-transform duration-300 accent-glow">
          <span>{ctaText}</span>
          <ArrowUpRight className="w-4 h-4" />
        </span>
      </div>
    </div>
  );
};
