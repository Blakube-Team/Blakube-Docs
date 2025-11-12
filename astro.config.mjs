// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'SmartsHub Documentation',
			customCss: [
            './src/styles.css',
      		],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/Smarts-Hub/' },
				{ icon: 'discord', label: 'Discord', href: 'https://discord.smartshub.dev/' },],
			sidebar: [
				{
					label: '0xBot',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Introduction', slug: '0xbot/introduction' },
						{ label: 'Installation', slug: '0xbot/installation' },
						{ label: 'Module installation', slug: '0xbot/moduleinstallation' },
						{ label: 'Module development', items: [
							{ label: 'Module development', slug: '0xbot/module-development/development' },
							{ label: 'TS module development', slug: '0xbot/module-development/typescript' },
							{ label: 'Module API', slug: '0xbot/module-development/api' },
							{ label: 'Module development guidelines', slug: '0xbot/module-development/guidelines' },
							
						] },
						{ label: 'Modules', items: [
							{ label: 'Tickets', slug: '0xbot/modules/tickets' },
						]  },
					],
				},
				{
					label: 'FancyGlow',
					items: [
						{ label: 'Introduction', slug: 'fancy-glow/introduction' },
						{ label: 'Installation', slug: 'fancy-glow/installation' },
						{ label: 'Utility', slug: 'fancy-glow/utility' },
						{ label: 'API', slug: 'fancy-glow/api' },
						{ label: 'FAQ', slug: 'fancy-glow/faq' }
					],
				},
                {
                    label: 'SH-Koth',
                    items: [
                        { label: 'Introduction', slug: 'sh-koth/intro/introduction' },
                        { label: 'Installation', slug: 'sh-koth/intro/installation' },
                        { label: 'How to', slug: 'sh-koth/config/how-to' },
                        { label: 'Hooks', slug: 'sh-koth/config/hooks' },
                        { label: 'Placeholders', slug: 'sh-koth/config/placeholders' },
                        { label: 'Commands', slug: 'sh-koth/config/commands' },
                        { label: 'API', slug: 'sh-koth/api/getting-started' },
                    ],
                },
                {
                    label: 'SH-Pets',
                    items: [
                        { label: 'Introduction', slug: 'sh-pets/intro/intro' },
                        { label: 'Installation', slug: 'sh-pets/intro/installation' },
                        { label: 'How to', slug: 'sh-pets/config/how-to' },
                        { label: 'Abilities and conditions', slug: 'sh-pets/config/abilities' },
                        { label: 'Placeholders', slug: 'sh-pets/config/placeholders' },
                        { label: 'Commands', slug: 'sh-pets/config/commands' },
                    ],
                },
                {
                    label: 'Disasters',
                    items: [
                        { label: 'Introduction', slug: 'disasters/intro/introduction' },
                        { label: 'Installation', slug: 'disasters/intro/installation' },
                        { label: 'How to', slug: 'disasters/config/how-to' },
                        { label: 'Placeholders', slug: 'disasters/config/placeholders' },
                        { label: 'Commands', slug: 'disasters/config/commands' },
                    ],
                },
                {
                    label: 'PS-Extras',
                    items: [
                        { label: 'Installation', slug: 'ps-extras/installation' },
                        { label: 'Config', slug: 'ps-extras/config' },
                        { label: 'Guis', slug: 'ps-extras/guis' },
                        { label: 'Commands', slug: 'ps-extras/commands' },
                        { label: 'Placeholders', slug: 'ps-extras/placeholders' },
                    ],
                },
                {
                    label: 'Floating-Heads',
                    items: [
                        { label: 'Introduction', slug: 'floating-heads/introduction' },
                        { label: 'Installation', slug: 'floating-heads/installation' }
                    ],
                }
			],
		}),
	],
	site: 'https://docs.smartshub.dev',
});
