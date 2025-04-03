import { defineConfig } from "vite";
import postcss from "vite-plugin-postcss";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), postcss({ configFilePath: "./my-postcss-config.js" })],
  server: {
    port: 3000,
  },
});
