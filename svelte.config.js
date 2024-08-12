import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import lang from './src/lib/translations/lang.js';

const supportedLocales = Object.keys(lang);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/moai-the-lobbyist--project' : ''
		},
		prerender: {
			crawl: false,
			entries: ['/'].concat(
				supportedLocales.reduce(
					(acc, locale) => [
						...acc,
						`/${locale}`,
						`/${locale}/sobre`,
						`/${locale}/services`,
						`/${locale}/contact`
					],
					[]
				)
			)
		}
	},
	preprocess: vitePreprocess()
};

export default config;
