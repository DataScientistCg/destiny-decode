// @lovable.dev/vite-tanstack-config already includes
// TanStack Start, React, Tailwind, Nitro, path aliases, etc.

import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: {
      entry: "server",
    },
  },
});
