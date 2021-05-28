import { Container, Text } from "@chakra-ui/layout";
import { Box, Button, Code, Heading } from "@chakra-ui/react";
import { RouteComponentProps } from "@reach/router";
import { useState } from "react";

import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";

const client = new ApolloClient({
  uri: "/.netlify/functions/graphql",
});
const LambdaDemo = () => (
  <ApolloProvider client={client}>
    <Query
      query={gql`
        {
          hello
        }
      `}
    >
      {({ data = { hello: "" } }) => (
        <div>A greeting from the server: {data.hello}</div>
      )}
    </Query>
  </ApolloProvider>
);

export const Hidden = (_: RouteComponentProps) => {
  const [lambdaResult, setLambdaResult] = useState("initial state");
  const [gqlResult, setGQLResult] = useState("GraphQL's initial state");

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

      <Box>
        <Text>
          hit the `hello` lambda function via GraphQL?{" "}
          <Button
            colorScheme="red"
            variant="outline"
            onClick={() => {
              try {
                // fetch("/.netlify/functions/hello")
                //   .then((data) => data.json())
                //   .then((body) => setLambdaResult(body.message));
              } catch (_e) {
                setGQLResult("hit, no result");
              }
            }}
          >
            hell-to-the-yeah
          </Button>
        </Text>

        <Text>Results:</Text>
        <Code>{gqlResult}</Code>

        <Code paddingTop="10">
          <LambdaDemo />
        </Code>
      </Box>
    </Container>
  );
};
