import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/ChucklesGalore/", // MUST match repo name
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
