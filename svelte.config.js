import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import WindiCSS from 'vite-plugin-windicss'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		prerender: {
			default: true,
		},
		adapter: adapter(),
		vite: {
			plugins: [
				WindiCSS(),
			],
		},
	},
};

export default config;