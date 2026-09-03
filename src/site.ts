export const site = {
  title: 'Erik Pillon',
  tagline: 'Mathematician, actuary, triathlete-in-training',
  description:
    'Mathematician working as an actuary, with a past in research and IT. I build small tools, write about science and books, and train for long races.',
  url: 'https://erikpillon.github.io',
  author: 'Erik Pillon',
  email: 'erik.pillon@gmail.com',
  locale: 'en',
} as const;

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/writing', label: 'Writing' },
  { href: '/about', label: 'About' },
] as const;

export const socials = [
  { label: 'GitHub', href: 'https://github.com/ErikPillon', handle: '@ErikPillon' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/erikpillon', handle: 'in/erikpillon' },
  { label: 'Substack', href: 'https://scientificchronicles.substack.com/', handle: 'Scientific Chronicles' },
  { label: 'Instagram', href: 'https://www.instagram.com/erikpillon', handle: '@erikpillon' },
  { label: 'Email', href: `mailto:${site.email}`, handle: site.email },
] as const;

/** The half-Ironman that all the training is pointed at. */
export const raceDay = new Date('2026-09-20T00:00:00Z');
