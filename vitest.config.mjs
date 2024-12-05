import { configDefaults, defineConfig } from "vitest/config";

export default defineConfig({
   test: {
      globals: true,
      coverage: {
         reporter: ["text", "html"],
      },
      exclude: [
         ...configDefaults.exclude,
         "dist/*",
         "coverage/*",
         ".prettier.mjs",
         "eslint.config.mjs",
         "release.config.mjs",
         "rollup.config.mjs",
         "vitest.config.mjs",
      ],
   },
});
