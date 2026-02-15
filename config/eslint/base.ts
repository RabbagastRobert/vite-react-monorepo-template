import { defineConfig, globalIgnores } from "eslint/config";
import javascriptESLint from "@eslint/js";
import typescriptESLint from "typescript-eslint";
import prettierESLint from "eslint-config-prettier";

export default defineConfig([
  globalIgnores(["dist"]),

  javascriptESLint.configs.recommended,
  typescriptESLint.configs.recommendedTypeChecked,
  prettierESLint,

  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
]);
