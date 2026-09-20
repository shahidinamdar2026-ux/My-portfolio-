import { SlideData } from '../types';

export interface PortraitOption {
  image: string;
  alt: string;
}

export const MALE_PORTRAITS: PortraitOption[] = [
  {
    image: '/male_portrait_1.jpg',
    alt: 'Portrait of a young male designer in a beige linen shirt against a warm neutral backdrop'
  },
  {
    image: '/male_portrait_2.jpg',
    alt: 'Portrait of a stylish young male smiling by an architectural sunlit window'
  },
  {
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=85',
    alt: 'Thoughtful portrait of a young man in warm natural light'
  },
  {
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=85',
    alt: 'Portrait of a creative young male with expressive gaze in warm tones'
  },
  {
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=85',
    alt: 'Relaxed smiling portrait of a young man in a clean casual setting'
  },
  {
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=85',
    alt: 'Contemporary portrait of a male creative director'
  },
  {
    image: '/salik_standing.jpg',
    alt: 'Portrait of male standing in tropical outdoor garden'
  },
  {
    image: '/salik_portrait.jpg',
    alt: 'Portrait of young male seated with sunglasses in lush greenery'
  }
];

export const SLIDES: SlideData[] = [
  {
    id: 'slide-1',
    number: 1,
    slug: 'cover',
    title: 'Creative Portfolio',
    scriptTitle: 'Creative',
    heading: 'Portfolio',
    authorBadge: 'By Salik',
    layout: 'cover',
    themeTag: 'Art Direction & Visual Design',
    contentOriginal: [],
    contentEditorial: [
      'A curated collection of visual identities, strategic art direction, and editorial design by Salik.'
    ],
    image: '/male_portrait_1.jpg',
    imageAlt: 'Portrait of a young male creative director in beige linen - Creative Portfolio Cover'
  },
  {
    id: 'slide-2',
    number: 2,
    slug: 'introduction',
    title: 'Introduction',
    heading: 'Introduction',
    layout: 'standard',
    themeTag: 'Philosophy',
    contentOriginal: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
    ],
    contentEditorial: [
      'Welcome to my creative universe. I am a multidisciplinary visual designer and art director dedicated to shaping evocative brand identities, tactile print objects, and seamless digital experiences.',
      'Through a balanced synergy of intentional minimalism, refined typography, and organic warmth, I help conscious brands communicate with clarity, grace, and enduring cultural resonance.'
    ],
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Hands writing in an open notebook beside a warm cup of coffee and orange journal'
  },
  {
    id: 'slide-3',
    number: 3,
    slug: 'about-me',
    title: 'About Me',
    heading: 'About Me',
    layout: 'standard',
    themeTag: 'Background',
    contentOriginal: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
    ],
    contentEditorial: [
      'With over seven years of professional practice spanning studio direction, brand consultancy, and editorial layout, I have partnered with international lifestyle houses, architectural ateliers, and creative publishers.',
      'My creative ethos is deeply rooted in slow design — favoring timeless craftsmanship, harmonious color palettes, and tactile materials over fleeting digital trends.'
    ],
    image: '/male_portrait_2.jpg',
    imageAlt: 'Portrait of a stylish young male smiling by an architectural sunlit window - About Me'
  },
  {
    id: 'slide-4',
    number: 4,
    slug: 'vision-mission',
    title: 'Vision & Mission',
    heading: 'Vision & Mission',
    layout: 'double-column',
    themeTag: 'Direction',
    contentOriginal: [],
    contentEditorial: [],
    itemsOriginal: [
      {
        title: 'Vision',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
      },
      {
        title: 'Mission',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
      }
    ],
    itemsEditorial: [
      {
        title: 'Vision',
        description:
          'To cultivate a visual landscape where thoughtful design elevates everyday perception, championing quiet confidence, authenticity, and sustainable creative practices.'
      },
      {
        title: 'Mission',
        description:
          'Partnering with visionary founders and creative institutions to construct bespoke visual languages that articulate identity with precision, emotional resonance, and lasting value.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Artisanal table setting with coffee kettle, wafer cookies on brass tray, and notebook'
  },
  {
    id: 'slide-5',
    number: 5,
    slug: 'education',
    title: 'Education',
    heading: 'Education',
    layout: 'double-column',
    themeTag: 'Academia',
    contentOriginal: [],
    contentEditorial: [],
    itemsOriginal: [
      {
        title: 'Rimberio High school',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
      },
      {
        title: 'Wardiere university',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
      }
    ],
    itemsEditorial: [
      {
        title: 'Rimberio High school',
        period: '2012 — 2016',
        highlight: 'Visual Arts & Humanities Honors',
        description:
          'Rigorous foundation in classical drawing, fine art history, and visual composition. Graduated with top distinctions in creative studio portfolio examination.'
      },
      {
        title: 'Wardiere university',
        period: '2016 — 2020',
        highlight: 'B.A. in Graphic Design & Visual Communication',
        description:
          'Specialized in editorial typography, brand identity systems, and semiotics. Authored thesis on tactile minimalism in modern editorial publications.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Red brick heritage architecture with factory windows bathed in warm golden light'
  },
  {
    id: 'slide-6',
    number: 6,
    slug: 'skill',
    title: 'Skill',
    heading: 'Skill',
    layout: 'double-column',
    themeTag: 'Expertise',
    contentOriginal: [],
    contentEditorial: [],
    itemsOriginal: [
      {
        title: 'Graphic Design',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
      },
      {
        title: 'Marketing',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
      }
    ],
    itemsEditorial: [
      {
        title: 'Graphic Design',
        highlight: 'Visual Identity, Typography, Editorial Systems',
        description:
          'Comprehensive brand guidelines, custom typographic hierarchies, packaging architecture, and print ephemera tailored for high-end design sensibilities.'
      },
      {
        title: 'Marketing',
        highlight: 'Content Strategy, Art Direction, Campaign Design',
        description:
          'Holistic campaign storytelling, social curation aesthetics, digital launch strategies, and cross-channel visual harmony that drives genuine engagement.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Laptop flatlay with hands typing, glowing candles in a brass bowl, and delicate seashells'
  },
  {
    id: 'slide-7',
    number: 7,
    slug: 'experience',
    title: 'Experience',
    heading: 'Experience',
    layout: 'double-column',
    themeTag: 'Career',
    contentOriginal: [],
    contentEditorial: [],
    itemsOriginal: [
      {
        title: 'Larana, Inc.',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
      },
      {
        title: 'Salford & Co.',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
      }
    ],
    itemsEditorial: [
      {
        title: 'Larana, Inc.',
        period: '2022 — Present',
        highlight: 'Senior Brand Art Director',
        description:
          'Leading multi-disciplinary visual identity projects for lifestyle and architectural clients, supervising photo shoots, and stewarding brand voice across global channels.'
      },
      {
        title: 'Salford & Co.',
        period: '2020 — 2022',
        highlight: 'Visual Designer & Content Strategist',
        description:
          'Created editorial publications, exhibition catalogues, and bespoke digital collateral. Collaborated closely with creative directors and international photographers.'
      }
    ],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Creative team gathered around a timber table discussing brand concepts with a laptop'
  },
  {
    id: 'slide-8',
    number: 8,
    slug: 'lets-collaborate',
    title: "Let's collaborate",
    heading: "Let's collaborate",
    layout: 'phone-mockup',
    themeTag: 'Contact',
    contentOriginal: [],
    contentEditorial: [
      'Available for brand identity commissions, art direction consultations, and select freelance partnerships worldwide.'
    ],
    contact: {
      website: 'www.reallygreatsite.com',
      instagram: '@reallygreatsite',
      phone: '+91 7378671779',
      whatsapp: '+91 7378671779'
    },
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Smartphone mockup displaying wax-sealed envelope, dried florals, and botanical painting'
  },
  {
    id: 'slide-9',
    number: 9,
    slug: 'thank-you',
    title: 'Thank You',
    scriptTitle: 'Thank You',
    heading: 'Thank You',
    authorBadge: 'By Salik',
    layout: 'thank-you',
    themeTag: 'Appreciation',
    contentOriginal: [],
    contentEditorial: [
      'Thank you for viewing this presentation. Looking forward to creating something timeless together.'
    ],
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Portrait of a young male creative director in natural light - Thank You'
  },
  {
    id: 'slide-10',
    number: 10,
    slug: 'lets-work-together',
    title: "Let's Work Together",
    scriptTitle: "Let's Work Together",
    heading: 'Start Your Next Project',
    authorBadge: 'Collaborate with Salik',
    layout: 'work-together',
    themeTag: 'Inquiry & Partnership',
    contentOriginal: [],
    contentEditorial: [
      'Have an upcoming brand launch, editorial publication, or creative venture in mind? Whether you need end-to-end brand identity design, strategic art direction, or high-touch creative consulting, I am currently accepting select commissions worldwide.'
    ],
    contact: {
      website: 'www.reallygreatsite.com',
      instagram: '@reallygreatsite',
      phone: '+91 7378671779',
      whatsapp: '+91 7378671779'
    },
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Design studio workspace with sketches, material swatches, and collaborative creative tools'
  }
];
