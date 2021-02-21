import { Center, Container, Flex, Heading } from "@chakra-ui/layout";

import { LeftNav, RouterContainer } from "navigation";

import "./App.css";

export const App = () => {
  return (
    <main className="app" data-testid="App-root">
      <Flex>
        <LeftNav />

        <Container>
          <Center>
            <Heading as="h1">Barbie Meals</Heading>
          </Center>

          <RouterContainer />
        </Container>
      </Flex>
    </main>
  );
};
