import { ApolloServer, gql } from "apollo-server-lambda";

const typeDefs = gql`
  type Query {
    ping: String
    multiply(lower: Int!, upper: Int!): Int
  }
`;

const resolvers = {
  Query: {
    ping: () => {
      return "ping!";
    },
    multiply: (root, { lower, upper }, context) => {
      return lower * upper;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

export const handler = server.createHandler();
