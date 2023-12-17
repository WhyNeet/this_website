import { defineConfig } from "astro/config";
import { dirname, join as pathJoin } from "path";
import { fileURLToPath } from "url";
import tailwind from "@astrojs/tailwind";

import qwikdev from "@qwikdev/astro";

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        "@": pathJoin(dirname(fileURLToPath(import.meta.url)), "src")
      }
    }
  },
  output: "hybrid",
  prefetch: {
    defaultStrategy: "hover"
  },
  integrations: [tailwind(), qwikdev()]
});