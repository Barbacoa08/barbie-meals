import { ApolloServer, gql } from "apollo-server-lambda";

const typeDefs = gql`
  type Query {
    hello: String
  }
  type Query {
    ping: String
  }
  type Query {
    multiply(lower: Int, upper: Int): Int
  }
`;

const resolvers = {
  Query: {
    hello: (root, args, context) => {
      return "Hello, world!";
    },
    ping: () => {
      console.log("ping");
      return "ping!";
    },
    multiply: (lower, upper) => {
      return lower * upper;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

export const handler = server.createHandler();
