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

## Project Setup:

### Option 1: Create a new GitHub repository using the template

Click on the `Use this template` button to create a new GitHub repository which will use the `template_node-ts` as a starter for the new repository

### Option 2: Clone the Project and Reset Git History

1. Download / Clone the repo.
2. Rename the directory from template_node-ts to whatever you want
3. Remove the `.git` directory (ex. via `rm -rf .git`).
4. Initialize a new `.git` directory (via `git init`).

```bash
# Clone the repo
git clone git@github.com:pszponder/template_node-ts.git

# Rename directory
mv template_node-ts <new-dir-name>

# Move inside the new directory and clean / reset git
cd <new-dir-name>
rm -rf .git
git init
```

### Option 3: Using degit

Use [degit](https://github.com/Rich-Harris/degit) to download the project template

### Option 4: Using "Git Clone No History"

I wrote an npm package which basically does the same as option 2. You can read more about `Git Clone No History` [here](https://www.npmjs.com/package/npm-git-clone-no-history)

## Usage:

This project is designed to work with TypeScript files.

All of your source code should go into the `src` directory

When you build or start the application using one of the appropriate commands (see the scripts section), the transpiled code will be output to a `dist` folder.

### A note on lint-staged and Husky

I decided to remove lint-staged and Husky from the main branch.

Instead, if you would like to see the implementation of the template using lint-staged and Husky, refer to the `with-husky` branch.

### Testing and Code Snippets

A `_scratch` directory can be found in under the `src` directory which contains a `scratch.ts` file. This file and directory are intended to be a place to play around with code and code snippets, or run some quick tests without needing to pollute your main source code.

To run the `scratch.ts` file, you can use the `pnpm scratch` command. This will transpile and execute `scratch.js` in the `dist` directory.

**_NOTE_**: Don't import any files from the `_scratch` directory into `index.ts` unless you want your source code to compile your scratch files as well.

## Scripts:

Use the following command to run the scripts:
`pnpm <script-name>`

- `clean`: Deletes the `dist` directory and all of its contents
- `build`: `Rebuilds` the `build` directory and its contents
- `build-prod`: Same as `build` but output code is minified and bundled, also build d.ts type files
- `start`: Builds the project and runs transpiled code from the `dist` directory
- `watch`: Transpiles code and executes it in watch mode. Any changes to code will cause code to re-transpile and re-run.
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
- `scratch`: Runs the transpiles and `scratch.ts` file located in the `src/_scratch` directory

## References:

- [stemmlerjs/simple-typescript-starter](https://github.com/stemmlerjs/simple-typescript-starter)
- [wesbos/eslint-config-wesbos](https://github.com/wesbos/eslint-config-wesbos)
- [Matt Pocock - How to publish packages to npm in 2023](https://www.youtube.com/watch?v=eh89VE3Mk5g)
- [Fireship - How to Setup Node.js with TypeScript in 2023](https://www.youtube.com/watch?v=H91aqUHn8sE)
