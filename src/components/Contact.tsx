import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, Globe, MapPin, Send, Copy, Check, MessageSquare, GraduationCap, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Contact: React.FC = () => {
  const { language, t } = useLanguage();
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    serviceType: 'Figma to WordPress / Elementor Conversion',
    budget: '$500 - $1,000',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setIsSubmitted(true);
      } else {
        setErrorMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setErrorMessage('Network error. Please try again or email directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[var(--bg-surface-strong)] border-t border-[var(--border-color)] relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4 reveal">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--bg-surface)] border border-[var(--border-color)] text-xs font-semibold text-[var(--accent-color)] uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            {t.contact.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
            {t.contact.title}
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)]">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6 reveal stagger-1">
            {/* Contact Details Card */}
            <div className="bg-[var(--bg-surface)] rounded-[20px] p-6 sm:p-8 border border-[var(--border-color)] space-y-6 clova-card-shadow">
              <h3 className="text-xl font-bold text-[var(--text-primary)] pb-4 border-b border-[var(--border-color)]">
                {t.contact.directChannels}
              </h3>

              {/* Email item */}
              <div className="flex items-center justify-between gap-3 p-4 rounded-[12px] bg-[var(--bg-surface-strong)] border border-[var(--border-color)] group">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-[8px] bg-[var(--bg-surface)] text-[var(--accent-color)] border border-[var(--border-color)] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-xs text-[var(--text-secondary)] block font-medium">Email Address</span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm font-semibold text-[var(--text-primary)] hover:text-[var(--accent-color)] transition-colors truncate block"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  id="copy-email-btn"
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                  className="p-2 rounded-[8px] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-color)] transition-colors cursor-pointer"
                  title="Copy email address"
                >
                  {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone item */}
              <div className="flex items-center justify-between gap-3 p-4 rounded-[12px] bg-[var(--bg-surface-strong)] border border-[var(--border-color)] group">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-[8px] bg-[var(--bg-surface)] text-[var(--accent-color)] border border-[var(--border-color)] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-xs text-[var(--text-secondary)] block font-medium">Phone & WhatsApp</span>
                    <a
                      href={PERSONAL_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-[var(--text-primary)] hover:text-[var(--accent-color)] transition-colors truncate block"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>
                <button
                  id="copy-phone-btn"
                  onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                  className="p-2 rounded-[8px] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-color)] transition-colors cursor-pointer"
                  title="Copy phone number"
                >
                  {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Website item */}
              <div className="flex items-center justify-between gap-3 p-4 rounded-[12px] bg-[var(--bg-surface-strong)] border border-[var(--border-color)] group">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-[8px] bg-[var(--bg-surface)] text-[var(--accent-color)] border border-[var(--border-color)] flex items-center justify-center shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-xs text-[var(--text-secondary)] block font-medium">Official Website</span>
                    <a
                      href={`https://${PERSONAL_INFO.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-[var(--text-primary)] hover:text-[var(--accent-color)] transition-colors truncate block"
                    >
                      {PERSONAL_INFO.website}
                    </a>
                  </div>
                </div>
                <a
                  href={`https://${PERSONAL_INFO.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-[8px] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-color)] transition-colors cursor-pointer"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              {/* Location & Academic Badge */}
              <div className="p-4 rounded-[12px] bg-[var(--bg-surface-strong)] border border-[var(--border-color)] space-y-3">
                <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                  <MapPin className="w-4 h-4 text-[var(--accent-color)]" />
                  <span>{language === 'bn' ? 'অবস্থান:' : 'Location:'} <strong className="text-[var(--text-primary)]">{language === 'bn' ? 'সিলেট, বাংলাদেশ' : PERSONAL_INFO.location}</strong></span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                  <GraduationCap className="w-4 h-4 text-[var(--accent-color)]" />
                  <span>{language === 'bn' ? 'শিক্ষা:' : 'Education:'} <strong className="text-[var(--text-primary)]">{language === 'bn' ? 'ব্যাচেলর অফ বিজনেস স্টাডিজ (বিবিএস)' : PERSONAL_INFO.education}</strong></span>
                </div>
              </div>
            </div>

            {/* Instant WhatsApp Quick CTA */}
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-6 rounded-full bg-[var(--bg-surface)] hover:bg-emerald-500/10 hover:border-emerald-500/30 text-[var(--text-primary)] border border-[var(--border-color)] text-sm font-semibold transition-all flex items-center justify-center gap-3 cursor-pointer"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>{t.contact.whatsappBtn}</span>
            </a>
          </div>

          {/* Right Column: Project Inquirer Form (7 cols) */}
          <div className="lg:col-span-7 reveal stagger-2">
            <div className="bg-[var(--bg-surface)] rounded-[20px] p-6 sm:p-8 border border-[var(--border-color)] clova-card-shadow">
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">{t.contact.formTitle}</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-6">
                {t.contact.formSubtitle}
              </p>

              {isSubmitted ? (
                <div className="p-6 rounded-[12px] bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-black flex items-center justify-center mx-auto text-xl font-bold">
                    ✓
                  </div>
                  <h4 className="text-xl font-bold text-[var(--text-primary)]">Inquiry Received!</h4>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Thank you, {formState.name || 'friend'}. I have received your request and will follow up shortly at {formState.email}.
                  </p>
                </div>
              ) : (
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
                  <input type="hidden" name="access_key" value="d8d864d7-bec4-43fd-a392-f84bc8ef4700" />
                  <input type="hidden" name="subject" value="New Portfolio Project Inquiry" />
                  <input type="hidden" name="from_name" value="Shahid Ahmed Portfolio" />

                  {errorMessage && (
                    <div className="p-4 rounded-[8px] bg-red-500/10 border border-red-500/30 text-red-500 text-sm font-medium">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-1.5">
                        {t.contact.nameLabel}
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder={language === 'bn' ? 'যেমন: আরিফ আহমেদ' : 'e.g. Alex Morgan'}
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-[8px] bg-[var(--bg-surface-strong)] border border-[var(--border-color)] text-[var(--text-primary)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)]/30 focus:border-[var(--accent-color)] transition-all duration-300"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-1.5">
                        {t.contact.emailLabel}
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="alex@company.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-[8px] bg-[var(--bg-surface-strong)] border border-[var(--border-color)] text-[var(--text-primary)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)]/30 focus:border-[var(--accent-color)] transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-1.5">
                        {t.contact.serviceLabel}
                      </label>
                      <select
                        name="project_type"
                        value={formState.serviceType}
                        onChange={(e) => setFormState({ ...formState, serviceType: e.target.value })}
                        className="w-full px-4 py-3 rounded-[8px] bg-[var(--bg-surface-strong)] border border-[var(--border-color)] text-[var(--text-primary)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)]/30 focus:border-[var(--accent-color)] transition-all duration-300"
                      >
                        <option>{language === 'bn' ? 'ফিগমা থেকে ওয়ার্ডপ্রেস / এলিমেন্টর কনভার্সন' : 'Figma to WordPress / Elementor Conversion'}</option>
                        <option>{language === 'bn' ? 'নো-কোড ওয়েব ডেভেলপমেন্ট ও কাস্টমাইজেশন' : 'No-Code Web Development & Customization'}</option>
                        <option>{language === 'bn' ? 'ই-কমার্স ও উকমার্স অপ্টিমাইজেশন' : 'E-commerce & WooCommerce Optimization'}</option>
                        <option>{language === 'bn' ? 'এলএমএস ও বিজনেস ওয়েবসাইট তৈরি' : 'LMS & Business Website Creation'}</option>
                        <option>{language === 'bn' ? 'পেজস্পিড ও এসইও সিকিউরিটি অডিট' : 'PageSpeed & SEO Security Audit'}</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-1.5">
                        {t.contact.budgetLabel}
                      </label>
                      <select
                        name="budget"
                        value={formState.budget}
                        onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-[8px] bg-[var(--bg-surface-strong)] border border-[var(--border-color)] text-[var(--text-primary)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)]/30 focus:border-[var(--accent-color)] transition-all duration-300"
                      >
                        <option>$300 - $500</option>
                        <option>$500 - $1,000</option>
                        <option>$1,000 - $2,500</option>
                        <option>$2,500+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-1.5">
                      {t.contact.messageLabel}
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder={language === 'bn' ? 'আপনার ডিজাইন ফাইল, প্রয়োজনীয় ফিচার বা পেজ সংখ্যা সংক্ষেপে বর্ণনা করুন...' : 'Describe your design specs, required features, page counts, or link to your Figma file...'}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-[8px] bg-[var(--bg-surface-strong)] border border-[var(--border-color)] text-[var(--text-primary)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)]/30 focus:border-[var(--accent-color)] transition-all duration-300 resize-none"
                    />
                  </div>

                  <button
                    id="submit-contact-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-full bg-[var(--accent-color)] text-black font-bold text-base hover:opacity-90 transition-all flex items-center justify-center gap-2 cursor-pointer accent-glow animate-pulseGlow cta-hover-lift disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>{isSubmitting ? (language === 'bn' ? 'বার্তা পাঠানো হচ্ছে...' : 'Sending Message...') : t.contact.sendBtn}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
