import { defineConfig, passthroughImageService } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import rehypeExternalLinks from 'rehype-external-links'
import { defaultLocale, locales } from './src/i18n/i18n';
import { site } from './src/consts';
import partytown from '@astrojs/partytown';
import million from "million/compiler";
import astroExpressiveCode from 'astro-expressive-code'
import million from 'million/compiler'
import yaml from '@rollup/plugin-yaml'
import { rehypeHeadingIds } from "@astrojs/markdown-remark"
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import vercel from '@astrojs/vercel/serverless';

import partytown from '@astrojs/partytown'
import { remarkReadingTime } from './src/utils/readTime.ts'

const sitemapLocales = Object.fromEntries(locales.map((_, i) => [locales[i], locales[i]])) // Create an object with keys and values based on locales
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: site,
	output: 'server',
    adapter: vercel({
		webAnalytics: {
			enabled: true,
		  },
		imageService: true,
	  }),
	image: {
		service: 
		passthroughImageService(),
	  },
	integrations: [
		astroExpressiveCode({
			themes: ['material-theme-palenight', 'material-theme-palenight'],
			shiki: {},
		  }),
		  mdx({
			syntaxHighlight: 'shiki',
			shikiConfig: {
			  theme: 'material-theme-palenight',
			  wrap: true,
			},
			drafts: true,
		  }),
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
		  yaml(),
		],
	  },
	  prefetch: {
		prefetchAll: true
	  },
	  markdown: {
		rehypePlugins:[[
			rehypeExternalLinks, {
				target: '_blank',
				rel: ['nofollow', 'noreferrer'],
			}
		]],
		remarkPlugins: [remarkReadingTime],
		drafts: true,
		shikiConfig: {
		  theme: 'material-theme-palenight',
		  wrap: true,
		},
	}
});
