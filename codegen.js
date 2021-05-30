module.exports = {
  schema: [
    {
      "http://localhost:9000/.netlify/functions/graphql": {},
    },
  ],
  documents: ["./src/**/*.graphql"],
  overwrite: true,
  generates: {
    "./src/graphql/types/index.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
        namingConvention: {
          transformUnderscore: true,
        },
      },
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};
