# Rslib Contributing Guide

Thanks for that you are interested in contributing to Rslib. Before starting your contribution, please take a moment to read the following guidelines.

## Install Node.js

Use [fnm](https://github.com/Schniz/fnm) or [nvm](https://github.com/nvm-sh/nvm) to run the command below. This will switch to the Node.js version (currently 18) specified in the project's `.nvmrc` file.

```bash
# with fnm
fnm use

# with nvm
nvm use
```

## Install Dependencies

Enable [pnpm](https://pnpm.io/) with corepack:

```bash
corepack enable
```

Install dependencies:

```bash
pnpm install
```

What this will do:

- Install all dependencies.
- Create symlinks between packages in the monorepo
- Run the prepare script to build all packages, powered by [nx](https://nx.dev/).

## Making Changes and Building

Once you have set up the local development environment in your forked repo, we can start development.

### Checkout A New Branch

It is recommended to develop on a new branch, as it will make things easier later when you submit a pull request:

```sh
git checkout -b MY_BRANCH_NAME
```

### Build the Package

Use [nx build](https://nx.dev/nx-api/nx/documents/run) to build the package you want to change:

```sh
npx nx build @rslib/core
```

Build all packages:

```sh
pnpm run build
```

You can also use the watch mode to automatically rebuild the package when you make changes:

```sh
npx nx build @rslib/core --watch
```

## Testing

### Add New Tests

If you've fixed a bug or added code that should be tested, then add some tests.

You can add unit test cases in the `<PACKAGE_DIR>/tests` folder. The test runner is based on [Vitest](https://vitest.dev/).

### Run Unit Tests

Before submitting a pull request, it's important to make sure that the changes haven't introduced any regressions or bugs. You can run the unit tests for the project by executing the following command:

```sh
pnpm run test:unit
```

You can also run the unit tests of single package:

```sh
pnpm run test:unit packages/core
```

### Run artifact tests

Rslib will also verify the correctness of generated artifacts. You can run the artifact tests by executing the following command:

```sh
pnpm run test:artifact
```

If you need to run a specified test, you can add keywords to filter:

```sh
# Only run test cases which contains `dts` keyword in file path
pnpm test:artifact dts
# Only run test cases which contains `dts` keyword in test name
pnpm test:artifact -t dts
```

## Linting

To help maintain consistency and readability of the codebase, we use [Biome](https://github.com/biomejs/biome) to lint the codes.

You can run the linters by executing the following command:

```sh
pnpm run lint
```

For VS Code users, you can install the [Biome VS Code extension](https://marketplace.visualstudio.com/items?itemName=biomejs.biome) to see lints while typing.

## Caveats

The project is still in its early stages and under active development, so it possible dependents on Rsbuild or Rspack canary versions to test the latest features. The current canary versions are:

| Package      | Link                                                    |
| ------------ | ------------------------------------------------------- |
| @rspack/core | [PR](https://github.com/web-infra-dev/rspack/pull/7493) |