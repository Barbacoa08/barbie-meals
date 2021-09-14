import { ApolloServer, gql } from "apollo-server-lambda";

const typeDefs = gql`
  type Query {
    ping: String
  }

  type Mutation {
    multiply(x: Int!, y: Int!): Int
  }
`;

const resolvers = {
  Query: {
    ping: () => {
      return "ping!";
    },
  },

  Mutation: {
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

// TODO: figure out what this type is actually supposed to be
export const handler: any = server.createHandler();
