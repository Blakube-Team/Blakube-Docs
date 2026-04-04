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
                },
                {
                    label: 'BK-Gradients',
                    items: [
                        { label: 'Introduction', slug: 'bk-gradients/intro/introduction' },
                        { label: 'Installation', slug: 'bk-gradients/intro/installation' },
                        { label: 'Modules', slug: 'bk-gradients/modules/modules' },
                        { label: 'Commands', slug: 'bk-gradients/config/commands' },
                        { label: 'Permissions', slug: 'bk-gradients/config/permissions' },
                        { label: 'config.yml', slug: 'bk-gradients/config/configuration' },
                        { label: 'tags.yml', slug: 'bk-gradients/config/tags' },
                        { label: 'GUI Menus', slug: 'bk-gradients/gui/menus' },
                        { label: 'PlaceholderAPI & Database', slug: 'bk-gradients/reference/placeholders-database' },
                        { label: 'MiniMessage & FAQ', slug: 'bk-gradients/reference/minimessage-faq' },
                    ],
                },
			],
		}),
	],
	site: 'https://docs.blakube.com',
});