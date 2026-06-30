// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax';

// https://astro.build/config
export default defineConfig({
	site: 'https://frthenotebook.github.io',
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeMathjax],
	},
	integrations: [
		starlight({
			title: 'TheN0tebook',
			favicon: '/FrT.svg',
			head: [
				// Add ICO favicon fallback for Safari.
				{
					tag: 'link',
					attrs: {
						rel: 'icon',
						href: '/FrT.ico',
						sizes: '32x32',
					},
				},
			],
			customCss: [
				// Fontsource files for to regular and semi-bold font weights.
				'@fontsource/syne-tactile',
				'@fontsource/dm-mono/400.css',
				'@fontsource/dm-mono/500.css',
				// '@fontsource-variable/dm-sans/wght.css',
				'@fontsource-variable/eb-garamond/wght.css',
				// Custom CSS file for additional styles.
				'./src/styles/mono-colors.css',
				'./src/styles/custom.css'
			],
			logo: {
				light: './src/assets/clover.svg',
				dark: './src/assets/clover-beige.svg',
				replacesTitle: true,
			},
			social: [
				{ 
					icon: 'github', 
					label: 'GitHub', 
					href: 'https://github.com/frtheatelier' 
				},
				{ 
					icon: 'instagram', 
					label: 'Instagram', 
					href: 'https://instagram.com/frtheatelier' 
				},
				{ 
					icon: 'star', 
					label: 'tumblr', 
					href: 'https://frthenotebook.tumblr.com' 
				}
			],
			sidebar: [
				{
					label: 'Read me!',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Introduction', slug: 'index' },
						{ label: 'Development Log', slug: 'devlog' },
					],
				},
				{
					label: 'OUR0BOROS',
					items: [{ autogenerate: { directory: 'OUR0BOROS' } }],
				},
				{
					label: 'Errs of Kepler',
					items: [{ autogenerate: { directory: 'Errs of Kepler' } }],
				},
				{
					label: 'SID',
					items: [{ autogenerate: { directory: 'SID' } }],
				},
				{
					label: 'Miscellanea',
					items: [{ autogenerate: { directory: 'Miscellanea' } }],
				},
			],
			pagination: true,
		}),
	],
});