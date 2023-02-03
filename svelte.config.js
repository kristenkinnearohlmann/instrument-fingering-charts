import adapter from '@sveltejs/adapter-auto';
import pkg from 'svelte-preprocess';
const { sveltePreprocess } = pkg;

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	}
};

export default {
	config,
	sveltePreprocess
};
