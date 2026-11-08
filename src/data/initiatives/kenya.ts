import type { Initiative } from './types';

// TODO: replace with a photo from Busia County once the team has one.
import heroImage from '../../assets/photos/children-running.avif';

export const kenya: Initiative = {
  slug: 'kenya',
  order: 1,
  country: { en: 'Kenya', de: 'Kenia' },
  region: { en: 'Busia County', de: 'Busia County' },
  years: '2026 – 2027',
  status: 'new',
  accent: '#c2502e',
  // TODO: add the Kenya donation link (e.g. a GoFundMe) when it is live.
  donateUrl: undefined,

  tagline: {
    en: 'Bringing the model to western Kenya',
    de: 'Das Modell kommt nach Westkenia',
  },
  intro: {
    en: 'This year we are taking what worked in Mwanza to Busia County in western Kenya. Together with Power of Pads, a UK charity working in Kenyan schools since 2021, we will set up a pad production hub at one school, train local women, teachers and students, and run menstrual health sessions for girls and boys in up to three schools.',
    de: 'Dieses Jahr bringen wir, was in Mwanza funktioniert hat, nach Busia County in Westkenia. Gemeinsam mit Power of Pads, einer britischen Organisation, die seit 2021 an kenianischen Schulen arbeitet, bauen wir an einer Schule eine Produktionsstätte für Binden auf, schulen Frauen, Lehrkräfte und Schüler:innen und führen Workshops zur Menstruationsgesundheit für Mädchen und Jungen an bis zu drei Schulen durch.',
  },
  heroImage,
  heroAlt: { en: 'Children running along a dirt path', de: 'Kinder laufen einen Feldweg entlang' },
  highlight: { value: '360', label: { en: 'girls to receive pads', de: 'Mädchen erhalten Binden' } },

  context: {
    title: { en: 'Why Kenya', de: 'Warum Kenia' },
    text: {
      en: 'For millions of girls, their first period marks the beginning of a cycle of missed opportunities that affects their health, dignity and future.',
      de: 'Für Millionen Mädchen beginnt mit der ersten Periode ein Kreislauf verpasster Chancen, der ihre Gesundheit, Würde und Zukunft beeinträchtigt.',
    },
    stats: [
      { value: '45.6%', label: { en: 'of girls struggle to get menstrual products', de: 'der Mädchen haben Mühe, an Menstruationsprodukte zu kommen' } },
      { value: '54.7%', label: { en: 'lack clean water and soap, risking infections', de: 'haben kein sauberes Wasser und keine Seife, mit Infektionsrisiko' } },
      { value: '85.8%', label: { en: 'worry about privacy when changing at school', de: 'sorgen sich um Privatsphäre beim Wechseln in der Schule' } },
    ],
    source: 'UNFPA Kenya (2025); UNICEF',
  },

  impact: {
    title: { en: 'What we aim to achieve', de: 'Was wir erreichen wollen' },
    text: {
      en: 'Our goals for the first project cycle in one Busia community, running until June 2027.',
      de: 'Unsere Ziele für den ersten Projektzyklus in einer Gemeinde in Busia, bis Juni 2027.',
    },
    stats: [
      { value: '360', label: { en: 'girls receiving reusable pads', de: 'Mädchen erhalten wiederverwendbare Binden' } },
      { value: '600', label: { en: 'girls and boys in health sessions', de: 'Mädchen und Jungen in Gesundheitsworkshops' } },
      { value: '1,800', label: { en: 'pads produced locally', de: 'lokal produzierte Binden' } },
      { value: '20', label: { en: 'women, teachers and students trained', de: 'geschulte Frauen, Lehrkräfte und Schüler:innen' } },
      { value: '3', label: { en: 'schools', de: 'Schulen' } },
      { value: '2', label: { en: 'sewing machines at the hub school', de: 'Nähmaschinen an der Hub-Schule' } },
    ],
  },

  partners: {
    text: {
      en: 'We combine Power of Pads’ local trust with the school-based model we proved in Tanzania.',
      de: 'Wir verbinden das lokale Vertrauen von Power of Pads mit dem schulbasierten Modell, das sich in Tansania bewährt hat.',
    },
    list: [
      { name: 'Power of Pads' },
      { name: { en: 'Busia women’s group', de: 'Frauengruppe Busia' } },
    ],
  },
};
