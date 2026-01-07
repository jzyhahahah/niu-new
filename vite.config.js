import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	server: {
		port: 3000,
		open: true,
	},
	build: {
		outDir: "dist",
		assetsDir: "assets",
		sourcemap: false,
		minify: "esbuild", // 使用 esbuild，Vite 默认且更快
		rollupOptions: {
			output: {
				manualChunks: {
					"react-vendor": ["react", "react-dom", "react-router-dom"],
					"antd-mobile-vendor": ["antd-mobile"],
				},
			},
		},
	},
});
