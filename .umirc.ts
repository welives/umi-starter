import { defineConfig } from "umi";

export default defineConfig({
  npmClient: "pnpm",
  presets: [require.resolve("@umijs/preset-vue")],
  plugins: ["@umijs/plugins/dist/tailwindcss"],
  tailwindcss: {},
});
