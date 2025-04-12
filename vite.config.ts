import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: "src/widget/index.tsx",
      output: {
        entryFileNames: "ragpi-widget.js",
        format: "iife",
        inlineDynamicImports: true,
      },
    },
  },
});
