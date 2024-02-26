export type navigationItem = Readonly<{
  path: string
  label: string
}>

export const headerMenu: Record<string, Record<string, navigationItem[]>> = {
  en: {
    items: [
      {
        path: '/',
        label: 'Home',
      },
      {
        path: '/blog',
        label: 'Blog',
      },
      {
        path: '/tag',
        label: 'Tags',
      },
      {
        path: '/about',
        label: 'About',
      },
    ],
  },
  uk: {
    items: [
      {
        path: '/uk/',
        label: 'Home',
      },
      {
        path: '/uk/blog',
        label: 'Blog',
      },
      {
        path: '/uk/thema',
        label: 'Themen',
      },
    ],
  },
  fr: {
    items: [
      {
        path: '/fr/',
        label: 'Home',
      },
      {
        path: '/fr/blog',
        label: 'Blog',
      },
      {
        path: '/fr/thema',
        label: 'Themen',
      },
    ],
  },
  de: {
    items: [
      {
        path: '/de/',
        label: 'Home',
      },
      {
        path: '/de/blog',
        label: 'Blog',
      },
      {
        path: '/de/thema',
        label: 'Themen',
      },
    ],
  },
  es: {
    items: [
      {
        path: '/es/',
        label: 'Home',
      },
      {
        path: '/es/blog',
        label: 'Blog',
      },
      {
        path: '/es/thema',
        label: 'Themen',
      },
    ],
  },
  ru: {
    items: [
      {
        path: '/ru/',
        label: 'Home',
      },
      {
        path: '/ru/blog',
        label: 'Blog',
      },
      {
        path: '/ru/thema',
        label: 'Themen',
      },
    ],
  },
}
