import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import rehypeExternalLinks from 'rehype-external-links'
import { defaultLocale, locales } from './src/i18n/i18n';
import { site } from './src/consts';
import partytown from '@astrojs/partytown';
import million from "million/compiler";

const sitemapLocales = Object.fromEntries(locales.map((_, i) => [locales[i], locales[i]])) // Create an object with keys and values based on locales

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: site,
	integrations: [
		mdx(),
    react(),
	partytown(), 
    tailwind({
    applyBaseStyles: false,
  }),
		sitemap({
			filter: (page) => page.secret !== true,
			i18n: {
				defaultLocale: defaultLocale,
				locales: sitemapLocales,
			}
		})
	],
	i18n: {
		defaultLocale: defaultLocale,
		locales: locales,
	},
	vite: {
		plugins: [
		  million.vite({
			mode: "react",
			server: true,
			auto: {
			  threshold: 0.05,
			  skip: ["useBadHook", /badVariable/g],
			},
		  }),
		],
	  },
	markdown: {
		rehypePlugins:[[
			rehypeExternalLinks, {
				target: '_blank',
				rel: ['nofollow', 'noreferrer'],
			}
		]]
	}
});
