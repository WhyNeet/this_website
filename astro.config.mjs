import { defineConfig } from "astro/config";
import { dirname, join as pathJoin } from "path";
import { fileURLToPath } from "url";
import tailwind from "@astrojs/tailwind";
import qwikdev from "@qwikdev/astro";
import vercel from "@astrojs/vercel/serverless";
import node from "@astrojs/node";


// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        "@": pathJoin(dirname(fileURLToPath(import.meta.url)), "src")
      }
    }
  },
  output: "server",
  prefetch: {
    defaultStrategy: "hover"
  },
  integrations: [tailwind(), qwikdev()],
  adapter: vercel()
});