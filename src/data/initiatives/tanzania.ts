import type { Initiative } from './types';

import heroImage from '../../assets/photos/tz-mwanza.jpg';
import classroom from '../../assets/photos/tz-classroom.jpg';
import mhh from '../../assets/photos/tz-mhh-workshop.jpg';
import sewing from '../../assets/photos/tz-sewing.jpg';
import firstAid from '../../assets/photos/tz-first-aid.jpg';
import girlsReached from '../../assets/photos/tz-girls-reached.jpg';
import workshop from '../../assets/photos/tz-workshop.jpg';
import bleistift from '../../assets/logos/bleistift.avif';
import eduholic from '../../assets/logos/eduholic.png';

export const tanzania: Initiative = {
  slug: 'tanzania',
  order: 2,
  country: { en: 'Tanzania', de: 'Tansania' },
  region: { en: 'Mwanza', de: 'Mwanza' },
  years: '2024 – today',
  status: 'continuing',
  accent: '#1f7a8c',
  donateUrl: 'https://gofund.me/ce8d654ec',

  tagline: {
    en: 'Where the SIMpowering model was born',
    de: 'Wo das SIMpowering-Modell entstanden ist',
  },
  intro: {
    en: 'Since 2024 we have worked with Igoma C Primary School and Shamaliwa Secondary School in Mwanza, on the shores of Lake Victoria. Together with our partner A Bleistift FOR EVERYONE we set up sewing communities, ran menstrual health workshops and created a supportive environment for girls. One year on, the machines are still running.',
    de: 'Seit 2024 arbeiten wir mit der Igoma C Primary School und der Shamaliwa Secondary School in Mwanza am Viktoriasee. Gemeinsam mit unserem Partner A Bleistift FOR EVERYONE haben wir Nähgemeinschaften aufgebaut, Workshops zur Menstruationsgesundheit durchgeführt und ein unterstützendes Umfeld für Mädchen geschaffen. Ein Jahr später laufen die Maschinen noch immer.',
  },
  heroImage,
  heroAlt: {
    en: 'The SIMpowering team with students in a classroom in Mwanza',
    de: 'Das SIMpowering-Team mit Schülerinnen und Schülern in einem Klassenzimmer in Mwanza',
  },
  highlight: { value: '10,000+', label: { en: 'girls reached', de: 'erreichte Mädchen' } },

  impact: {
    title: { en: 'A year of tangible impact', de: 'Ein Jahr mit greifbarer Wirkung' },
    text: {
      en: 'Data from our latest visit to Igoma C and Shamaliwa Secondary School shows that the model is sustainable and effective.',
      de: 'Die Daten unseres letzten Besuchs an der Igoma C und der Shamaliwa Secondary School zeigen, dass das Modell nachhaltig und wirksam ist.',
    },
    stats: [
      { value: '10,000+', label: { en: 'girls reached', de: 'erreichte Mädchen' } },
      { value: '20', label: { en: 'sewing machines donated', de: 'gespendete Nähmaschinen' } },
      { value: '3,000+', label: { en: 'students in partner schools', de: 'Schüler:innen an Partnerschulen' } },
      { value: '60', label: { en: 'teachers involved', de: 'beteiligte Lehrkräfte' } },
      { value: '90%', label: { en: 'machines still running after a year', de: 'Maschinen laufen nach einem Jahr noch' } },
      { value: 'CHF 5k', label: { en: 'raised and spent locally', de: 'gesammelt und vor Ort investiert' } },
    ],
  },

  gallery: [
    { image: sewing, alt: { en: 'Students learning to sew reusable pads', de: 'Schüler:innen lernen, wiederverwendbare Binden zu nähen' } },
    { image: mhh, alt: { en: 'Team and students after a menstrual health workshop', de: 'Team und Schülerinnen nach einem Workshop zur Menstruationsgesundheit' } },
    { image: firstAid, alt: { en: 'First aid session in the classroom', de: 'Erste-Hilfe-Übung im Klassenzimmer' } },
    { image: girlsReached, alt: { en: 'Students in the schoolyard waving', de: 'Schüler:innen winken auf dem Schulhof' } },
    { image: workshop, alt: { en: 'A full classroom during a workshop', de: 'Ein volles Klassenzimmer während eines Workshops' } },
    { image: classroom, alt: { en: 'Students working at their desks', de: 'Schüler:innen arbeiten an ihren Tischen' } },
  ],

  partners: {
    text: {
      en: 'Our work in Mwanza is only possible because of committed local and international partners.',
      de: 'Unsere Arbeit in Mwanza ist nur dank engagierter lokaler und internationaler Partner möglich.',
    },
    list: [
      { name: 'A Bleistift FOR EVERYONE', logo: bleistift },
      { name: 'Igoma C Primary School' },
      { name: 'Shamaliwa Secondary School' },
      { name: 'Eduholic', logo: eduholic },
    ],
  },
};
