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
						{ label: 'Avocado OS', link: '/' }
					]
				},
				{
					label: 'Hardware',
					items: [
						{ label: 'NVIDIA Jetson Orin Nano Dev Kit', link: '/supported-hardware/jetson-orin-nano/' },
						{ label: 'Raspberry Pi 4', link: '/supported-hardware/rpi-4/' },
						{ label: 'NXP i.MX 8M Plus Evaluation Kit', link: '/supported-hardware/imx-8m-plus/' }
					]
				},
				{
					label: 'SDK User Guide',
					items: [
						{ label: 'SDK Architecture', link: '/guides/sdk-architecture/' },
						{ label: 'Development Environment', link: '/guides/development-environment/' },
						{ label: 'Getting Started', link: '/guides/getting-started/' }
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
