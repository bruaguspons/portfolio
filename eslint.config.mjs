import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      "semi": ["error", "always"], // "off"
      "quotes": ["error", "double"],
      "no-console": [
        "warn",
        {
          allow: ["error", "warn"]
        }
      ],
      "@typescript-eslint/no-non-null-assertion": 0,
      "@typescript-eslint/semi": 0, // 2
      "@typescript-eslint/explicit-function-return-type": 2,
      "@typescript-eslint/space-before-function-paren": 0,
      "@/indent": ["error", 2],
      "react/react-in-jsx-scope": 0,
      // '@typescript-eslint/strict-boolean-expressions': 2,
      "@typescript-eslint/prefer-nullish-coalescing": 0,
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }]
    }
  }
]);

export default eslintConfig;
