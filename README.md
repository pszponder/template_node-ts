# Node / TypeScript Template

This is a starter project template for Node.js with TypeScript support. It is intended to be used for backend Node.js projects.

## Requirements:

This setup is configured using [`pnpm`](https://pnpm.io/). If you would like to use `npm` or `yarn` instead, you will need to update the scripts in the file.

## Features:

- Configured for use with [`pnpm`](https://pnpm.io/)
- TypeScript support
- ESLint Configuration extended for use in TypeScript using Airbnb recommendations
- Prettier Configuration for code formatting
- Husky configuration for linting code on commit

## Usage:

1. Download / Clone the repo.
2. Remove the `.git` directory (ex. via `rm -rf .git`).
3. Initialize a new `.git` directory (via `git init`).

## Scripts:

Use the following command to run the scripts:
`pnpm <script-name>`

- `"build"`: Rebuilds `build` directory and its contents.
- `"start:dev"`: Starts application using `Nodemon` and runs the TypeScript code directly in the `src` directory.
- `"start"`: Builds the project and then runs compiled code from the `build` directory.
- `"prettier-format"`: Formats the code in the `src` directory
- `"lint"`: Uses `eslint` to lint code in the `src` directory
- `"test"`: Runs `jest`
- `"test:dev"`: Runs `jest --watchAll`

## References:

This project was heavily influenced by the following 2 repositories:

- [stemmlerjs/simple-typescript-starter](https://github.com/stemmlerjs/simple-typescript-starter)
- [wesbos/eslint-config-wesbos](https://github.com/wesbos/eslint-config-wesbos)
