import type { Locale } from './i18n'

interface TypeUIStrings {
  [key: string]: {
    [locale in Locale]: string | undefined // If we'd enforce keys to be any of the already added language codes, it'd be impossible to add new locale strings before enabling that locale site-wide.
  }
}

export const uiStrings: TypeUIStrings = {
  siteDescription: {
    en: 'All the basics for a brand-new blog.',
    uk: 'Die Basics für eine niegelnagelneues Blog',
    ru: 'De start voor een gloednieuw blog',
  },
  skipLink: {
    en: 'Skip to content',
    uk: 'Zum Inhalt springen',
    ru: 'Naar inhoud springen',
  },
  pageTranslationsAvailableIn: {
    en: 'This page is also available in',
    uk: 'Diese Seite gibt es auch auf',
    ru: 'Deze text is ook beschikbaar in het',
  },
  en: {
    en: 'English',
    uk: 'englisch',
    ru: 'Engels',
  },
  uk: {
    en: 'German',
    uk: 'deutsch',
    ru: 'Duits',
  },
  ru: {
    en: 'Dutch',
    uk: 'niederländisch',
    ru: 'Nederlands',
  },
  tagHeadingSingular: {
    en: 'Tag',
    uk: 'Thema',
    ru: 'Onderwerp',
  },
  tagHeadingPlural: {
    en: 'Tags',
    uk: 'Themen',
    ru: 'Onderwerpen',
  },
  postsPerTagPageDescription: {
    en: 'Posts about',
    uk: 'Posts zum Thema',
    ru: 'Posts met onderwerp',
  },
  personProfilePageDescription: {
    en: 'Profile of',
    uk: 'Profil von',
    ru: 'Profiel van',
  },
  pageNotFoundHeading: {
    en: 'Page not found',
    uk: 'Seite nicht gefunden',
    ru: 'Pagina niet gevonden',
  },
  pageNotFoundBody: {
    en: '404!',
    uk: '404!',
    ru: '404!',
  },
}
