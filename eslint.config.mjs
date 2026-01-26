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

  // Custom Modular Monolith boundaries
  {
    files: ["modules/**"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            "@/modules/*/ui/*",
            "@/modules/*/store/*",
            "@/modules/*/animations/*",
          ],
        },
      ],
      "import/no-restricted-paths": [
        "error",
        {
          zones: [
            {
              target: "app/**",
              from: "modules/**/store",
              message: "Client store should not be used in server components",
            },
            {
              target: "app/**",
              from: "modules/**/animations",
              message:
                "GSAP animations should be invoked in client components only",
            },
          ],
        },
      ],
    },
  },
]);

export default eslintConfig;
