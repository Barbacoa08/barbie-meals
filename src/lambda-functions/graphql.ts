import { ApolloServer, gql } from "apollo-server-lambda";

const typeDefs = gql`
  type Query {
    ping: String
    multiply(x: Int!, y: Int!): Int
  }
`;

const resolvers = {
  Query: {
    ping: () => {
      return "ping!";
    },
    multiply: (
      _root: any,
      { x, y }: { x: number; y: number },
      _context: any
    ) => {
      return x * y;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

export const handler = server.createHandler();
