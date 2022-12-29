# a-minimal-ts

A demo package with minimal Typescript functionality.
This package can be used as a skeleton or template for quickly building new TypeScript packages, without wasting time on setup of boilerplate configurations and supporting tools.

Provides the following functionality:

1. Module style (import/export)
2. API
   - `multiply` - multiplies two numbers
   - `wrapInArray` - generic function
3. Typescript
4. Code Quality
   - Check code formatting with `prettier`
   - `eslint` coding style validation
     - `jsdoc` and `tsdoc` rules enforcement
6. `jest` unit tests
7. `husky` git [hooks](https://git-scm.com/docs/githooks) - ensure that git commits are of high quality
8. `commitlint` - ensure that commit subjects comply with [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) specifications
9. `pnpm` package manager
10. NodeJS Continuos Integration Github workflows
    - Prettier and lint
    - Unit Tests
    - Auto Version bump

# Prerequisites

## NodeJS

Install [NodeJS](https://nodejs.org/en/download/) 16 or above.

## PNPM installation

Install the `pnpm` NodeJS package manager

```
npm install pnpm -g
```

# Getting started

Run the command:

```shell
pnpm install
```

# Tests

## Running `jest` unit tests

Run the command:

```shell
pnpm test
```

# Versioning and Release
TODO

Done by github workflow actions
