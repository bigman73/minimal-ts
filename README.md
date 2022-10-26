# a-minimal-ts

A demo package with minimal Typescript functionality.
This package can be used a skeleton or template for quickly building new TypeScript packages without wasting time on setup of boilerplate configurations and support tools.

Provides the following functionality:

1. Module style (import/export)
2. API
   - `multiply` - multiplies two numbers
3. Typescript
4. eslint coding style rule validation
5. prettier formatting
6. jest unit tests

# Getting started

Run the command:

```shell
npm install
```

# Tests

## Running `jest` unit tests

Run the command:

```shell
npm test
```

# Release

## How to publish a new version to NPM

Increment the version by running the command: (select one of the three options)

```shell
npm version patch
```

or

```shell
npm version minor
```

or

```shell
npm version major
```

If the version was incremented successfully then the code with new tags would be pushed automatically to the version control system code repository (e.g. github)

A similar expected output on terminal would be:

```console
Enumerating objects: 32, done.
Counting objects: 100% (32/32), done.
Delta compression using up to 8 threads
Compressing objects: 100% (21/21), done.
Writing objects: 100% (23/23), 15.06 KiB | 1.37 MiB/s, done.
Total 23 (delta 9), reused 0 (delta 0)
remote: Resolving deltas: 100% (9/9), completed with 3 local objects.
To https://github.com/bigman73/minimal-ts
   8f755e8..4c7e609  main -> main
Enumerating objects: 1, done.
Counting objects: 100% (1/1), done.
Writing objects: 100% (1/1), 170 bytes | 170.00 KiB/s, done.
Total 1 (delta 0), reused 0 (delta 0)
To https://github.com/bigman73/minimal-ts
 * [new tag]         v1.0.3 -> v1.0.3
v1.0.3
```

Then publish to to npm with:

```shell
npm publish
```

A similar expected output on terminal would be:

```console
npm notice
npm notice 📦  a-minimal-ts@1.0.3
npm notice === Tarball Contents ===
npm notice 1.1kB LICENSE
npm notice 284B  README.md
npm notice 194B  lib/index.d.ts
```
