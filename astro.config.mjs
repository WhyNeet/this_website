import { defineConfig } from "astro/config";
import { dirname, join as pathJoin } from "path";
import { fileURLToPath } from "url";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import node from "@astrojs/node";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        "@": pathJoin(dirname(fileURLToPath(import.meta.url)), "src"),
      },
    },
  },
  output: "server",
  prefetch: {
    defaultStrategy: "hover",
  },
  integrations: [tailwind(), solidJs()],
  // adapter: node({
  //   mode: "standalone"
  // })
  adapter: vercel(),
});
