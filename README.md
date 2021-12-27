[![Netlify Status](https://api.netlify.com/api/v1/badges/0782926b-bd38-468e-a394-cc034d4712f1/deploy-status)](https://app.netlify.com/sites/barbie-meals/deploys)
![github workflow status](https://github.com/Barbacoa08/barbie-meals/actions/workflows/run-yarn.yml/badge.svg)

![Coverage lines](./badges/badge-lines.svg)
![Coverage functions](./badges/badge-functions.svg)
![Coverage branches](./badges/badge-branches.svg)
![Coverage statements](./badges/badge-statements.svg)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Barbie Meals

A place for Barbie to store his favorite meals, [view it in action here](https://barbie-meals.netlify.app/)


## build commands

### `yarn build` build a prod version of both the app and lambda functions
### `yarn build:app` build only the app in prod mode
### `yarn build:lambda` build only the lambda functions in prod mode


## start commands

### `yarn start` runs the app in dev mode and the lambda functions in prod mode
### `yarn start:app` runs only the app in dev mode
### `yarn start:lambda` runs only the lambda functions in prod mode
### `yarn start-dev:lambda` runs the lambda functions in dev mode


## testing commands

### `yarn test`
### `yarn test:watch`
### `yarn test:coverage`


## misc commands
### `yarn lint`

### `yarn generate` if lambda functions are being run in dev mode, will generate hooks based on `src/graphql/*.graphql`
Generates files:
- `graphql.schema.json`
- `src/graphql/types/index.ts`

### `yarn storybook`

### `yarn` lint, build, test


## further dev notes

`codegen.js` is only used by the script `generate`, similartly, `graphql.schema.json` is auto-generated via running that script.
