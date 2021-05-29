import { gql, useQuery } from "@apollo/client";
import { Container, Text } from "@chakra-ui/layout";
import { Box, Button, Code, Heading } from "@chakra-ui/react";
import { RouteComponentProps } from "@reach/router";
import { useState } from "react";

const PING_QUERY = gql`
  query {
    ping
  }
`;

export const MULTIPLY_QUERY = gql`
  query Multiply($lower: Int!, $upper: Int!) {
    multiply(lower: $lower, upper: $upper)
  }
`;

export const Hidden = (_: RouteComponentProps) => {
  const [lambdaResult, setLambdaResult] = useState("initial state");

  const { data } = useQuery(PING_QUERY);
  const { data: multiplyResult } = useQuery(MULTIPLY_QUERY, {
    variables: { lower: 5, upper: 10 },
  });

  return (
    <Container data-testid="Hidden-root">
      <Heading size="md" padding="4">
        This page is for experimental features
      </Heading>

      <Box>
        <Text>
          hit the `hello` lambda function?{" "}
          <Button
            colorScheme="blue"
            variant="outline"
            onClick={() => {
              try {
                fetch("/.netlify/functions/hello")
                  .then((data) => data.json())
                  .then((body) => setLambdaResult(body.message));
              } catch (_e) {
                setLambdaResult("hit, no result");
              }
            }}
          >
            hit it
          </Button>
        </Text>

        <Text>Results:</Text>
        <Code>{lambdaResult}</Code>
      </Box>

      <Box paddingTop="10">
        <Text>Ping Results:</Text>
        <Code>{data ? data.ping : "no results"}</Code>
      </Box>

      <Box paddingTop="10">
        <Text>Ping Results:</Text>
        <Code>{multiplyResult ? multiplyResult.multiply : "no results"}</Code>
      </Box>
    </Container>
  );
};
