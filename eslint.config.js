/** @type {import('eslint').Linter.Config[]} */

import js from "@eslint/js"
import perfectionist from "eslint-plugin-perfectionist"
import react from "eslint-plugin-react"
import unicorn from "eslint-plugin-unicorn"
import unusedImports from "eslint-plugin-unused-imports"
import globals from "globals"
import tseslint from "typescript-eslint"

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  },
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  ...tseslint.configs.recommended,
  js.configs.recommended,
  react.configs.flat.recommended,
  unicorn.configs.all,
  {
    plugins: {
      perfectionist,
      "unused-imports": unusedImports,
    },
    rules: {
      ...perfectionist.configs["recommended-natural"].rules,
      "@next/next/no-img-element": "off",
      "@typescript-eslint/no-empty-object-type": [
        "error",
        { allowInterfaces: "with-single-extends" },
      ],
      "perfectionist/sort-imports": [
        "error",
        {
          newlinesBetween: "never",
          sortSideEffects: true,
        },
      ],
      // "react/react-in-jsx-scope": "off",
      // "unicorn/consistent-function-scoping": "off",
      // "unicorn/import-style": "off",
      // "unicorn/no-keyword-prefix": "off",
      // "unicorn/prevent-abbreviations": "off",
      "unused-imports/no-unused-imports": "error",
    },
  },
]
