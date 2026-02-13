import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Blakube Documentation',
			customCss: [
            './src/styles.css',
      		],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/Blakube/' },
				{ icon: 'discord', label: 'Discord', href: 'https://discord.blakube.com/' },],
			sidebar: [
                {
                    label: 'BK-Tops',
                    items: [
                        { label: 'Introduction', slug: 'bk-tops/intro/introduction' },
                        { label: 'Installation', slug: 'bk-tops/intro/installation' },
                        { label: 'How to', slug: 'bk-tops/config/how-to' },
                        { label: 'Hooks', slug: 'bk-tops/config/hooks' },
                        { label: 'Placeholders', slug: 'bk-tops/config/placeholders' },
                        { label: 'Commands', slug: 'bk-tops/config/commands' },
                        { label: 'Addons', slug: 'bk-tops/addons/notify' },
                        { label: 'API', slug: 'bk-tops/api/getting-started' },
                    ],
                }
			],
		}),
	],
	site: 'https://docs.blakube.com',
});
