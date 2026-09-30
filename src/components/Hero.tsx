import React from "react";
import {
  ArrowUpRight,
  Code2,
  Layers,
  Zap,
  Award,
  CheckCircle,
  ExternalLink,
  ShieldCheck,
  Download,
  FileText,
} from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";
import { downloadCvPdf } from "../utils/downloadCv";
import { AnimatedCounter } from "./AnimatedCounter";
import { useLanguage } from "../context/LanguageContext";
import shahidImage from "../../assets/CNL-SHAHID.webp";

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const { language, t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--accent-color)]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-[var(--accent-color)]/5 blur-[90px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy (Left - 7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Pill Badge */}
            <div className="hero-animate-1 inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[var(--bg-surface)] border border-[var(--border-color)] text-xs sm:text-sm font-medium text-[var(--text-primary)]">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-color)] animate-ping" />
              <span className="text-[var(--accent-color)] font-semibold">
                {t.hero.badge}
              </span>
              <span className="opacity-20">•</span>
              <span className="text-[var(--text-secondary)]">
                {language === "bn" ? "সিলেট, বাংলাদেশ" : "Sylhet, Bangladesh"}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-animate-2 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.12]">
              <span className="sr-only">
                CNL Shahid (MD Shahid Ahmed) — WordPress & Shopify Expert in
                Bangladesh —{" "}
              </span>
              {t.hero.headlinePre}
              <span className="text-[var(--accent-color)]">
                {t.hero.headlineHighlight}
              </span>
              {t.hero.headlinePost}
            </h1>

            {/* Subheadline */}
            <p className="hero-animate-3 text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl leading-relaxed">
              {t.hero.bioIntro}
              <strong className="text-[var(--text-primary)] font-semibold">
                {language === "bn" ? "মো: সাহিদ আহমদ" : PERSONAL_INFO.name}
              </strong>
              {t.hero.bioRole}
              <span className="text-[var(--text-primary)]">
                WordPress
              </span>,{" "}
              <span className="text-[var(--text-primary)]">Elementor Pro</span>
              {t.hero.bioAnd}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="hero-animate-4 flex flex-wrap items-center gap-3 pt-2">
              <button
                id="hero-primary-cta"
                onClick={() => onNavigate("projects")}
                className="px-6 py-3 rounded-full bg-[var(--accent-color)] text-black font-semibold text-sm sm:text-base hover:opacity-90 transition-all flex items-center gap-2 cursor-pointer shadow-lg hover:shadow-[var(--accent-color)]/20 cta-hover-lift"
              >
                <span>{t.hero.viewWork}</span>
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <button
                id="hero-secondary-cta"
                onClick={() => onNavigate("contact")}
                className="px-6 py-3 rounded-full bg-[var(--bg-surface)] text-[var(--text-primary)] border border-[var(--border-color)] font-semibold text-sm sm:text-base hover:bg-[var(--bg-surface-strong)] hover:border-[var(--accent-color)]/50 transition-all flex items-center gap-2 cursor-pointer cta-hover-lift"
              >
                <span>{t.hero.contactMe}</span>
              </button>
            </div>

            {/* Key Metrics Strip */}
            <div className="hero-animate-5 pt-8 border-t border-[var(--border-color)] grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="p-3 sm:p-4 rounded-[14px] bg-[var(--bg-surface)] border border-[var(--border-color)] hover:border-[var(--accent-color)]/30 transition-all duration-300 group hover:shadow-[0_0_20px_rgba(162,186,146,0.12)]">
                <div className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight flex items-baseline gap-1">
                  <AnimatedCounter end={3} suffix="+" />
                  <span className="text-xs text-[var(--accent-color)] font-semibold">
                    {language === "bn" ? "বছর" : "Years"}
                  </span>
                </div>
                <div className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1">
                  {t.hero.expLabel}
                </div>
              </div>

              <div className="p-3 sm:p-4 rounded-[14px] bg-[var(--bg-surface)] border border-[var(--border-color)] hover:border-[var(--accent-color)]/30 transition-all duration-300 group hover:shadow-[0_0_20px_rgba(162,186,146,0.12)]">
                <div className="text-2xl sm:text-3xl font-bold text-[var(--accent-color)] tracking-tight flex items-baseline gap-1">
                  <AnimatedCounter end={95} suffix="+" />
                  <span className="text-xs text-[var(--text-secondary)] font-normal">
                    /100
                  </span>
                </div>
                <div className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1">
                  {t.hero.speedLabel}
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 p-3 sm:p-4 rounded-[14px] bg-[var(--bg-surface)] border border-[var(--border-color)] hover:border-[var(--accent-color)]/30 transition-all duration-300 group hover:shadow-[0_0_20px_rgba(162,186,146,0.12)]">
                <div className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight flex items-baseline gap-1">
                  <AnimatedCounter end={100} suffix="%" />
                </div>
                <div className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1">
                  {t.hero.fidelityLabel}
                </div>
              </div>
            </div>
          </div>

          {/* Profile & Skill Showcase Card (Right - 5 cols) */}
          <div className="lg:col-span-5 hero-animate-5">
            <div className="bg-[var(--bg-surface)] rounded-[20px] p-6 sm:p-8 border border-[var(--border-color)] clova-card-shadow relative">
              {/* Top Profile Header */}
              <div className="flex items-start justify-between gap-4 pb-6 border-b border-[var(--border-color)]">
                <div className="flex items-center gap-4">
                  <img
                    src={shahidImage}
                    alt="CNL Shahid - WordPress and Shopify Expert"
                    referrerPolicy="no-referrer"
                    className="w-16 h-16 rounded-[17px] border border-[var(--border-color)] object-cover shadow-sm shrink-0"
                  />
                  <div>
                    <h2 className="text-xl font-bold text-[var(--text-primary)] tracking-tight">
                      {language === "bn"
                        ? "মো: সাহিদ আহমদ"
                        : PERSONAL_INFO.name}
                    </h2>
                    <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                      {language === "bn"
                        ? "ব্যাচেলর অফ বিজনেস স্টাডিজ (বিবিএস)"
                        : PERSONAL_INFO.education}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-[var(--accent-color)]/10 text-[var(--accent-color)] text-[11px] font-semibold border border-[var(--accent-color)]/20">
                        WordPress & Elementor
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Core Strengths Bullet Points */}
              <div className="py-6 space-y-3.5 border-b border-[var(--border-color)] text-sm">
                <div className="flex items-start gap-3 text-[var(--text-primary)]">
                  <ShieldCheck className="w-5 h-5 text-[var(--accent-color)] shrink-0 mt-0.5" />
                  <span>
                    {language === "bn"
                      ? "ফিগমা ও এডোবি এক্সডি থেকে পিক্সেল-পারফেক্ট ওয়ার্ডপ্রেস কনভার্সন"
                      : "Figma & Adobe XD to WordPress pixel-perfect conversions"}
                  </span>
                </div>
                <div className="flex items-start gap-3 text-[var(--text-primary)]">
                  <Zap className="w-5 h-5 text-[var(--accent-color)] shrink-0 mt-0.5" />
                  <span>
                    {language === "bn"
                      ? "ক্রোকোব্লক জেটইঞ্জিন ডায়নামিক কনটেন্ট ও কাস্টম পোস্ট টাইপ"
                      : "Crocoblock JetEngine dynamic content & custom post types"}
                  </span>
                </div>
                <div className="flex items-start gap-3 text-[var(--text-primary)]">
                  <Award className="w-5 h-5 text-[var(--accent-color)] shrink-0 mt-0.5" />
                  <span>
                    {language === "bn"
                      ? "উকমার্স স্টোর এবং এলএমএস কুইজ প্ল্যাটফর্ম ইঞ্জিনিয়ারিং"
                      : "WooCommerce stores & LMS quiz platform engineering"}
                  </span>
                </div>
              </div>

              {/* Tech Stack Chips */}
              <div className="pt-6">
                <div className="text-xs text-[var(--text-secondary)] font-medium uppercase tracking-wider mb-3">
                  {t.hero.coreStack}
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "WordPress",
                    "Elementor Pro",
                    "Crocoblock",
                    "WooCommerce",
                    "TutorLMS",
                    "Figma",
                    "ACF Pro",
                    "Tailwind",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-[8px] bg-[var(--bg-surface-strong)] border border-[var(--border-color)] text-xs text-[var(--text-primary)] hover:border-[var(--accent-color)]/40 hover:scale-105 transition-all duration-200 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quick Contact & CV Button inside Card */}
              <div className="mt-6 pt-4 border-t border-[var(--border-color)] flex items-center justify-between text-xs text-[var(--text-secondary)]">
                <button
                  onClick={downloadCvPdf}
                  className="flex items-center gap-1.5 text-[var(--text-primary)] hover:text-[var(--accent-color)] font-medium cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-[var(--accent-color)]" />
                  {t.hero.downloadCv}
                </button>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-[var(--accent-color)] hover:underline font-medium flex items-center gap-1"
                >
                  {PERSONAL_INFO.email}
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
