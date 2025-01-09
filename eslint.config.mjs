import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import { off } from "process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // "no-console": "warn", // Example: Warn if console statements are used
      // "quotes": ["error", "single"], // Enforce single quotes
      '@typescript-eslint/no-explicit-any': off, // Disable the rule for any type
    },
  },
];

export default eslintConfig;
