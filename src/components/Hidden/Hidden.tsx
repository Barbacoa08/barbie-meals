import { Container, Text } from "@chakra-ui/layout";
import { Box, Button, Code, Heading } from "@chakra-ui/react";
import { RouteComponentProps } from "@reach/router";
import { useState } from "react";

export const Hidden = (_: RouteComponentProps) => {
  const [lambdaResult, setLambdaResult] = useState("initial state");

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
              // TODO: implement
              setLambdaResult("hit, no result");
            }}
          >
            hit it
          </Button>
        </Text>

        <Text>Results:</Text>
        <Code>{lambdaResult}</Code>
      </Box>
    </Container>
  );
};
