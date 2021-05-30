import { Container, Text } from "@chakra-ui/layout";
import { Box, Button, Code, Heading } from "@chakra-ui/react";
import { RouteComponentProps } from "@reach/router";
import { useMultiplyQuery, usePingQuery } from "graphql/types";
import { useState } from "react";

export const Hidden = (_: RouteComponentProps) => {
  const [lambdaResult, setLambdaResult] = useState("initial state");
  const [v, setV] = useState(10);

  const { data } = usePingQuery();
  const { data: multiplyResult } = useMultiplyQuery({
    variables: { x: 5, y: v },
  }); // TODO: update this to be a mutation

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
                fetch("/.netlify/functions/ping")
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
        <Button onClick={() => setV(100)}>set as 100</Button>
        <Code>{multiplyResult ? multiplyResult.multiply : "no results"}</Code>
      </Box>
    </Container>
  );
};
