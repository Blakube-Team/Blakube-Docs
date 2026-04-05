import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Blakube Documentation',
			favicon: '/brand/BLAKUBE_ICON.png',
			customCss: [
				'./src/styles.css',
			],
			components: {
				Head: './src/components/Head.astro',
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/Blakube/' },
				{ icon: 'discord', label: 'Discord', href: 'https://discord.blakube.com/' },
			],
			sidebar: [
				{
					label: 'BK-Tops',
					items: [
						{ label: 'Introduction', slug: 'bk-tops/intro/introduction' },
						{ label: 'Installation', slug: 'bk-tops/intro/installation' },
						{ label: 'How to',       slug: 'bk-tops/config/how-to' },
						{ label: 'Hooks',        slug: 'bk-tops/config/hooks' },
						{ label: 'Placeholders', slug: 'bk-tops/config/placeholders' },
						{ label: 'Commands',     slug: 'bk-tops/config/commands' },
						{ label: 'Addons',       slug: 'bk-tops/addons/notify' },
						{ label: 'API',          slug: 'bk-tops/api/getting-started' },
					],
				},
				{
					label: 'BK-Gradients',
					items: [
						{ label: 'Introduction',   slug: 'bk-gradients/introduction' },
						{ label: 'Installation',   slug: 'bk-gradients/installation' },
						{ label: 'Modules',        slug: 'bk-gradients/modules' },
						{ label: 'Commands',       slug: 'bk-gradients/commands' },
						{ label: 'Permissions',    slug: 'bk-gradients/permissions' },
						{ label: 'config.yml',     slug: 'bk-gradients/configuration' },
						{ label: 'tags.yml',       slug: 'bk-gradients/tags' },
						{ label: 'GUI Menus',      slug: 'bk-gradients/menus' },
						{ label: 'PlaceholderAPI', slug: 'bk-gradients/placeholders' },
						{ label: 'Database',       slug: 'bk-gradients/database' },
						{ label: 'MiniMessage',    slug: 'bk-gradients/minimessage' },
						{ label: 'FAQ',            slug: 'bk-gradients/faq' },
					],
				},
			],
		}),
	],
	site: 'https://docs.blakube.com',
});
