import { configDefaults, defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        environment: "node",
        reporters: "verbose",
        exclude: [
            ...configDefaults.exclude,
            "packages/template/*",
            "build/**/*",
            "dist/**/*",
        ],
        coverage: {
            reporter: ["text"],
        },
    },
});
