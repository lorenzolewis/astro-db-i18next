import tailwind from "@astrojs/tailwind";
import { createResolver } from "astro-integration-kit";
import { hmrIntegration } from "astro-integration-kit/dev";
import { defineConfig } from "astro/config";
import db from "@astrojs/db"

const { default: packageName } = await import("package-name");

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind(),
		db(),
		packageName(),
		hmrIntegration({
			directory: createResolver(import.meta.url).resolve("../package/dist"),
		}),
	],
});
