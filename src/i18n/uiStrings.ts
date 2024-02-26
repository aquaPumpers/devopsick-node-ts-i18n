import type { Locale } from './i18n'

interface TypeUIStrings {
  [key: string]: {
    [locale in Locale]: string | undefined // If we'd enforce keys to be any of the already added language codes, it'd be impossible to add new locale strings before enabling that locale site-wide.
  }
}

export const uiStrings: TypeUIStrings = {
  siteDescription: {
    en: 'All the basics for a brand-new blog.',
    uk: 'Усі основи для абсолютно нового блогу.',
    ru: 'Все основы для абсолютно нового блога',
    fr: 'blog',
    es: 'blog',
    de: 'blog'
  },
  skipLink: {
    en: 'Skip to content',
    uk: 'Перейти до вмісту',
    ru: 'Перейти к содержанию',
    fr: 'blog',
    es: 'blog',
    de: 'blog'
  },
  pageTranslationsAvailableIn: {
    en: 'This page is also available in',
    uk: 'Ця сторінка також доступна на',
    ru: 'Эта страница также доступна на',
    fr: 'blog',
    es: 'blog',
    de: 'blog'
  },
  en: {
    en: 'English',
    uk: 'Англійська',
    ru: 'Английский',
    fr: 'blog',
    es: 'blog',
    de: 'blog'
  },
  uk: {
    en: 'Ukrainian',
    uk: 'Українська',
    ru: 'Украинский',
    fr: 'blog',
    es: 'blog',
    de: 'blog'
  },
  ru: {
    en: 'Russian',
    uk: 'Російський',
    ru: 'Русский',
    fr: 'blog',
    es: 'blog',
    de: 'blog'
  },
  tagHeadingSingular: {
    en: 'Tag',
    uk: 'Тег',
    ru: 'Тег',
    fr: 'blog',
    es: 'blog',
    de: 'blog'
  },
  tagHeadingPlural: {
    en: 'Tags',
    uk: 'Теги',
    ru: 'Теги',
    fr: 'blog',
    es: 'blog',
    de: 'blog'
  },
  postsPerTagPageDescription: {
    en: 'Posts about',
    uk: 'Пости про',
    ru: 'Посты о',
    fr: 'blog',
    es: 'blog',
    de: 'blog'
  },
  personProfilePageDescription: {
    en: 'Profile of',
    uk: 'Профіль',
    ru: 'Профиль',
    fr: 'blog',
    es: 'blog',
    de: 'blog'
  },
  pageNotFoundHeading: {
    en: 'Page not found',
    uk: 'Сторінка не знайдена',
    ru: 'Страница не найдена',
    fr: 'blog',
    es: 'blog',
    de: 'blog'
  },
  pageNotFoundBody: {
    en: '404!',
    uk: '404!',
    ru: '404!',
    fr: '404!',
    es: '404!',
    de: '404!'
  },
}
