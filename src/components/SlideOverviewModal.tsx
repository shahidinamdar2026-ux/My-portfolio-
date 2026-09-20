import React from 'react';
import { SlideData } from '../types';
import { X, Sparkles } from 'lucide-react';

interface SlideOverviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  slides: SlideData[];
  activeSlideIndex: number;
  onSelectSlide: (index: number) => void;
}

export const SlideOverviewModal: React.FC<SlideOverviewModalProps> = ({
  isOpen,
  onClose,
  slides,
  activeSlideIndex,
  onSelectSlide
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-5xl bg-[#F8F5F0] rounded-3xl p-6 sm:p-8 md:p-10 border border-[#DACDC3] shadow-2xl max-h-[90vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-[#EAE2D8]">
          <div className="flex items-center space-x-3">
            <span className="font-['Alex_Brush'] text-3xl sm:text-4xl text-[#4A3528]">
              Portfolio Directory
            </span>
            <span className="hidden sm:inline-block font-['Plus_Jakarta_Sans'] text-xs font-semibold uppercase tracking-widest text-[#8C7565] bg-[#EFE8E1] px-3 py-1 rounded-full">
              {slides.length} Curated Sections
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[#EFE8E1] hover:bg-[#E2D6CA] text-[#4A3528] flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close directory"
          >
            <X size={20} />
          </button>
        </div>

        {/* Section Grid */}
        <div className="flex-1 overflow-y-auto py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
          {slides.map((slide, idx) => {
            const isActive = idx === activeSlideIndex;
            return (
              <button
                key={slide.id}
                onClick={() => {
                  onSelectSlide(idx);
                  onClose();
                }}
                className={`group relative flex flex-col text-left rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'ring-2 ring-[#4A3528] border-transparent shadow-lg bg-[#EFE8E1]'
                    : 'border-[#DACDC3] bg-[#FAF7F3] hover:border-[#4A3528]/50 hover:shadow-md'
                }`}
              >
                {/* Thumbnail Image Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#E8DFD7]">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-[#4A3528]/85 text-[#F8F5F0] text-[11px] font-bold px-2 py-0.5 rounded backdrop-blur-xs">
                    Section {String(idx + 1).padStart(2, '0')}
                  </div>
                  {isActive && (
                    <div className="absolute top-2.5 right-2.5 bg-[#4A3528] text-[#F8F5F0] text-[10px] font-medium px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Sparkles size={10} /> In View
                    </div>
                  )}
                </div>

                {/* Meta info */}
                <div className="p-4 flex flex-col space-y-1">
                  <span className="font-['Playfair_Display'] font-bold text-base sm:text-lg text-[#4A3528] group-hover:text-[#2A1D15] transition-colors">
                    {slide.title}
                  </span>
                  <span className="font-['Plus_Jakarta_Sans'] text-xs text-[#8C7565]">
                    {slide.themeTag || 'Editorial'}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Footer info */}
        <div className="pt-4 border-t border-[#EAE2D8] flex items-center justify-between text-xs text-[#8C7565]">
          <span>Select any section to scroll directly</span>
          <span className="font-['Playfair_Display'] italic">Salik Creative Portfolio</span>
        </div>
      </div>
    </div>
  );
};
