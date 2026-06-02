// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://frthenotebook.github.io',
	integrations: [
		starlight({
			title: 'From the Notebook',
			customCss: [
				// Fontsource files for to regular and semi-bold font weights.
				'@fontsource/stack-sans-text/300.css',
				'@fontsource/stack-sans-text/500.css',
				'@fontsource/stack-sans-notch/300.css',
				'@fontsource/stack-sans-notch/500.css'
			],
			logo: {
				light: './src/assets/navy-logo.svg',
				dark: './src/assets/lilac-logo.svg',
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
						{ label: 'Introduction', slug: 'intro' },
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
					label: 'Miscellanea',
					items: [{ autogenerate: { directory: 'Miscellanea' } }],
				},
			],
		}),
	],
});

starlight({
	favicon: '/navy-logo.svg',
	head: [
		// Add ICO favicon fallback for Safari.
		{
			tag: 'link',
			attrs: {
				rel: 'icon',
				href: '/favicon.ico',
				sizes: '32x32',
			},
		},
	],
	title: ''
});