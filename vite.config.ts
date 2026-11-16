// @lovable.dev/vite-tanstack-config already includes TanStack Start, React,
// Tailwind, path aliases, and the Nitro build integration.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import netlify from "@netlify/vite-plugin-tanstack-start";

export default defineConfig({
  plugins: [netlify()],
  tanstackStart: {
    // Keep the existing server entry used by the SSR error wrapper.
    server: { entry: "server" },
  },
});
