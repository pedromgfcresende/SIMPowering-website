// The team page shows one section per initiative (Kenya, Tanzania, …).
// Add one entry per member; `initiative` is the slug of their team ('kenya' or 'tanzania').
// Photos go in src/assets/team/ and are imported here. Square photos work best.
//
// Example:
//   import pedro from '../assets/team/pedro.jpg';
//   { name: 'Pedro Resende', role: { en: 'Project lead', de: 'Projektleitung' }, initiative: 'kenya', photo: pedro, linkedin: 'https://…' },

import type { ImageMetadata } from 'astro';
import type { Localized } from '../i18n';

export type TeamMember = {
  name: string;
  role: Localized;
  initiative: string;
  photo?: ImageMetadata;
  linkedin?: string;
};

export const team = {
  title: { en: 'Meet the team', de: 'Das Team' },
  text: {
    en: 'We are SIM Master’s students at the University of St. Gallen, volunteering our time to end period poverty. Each initiative has its own team.',
    de: 'Wir sind SIM-Masterstudierende der Universität St. Gallen und setzen uns ehrenamtlich gegen Periodenarmut ein. Jede Initiative hat ihr eigenes Team.',
  },
  members: [] as TeamMember[],
};
