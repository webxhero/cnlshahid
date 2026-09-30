import { Project, Service, ExperienceItem, SkillCategory, Testimonial } from '../types';

export const PERSONAL_INFO = {
  name: 'Md Shahid Ahmed',
  brandName: 'CNL Shahid',
  title: 'CMS & No-Code Specialist, Web Developer',
  location: 'Sylhet, Bangladesh',
  education: 'Bachelor of Business Studies (BBS)',
  experienceYears: '3+ Years',
  email: 'contact@cnlshahid.com',
  phone: '+88 01322-533008',
  website: 'www.cnlshahid.com',
  shortBio: 'A specialized CMS and No-Code professional with over 3 years of experience. Focused on building responsive, high-performance websites utilizing WordPress and Elementor. Dedicated to converting Figma designs into pixel-perfect, scalable web solutions that meet international standards.',
  status: 'Available for freelance & full-time opportunities',
  whatsappUrl: 'https://wa.me/8801322533008',
  linkedinUrl: 'https://linkedin.com/in/cnlshahid',
  githubUrl: 'https://github.com/cnlshahid',
};

export const SERVICES: Service[] = [
  {
    id: 'figma-to-wp',
    title: 'Figma to WordPress / Elementor',
    subtitle: 'Pixel-Perfect Design Conversion',
    description: 'Transforming static Figma, Adobe XD, or Sketch designs into clean, highly responsive, and modular WordPress pages built with Elementor Pro or native Gutenberg.',
    iconName: 'Figma',
    popularFor: 'Design Agencies & Startup Founders',
    deliverables: [
      '100% Pixel-perfect design fidelity matching Figma specs',
      'Fully responsive for Desktop, Tablet, and Mobile screens',
      'Elementor Pro / Custom Widget architecture',
      'Clean CSS3 / HTML5 structure without code bloat',
      'Cross-browser testing & typography synchronization'
    ],
    features: ['Auto-layout mapping', 'Global style sync', 'Dynamic container Flexbox', 'Custom breakpoints']
  },
  {
    id: 'nocode-dev',
    title: 'No-Code Web Development & Customization',
    subtitle: 'Scalable & Dynamic Architecture',
    description: 'Custom WordPress development leveraging Crocoblock, ACF (Advanced Custom Fields), dynamic templates, and optimized custom post types without heavy coding overhead.',
    iconName: 'Code',
    popularFor: 'Business Websites & Directories',
    deliverables: [
      'Custom Post Types (CPT) & Custom Taxonomy setup',
      'Dynamic single page and archive templates',
      'Custom search, filter, and sorting systems',
      'Integration with third-party APIs and CRM webhooks',
      'Admin-friendly dashboard management'
    ],
    features: ['ACF Pro fields', 'Crocoblock JetEngine', 'Dynamic queries', 'Custom Gutenberg blocks']
  },
  {
    id: 'ecommerce-opt',
    title: 'E-commerce & WooCommerce Optimization',
    subtitle: 'High-Converting Online Stores',
    description: 'Building custom WooCommerce stores with frictionless checkout, payment gateway integrations, speed optimization, and inventory management.',
    iconName: 'ShoppingBag',
    popularFor: 'Retail Brands & Digital Sellers',
    deliverables: [
      'Custom WooCommerce product and cart pages',
      'Multiple payment gateway integrations (Stripe, PayPal, Local)',
      '1-Click express checkout & upsell funnels',
      'Inventory, coupon, and order tracking systems',
      'PageSpeed score optimization under 1.5s load'
    ],
    features: ['Custom cart drawers', 'Express Checkout', 'Product filter AJAX', 'Security hardening']
  },
  {
    id: 'lms-business',
    title: 'LMS & Business Website Creation',
    subtitle: 'Educational & Corporate Portals',
    description: 'Developing comprehensive Learning Management Systems (LMS) with course enrollment, quiz portals, certification generation, and corporate compliance engines.',
    iconName: 'GraduationCap',
    popularFor: 'EdTech, Academies & Corporate Entities',
    deliverables: [
      'TutorLMS / LearnDash course portal development',
      'Timed quizzes, auto-grading, and certificate issuance',
      'Student dashboard & instructor management',
      'Subscription membership tiers & paywalls',
      'SEO optimized structure for high organic search rankings'
    ],
    features: ['Quiz engines', 'Auto certificates', 'Membership tiers', 'Course analytics']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'webxhero',
    title: 'WebXHero',
    category: 'Agency',
    url: 'https://webxhero.com',
    displayUrl: 'webxhero.com',
    shortDescription: 'Digital agency web platform focusing on no-code solutions and modern web design.',
    fullDescription: 'Designed and developed a sleek, modern digital agency website for WebXHero. The platform serves as a showcase for high-converting no-code solutions, custom Elementor widgets, interactive portfolio cases, and client lead funnels.',
    client: 'WebXHero Agency',
    location: 'International',
    year: '2024',
    role: 'Lead WordPress & No-Code Developer',
    pageSpeedScore: 99,
    techStack: ['WordPress', 'Elementor Pro', 'Figma', 'Custom CSS', 'Speed Engine', 'RankMath SEO'],
    keyDeliverables: [
      'Figma to Elementor Pro pixel-perfect conversion',
      'Custom dark-theme agency aesthetic',
      'Interactive case study showcase modal',
      'Core Web Vitals optimized (0.8s LCP)'
    ],
    testimonial: {
      quote: 'MD Shahid converted our complex Figma design into a blistering fast WordPress site. His attention to detail and Elementor mastery is unmatched.',
      author: 'Design Lead',
      role: 'WebXHero'
    },
    accentColor: '#a2ba92'
  },
  {
    id: 'camsprep',
    title: 'CAMSPrep Platform',
    category: 'LMS',
    url: 'https://camsprep.com',
    displayUrl: 'camsprep.com',
    shortDescription: 'Comprehensive mock test, certification, and compliance learning platform.',
    fullDescription: 'A robust EdTech compliance platform built for financial certification candidates. Features timed practice exams, detailed question rationale breakdowns, student progress tracking, automated scoring, and subscription access.',
    client: 'Camsprep LLC',
    location: 'USA',
    year: '2024 - 2025',
    role: 'Head of Operations & Lead Developer',
    pageSpeedScore: 98,
    techStack: ['WordPress', 'TutorLMS / Custom Quiz Engine', 'Elementor Pro', 'WooCommerce', 'Stripe API'],
    keyDeliverables: [
      'Timed online exam simulator engine',
      'Automated subscription renewal via WooCommerce',
      'Student analytics and performance reports',
      'High-security question bank protection'
    ],
    testimonial: {
      quote: 'Shahid led the technical development and operations seamlessly. Our students love the fast and intuitive exam portal.',
      author: 'CEO',
      role: 'Camsprep LLC, USA'
    },
    accentColor: '#8ea87e'
  },
  {
    id: 'handyman-sg',
    title: 'Handyman Services SG',
    category: 'E-commerce',
    url: 'https://handymanservicesg.net',
    displayUrl: 'handymanservicesg.net',
    shortDescription: 'High-conversion business website with optimized service structure for Singapore market.',
    fullDescription: 'Developed a high-converting local service portal tailored for Singapore. Built with clear service callouts, instant WhatsApp lead triggers, service quote estimators, and mobile-first responsive architecture.',
    client: 'Handyman Services Singapore',
    location: 'Singapore',
    year: '2023 - 2024',
    role: 'WordPress Website Designer & Developer',
    pageSpeedScore: 99,
    techStack: ['WordPress', 'Elementor Pro', 'Schema Markup', 'WhatsApp API', 'Local SEO'],
    keyDeliverables: [
      'Mobile-optimized instant service booking funnel',
      'Local SEO Schema integration for Singapore rankings',
      'Interactive service pricing estimator',
      'Click-to-call & WhatsApp integration'
    ],
    accentColor: '#95b184'
  },
  {
    id: 'litonmiah-portfolio',
    title: 'Liton Miah Portfolio',
    category: 'Portfolio',
    url: 'https://mdlitonmiah.com',
    displayUrl: 'mdlitonmiah.com',
    shortDescription: 'Modern, fast-loading personal showcase portfolio.',
    fullDescription: 'A custom personal brand website designed to highlight creative projects, client testimonials, and professional achievements with dark mode minimalist visual design.',
    client: 'MD Liton Miah',
    location: 'Bangladesh',
    year: '2024',
    role: 'UI/UX & WordPress Developer',
    pageSpeedScore: 100,
    techStack: ['WordPress', 'Elementor Pro', 'Figma', 'Micro-animations', 'SVG Assets'],
    keyDeliverables: [
      'Minimalist dark theme portfolio architecture',
      'Interactive project gallery',
      'Lightweight script optimization for 100/100 PageSpeed',
      'Custom contact funnel'
    ],
    accentColor: '#a2ba92'
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'WordPress Developer',
    company: 'Times IT',
    period: '2023 - Present',
    location: 'Sylhet, Bangladesh',
    type: 'Full-time / Agency',
    responsibilities: [
      'Building responsive, scalable client websites using WordPress and Elementor Pro.',
      'Translating client Figma and Adobe XD prototypes into pixel-perfect, mobile-friendly themes.',
      'Optimizing website performance, achieving 90+ Google PageSpeed Insights scores across mobile and desktop.',
      'Maintaining site security, core updates, and database optimization for international clients.'
    ],
    technologies: ['WordPress', 'Elementor Pro', 'Figma', 'ACF', 'WooCommerce', 'CSS3/HTML5']
  },
  {
    id: 'exp-2',
    role: 'Head of Operations',
    company: 'Camsprep LLC',
    period: '2024 - 2025',
    location: 'USA (Remote)',
    type: 'Full-time',
    responsibilities: [
      'Oversaw end-to-end operational and technical management of the camsprep.com compliance portal.',
      'Managed platform infrastructure, LMS course uploads, timed quiz configurations, and payment flows.',
      'Optimized user onboarding and automated student support workflows.',
      'Collaborated with US stakeholders to drive content quality, site uptime, and subscription growth.'
    ],
    technologies: ['WordPress', 'TutorLMS', 'WooCommerce', 'Stripe', 'Operations Management', 'SEO']
  },
  {
    id: 'exp-3',
    role: 'WordPress Website Designer',
    company: 'Foundation Other Chance Commission',
    period: '2023 - 2024',
    location: 'Saudi Arabia (Remote)',
    type: 'Contract',
    responsibilities: [
      'Designed and deployed multilingual, accessible organization web portals.',
      'Integrated donation systems, volunteer registration forms, and media galleries.',
      'Ensured full mobile responsiveness, RTL language compatibility, and security compliance.'
    ],
    technologies: ['WordPress', 'Elementor Pro', 'WPML Multilingual', 'Donation Gateways', 'RTL CSS']
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'CMS & No-Code',
    skills: [
      { name: 'WordPress Core', level: 'Expert', isCore: true },
      { name: 'Elementor Pro', level: 'Expert', isCore: true },
      { name: 'Crocoblock / JetEngine', level: 'Advanced', isCore: true },
      { name: 'WooCommerce', level: 'Advanced', isCore: true },
      { name: 'TutorLMS / LearnDash', level: 'Advanced' },
      { name: 'Gutenberg Blocks', level: 'Advanced' }
    ]
  },
  {
    category: 'Design & Handoff',
    skills: [
      { name: 'Figma to WP Conversion', level: 'Expert', isCore: true },
      { name: 'Adobe XD Handoff', level: 'Advanced' },
      { name: 'UI/UX Principles', level: 'Advanced' },
      { name: 'Responsive Breakpoints', level: 'Expert', isCore: true },
      { name: 'Design Tokens', level: 'Advanced' }
    ]
  },
  {
    category: 'Web Tech & Code',
    skills: [
      { name: 'HTML5 & Semantic Structure', level: 'Expert' },
      { name: 'CSS3 / Flexbox / Grid', level: 'Expert' },
      { name: 'JavaScript (ES6)', level: 'Intermediate' },
      { name: 'PHP Basics & Custom Hooks', level: 'Intermediate' },
      { name: 'Tailwind CSS', level: 'Advanced' }
    ]
  },
  {
    category: 'Performance & SEO',
    skills: [
      { name: 'Core Web Vitals Optimization', level: 'Expert', isCore: true },
      { name: 'Google PageSpeed (95%+)', level: 'Expert', isCore: true },
      { name: 'RankMath & Yoast SEO', level: 'Advanced' },
      { name: 'Image Compression & WebP', level: 'Expert' },
      { name: 'Database Cleanup & Cache', level: 'Advanced' }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Liam Henderson',
    role: 'Founder & Creative Lead',
    company: 'WebXHero Agency',
    rating: 5,
    quote: 'CNL Shahid transformed our Figma design frames into an exceptionally fast Elementor Pro site. His attention to pixel-perfect alignment, responsive breakpoints, and clean DOM structure is top-tier.',
    projectTitle: 'WebXHero Agency Site',
    category: 'Figma to WordPress',
    location: 'United Kingdom'
  },
  {
    id: 'test-2',
    name: 'Marcus Vance',
    role: 'Director of Technology',
    company: 'Camsprep LLC',
    rating: 5,
    quote: 'Shahid managed our LMS infrastructure with flawless execution. He configured course modules, timed quizzes, and payment gateways while maintaining 99+ PageSpeed scores. A highly reliable professional!',
    projectTitle: 'Camsprep LMS Portal',
    category: 'LMS & Business Site',
    location: 'United States'
  },
  {
    id: 'test-3',
    name: 'Dr. Tariq Al-Mansoor',
    role: 'Program Director',
    company: 'Foundation Other Chance Commission',
    rating: 5,
    quote: 'An outstanding WordPress specialist. Shahid delivered our multilingual organization portal on schedule with custom donation integrations and flawless RTL language support.',
    projectTitle: 'Multilingual Charity Portal',
    category: 'CMS & Custom WP',
    location: 'Saudi Arabia'
  },
  {
    id: 'test-4',
    name: 'Elena Rostova',
    role: 'E-Commerce Lead',
    company: 'Velour Store',
    rating: 5,
    quote: 'Our WooCommerce store load speeds dropped below 1.2 seconds after Shahid optimized our checkout funnel and assets. His custom dynamic templates made managing 500+ SKUs completely painless.',
    projectTitle: 'Custom WooCommerce Store',
    category: 'WooCommerce Optimization',
    location: 'Estonia'
  },
  {
    id: 'test-5',
    name: 'David Kowalski',
    role: 'Head of Growth',
    company: 'Apex Digital Studio',
    rating: 5,
    quote: 'We hired Shahid for Core Web Vitals optimization across 12 client sites. Every single site jumped from red/amber to 95+ mobile performance scores without breaking any custom layouts or analytics tags.',
    projectTitle: 'Multi-Site Speed Audit',
    category: 'Speed & Core Web Vitals',
    location: 'Australia'
  },
  {
    id: 'test-6',
    name: 'Sarah Jenkins',
    role: 'Product Marketing Manager',
    company: 'BrightMind SaaS',
    rating: 5,
    quote: 'Migrating our landing pages from Webflow to WordPress Gutenberg was seamless. Shahid preserved all animations, created reusable custom blocks for our team, and drastically simplified our publishing pipeline.',
    projectTitle: 'SaaS Marketing Hub',
    category: 'Gutenberg & Migration',
    location: 'Canada'
  },
  {
    id: 'test-7',
    name: 'Ahmed Hassan',
    role: 'Operations Director',
    company: 'Emirates Consulting Group',
    rating: 5,
    quote: 'Shahid integrated our custom CRM webhooks directly into our WordPress lead forms with instant email notifications and automated routing. Fast communication, zero downtime, and exceptional quality.',
    projectTitle: 'CRM & Custom Webhook Setup',
    category: 'API & Form Integrations',
    location: 'United Arab Emirates'
  },
  {
    id: 'test-8',
    name: 'Claire Dubois',
    role: 'Brand Manager',
    company: 'Lumière Atelier',
    rating: 5,
    quote: 'Working with Shahid felt like having a senior in-house WordPress architect. He solved complex layout glitches across Safari iOS and implemented custom WPML language switchers perfectly.',
    projectTitle: 'Lumière Luxury Portal',
    category: 'Custom Theme & WPML',
    location: 'France'
  }
];

