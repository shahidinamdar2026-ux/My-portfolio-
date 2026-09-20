import React from 'react';

/**
 * 4-pointed sparkle star matching the exact motif from the slides
 */
export const SparkleStar: React.FC<{
  className?: string;
  size?: number;
  color?: string;
}> = ({ className = '', size = 28, color = '#4A3528' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      className={`shrink-0 select-none ${className}`}
      aria-hidden="true"
    >
      <path d="M12 0 C12 6.627 6.627 12 0 12 C6.627 12 12 17.373 12 24 C12 17.373 17.373 12 24 12 C17.373 12 12 6.627 12 0 Z" />
    </svg>
  );
};

/**
 * Top-left organic taupe blob with dark accent wave line
 */
export const OrganicBlobTopLeft: React.FC<{ className?: string }> = ({
  className = ''
}) => {
  return (
    <div className={`absolute top-0 left-0 pointer-events-none select-none z-0 ${className}`}>
      <svg
        viewBox="0 0 320 280"
        className="w-48 sm:w-64 md:w-80 lg:w-96 h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Organic Blob fill */}
        <path
          d="M -20 -20 
             L 180 -20 
             C 170 35, 195 85, 175 130 
             C 155 175, 120 190, 85 200 
             C 45 210, 10 245, -20 220 
             Z"
          fill="#C8B6A6"
          opacity="0.85"
        />
        {/* Dark brown accent organic curve */}
        <path
          d="M -20 60 
             C 35 60, 50 145, 90 155 
             C 130 165, 150 110, 185 150"
          stroke="#4A3528"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  );
};

/**
 * Bottom-right organic blob accent
 */
export const OrganicBlobBottomRight: React.FC<{ className?: string }> = ({
  className = ''
}) => {
  return (
    <div className={`absolute bottom-0 right-0 pointer-events-none select-none z-0 ${className}`}>
      <svg
        viewBox="0 0 300 240"
        className="w-44 sm:w-56 md:w-72 lg:w-80 h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Organic Blob fill */}
        <path
          d="M 320 260 
             L 120 260 
             C 130 200, 110 160, 140 120 
             C 170 80, 220 95, 260 70 
             C 290 50, 310 30, 320 20 
             Z"
          fill="#C8B6A6"
          opacity="0.8"
        />
        {/* Dark brown wave line */}
        <path
          d="M 120 220 
             C 150 215, 170 160, 210 165 
             C 250 170, 270 120, 310 115"
          stroke="#4A3528"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  );
};

/**
 * Topographical contour lines in the bottom-left corner
 */
export const TopoLinesBottomLeft: React.FC<{ className?: string }> = ({
  className = ''
}) => {
  return (
    <div className={`absolute bottom-0 left-0 pointer-events-none select-none z-0 ${className}`}>
      <svg
        viewBox="0 0 340 240"
        className="w-52 sm:w-72 md:w-88 lg:w-[400px] h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M -20 180 C 40 180, 70 210, 120 210 C 170 210, 200 230, 230 250"
          stroke="#D0C0B2"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M -20 150 C 50 150, 90 190, 150 190 C 210 190, 240 220, 270 250"
          stroke="#D0C0B2"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M -20 120 C 60 120, 110 165, 180 165 C 240 165, 275 200, 310 250"
          stroke="#D0C0B2"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M -20 90 C 70 90, 130 145, 210 145 C 270 145, 310 185, 345 245"
          stroke="#D0C0B2"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </div>
  );
};

/**
 * Topographical contour lines in the bottom-right corner
 */
export const TopoLinesBottomRight: React.FC<{ className?: string }> = ({
  className = ''
}) => {
  return (
    <div className={`absolute bottom-0 right-0 pointer-events-none select-none z-0 ${className}`}>
      <svg
        viewBox="0 0 360 250"
        className="w-52 sm:w-72 md:w-88 lg:w-[420px] h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 380 200 C 320 200, 280 230, 230 230 C 180 230, 150 250, 120 270"
          stroke="#D0C0B2"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M 380 165 C 310 165, 260 205, 200 205 C 140 205, 110 235, 80 270"
          stroke="#D0C0B2"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M 380 130 C 295 130, 240 180, 170 180 C 105 180, 70 215, 35 270"
          stroke="#D0C0B2"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M 380 95 C 280 95, 210 155, 135 155 C 70 155, 30 195, 0 255"
          stroke="#D0C0B2"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </div>
  );
};

/**
 * Top-right geometric color block
 */
export const GeometricBlockTopRight: React.FC<{ className?: string }> = ({
  className = ''
}) => {
  return (
    <div
      className={`absolute top-0 right-0 w-1/3 h-1/2 bg-[#EADFD5]/70 pointer-events-none z-0 ${className}`}
    />
  );
};

/**
 * Top-left geometric color block (for slide 4 & 9 variation)
 */
export const GeometricBlockTopLeft: React.FC<{ className?: string }> = ({
  className = ''
}) => {
  return (
    <div
      className={`absolute top-0 left-0 w-1/4 h-2/5 bg-[#EADFD5]/70 pointer-events-none z-0 ${className}`}
    />
  );
};

/**
 * Signature Architectural Frame with corner cutouts and midpoint star nodes
 */
export const ArchitecturalFrame: React.FC<{
  children: React.ReactNode;
  className?: string;
  photoAspect?: string;
}> = ({ children, className = '', photoAspect = 'aspect-[3/4]' }) => {
  return (
    <div className={`relative p-3 sm:p-4 md:p-5 ${className}`}>
      {/* Outer decorative line with notched/beveled corners */}
      <div className="absolute inset-0 pointer-events-none">
        {/* The thin bounding frame line */}
        <div className="w-full h-full border border-[#4A3528]/80 rounded-[32px] sm:rounded-[40px]" />

        {/* 4 Star anchors on the borders */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <SparkleStar size={20} />
        </div>
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
          <SparkleStar size={20} />
        </div>
        <div className="absolute top-1/2 -left-3 -translate-y-1/2">
          <SparkleStar size={20} />
        </div>
        <div className="absolute top-1/2 -right-3 -translate-y-1/2">
          <SparkleStar size={20} />
        </div>
      </div>

      {/* Inner Image Container with smooth rounded corners */}
      <div
        className={`relative z-10 w-full ${photoAspect} overflow-hidden rounded-[24px] sm:rounded-[32px] bg-[#E8DFD7] shadow-sm`}
      >
        {children}
      </div>
    </div>
  );
};

/**
 * Realistic Smartphone Mockup Frame for Slide 8 (Let's Collaborate)
 */
export const SmartphoneMockup: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  return (
    <div
      className={`relative mx-auto w-[240px] sm:w-[280px] md:w-[310px] aspect-[9/18.5] bg-[#1C1A18] rounded-[44px] p-3 shadow-2xl ring-1 ring-black/20 ${className}`}
    >
      {/* Phone side buttons */}
      <div className="absolute -left-[3px] top-24 w-[3px] h-9 bg-[#3A3530] rounded-l" />
      <div className="absolute -left-[3px] top-36 w-[3px] h-9 bg-[#3A3530] rounded-l" />
      <div className="absolute -right-[3px] top-28 w-[3px] h-12 bg-[#3A3530] rounded-r" />

      {/* Screen container */}
      <div className="relative w-full h-full bg-white rounded-[36px] overflow-hidden">
        {/* Dynamic Island / Camera Notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 z-30 w-24 h-5 bg-[#1C1A18] rounded-full flex items-center justify-end px-3">
          <div className="w-2.5 h-2.5 rounded-full bg-[#2E2925] mr-1" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#1F3D5A]" />
        </div>

        {/* Screen Content */}
        <div className="w-full h-full relative z-10">{children}</div>
      </div>
    </div>
  );
};
