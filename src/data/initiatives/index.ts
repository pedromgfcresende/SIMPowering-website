// Registry of all country initiatives.
// To add a new one: copy kenya.ts, edit it, and add it to the list below.
// The page /<slug>, its German version, the menu entry and the home page card are generated automatically.

import type { Initiative } from './types';
import { kenya } from './kenya';
import { tanzania } from './tanzania';

export const initiatives: Initiative[] = [kenya, tanzania].sort((a, b) => a.order - b.order);

export function getInitiative(slug: string): Initiative | undefined {
  return initiatives.find((i) => i.slug === slug);
}

export type { Initiative } from './types';
