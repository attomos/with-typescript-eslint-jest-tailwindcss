# NextJS Typescript Boilerplate (with TypeScript and tailwindcss)

Bootstrap a developer-friendly NextJS app configured with:

- [Typescript](https://www.typescriptlang.org/)
- Styling with [tailwindcss](https://tailwindcss.com/)
- Linting with [ESLint](https://eslint.org/)
- Formatting with [Prettier](https://prettier.io/)
- Linting, typechecking and formatting on by default using [`husky`](https://github.com/typicode/husky) for commit hooks
- Testing with [Jest](https://jestjs.io/) and [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro)

## Deploy your own

Deploy the example using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/attomos/with-typescript-eslint-jest-tailwindcss)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
$ npx create-next-app --example https://github.com/attomos/with-typescript-eslint-jest-tailwindcss my-app
# or
$ yarn create next-app --example https://github.com/attomos/with-typescript-eslint-jest-tailwindcss my-app

# install git hooks
$ cd my-app
$ npx husky install
```

Deploy it to the cloud with [Vercel](https://vercel.com/import?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
