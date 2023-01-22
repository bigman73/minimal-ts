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
   - Automatic code formatting with `prettier`
   - `eslint` coding style validation
     - `jsdoc` and `tsdoc` rules enforcement
     - `prettier` integration
     - Validation of correct import order with `eslint-plugin-import`
5. `husky` git [hooks](https://git-scm.com/docs/githooks)
   - Use `commitlint` to ensure that git commit messages comply with [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) standards
   - Validate the code quality of staged sources files upon commit with `lint-staged`
6. `jest` unit tests
7. `pnpm` package manager
8. NodeJS Continuos Integration Github workflows
    - lint
    - Unit Tests
    - Auto Version bump

# Prerequisites

## NodeJS

Install [NodeJS](https://nodejs.org/en/download/) 16 or above, either directly or with `nvm`

# Getting started

## Usage
### npm
```shell
npm i a-minimal-ts
```

### yarn
```shell
yarn add a-minimal-ts
```


### pnpm
```shell
pnpm add a-minimal-ts
```

# Local development


## PNPM installation

Install the `pnpm` NodeJS package manager

```shell
npm install pnpm -g
```

## Install

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

Done by github workflow actions
