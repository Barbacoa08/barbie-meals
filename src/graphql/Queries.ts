import { gql } from "@apollo/client";

export const PING_QUERY = gql`
  query Ping {
    ping
  }
`;

export const MULTIPLY_QUERY = gql`
  query Multiply($lower: Int!, $upper: Int!) {
    multiply(lower: $lower, upper: $upper)
  }
`;
