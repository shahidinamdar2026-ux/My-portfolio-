import React, { useState } from 'react';
import {
  Phone,
  Menu,
  X,
  Sparkles
} from 'lucide-react';

interface TopNavProps {
  activeSection?: string;
  onNavigateSection?: (slug: string) => void;
  onOpenContact: () => void;
}

const NAV_LINKS = [
  { label: 'About', slug: 'about-me' },
  { label: 'Vision', slug: 'vision-and-mission' },
  { label: 'Education', slug: 'education' },
  { label: 'Skills', slug: 'skill' },
  { label: 'Experience', slug: 'experience' },
  { label: 'Contact', slug: 'lets-collaborate' },
  { label: "Work Together", slug: 'lets-work-together' },
];

export const TopNav: React.FC<TopNavProps> = ({
  activeSection = 'cover',
  onNavigateSection,
  onOpenContact
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (slug: string) => {
    setIsMobileMenuOpen(false);
    if (onNavigateSection) {
      onNavigateSection(slug);
    } else {
      const el = document.getElementById(slug);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="fixed top-3 sm:top-5 left-0 right-0 z-50 px-3 sm:px-6 pointer-events-none transition-all">
      <header className="max-w-5xl lg:max-w-6xl mx-auto pointer-events-auto rounded-2xl sm:rounded-full bg-[#271B14]/95 backdrop-blur-md border border-[#443023] shadow-2xl shadow-[#1A1009]/30 px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-3 text-[#FAF5EE]">
        {/* Brand signature */}
        <button
          onClick={() => handleNavClick('cover')}
          className="flex items-center space-x-2.5 text-left group cursor-pointer"
        >
          <div className="w-8 h-8 rounded-full bg-[#E8DFD7] text-[#271B14] flex items-center justify-center font-['Playfair_Display'] font-bold text-sm shadow-xs group-hover:scale-105 transition-transform">
            S
          </div>
          <div>
            <span className="font-['Playfair_Display'] font-bold text-sm sm:text-base text-[#FAF5EE] tracking-tight block leading-tight">
              Salik
            </span>
            <span className="font-['Plus_Jakarta_Sans'] text-[9px] sm:text-[10px] text-[#C4B2A3] tracking-widest uppercase block -mt-0.5">
              Creative Portfolio
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links (Center) */}
        <nav className="hidden lg:flex items-center space-x-1 bg-[#1C130E]/70 px-2 py-1 rounded-full border border-[#3C2A1E]">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.slug;
            return (
              <button
                key={link.slug}
                onClick={() => handleNavClick(link.slug)}
                className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#E8DFD7] text-[#271B14] shadow-xs'
                    : 'text-[#D0BFB1] hover:text-[#FFFFFF] hover:bg-[#38271E]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Action Controls (Right) */}
        <div className="flex items-center space-x-2">
          {/* Quick Connect Button */}
          <button
            onClick={onOpenContact}
            className="bg-[#E8DFD7] hover:bg-[#FAF6F0] text-[#271B14] px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold tracking-wide flex items-center space-x-1.5 transition-all shadow-xs active:scale-95 cursor-pointer"
          >
            <Phone size={13} />
            <span>Connect</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-full bg-[#38271E] text-[#FAF5EE] border border-[#4A3528] hover:bg-[#483428] transition-colors cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Floating Mobile Slide-down Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="max-w-5xl mx-auto pointer-events-auto mt-2.5 rounded-2xl bg-[#271B14]/98 backdrop-blur-lg border border-[#443023] p-4 shadow-2xl text-[#FAF5EE] animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex items-center justify-between px-1 pb-2 border-b border-[#3C2A1E] mb-2.5">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#B5A192]">
              Navigate Sections
            </span>
            <span className="text-[10px] text-[#A69385] flex items-center gap-1">
              <Sparkles size={10} /> Salik Portfolio
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.slug;
              return (
                <button
                  key={link.slug}
                  onClick={() => handleNavClick(link.slug)}
                  className={`px-3 py-2.5 rounded-xl text-xs font-medium text-left transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#E8DFD7] text-[#271B14] font-bold'
                      : 'bg-[#1C130E]/80 text-[#D4C3B5] hover:bg-[#38271E] hover:text-[#FFFFFF]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="mt-3 pt-3 border-t border-[#3C2A1E]">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2.5 px-4 rounded-xl bg-[#E8DFD7] text-xs font-bold text-[#271B14] flex items-center justify-center space-x-2 shadow-xs hover:bg-[#FAF6F0] active:scale-98 transition-all cursor-pointer"
            >
              <Phone size={13} />
              <span>Connect (+91 7378671779)</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
