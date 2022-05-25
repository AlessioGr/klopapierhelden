import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';
import WindiCSS from 'vite-plugin-windicss'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		prerender: {
			default: true,
			crawl: true,
		},
		vite: {
			plugins: [
				WindiCSS(),
			],
			build: {
				target: "es2020"
			}
		},
	}
};

export default config;
