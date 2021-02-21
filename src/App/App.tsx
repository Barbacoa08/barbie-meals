import { Center, Container, Flex, Heading } from "@chakra-ui/layout";
import { useEffect, useGlobal } from "reactn";

import { LeftNav, RouterContainer } from "navigation";

import "./App.css";
import { hashValue } from "utils";

const localStorageKey = "barbie-meals";

export const App = () => {
  const [globals, setGlobals] = useGlobal();

  // on init, pull localStorage once-and-only-once
  useEffect(() => {
    const storedValue = window.localStorage.getItem(localStorageKey);

    if (storedValue) {
      setGlobals(JSON.parse(storedValue));
    }
  }, []);

  // update localStorage on every reactn update
  useEffect(() => {
    window.localStorage.setItem(localStorageKey, JSON.stringify(globals));
  }, [hashValue({ ...globals })]);

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
