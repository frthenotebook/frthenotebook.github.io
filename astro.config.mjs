// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://frthenotebook.github.io',
	integrations: [
		starlight({
			title: 'From the Notebook',
			logo: {
				light: './src/assets/lilac-logo.svg',
				dark: './src/assets/navy-logo.svg',
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
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
