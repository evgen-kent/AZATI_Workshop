import { defineConfig, loadEnv } from 'vite'
import svgr from 'vite-plugin-svgr'
import react from '@vitejs/plugin-react'

export default ({ mode }) => {
	process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
	return defineConfig({
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
}
// https://vitejs.dev/config/

