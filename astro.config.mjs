// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.avocadolinux.org',
  base: '/',
	integrations: [
		starlight({
			title: 'Avocado Linux',
			logo: {
				light: './src/assets/dark-color.png',
				dark: './src/assets/white-color.png',
				alt: 'Avocado Linux Logo',
				replacesTitle: true
			},
			sidebar: [
				{
					label: 'Introduction',
					items: [
						{ label: 'Introduction', link: '/' }
					]
				},
				{
					label: 'SDK User Guide',
					items: [
						{ label: 'SDK Architecture', link: '/guides/sdk-architecture/' },
						{ label: 'Development Environment', link: '/guides/development-environment/' },
						{ label: 'SDK Containers', link: '/guides/sdk-containers/' },
						{ label: 'Package Management', link: '/guides/package-management/' },
						{ label: 'Building System Extensions', link: '/guides/building-system-extensions/' },
						{ label: 'Building Configuration Extensions', link: '/guides/building-configuration-extensions/' },
						{ label: 'Creating System Images', link: '/guides/creating-system-images/' },
						{ label: 'Hardware-in-the-Loop', link: '/guides/hardware-in-the-loop/' },
						{ label: 'Advanced Workflows', link: '/guides/advanced-workflows/' }
					]
				},
				{
          label: 'Community',
          items: [
            { label: 'Code of Conduct', link: '/coc/' },
            { label: 'Privacy Statement', link: '/privacy/' }
          ]
        },
			],
		}),
	],
});
