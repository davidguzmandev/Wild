import globals from "globals";
import js from "@eslint/js";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

/** @type {import('eslint').Linter.Config} */
export default {
  files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  languageOptions: {
    globals: globals.browser,
    parser: tsParser, // Agregamos el parser para TypeScript
  },
  plugins: {
    "@typescript-eslint": ts,
  },
  rules: {
    ...js.configs.recommended.rules, // Configuración recomendada para JavaScript
    ...ts.configs.recommended.rules, // Configuración recomendada para TypeScript
  },
};
