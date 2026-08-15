import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5000,
    proxy: {
      "/leetcode": {
        target: "https://leetcode.com/graphql",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/leetcode/, ""),
      },
    },
  },
});
