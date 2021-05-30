import { Container, Text } from "@chakra-ui/layout";
import { Box, Button, Code, Heading } from "@chakra-ui/react";
import { RouteComponentProps } from "@reach/router";
import { useState } from "react";

import { useMultiplyMutation, usePingQuery } from "graphql/types";

const getRandomInt = () => Math.floor(Math.random() * 100);

export const Hidden = (_: RouteComponentProps) => {
  const [lambdaResult, setLambdaResult] = useState("initial state");
  const [storedMultiplyResult, setMultiplyResult] = useState("initial state");

  const { data } = usePingQuery();
  const [multiply, { called, loading, data: multiplyData }] =
    useMultiplyMutation({
      variables: { x: getRandomInt(), y: getRandomInt() },
    });

  return (
    <Container data-testid="Hidden-root">
      <Heading size="md" padding="4">
        This page is for experimental features
      </Heading>

      <Box>
        <Text>Ping Results (static REST endpoint via lambda func):</Text>
        <Code>{data ? data.ping : "no results"}</Code>
      </Box>

      <Box paddingTop="10">
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
        <Button
          onClick={async () => {
            const { data } = await multiply({
              variables: { x: getRandomInt(), y: getRandomInt() },
            });

            console.log("multiply result:");
            console.log(data ? data.multiply : "no result yet");
            setMultiplyResult(data ? `${data.multiply}` : "no result yet");
          }}
        >
          calculate random multiplication
        </Button>
        <Code>{storedMultiplyResult}</Code>
      </Box>
    </Container>
  );
};
