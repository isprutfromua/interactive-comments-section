import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { windi } from 'svelte-windicss-preprocess';

import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess(), windi({})],

	kit: {
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					$stores: path.resolve('./src/stores'),
					$types: path.resolve('./src/types'),
					$icons: path.resolve('./src/lib/icons')
				}
			}
		}
	}
};

export default config;
