import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // This tells Vite where the website will be hosted on GitHub Pages
  base: "/portfolio-React/",
});
