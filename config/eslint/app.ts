import { defineConfig } from "eslint/config";
import baseConfig from "./base.ts";
import reactHooksESLint from "eslint-plugin-react-hooks";
import reactRefreshESLint from "eslint-plugin-react-refresh";

export default defineConfig([
  baseConfig,

  reactHooksESLint.configs.flat.recommended,
  reactRefreshESLint.configs.vite,

  {
    files: ["**/*.{ts,tsx}"],
  },
]);
