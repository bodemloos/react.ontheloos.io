import react from "@vitejs/plugin-react-swc";
import checker from "vite-plugin-checker";
import tsconfigPaths from "vite-tsconfig-paths";
// import { defineConfig } from "vite";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: "happy-dom",
  },
  plugins: [
    react(),
    tsconfigPaths(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
      },
    }),
  ],
});
