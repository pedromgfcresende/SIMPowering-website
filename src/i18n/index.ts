export const languages = {
  en: 'English',
  de: 'Deutsch',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

/** A piece of text in every supported language. German falls back to English if left out. */
export type Localized = { en: string; de?: string };

export function tr(text: Localized, lang: Lang): string {
  return text[lang] ?? text.en;
}

/** Prefix an internal path with the language segment ("/kenya" -> "/de/kenya"). */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return clean;
  return clean === '/' ? `/${lang}/` : `/${lang}${clean}`;
}

/** Strip the language prefix from a pathname so it can be re-localized. */
export function stripLang(pathname: string): string {
  for (const lang of Object.keys(languages)) {
    if (lang === defaultLang) continue;
    if (pathname === `/${lang}` || pathname === `/${lang}/`) return '/';
    if (pathname.startsWith(`/${lang}/`)) return pathname.slice(lang.length + 1);
  }
  return pathname;
}

/** Interface strings shared across pages. Page content lives in src/data/. */
export const ui = {
  'nav.home': { en: 'Home', de: 'Start' },
  'nav.initiatives': { en: 'Initiatives', de: 'Initiativen' },
  'nav.approach': { en: 'Our approach', de: 'Unser Ansatz' },
  'nav.team': { en: 'Team', de: 'Team' },
  'nav.contact': { en: 'Contact', de: 'Kontakt' },
  'nav.donate': { en: 'Donate', de: 'Spenden' },
  'nav.menu': { en: 'Menu', de: 'Menü' },
  'nav.language': { en: 'Language', de: 'Sprache' },

  'cta.donate': { en: 'Donate now', de: 'Jetzt spenden' },
  'cta.explore': { en: 'Explore', de: 'Entdecken' },
  'cta.contact': { en: 'Get in touch', de: 'Kontakt aufnehmen' },
  'cta.email': { en: 'Email us', de: 'Schreib uns' },

  'initiative.status.active': { en: 'Active', de: 'Aktiv' },
  'initiative.status.new': { en: 'New this year', de: 'Neu dieses Jahr' },
  'initiative.status.continuing': { en: 'Continuing', de: 'Wird fortgeführt' },
  'initiative.status.completed': { en: 'Completed', de: 'Abgeschlossen' },
  'initiative.other': { en: 'Our other initiatives', de: 'Unsere weiteren Initiativen' },
  'initiative.partners': { en: 'Partners', de: 'Partner' },
  'home.partners': { en: 'Our partners', de: 'Unsere Partner' },

  'donate.title': { en: 'Support this initiative', de: 'Unterstütze diese Initiative' },
  'donate.sub': {
    en: '100% of donations go to project resources: machines, materials and training. Here is what your gift makes possible.',
    de: '100 % der Spenden fließen in Projektressourcen: Maschinen, Material und Schulungen. Das ermöglicht deine Spende.',
  },
  'donate.noLink': {
    en: 'Our donation page for this initiative is launching soon. Until then, write to us and we will tell you how to give.',
    de: 'Die Spendenseite für diese Initiative ist bald online. Bis dahin schreib uns, und wir sagen dir, wie du spenden kannst.',
  },

  'team.empty': {
    en: 'Introductions of this team are coming soon.',
    de: 'Das Team stellt sich bald vor.',
  },

  'contact.title': { en: 'Contact & support', de: 'Kontakt & Unterstützung' },
  'contact.follow': { en: 'Follow us', de: 'Folge uns' },

  'footer.tag': { en: 'SIMagination — social impact @ HSG', de: 'SIMagination — soziale Initiative der HSG' },
  'footer.rights': { en: 'All rights reserved.', de: 'Alle Rechte vorbehalten.' },

  'notFound.title': { en: 'Page not found', de: 'Seite nicht gefunden' },
  'notFound.text': { en: 'This page does not exist (anymore).', de: 'Diese Seite gibt es nicht (mehr).' },
  'notFound.back': { en: 'Back to home', de: 'Zur Startseite' },
} satisfies Record<string, Localized>;

export type UiKey = keyof typeof ui;

export function useTranslations(lang: Lang) {
  return (key: UiKey) => tr(ui[key], lang);
}
