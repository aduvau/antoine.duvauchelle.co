import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	extensions: ['.svelte', '.md', '.svx'],
	preprocess: [
		vitePreprocess(),
		mdsvex({
			smartypants: true,
			remarkPlugins: [],
			rehypePlugins: [],
			components: {
				AudioPlayer: path.resolve('src/lib/AudioPlayer.svelte')
			},
			extensions: ['.md']
		})
	],

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter()
	},
	alias: {
		'@types': path.resolve('./src/types'),
		'@lib': path.resolve('./src/lib')
	}
};

export default config;
