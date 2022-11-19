import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],
	server: {
        port: 9889,
        host: "0.0.0.0",
        https: false,
    }
};

export default config;
