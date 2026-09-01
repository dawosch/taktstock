import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

const fromRoot = (path: string) =>
  fileURLToPath(new URL(path, import.meta.url));

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    dts({
      tsconfigPath: fromRoot("tsconfig.json"),
      entryRoot: "src",
      include: ["src"],
    }),
    ...(mode === "test"
      ? [tsconfigPaths({ projects: [fromRoot("tsconfig.json")] })]
      : []),
  ],
  build: {
    lib: {
      entry: fromRoot("src/index.ts"),
      formats: ["es"],
      fileName: "index",
    },
    rollupOptions: {
      external: (id) => !id.startsWith(".") && !id.startsWith("/"),
    },
    outDir: "dist",
    sourcemap: true,
  },
  test: {
    environment: "jsdom",
  },
}));
