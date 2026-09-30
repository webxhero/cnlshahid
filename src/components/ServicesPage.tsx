import React, { useEffect, useState } from 'react';
import { 
  Sparkles, 
  Figma, 
  ShoppingBag, 
  GraduationCap, 
  Code, 
  Layers, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  Search, 
  Cpu, 
  Rocket, 
  ShieldCheck, 
  MessageSquare 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Contact } from './Contact';

export const ServicesPage: React.FC = () => {
  const { language, t } = useLanguage();

  useEffect(() => {
    // Reveal animation observer for services page elements
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

    const elements = document.querySelectorAll('#services-page-root .reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const servicesData = [
    {
      id: 'figma-wp',
      icon: <Figma className="w-8 h-8 text-[var(--accent-color)]" />,
      title: language === 'bn' 
        ? 'ফিগমা ও এডোবি এক্সডি থেকে ওয়ার্ডপ্রেস / এলিমেন্টর প্র কনভার্সন'
        : 'Figma & Adobe XD to WordPress / Elementor Pro Conversion',
      description: language === 'bn'
        ? 'পিক্সেল-পারফেক্ট, আল্ট্রা-রেসপন্সিভ এইচটিএমএল/সিএসএস এবং এলিমেন্টর বিল্ড কাস্টম ডাইনামিক ট্যাগ ও জিরো ব্লোট কোড সহ।'
        : 'Pixel-perfect, ultra-responsive HTML/CSS and Elementor builds with custom dynamic tags and zero bloated code.',
      features: [
        language === 'bn' ? '১০০% ফিগমা অ্যাকুরেসি' : '100% Figma fidelity',
        language === 'bn' ? 'মোবাইল-ফার্স্ট রেসপন্সিভ' : 'Mobile-first responsive',
        language === 'bn' ? 'কাস্টম সিএসএস ইন্টিগ্রেশন' : 'Custom CSS integration',
        language === 'bn' ? 'ক্রস-ব্রাউজার টেস্টেড' : 'Cross-browser tested',
      ],
      techBadges: ['WordPress', 'Elementor Pro', 'HTML5/CSS3', 'JavaScript'],
    },
    {
      id: 'woocommerce-eng',
      icon: <ShoppingBag className="w-8 h-8 text-[var(--accent-color)]" />,
      title: language === 'bn'
        ? 'উকমার্স ও ই-কমার্স ইঞ্জিনিয়ারিং'
        : 'WooCommerce & E-Commerce Engineering',
      description: language === 'bn'
        ? 'উচ্চ কনভার্সন, ফাস্ট চেকআউট, কাস্টম প্রোডাক্ট ফিল্টার এবং সিকিউর পেমেন্ট/শিপিং ইন্টিগ্রেশন সহ স্কেলেবল অনলাইন স্টোর।'
        : 'Scalable online stores built for high conversion, fast checkout, custom product filters, and secure payment/shipping integrations.',
      features: [
        language === 'bn' ? 'কাস্টম চেকআউট ফানেল' : 'Custom checkout funnel',
        language === 'bn' ? 'পেমেন্ট গেটওয়ে (Stripe, BKash ইত্যাদি)' : 'Payment gateways (Stripe, BKash, etc.)',
        language === 'bn' ? 'ইনভেন্টরি ও শিপিং সেটআপ' : 'Inventory & shipping setup',
        language === 'bn' ? 'স্পিড অপটিমাইজড' : 'Speed optimized',
      ],
      techBadges: ['WooCommerce', 'ACF Pro', 'Crocoblock', 'PHP'],
    },
    {
      id: 'lms-edu',
      icon: <GraduationCap className="w-8 h-8 text-[var(--accent-color)]" />,
      title: language === 'bn'
        ? 'এলএমএস ও এডুকেশনাল প্ল্যাটফর্ম ডেভেলপমেন্ট'
        : 'LMS & Educational Platform Development',
      description: language === 'bn'
        ? 'কাস্টম ইনস্ট্রাক্টর ড্যাশবোর্ড, স্টুডেন্ট এনরোলমেন্ট, কুইজ এবং অটোমেটেড সার্টিফিকেট জেনারেশন সহ পুর্ণাঙ্গ লার্নিং ম্যানেজমেন্ট সিস্টেম।'
        : 'Comprehensive learning management systems with custom instructor dashboards, student enrollment, quizzes, and automated certificate generation.',
      features: [
        language === 'bn' ? 'কোর্স ম্যানেজমেন্ট' : 'Course management',
        language === 'bn' ? 'কুইজ বিল্ডার' : 'Quiz builder',
        language === 'bn' ? 'পেমেন্ট ইন্টিগ্রেশন' : 'Payment integration',
        language === 'bn' ? 'স্টুডেন্ট/টিচার পোর্টাল' : 'Student/Teacher portals',
      ],
      techBadges: ['TutorLMS', 'WordPress', 'WooCommerce'],
    },
    {
      id: 'crocoblock-jet',
      icon: <Code className="w-8 h-8 text-[var(--accent-color)]" />,
      title: language === 'bn'
        ? 'ক্রোকোব্লক জেটইঞ্জিন ও ডাইনামিক সিএমএস আর্কিটেকচার'
        : 'Crocoblock JetEngine & Dynamic CMS Architecture',
      description: language === 'bn'
        ? 'কাস্টম পোস্ট টাইপ (CPT), কাস্টম ট্যাক্সোনমি এবং অ্যাডভান্সড কোয়েরি বিল্ডার দ্বারা তৈরি জটিল, ডাইনামিক কনটেন্ট ওয়েবসাইট।'
        : 'Complex, dynamic content websites built with Custom Post Types (CPT), custom taxonomies, and advanced query builders.',
      features: [
        language === 'bn' ? 'কাস্টম ডিরেক্টরি' : 'Custom directories',
        language === 'bn' ? 'লিস্টিং সাইটস' : 'Listing sites',
        language === 'bn' ? 'ডাইনামিক রিলেশনশিপ' : 'Dynamic relations',
        language === 'bn' ? 'অ্যাডভান্সড সার্চ ফিল্টার' : 'Advanced search filters',
      ],
      techBadges: ['JetEngine', 'Crocoblock', 'ACF Pro'],
    },
    {
      id: 'nocode-shopify',
      icon: <Layers className="w-8 h-8 text-[var(--accent-color)]" />,
      title: language === 'bn'
        ? 'নো-কোড ও শপিফাই স্টোর সেটআপ'
        : 'No-Code & Shopify Store Setup',
      description: language === 'bn'
        ? 'ক্লিন, কনভার্সন-ফোকাসড শপিফাই স্টোর বিল্ড, থিম কাস্টমাইজেশন এবং দ্রুত নো-কোড ল্যান্ডিং পেজ ডেভেলপমেন্ট।'
        : 'Clean, conversion-focused Shopify store builds, theme customization, and rapid no-code landing page development.',
      features: [
        language === 'bn' ? 'কাস্টম স্টোর সেটআপ' : 'Custom store setup',
        language === 'bn' ? 'লিকুইড কাস্টমাইজেশন' : 'Liquid tweaks',
        language === 'bn' ? 'হাই-কনভার্টিং ডিজাইন' : 'High-converting design',
        language === 'bn' ? 'অ্যাপ ইন্টিগ্রেশন' : 'App integrations',
      ],
      techBadges: ['Shopify', 'No-Code', 'Liquid'],
    },
    {
      id: 'speed-seo',
      icon: <Zap className="w-8 h-8 text-[var(--accent-color)]" />,
      title: language === 'bn'
        ? 'পারফরম্যান্স অপটিমাইজেশন, এসইও ও মেইনটেন্যান্স'
        : 'Performance Optimization, SEO & Maintenance',
      description: language === 'bn'
        ? 'ওয়ার্ডপ্রেস ওয়েবসাইটের ৯০+ গুগল পেজস্পিড স্কোর অর্জন, টেকনিক্যাল এসইও এবং সিকিউরিটি রক্ষণাবেক্ষণ সেবা।'
        : 'Speeding up existing WordPress sites to achieve 90+ Google PageSpeed scores, technical SEO setup, and monthly security maintenance.',
      features: [
        language === 'bn' ? 'ডাটাবেজ ক্লিনআপ' : 'Database cleanup',
        language === 'bn' ? 'ইমেজ অপটিমাইজেশন' : 'Image optimization',
        language === 'bn' ? 'স্কিমা মার্কআপ' : 'Schema markup',
        language === 'bn' ? 'সিকিউরিটি হার্ডেনিং' : 'Security hardening',
      ],
      techBadges: ['Google PageSpeed', 'Schema JSON-LD', 'Yoast/RankMath'],
    },
  ];

  const workflowSteps = [
    {
      number: '01',
      icon: <Search className="w-6 h-6 text-[var(--accent-color)]" />,
      title: t.servicesPage.step1Title,
      description: t.servicesPage.step1Desc,
    },
    {
      number: '02',
      icon: <Cpu className="w-6 h-6 text-[var(--accent-color)]" />,
      title: t.servicesPage.step2Title,
      description: t.servicesPage.step2Desc,
    },
    {
      number: '03',
      icon: <Zap className="w-6 h-6 text-[var(--accent-color)]" />,
      title: t.servicesPage.step3Title,
      description: t.servicesPage.step3Desc,
    },
    {
      number: '04',
      icon: <Rocket className="w-6 h-6 text-[var(--accent-color)]" />,
      title: t.servicesPage.step4Title,
      description: t.servicesPage.step4Desc,
    },
  ];

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="services-page-root" className="pt-24 pb-16 min-h-screen">
      {/* 1. Page Hero Section */}
      <section className="py-16 sm:py-24 bg-[var(--bg-base)] relative overflow-hidden transition-colors border-b border-[var(--border-color)]">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[var(--accent-color)]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 reveal">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--bg-surface)] border border-[var(--border-color)] text-xs font-semibold text-[var(--accent-color)] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.servicesPage.heroBadge}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text-primary)] leading-tight">
              {t.servicesPage.heroHeading}
            </h1>

            <p className="text-base sm:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto">
              {t.servicesPage.heroSubheading}
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                id="hero-request-quote-btn"
                onClick={scrollToContact}
                className="px-8 py-3.5 rounded-full bg-[var(--accent-color)] text-black font-bold text-sm hover:opacity-90 transition-all flex items-center gap-2 accent-glow cursor-pointer"
              >
                <span>{t.servicesPage.requestQuoteBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Tech Highlights Pills */}
            <div className="pt-8 flex flex-wrap justify-center items-center gap-2 text-xs text-[var(--text-secondary)]">
              <span className="font-semibold text-[var(--text-primary)] mr-2">Specializing in:</span>
              {['WordPress', 'Elementor Pro', 'WooCommerce', 'Shopify', 'Crocoblock JetEngine', 'TutorLMS', 'PageSpeed 90+'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-primary)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Detailed Services Grid (6 Core Categories) */}
      <section className="py-20 sm:py-28 bg-[var(--bg-surface-strong)] relative transition-colors border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 space-y-4 reveal">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] tracking-tight">
              {t.servicesPage.gridHeading}
            </h2>
            <p className="text-base sm:text-lg text-[var(--text-secondary)]">
              {t.servicesPage.gridSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((item, index) => (
              <div
                key={item.id}
                id={`service-grid-card-${item.id}`}
                className={`bg-[var(--bg-surface)] rounded-[17px] p-6 sm:p-8 border border-[var(--border-color)] clova-card-shadow flex flex-col justify-between hover:border-[var(--accent-color)]/50 hover:-translate-y-1 transition-all duration-300 reveal stagger-${(index % 3) + 1}`}
              >
                <div>
                  <div className="w-14 h-14 rounded-[12px] bg-[var(--bg-surface-strong)] border border-[var(--border-color)] flex items-center justify-center mb-6">
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="space-y-2.5 mb-6 border-t border-[var(--border-color)] pt-5">
                    <span className="text-xs font-semibold text-[var(--accent-color)] uppercase tracking-wider block mb-3">
                      Key Highlights:
                    </span>
                    {item.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs text-[var(--text-primary)]">
                        <CheckCircle2 className="w-4 h-4 text-[var(--accent-color)] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[var(--border-color)]">
                    {item.techBadges.map((badge) => (
                      <span
                        key={badge}
                        className="px-2.5 py-1 rounded-[6px] bg-[var(--bg-surface-strong)] text-[11px] font-semibold text-[var(--text-secondary)] border border-[var(--border-color)]"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={scrollToContact}
                    className="w-full mt-6 py-2.5 px-4 rounded-[8px] bg-[var(--bg-surface-strong)] hover:bg-[var(--accent-color)] hover:text-black text-[var(--text-primary)] text-xs font-semibold border border-[var(--border-color)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Request Quote for This Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. My Development Workflow Section */}
      <section className="py-20 sm:py-28 bg-[var(--bg-base)] relative transition-colors border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16 space-y-4 reveal">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--bg-surface)] border border-[var(--border-color)] text-xs font-semibold text-[var(--accent-color)] uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{t.servicesPage.workflowBadge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] tracking-tight">
              {t.servicesPage.workflowTitle}
            </h2>
            <p className="text-base sm:text-lg text-[var(--text-secondary)]">
              {t.servicesPage.workflowSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((step, idx) => (
              <div
                key={step.number}
                className={`bg-[var(--bg-surface)] rounded-[17px] p-6 border border-[var(--border-color)] clova-card-shadow relative space-y-4 hover:border-[var(--accent-color)]/40 transition-all reveal stagger-${idx + 1}`}
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-[10px] bg-[var(--bg-surface-strong)] border border-[var(--border-color)] flex items-center justify-center">
                    {step.icon}
                  </div>
                  <span className="text-2xl font-extrabold text-[var(--accent-color)]/30 font-mono">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[var(--text-primary)]">
                  {step.title}
                </h3>

                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Call to Action / Inquiry Section */}
      <Contact />
    </div>
  );
};
