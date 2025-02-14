import js from "@eslint/js"
import perfectionist from "eslint-plugin-perfectionist"
import react from "eslint-plugin-react"
import unicorn from "eslint-plugin-unicorn"
import globals from "globals"
import tseslint from "typescript-eslint"

/** @type {import('eslint').Linter.Config[]} */

export default [
  ...tseslint.configs.recommended,
  js.configs.recommended,
  react.configs.flat.recommended,
  unicorn.configs["flat/all"],
  perfectionist.configs["recommended-natural"],
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      "@typescript-eslint/no-empty-object-type": [
        "error",
        {
          allowInterfaces: "with-single-extends",
        },
      ],
      "perfectionist/sort-exports": "off",
      "perfectionist/sort-imports": "off",
      "perfectionist/sort-named-imports": "off",
      "react/react-in-jsx-scope": "off",
      "unicorn/consistent-function-scoping": "off",
      "unicorn/import-style": "off",
      "unicorn/no-keyword-prefix": "off",
      "unicorn/prevent-abbreviations": "off",
    },
  },
]
