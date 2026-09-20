export type ViewMode = 'presentation' | 'website';

export type TextMode = 'original' | 'editorial';

export interface SlideItem {
  title: string;
  description: string;
  highlight?: string;
  period?: string;
}

export interface ContactInfo {
  website: string;
  instagram: string;
  phone: string;
  whatsapp: string;
}

export interface SlideData {
  id: string;
  number: number;
  slug: string;
  title: string;
  scriptTitle?: string;
  authorBadge?: string;
  layout: 'cover' | 'standard' | 'double-column' | 'phone-mockup' | 'thank-you' | 'work-together';
  heading: string;
  subheading?: string;
  contentOriginal: string[];
  contentEditorial: string[];
  itemsOriginal?: SlideItem[];
  itemsEditorial?: SlideItem[];
  contact?: ContactInfo;
  image: string;
  imageAlt: string;
  themeTag?: string;
}
