# Node / TypeScript Template

This is a starter project template for Node.js with TypeScript support. It is intended to be used for backend Node.js projects but with ESM Module Syntax and support for frontend integration.

## Requirements:

This setup is configured using [`pnpm`](https://pnpm.io/). If you would like to use `npm` or `yarn` instead, you will need to update the scripts in the file.

## Features:

- Configured for use with [`pnpm`](https://pnpm.io/)
- TypeScript support
- Uses ESModule Syntax for module `import` and `export`
- ESLint Configuration extended for use in TypeScript using Airbnb recommendations
- Prettier Configuration for code formatting
- Husky & lintstaged configuration for linting and testing code on commit

## Usage:

### Option 1: Create a new GitHub repository using the template

Click on the `Use this template` button to create a new GitHub repository which will use the `template_node-ts` as a started for the new repository

### Option 2: Clone the Project and Reset Git History

1. Download / Clone the repo.
2. Remove the `.git` directory (ex. via `rm -rf .git`).
3. Initialize a new `.git` directory (via `git init`).

### Option 3: Using degit

Use [degit](https://github.com/Rich-Harris/degit) to download the project template

### Option 4: Using "Git Clone No History"

I wrote an npm package which basically does the same as option 2. You can read more about `Git Clone No History` [here](https://www.npmjs.com/package/npm-git-clone-no-history)

## Scripts:

Use the following command to run the scripts:
`pnpm <script-name>`

- `clean`: Deletes the `dist` directory and all of its contents
- `build`: `Rebuilds` the `build` directory and its contents
- `build-prod`: Same as `build` but output code is minified and bundled
- `start`: Builds the project and runs compiled code from the `dist` directory
- `start-watch`: Compiles code and executes it in watch mode. Any changes to code will cause code to recompile and re-run.
- `start-prod`: Same as `start` except output code is minified and bundled
- `test`: Runs all `...spec.ts` and `...test.ts` files using `Vitest`
- `test-related`: Pass in space-separated file paths to files in the `src` directory you wish to run tests for
- `test-watch`: Runs `Vitest` in "watch" mode (changes to test files cause `Vitest` to rerun them)
- `check-format`: Check for format errors in TS files in `src` directory
- `check-lint`: Check for linting errors in TS files in `src` directory
- `check-types`: Check for type errors in TS files in `src` directory
- `check-all`: Check all TS files in `src` directory for errors (formatting, linting, or type errors)
- `fix-format`: Fix all formatting errors in TS files in `src` directory
- `fix-lint`: Fix all linting errors in TS files in `src` director
- `fix-all`: Fix all formatting and linting errors & rebuild the project

## References:

This project was heavily influenced by the following 2 repositories:

- [stemmlerjs/simple-typescript-starter](https://github.com/stemmlerjs/simple-typescript-starter)
- [wesbos/eslint-config-wesbos](https://github.com/wesbos/eslint-config-wesbos)
