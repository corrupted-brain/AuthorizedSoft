import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/AuthorizedSoft/", // Change this to match your repo name
  build: {
    outDir: "dist",
  },
});
