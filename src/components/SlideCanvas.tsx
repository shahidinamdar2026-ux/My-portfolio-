import React from 'react';
import { SlideData, TextMode } from '../types';
import {
  SparkleStar,
  OrganicBlobTopLeft,
  OrganicBlobBottomRight,
  TopoLinesBottomLeft,
  TopoLinesBottomRight,
  GeometricBlockTopRight,
  GeometricBlockTopLeft,
  ArchitecturalFrame,
  SmartphoneMockup
} from './DecorativeAccents';
import { Globe, MessageCircle, Instagram, Phone, Copy, Check, MessageSquare } from 'lucide-react';

interface SlideCanvasProps {
  slide: SlideData;
  textMode?: TextMode;
  inPresentation?: boolean;
  onOpenContact?: () => void;
}

export const SlideCanvas: React.FC<SlideCanvasProps> = ({
  slide,
  textMode = 'editorial',
  inPresentation = false,
  onOpenContact
}) => {
  const [copiedItem, setCopiedItem] = React.useState<string | null>(null);

  const handleCopy = (text: string, label: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2200);
  };

  const isDoubleColumn = slide.layout === 'double-column';
  const isPhoneMockup = slide.layout === 'phone-mockup';
  const isThankYou = slide.layout === 'thank-you';
  const isCover = slide.layout === 'cover';
  const isWorkTogether = slide.layout === 'work-together';

  // Choose content based on mode
  const paragraphs =
    textMode === 'original' && slide.contentOriginal.length > 0
      ? slide.contentOriginal
      : slide.contentEditorial;

  const items =
    textMode === 'original' && slide.itemsOriginal
      ? slide.itemsOriginal
      : slide.itemsEditorial || [];

  return (
    <div
      className={`relative w-full bg-[#F8F5F0] overflow-hidden text-[#4A3528] flex flex-col justify-center ${
        isCover
          ? 'pt-28 sm:pt-36 md:pt-40 lg:pt-44 pb-16 sm:pb-20 md:pb-24 border-b border-[#EAE2D8]'
          : 'py-16 sm:py-20 md:py-24 lg:py-28 border-b border-[#EAE2D8]'
      }`}
    >
      {/* BACKGROUND DECORATIONS */}
      {/* Blob top left: present on most slides */}
      {!isThankYou && <OrganicBlobTopLeft />}
      {isThankYou && <OrganicBlobTopLeft className="opacity-70" />}

      {/* Top right geometric color block */}
      {!isThankYou && !isWorkTogether && <GeometricBlockTopRight />}
      {(isThankYou || isWorkTogether) && <GeometricBlockTopLeft />}

      {/* Bottom right organic blob for cover & thank you */}
      {(isCover || isThankYou || isWorkTogether) && <OrganicBlobBottomRight />}

      {/* Topographic line waves */}
      <TopoLinesBottomLeft />
      <TopoLinesBottomRight />

      {/* Decorative Floating Sparkle Stars */}
      <div className="absolute top-12 left-1/2 -translate-x-12 hidden md:block pointer-events-none opacity-80">
        <SparkleStar size={24} />
      </div>
      <div className="absolute bottom-10 left-1/3 hidden md:block pointer-events-none opacity-80">
        <SparkleStar size={22} />
      </div>
      <div className="absolute top-20 right-16 hidden lg:block pointer-events-none opacity-60">
        <SparkleStar size={18} />
      </div>

      {/* INNER CONTENT GRID */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-20 py-4 sm:py-8">
        {/* Section number tag */}
        <div className="mb-4 inline-flex items-center space-x-2 text-[11px] sm:text-xs uppercase tracking-widest text-[#8C7565] font-semibold bg-[#EFE8E1]/80 px-3 py-1 rounded-full border border-[#DDD3C9]/70">
          <span>{String(slide.number).padStart(2, '0')}</span>
          <span>/</span>
          <span>10</span>
          <span className="text-[#B5A599]">•</span>
          <span>{slide.title}</span>
        </div>

        {/* LAYOUT 1: COVER SLIDE */}
        {isCover && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left: Title & Badge */}
            <div className="md:col-span-6 lg:col-span-7 flex flex-col justify-center items-start space-y-5">
              <div className="relative">
                <span className="font-['Alex_Brush'] text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#4A3528] block -mb-4 sm:-mb-6 md:-mb-8 select-none font-normal tracking-wide drop-shadow-sm">
                  {slide.scriptTitle || 'Creative'}
                </span>
                <h1 className="font-['Playfair_Display'] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#4A3528] tracking-tight leading-none">
                  {slide.heading}
                </h1>
              </div>

              {/* Author badge bar */}
              <div className="inline-block bg-[#E8DFD7] px-6 py-2.5 rounded-sm border border-[#DACDC3] shadow-xs">
                <p className="font-['Playfair_Display'] text-base sm:text-lg md:text-xl font-medium tracking-wide text-[#4A3528]">
                  {slide.authorBadge}
                </p>
              </div>

              {textMode === 'editorial' && (
                <p className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base text-[#6B5749] max-w-md pt-1 leading-relaxed">
                  {slide.contentEditorial[0]}
                </p>
              )}

              {/* Scroll & Contact Action CTAs for Desktop & Mobile */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => {
                    const el = document.getElementById('about-me');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-[#4A3528] hover:bg-[#32231A] text-[#F8F5F0] px-6 py-3 rounded-full font-['Plus_Jakarta_Sans'] text-sm font-semibold tracking-wide transition-all shadow-md active:scale-98 cursor-pointer"
                >
                  Explore Portfolio
                </button>
                {onOpenContact && (
                  <button
                    onClick={onOpenContact}
                    className="border border-[#4A3528] text-[#4A3528] hover:bg-[#4A3528] hover:text-[#F8F5F0] px-6 py-3 rounded-full font-['Plus_Jakarta_Sans'] text-sm font-semibold tracking-wide transition-all cursor-pointer flex items-center space-x-2"
                  >
                    <span>Connect (+91 7378671779)</span>
                  </button>
                )}
              </div>
            </div>

            {/* Right: Architectural Photo Frame */}
            <div className="md:col-span-6 lg:col-span-5 flex justify-center items-center">
              <div className="w-full max-w-sm md:max-w-md">
                <ArchitecturalFrame photoAspect="aspect-[3/4]">
                  <img
                    src={slide.image}
                    alt={slide.imageAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                </ArchitecturalFrame>
              </div>
            </div>
          </div>
        )}

        {/* LAYOUT 2: STANDARD SINGLE HEADING (Introduction, About Me) */}
        {slide.layout === 'standard' && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Left: Text column */}
            <div className="md:col-span-7 flex flex-col justify-center space-y-6">
              <div className="flex items-center space-x-3">
                <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl md:text-6xl font-bold text-[#4A3528] tracking-tight leading-none">
                  {slide.heading}
                </h2>
                <div className="hidden sm:block">
                  <SparkleStar size={24} />
                </div>
              </div>

              <div className="space-y-4 max-w-xl">
                {paragraphs.map((p, idx) => (
                  <p
                    key={idx}
                    className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base md:text-[17px] text-[#5A4537] leading-relaxed font-normal text-justify sm:text-left"
                  >
                    {p}
                  </p>
                ))}
              </div>

              {/* Aesthetic divider / accent */}
              <div className="pt-2 flex items-center space-x-3">
                <div className="w-12 h-px bg-[#4A3528]/40" />
                <span className="font-['Playfair_Display'] italic text-sm text-[#7D6859]">
                  {slide.themeTag}
                </span>
              </div>
            </div>

            {/* Right: Architectural Photo Frame */}
            <div className="md:col-span-5 flex justify-center items-center">
              <div className="w-full max-w-sm md:max-w-md">
                <ArchitecturalFrame photoAspect="aspect-[3/4]">
                  <img
                    src={slide.image}
                    alt={slide.imageAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                </ArchitecturalFrame>
              </div>
            </div>
          </div>
        )}

        {/* LAYOUT 3: DOUBLE COLUMN (Vision & Mission, Education, Skill, Experience) */}
        {isDoubleColumn && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Left: Double sections */}
            <div className="md:col-span-7 flex flex-col justify-center space-y-7">
              {/* Optional overall category title if Education or Skill */}
              {(slide.slug === 'education' || slide.slug === 'skill' || slide.slug === 'experience') && (
                <div className="flex items-center space-x-3">
                  <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl md:text-6xl font-bold text-[#4A3528] tracking-tight leading-none">
                    {slide.heading}
                  </h2>
                  <SparkleStar size={24} className="hidden sm:block" />
                </div>
              )}

              <div className="space-y-6 max-w-xl">
                {items.map((item, idx) => (
                  <div key={idx} className="group flex flex-col space-y-2">
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-semibold text-[#4A3528] tracking-normal">
                        {item.title}
                      </h3>
                      {item.period && (
                        <span className="font-['Plus_Jakarta_Sans'] text-xs uppercase tracking-widest text-[#7D6859] font-medium bg-[#EFE8E1] px-2.5 py-0.5 rounded">
                          {item.period}
                        </span>
                      )}
                    </div>

                    {item.highlight && (
                      <p className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm font-semibold text-[#8C7262]">
                        {item.highlight}
                      </p>
                    )}

                    <p className="font-['Plus_Jakarta_Sans'] text-sm sm:text-[15px] md:text-base text-[#5A4537] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Architectural Photo Frame */}
            <div className="md:col-span-5 flex justify-center items-center">
              <div className="w-full max-w-sm md:max-w-md">
                <ArchitecturalFrame photoAspect="aspect-[3/4]">
                  <img
                    src={slide.image}
                    alt={slide.imageAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                </ArchitecturalFrame>
              </div>
            </div>
          </div>
        )}

        {/* LAYOUT 4: PHONE MOCKUP (Let's collaborate) */}
        {isPhoneMockup && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Left: Title and contact list */}
            <div className="md:col-span-7 flex flex-col justify-center space-y-7">
              <div>
                <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl md:text-6xl font-bold text-[#4A3528] tracking-tight leading-tight">
                  {slide.heading}
                </h2>
                {textMode === 'editorial' && (
                  <p className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base text-[#6B5749] mt-3 max-w-md">
                    {slide.contentEditorial[0]}
                  </p>
                )}
              </div>

              {/* Contact item list with icons */}
              {slide.contact && (
                <div className="space-y-4 max-w-md">
                  {/* Website */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#EFE8E1]/70 transition-colors group">
                    <a
                      href={`https://${slide.contact.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3.5 text-[#4A3528] group-hover:text-[#2A1D15]"
                    >
                      <div className="w-9 h-9 rounded-full bg-[#4A3528] text-[#F8F5F0] flex items-center justify-center shadow-xs">
                        <Globe size={18} />
                      </div>
                      <span className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base font-medium underline underline-offset-4 decoration-[#4A3528]/30 group-hover:decoration-[#4A3528]">
                        {slide.contact.website}
                      </span>
                    </a>
                    <button
                      onClick={(e) =>
                        handleCopy(slide.contact!.website, 'website', e)
                      }
                      title="Copy website"
                      className="p-2 text-[#7D6859] hover:text-[#4A3528] transition-colors"
                    >
                      {copiedItem === 'website' ? (
                        <Check size={16} className="text-emerald-700" />
                      ) : (
                        <Copy size={16} />
                      )}
                    </button>
                  </div>

                  {/* Direct Call */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#EFE8E1]/70 transition-colors group">
                    <a
                      href={`tel:${slide.contact.phone}`}
                      className="flex items-center space-x-3.5 text-[#4A3528] group-hover:text-[#2A1D15]"
                    >
                      <div className="w-9 h-9 rounded-full bg-[#4A3528] text-[#F8F5F0] flex items-center justify-center shadow-xs">
                        <Phone size={18} />
                      </div>
                      <div>
                        <span className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base font-medium block">
                          {slide.contact.phone}
                        </span>
                        <span className="text-[11px] text-[#8C7565] uppercase tracking-wider block -mt-0.5">
                          Direct Call
                        </span>
                      </div>
                    </a>
                    <button
                      onClick={(e) =>
                        handleCopy(slide.contact!.phone, 'phone', e)
                      }
                      title="Copy phone"
                      className="p-2 text-[#7D6859] hover:text-[#4A3528] transition-colors"
                    >
                      {copiedItem === 'phone' ? (
                        <Check size={16} className="text-emerald-700" />
                      ) : (
                        <Copy size={16} />
                      )}
                    </button>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#EFE8E1]/70 transition-colors group">
                    <a
                      href={`https://wa.me/${slide.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3.5 text-[#4A3528] group-hover:text-[#2A1D15]"
                    >
                      <div className="w-9 h-9 rounded-full bg-[#25D366] text-[#FFFFFF] flex items-center justify-center shadow-xs">
                        <MessageCircle size={18} />
                      </div>
                      <div>
                        <span className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base font-medium block">
                          {slide.contact.whatsapp}
                        </span>
                        <span className="text-[11px] text-[#2E7D32] uppercase tracking-wider font-semibold block -mt-0.5">
                          Chat on WhatsApp
                        </span>
                      </div>
                    </a>
                    <button
                      onClick={(e) =>
                        handleCopy(slide.contact!.whatsapp, 'whatsapp', e)
                      }
                      title="Copy WhatsApp"
                      className="p-2 text-[#7D6859] hover:text-[#4A3528] transition-colors"
                    >
                      {copiedItem === 'whatsapp' ? (
                        <Check size={16} className="text-emerald-700" />
                      ) : (
                        <Copy size={16} />
                      )}
                    </button>
                  </div>

                  {/* Instagram */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#EFE8E1]/70 transition-colors group">
                    <a
                      href={`https://instagram.com/${slide.contact.instagram.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3.5 text-[#4A3528] group-hover:text-[#2A1D15]"
                    >
                      <div className="w-9 h-9 rounded-full bg-[#4A3528] text-[#F8F5F0] flex items-center justify-center shadow-xs">
                        <Instagram size={18} />
                      </div>
                      <span className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base font-medium">
                        {slide.contact.instagram}
                      </span>
                    </a>
                    <button
                      onClick={(e) =>
                        handleCopy(slide.contact!.instagram, 'instagram', e)
                      }
                      title="Copy handle"
                      className="p-2 text-[#7D6859] hover:text-[#4A3528] transition-colors"
                    >
                      {copiedItem === 'instagram' ? (
                        <Check size={16} className="text-emerald-700" />
                      ) : (
                        <Copy size={16} />
                      )}
                    </button>
                  </div>
                </div>
              )}

              {/* Action Button */}
              {onOpenContact && (
                <div className="pt-2">
                  <button
                    onClick={onOpenContact}
                    className="inline-flex items-center space-x-2 bg-[#4A3528] text-[#F8F5F0] px-6 py-3 rounded-full font-['Plus_Jakarta_Sans'] text-sm font-medium tracking-wide shadow-md hover:bg-[#33241B] transition-all transform hover:-translate-y-0.5"
                  >
                    <span>Call or Message</span>
                    <Phone size={16} />
                  </button>
                </div>
              )}
            </div>

            {/* Right: Realistic Phone Mockup */}
            <div className="md:col-span-5 flex justify-center items-center py-4">
              <SmartphoneMockup>
                <img
                  src={slide.image}
                  alt={slide.imageAlt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </SmartphoneMockup>
            </div>
          </div>
        )}

        {/* LAYOUT 5: THANK YOU (Slide 9) */}
        {isThankYou && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Left: Architectural Photo Frame */}
            <div className="md:col-span-5 order-2 md:order-1 flex justify-center items-center">
              <div className="w-full max-w-sm md:max-w-md">
                <ArchitecturalFrame photoAspect="aspect-[3/4]">
                  <img
                    src={slide.image}
                    alt={slide.imageAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                </ArchitecturalFrame>
              </div>
            </div>

            {/* Right: Thank You cursive & badge */}
            <div className="md:col-span-7 order-1 md:order-2 flex flex-col justify-center items-start space-y-6 md:pl-6">
              <div>
                <h2 className="font-['Alex_Brush'] text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#4A3528] font-normal leading-none drop-shadow-sm select-none">
                  {slide.scriptTitle || 'Thank You'}
                </h2>
              </div>

              {/* Author badge bar */}
              <div className="w-full max-w-md bg-[#E8DFD7] px-8 py-3 rounded-sm border border-[#DACDC3] shadow-xs">
                <p className="font-['Playfair_Display'] text-lg sm:text-xl md:text-2xl font-semibold tracking-wide text-[#4A3528]">
                  {slide.authorBadge}
                </p>
              </div>

              {textMode === 'editorial' && (
                <p className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base text-[#6B5749] max-w-md pt-2 leading-relaxed">
                  {slide.contentEditorial[0]}
                </p>
              )}

              {onOpenContact && (
                <div className="pt-2">
                  <button
                    onClick={onOpenContact}
                    className="inline-flex items-center space-x-2 border border-[#4A3528] text-[#4A3528] hover:bg-[#4A3528] hover:text-[#F8F5F0] px-6 py-2.5 rounded-full font-['Plus_Jakarta_Sans'] text-sm font-medium transition-all"
                  >
                    <span>Connect with Salik</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
        {/* LAYOUT 6: LET'S WORK TOGETHER */}
        {isWorkTogether && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Narrative, Actions & Direct Channels */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              <div className="space-y-2">
                <span className="font-['Alex_Brush'] text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#4A3528] block -mb-2 select-none font-normal tracking-wide drop-shadow-sm">
                  {slide.scriptTitle || "Let's Work Together"}
                </span>
                <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl font-bold text-[#4A3528] tracking-tight">
                  {slide.heading || 'Start Your Next Project'}
                </h2>
              </div>

              {/* Status Badge */}
              <div className="inline-flex items-center space-x-2 bg-[#E8DFD7] px-4 py-1.5 rounded-full border border-[#DACDC3] w-fit shadow-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-700 animate-pulse" />
                <span className="text-xs font-semibold text-[#4A3528] uppercase tracking-wider">
                  Available for Commissions & Global Partnerships
                </span>
              </div>

              <p className="font-['Plus_Jakarta_Sans'] text-sm sm:text-base text-[#6B5749] leading-relaxed max-w-xl">
                {paragraphs[0] ||
                  'Have an upcoming brand launch, editorial publication, or creative venture in mind? Whether you need end-to-end brand identity design, strategic art direction, or high-touch creative consulting, I am currently accepting select commissions worldwide.'}
              </p>

              {/* Direct Action Communication Channels */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <a
                  href="tel:+917378671779"
                  className="flex items-center space-x-3.5 bg-[#EFE8E1] hover:bg-[#E5DCD2] p-4 rounded-2xl border border-[#DDD3C9] transition-all group shadow-xs cursor-pointer"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#4A3528] text-[#F8F5F0] flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8C7565] block">
                      Direct Voice Call
                    </span>
                    <span className="font-['Playfair_Display'] font-bold text-sm sm:text-base text-[#4A3528]">
                      +91 73786 71779
                    </span>
                  </div>
                </a>

                <a
                  href="https://wa.me/917378671779?text=Hello%20Salik%2C%20I%20would%20like%20to%20collaborate%20on%20a%20creative%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3.5 bg-[#EFE8E1] hover:bg-[#E5DCD2] p-4 rounded-2xl border border-[#DDD3C9] transition-all group shadow-xs cursor-pointer"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#25D366] text-white flex items-center justify-center group-hover:scale-105 transition-transform shadow-xs">
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8C7565] block">
                      Instant WhatsApp
                    </span>
                    <span className="font-['Playfair_Display'] font-bold text-sm sm:text-base text-[#4A3528]">
                      Chat on WhatsApp
                    </span>
                  </div>
                </a>
              </div>

              {/* Core Collaboration Domains */}
              <div className="pt-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#8C7565] mb-2.5">
                  Core Collaboration Areas
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Brand Identity & Systems',
                    'Strategic Art Direction',
                    'Editorial & Publication',
                    'Typography & Print Craft',
                    'Creative Advisory'
                  ].map((area) => (
                    <span
                      key={area}
                      className="bg-[#FAF7F3] border border-[#DDD3C9] px-3.5 py-1.5 rounded-full text-xs font-medium text-[#5A4537] shadow-2xs"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {onOpenContact && (
                <div className="pt-2">
                  <button
                    onClick={onOpenContact}
                    className="inline-flex items-center space-x-2 bg-[#4A3528] text-[#F8F5F0] hover:bg-[#32231A] px-7 py-3 rounded-full font-['Plus_Jakarta_Sans'] text-sm font-semibold tracking-wide transition-all shadow-md active:scale-98 cursor-pointer"
                  >
                    <Phone size={15} />
                    <span>Open Detailed Contact Card</span>
                  </button>
                </div>
              )}
            </div>

            {/* Right Column: Architectural Image & Studio Signature */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="w-full max-w-sm md:max-w-md">
                <ArchitecturalFrame photoAspect="aspect-[4/5]">
                  <img
                    src={slide.image}
                    alt={slide.imageAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                </ArchitecturalFrame>
                <div className="mt-4 text-center space-y-1">
                  <p className="font-['Playfair_Display'] italic text-sm text-[#7D6859]">
                    "Design is not merely visual; it is an enduring conversation between form and emotion."
                  </p>
                  <p className="font-['Plus_Jakarta_Sans'] text-xs text-[#9E8B7E] font-medium">
                    Salik Studio • Worldwide Remote & On-Site
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
