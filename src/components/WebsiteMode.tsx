import React, { useState } from 'react';
import { SlideData, TextMode } from '../types';
import { SlideCanvas } from './SlideCanvas';
import {
  ArrowUp,
  Send,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

interface WebsiteModeProps {
  slides: SlideData[];
  textMode: TextMode;
  onOpenContact: () => void;
  activeSection?: string;
  onActiveSectionChange?: (slug: string) => void;
}

export const WebsiteMode: React.FC<WebsiteModeProps> = ({
  slides,
  textMode,
  onOpenContact,
  activeSection: externalActiveSection,
  onActiveSectionChange
}) => {
  const [internalActiveSection, setInternalActiveSection] = useState<string>('cover');
  const activeSection = externalActiveSection || internalActiveSection;
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    project: 'Brand Identity',
    message: ''
  });

  // Track active section on scroll
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 240;
      for (const slide of slides) {
        const el = document.getElementById(slide.slug);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setInternalActiveSection(slide.slug);
            if (onActiveSectionChange) {
              onActiveSectionChange(slide.slug);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [slides, onActiveSectionChange]);

  const scrollToSection = (slug: string) => {
    const el = document.getElementById(slug);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', phone: '', project: 'Brand Identity', message: '' });
    }, 4000);
  };

  return (
    <div className="relative w-full">
      {/* Floating Section Anchor Nav Pill on Desktop */}
      <div className="hidden 2xl:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 flex-col space-y-2.5 bg-[#EFE8E1]/90 backdrop-blur-md p-3 rounded-full border border-[#DDD3C9] shadow-lg">
        {slides.map((s, idx) => {
          const isActive = activeSection === s.slug;
          return (
            <button
              key={s.id}
              onClick={() => scrollToSection(s.slug)}
              className="group relative flex items-center justify-end cursor-pointer"
              title={`${idx + 1}. ${s.title}`}
            >
              {/* Tooltip on hover */}
              <span className="absolute right-7 bg-[#4A3528] text-[#F8F5F0] text-xs px-2.5 py-1 rounded-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-sm font-['Plus_Jakarta_Sans']">
                {s.title}
              </span>
              <span
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'bg-[#4A3528] scale-125 ring-2 ring-[#4A3528]/30'
                    : 'bg-[#B5A599] hover:bg-[#7D6859]'
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* Render All Slides sequentially */}
      <div className="flex flex-col w-full">
        {slides.map((slide) => (
          <section
            key={slide.id}
            id={slide.slug}
            className="w-full relative scroll-mt-24 sm:scroll-mt-28"
          >
            <SlideCanvas
              slide={slide}
              textMode={textMode}
              inPresentation={false}
              onOpenContact={onOpenContact}
            />
          </section>
        ))}
      </div>

      {/* Interactive Project Inquiry & Proposal Section */}
      <section id="inquiry-form" className="bg-[#EFE8E1] py-16 md:py-24 px-6 border-t border-[#DDD3C9]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-3 mb-10">
            <span className="font-['Alex_Brush'] text-4xl sm:text-5xl text-[#4A3528] block">
              Direct Project Brief
            </span>
            <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl font-bold text-[#4A3528]">
              Ready to Collaborate?
            </h2>
            <p className="font-['Plus_Jakarta_Sans'] text-[#6B5749] max-w-lg mx-auto text-sm sm:text-base">
              Share your project vision, timeline, or inquiries below. You will receive a bespoke reply via phone or WhatsApp (+91 7378671779).
            </p>
          </div>

          <div className="bg-[#F8F5F0] rounded-3xl p-6 sm:p-10 border border-[#DACDC3] shadow-sm">
            {formSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#4A3528] text-[#F8F5F0] mx-auto flex items-center justify-center">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#4A3528]">
                  Inquiry Transmitted with Appreciation
                </h3>
                <p className="font-['Plus_Jakarta_Sans'] text-[#6B5749] max-w-md mx-auto text-sm">
                  Thank you for reaching out, {formData.name || 'friend'}. Salik will review your project details and connect via Call or WhatsApp (+91 7378671779) shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-['Plus_Jakarta_Sans'] text-xs font-semibold uppercase tracking-wider text-[#5A4537] mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Helena Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#F3ECE5] border border-[#DDD3C9] focus:border-[#4A3528] rounded-xl px-4 py-3 text-[#4A3528] text-sm focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-['Plus_Jakarta_Sans'] text-xs font-semibold uppercase tracking-wider text-[#5A4537] mb-2">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 7378671779"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#F3ECE5] border border-[#DDD3C9] focus:border-[#4A3528] rounded-xl px-4 py-3 text-[#4A3528] text-sm focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-['Plus_Jakarta_Sans'] text-xs font-semibold uppercase tracking-wider text-[#5A4537] mb-2">
                    Project Focus
                  </label>
                  <select
                    value={formData.project}
                    onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                    className="w-full bg-[#F3ECE5] border border-[#DDD3C9] focus:border-[#4A3528] rounded-xl px-4 py-3 text-[#4A3528] text-sm focus:outline-none transition-colors"
                  >
                    <option value="Brand Identity">Brand Identity & Visual System</option>
                    <option value="Art Direction">Art Direction & Photo Shoot</option>
                    <option value="Editorial & Print">Editorial Layout & Print Production</option>
                    <option value="Packaging">Bespoke Packaging Design</option>
                    <option value="General Collaboration">General Creative Partnership</option>
                  </select>
                </div>

                <div>
                  <label className="block font-['Plus_Jakarta_Sans'] text-xs font-semibold uppercase tracking-wider text-[#5A4537] mb-2">
                    Project Summary & Timeline *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Briefly describe your objectives, creative scope, and ideal completion window..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#F3ECE5] border border-[#DDD3C9] focus:border-[#4A3528] rounded-xl px-4 py-3 text-[#4A3528] text-sm focus:outline-none transition-colors resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <span className="text-xs text-[#8C7565] flex items-center gap-1.5">
                    <Sparkles size={14} /> Direct response via +91 7378671779
                  </span>
                  <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                    <a
                      href={`https://wa.me/917378671779?text=${encodeURIComponent(
                        `Hello Salik, I would like to inquire about a project: ${
                          formData.project
                        }. Name: ${formData.name || 'Client'}. ${formData.message}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#25D366] text-white hover:bg-[#20BD5A] px-6 py-3.5 rounded-full font-['Plus_Jakarta_Sans'] text-sm font-semibold tracking-wide transition-all shadow-xs active:scale-98"
                    >
                      <span>Send via WhatsApp</span>
                    </a>
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#4A3528] text-[#F8F5F0] hover:bg-[#32231A] px-7 py-3.5 rounded-full font-['Plus_Jakarta_Sans'] text-sm font-semibold tracking-wide transition-all shadow-md active:scale-98 cursor-pointer"
                    >
                      <span>Submit Inquiry</span>
                      <Send size={16} />
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Floating Back to Top Button */}
      <button
        onClick={scrollToTop}
        title="Return to top of portfolio"
        className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-[#4A3528] text-[#F8F5F0] shadow-xl hover:bg-[#32231A] hover:scale-105 active:scale-95 transition-all flex items-center justify-center border border-[#6B5749]"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
};
