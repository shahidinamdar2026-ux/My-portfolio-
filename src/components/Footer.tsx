import React from 'react';
import { SlideData } from '../types';
import { SparkleStar } from './DecorativeAccents';
import { Heart } from 'lucide-react';

interface FooterProps {
  slides: SlideData[];
  onSelectSlide: (index: number) => void;
}

export const Footer: React.FC<FooterProps> = ({ slides, onSelectSlide }) => {
  return (
    <footer className="w-full bg-[#EDE4DB] border-t border-[#DACDC3] py-12 px-6 sm:px-10 text-[#4A3528]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand & Note */}
        <div className="flex flex-col items-center md:items-start space-y-2 text-center md:text-left">
          <div className="flex items-center space-x-2">
            <span className="font-['Playfair_Display'] font-bold text-xl text-[#4A3528]">
              Salik
            </span>
            <SparkleStar size={16} />
          </div>
          <p className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm text-[#7D6859] max-w-sm">
            Beige and Brown Minimalist Creative Portfolio adapted into an elegant mobile and desktop responsive web portfolio.
          </p>
        </div>

        {/* Slide quick directory */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 max-w-lg text-center">
          {slides.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => onSelectSlide(idx)}
              className="font-['Plus_Jakarta_Sans'] text-xs text-[#7D6859] hover:text-[#4A3528] hover:underline underline-offset-4 transition-colors"
            >
              {String(idx + 1).padStart(2, '0')}. {s.title}
            </button>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center md:text-right font-['Plus_Jakarta_Sans'] text-xs text-[#8C7565] space-y-1">
          <p>© {new Date().getFullYear()} Salik. All rights reserved.</p>
          <p className="text-[11px] text-[#A08C7E]">
            Designed with intentional minimalism & typographic harmony
          </p>
        </div>
      </div>
    </footer>
  );
};
