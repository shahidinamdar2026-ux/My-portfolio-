import React, { useState } from 'react';
import { SLIDES } from './data/slides';
import { TextMode, SlideData } from './types';
import { TopNav } from './components/TopNav';
import { WebsiteMode } from './components/WebsiteMode';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';

export default function App() {
  const [slides] = useState<SlideData[]>(SLIDES);
  const [textMode] = useState<TextMode>('editorial');
  const [activeSection, setActiveSection] = useState<string>('cover');
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);

  const handleNavigateSection = (slug: string) => {
    setActiveSection(slug);
    const el = document.getElementById(slug);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectSlide = (index: number) => {
    if (slides[index]) {
      handleNavigateSection(slides[index].slug);
    }
  };

  // Contact info fallback
  const contactInfo = slides.find((s) => s.contact)?.contact || {
    website: 'www.reallygreatsite.com',
    instagram: '@reallygreatsite',
    phone: '+91 7378671779',
    whatsapp: '+91 7378671779'
  };

  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#4A3528] flex flex-col font-['Plus_Jakarta_Sans'] antialiased selection:bg-[#C8B6A6] selection:text-[#32231A]">
      {/* Top Floating Header Navigation */}
      <TopNav
        activeSection={activeSection}
        onNavigateSection={handleNavigateSection}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main Scrollable Portfolio Website */}
      <main className="flex-1 w-full">
        <WebsiteMode
          slides={slides}
          textMode={textMode}
          onOpenContact={() => setIsContactOpen(true)}
          activeSection={activeSection}
          onActiveSectionChange={setActiveSection}
        />
      </main>

      {/* Footer */}
      <Footer slides={slides} onSelectSlide={handleSelectSlide} />

      {/* Direct Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        contact={contactInfo}
      />
    </div>
  );
}
