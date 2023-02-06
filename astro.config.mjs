import { defineConfig } from "astro/config";

// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [compress()],
  output: "server",
  adapter: cloudflare(),
});
