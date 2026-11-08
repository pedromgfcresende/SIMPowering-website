import type { ImageMetadata } from 'astro';
import type { Localized } from '../../i18n';

export type Stat = {
  value: string;
  label: Localized;
};

export type BarChart = {
  title: Localized;
  tag: Localized;
  caption: Localized;
  unit?: string;
  bars: { label: Localized; value: number }[];
};

export type Partner = {
  /** Proper names can stay a plain string */
  name: string | Localized;
  role: Localized;
  description?: Localized;
  logo?: ImageMetadata;
  url?: string;
};

export type DonationTier = {
  amount: string;
  label: Localized;
  description: Localized;
};

export type Initiative = {
  /** URL segment: /tanzania, /de/tanzania */
  slug: string;
  /** Display order on the home page and in the menu */
  order: number;
  country: Localized;
  region: Localized;
  years: string;
  status: 'active' | 'new' | 'continuing' | 'completed';
  /** CSS colour used for this initiative's accents */
  accent: string;
  /** Leave undefined until the donation page exists; the site will show the contact email instead */
  donateUrl?: string;

  tagline: Localized;
  intro: Localized;
  heroImage: ImageMetadata;
  heroAlt: Localized;
  /** One headline number for the initiative card on the home page */
  highlight: Stat;

  context?: {
    title: Localized;
    text: Localized;
    stats: Stat[];
    source?: string;
  };

  impact?: {
    title: Localized;
    text: Localized;
    stats: Stat[];
    charts?: BarChart[];
  };

  gallery?: { image: ImageMetadata; alt: Localized }[];

  partners?: {
    text: Localized;
    list: Partner[];
  };

  donationTiers?: DonationTier[];
};
