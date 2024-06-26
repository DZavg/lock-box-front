import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

	return {
		preview: {
			host: process.env.VITE_PREVIEW_HOST || 'localhost',
			port: Number(process.env.VITE_PREVIEW_PORT) || 3000,
		},
		server: {
			host: process.env.VITE_HOST || 'localhost',
			port: Number(process.env.VITE_PORT) || 3000,
		},
		plugins: [vue()],
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url)),
			},
		},
		build: {
			target: 'es2022',
			assetsInlineLimit: 0,
		},
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@import '@/assets/styles/variables.scss';
                         		@import '@/assets/styles/mixins.scss';
                         		@import '@/assets/styles/toastNotification.scss';`,
				},
			},
		},
	}
})
