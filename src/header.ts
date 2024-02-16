export type navigationItem = Readonly<{
	path: string,
	label: string,
}>

export const headerMenu: Record<string, Record<string, navigationItem[]>> = {
	en: {
		items: [{
			path: '/',
			label: 'Home',
		},
		{
			path: '/blog',
			label: 'Blog'
		},
		{
			path: '/tag',
			label: 'Tags'
		},
		{
			path: '/about',
			label: 'About'
		}]
	},
	uk: {
		items: [{
			path: '/uk/',
			label: 'Home'
		},
		{
			path: '/uk/blog',
			label: 'Blog'
		},
		{
			path: '/uk/thema',
			label: 'Themen'
		},]
	},
};
