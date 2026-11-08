// Content shared by all initiatives: the home page story and the approach.

import heroImage from '../assets/photos/hero-girls.png';
import equip from '../assets/photos/equip.avif';
import educate from '../assets/photos/educate.avif';
import empower from '../assets/photos/empower.avif';

export const home = {
  hero: {
    eyebrow: { en: 'SIMpowering 2026 – 2027 · Tanzania & Kenya', de: 'SIMpowering 2026 – 2027 · Tansania & Kenia' },
    title: { en: 'Empower girls.\nTransform futures.', de: 'Mädchen stärken.\nZukunft schaffen.' },
    text: {
      en: 'SIMpowering is dedicated to ending period poverty in East Africa. We equip schools to make reusable pads, teach menstrual health to girls and boys, and break down taboos, so that every girl can stay in school and thrive.',
      de: 'SIMpowering setzt sich für ein Ende der Periodenarmut in Ostafrika ein. Wir statten Schulen aus, damit sie wiederverwendbare Binden herstellen können, klären Mädchen und Jungen über Menstruationsgesundheit auf und brechen Tabus, damit jedes Mädchen zur Schule gehen und sich entfalten kann.',
    },
    image: heroImage,
    imageAlt: { en: 'Two smiling girls', de: 'Zwei lächelnde Mädchen' },
  },

  initiatives: {
    title: { en: 'One model, two countries', de: 'Ein Modell, zwei Länder' },
    text: {
      en: 'This year SIMpowering runs two initiatives. Choose one to see its plans, progress and how you can help.',
      de: 'Dieses Jahr führt SIMpowering zwei Initiativen durch. Wähle eine aus, um Pläne, Fortschritte und Unterstützungsmöglichkeiten zu sehen.',
    },
  },

  problem: {
    title: { en: 'A solvable crisis with devastating effects', de: 'Eine lösbare Krise mit verheerenden Folgen' },
    text: {
      en: 'For millions of girls in East Africa, a natural biological process is a major driver of educational inequality. This is not just a health issue; it is a barrier to a girl’s entire future.',
      de: 'Für Millionen Mädchen in Ostafrika ist ein natürlicher Vorgang eine der Hauptursachen für Bildungsungleichheit. Es geht nicht nur um Gesundheit, sondern um ihre gesamte Zukunft.',
    },
    cards: [
      {
        title: { en: 'Lost school days', de: 'Verlorene Schultage' },
        text: {
          en: 'Without menstrual products, girls often miss 4–5 days of school every month, leading to learning gaps and higher dropout rates.',
          de: 'Ohne Menstruationsprodukte verpassen Mädchen oft 4–5 Schultage pro Monat. Das führt zu Lernlücken und mehr Schulabbrüchen.',
        },
      },
      {
        title: { en: 'Health & dignity', de: 'Gesundheit & Würde' },
        text: {
          en: 'Without safe hygiene materials, many resort to unsafe alternatives that can cause infections and embarrassment.',
          de: 'Ohne sichere Hygieneartikel greifen viele zu unsicheren Alternativen, die Infektionen und Scham verursachen können.',
        },
      },
      {
        title: { en: 'Breaking the silence', de: 'Das Schweigen brechen' },
        text: {
          en: 'Cultural taboos make it hard to talk about menstruation. By teaching girls and boys together, we make these conversations normal.',
          de: 'Kulturelle Tabus erschweren Gespräche über die Menstruation. Indem wir Mädchen und Jungen gemeinsam aufklären, machen wir diese Gespräche normal.',
        },
      },
    ],
  },

  approach: {
    title: { en: 'Our approach: Equip, Educate, Empower', de: 'Unser Ansatz: Ausstatten, Aufklären, Stärken' },
    text: {
      en: 'The same three steps guide every initiative, adapted to each community with local partners.',
      de: 'Dieselben drei Schritte leiten jede Initiative, angepasst an jede Gemeinde und mit lokalen Partnern.',
    },
    steps: [
      {
        title: { en: 'Equip', de: 'Ausstatten' },
        text: {
          en: 'Schools get the hardware to produce reusable pads: durable sewing machines, spare parts and quality raw materials.',
          de: 'Schulen erhalten, was sie zur Herstellung wiederverwendbarer Binden brauchen: robuste Nähmaschinen, Ersatzteile und gutes Material.',
        },
        image: equip,
        alt: { en: 'A hand holding a reusable pad', de: 'Eine Hand hält eine wiederverwendbare Binde' },
      },
      {
        title: { en: 'Educate', de: 'Aufklären' },
        text: {
          en: 'Sewing classes and menstrual health sessions for girls and boys break taboos and build understanding of hygiene.',
          de: 'Nähkurse und Workshops zur Menstruationsgesundheit für Mädchen und Jungen brechen Tabus und vermitteln Wissen über Hygiene.',
        },
        image: educate,
        alt: { en: 'A girl paying attention in class', de: 'Ein Mädchen folgt aufmerksam dem Unterricht' },
      },
      {
        title: { en: 'Empower', de: 'Stärken' },
        text: {
          en: 'Schools run production, maintenance and distribution themselves, creating self-sustaining communities.',
          de: 'Die Schulen übernehmen Produktion, Wartung und Verteilung selbst und werden so zu eigenständigen Gemeinschaften.',
        },
        image: empower,
        alt: { en: 'A group of laughing children', de: 'Eine Gruppe lachender Kinder' },
      },
    ],
  },

  totals: {
    title: { en: 'Our impact so far', de: 'Unsere bisherige Wirkung' },
    stats: [
      { value: '10,000+', label: { en: 'girls reached', de: 'erreichte Mädchen' } },
      { value: '20', label: { en: 'sewing machines donated', de: 'gespendete Nähmaschinen' } },
      { value: '2', label: { en: 'countries', de: 'Länder' } },
      { value: '100%', label: { en: 'of donations go to project resources', de: 'der Spenden fließen in Projektressourcen' } },
    ],
  },

  donate: {
    title: { en: 'Choose where your donation goes', de: 'Wähle, wohin deine Spende geht' },
    text: {
      en: 'Every donation goes directly into machines, materials and workshops for the initiative you choose.',
      de: 'Jede Spende fließt direkt in Maschinen, Material und Workshops der Initiative deiner Wahl.',
    },
  },

  about: {
    title: { en: 'Who we are', de: 'Wer wir sind' },
    text: {
      en: 'SIMpowering is a student initiative from the Master’s in Strategy and International Management (SIM) at the University of St. Gallen (HSG), Switzerland, run as part of the SIMagination Challenge. Each year a new team of students takes the project forward, working with local partners to create sustainable, long-lasting impact.',
      de: 'SIMpowering ist eine studentische Initiative des Masterprogramms Strategy and International Management (SIM) der Universität St. Gallen (HSG) im Rahmen der SIMagination Challenge. Jedes Jahr führt ein neues Team das Projekt weiter und arbeitet mit lokalen Partnern an nachhaltiger, langfristiger Wirkung.',
    },
  },
} satisfies Record<string, Record<string, unknown>>;

