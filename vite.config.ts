import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		svgr({
			include: '**/*.svg?react'
		})
	],
	server: {
		port: 5173,
		host: '127.0.0.1'
	},
	base: '/AZATI_Workshop/'
})
