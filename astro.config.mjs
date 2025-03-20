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
			social: {
				github: 'https://github.com/avocado-linux',
			},
			sidebar: [
				{
          label: 'Community',
          items: [
            { label: 'Code of Conduct', link: '/coc/' }
          ]
        }
			],
		}),
	],
});
