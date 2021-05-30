import { Container, Text } from "@chakra-ui/layout";
import { Box, Button, Code, Heading } from "@chakra-ui/react";
import { RouteComponentProps } from "@reach/router";
import { useState } from "react";

import { useMultiplyMutation, usePingQuery } from "graphql/types";

const getRandomInt = () => Math.floor(Math.random() * 100);

export const Hidden = (_: RouteComponentProps) => {
  const [lambdaResult, setLambdaResult] = useState("initial state");

  const { data: pingData } = usePingQuery();

  const [multiply, { data: multiplyData }] = useMultiplyMutation();

  return (
    <Container data-testid="Hidden-root">
      <Heading size="md" padding="4">
        This page is for experimental features
      </Heading>

      <Box>
        <Text>
          hit the `ping` lambda function?{" "}
          <Button
            colorScheme="blue"
            variant="outline"
            onClick={() => {
              try {
                fetch("/.netlify/functions/ping")
                  .then((restDataResult) => restDataResult.json())
                  .then((body) => setLambdaResult(body.message));
              } catch (_e) {
                setLambdaResult("hit, no result");
              }
            }}
          >
            hit it
          </Button>
        </Text>

        <Text>Ping Results (REST endpoint):</Text>
        <Code>{lambdaResult}</Code>
      </Box>

      <Box paddingTop="10">
        <Text>Ping Results (GraphQL endpoint):</Text>
        <Code>{pingData?.ping ?? "no results"}</Code>
      </Box>

      <Box paddingTop="10">
        <Button
          colorScheme="blue"
          variant="outline"
          onClick={async () =>
            multiply({ variables: { x: getRandomInt(), y: getRandomInt() } })
          }
        >
          calculate random multiplication
        </Button>

        <Text>Multiply Result:</Text>
        <Code>{multiplyData?.multiply ?? "no result"}</Code>
      </Box>
    </Container>
  );
};
