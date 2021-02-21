import { Center, Container, Flex, Heading } from "@chakra-ui/layout";
import { useEffect, useGlobal } from "reactn";
import { State } from "reactn/default";

import { LeftNav, RouterContainer } from "navigation";

import "./App.css";

const localStorageKey = "barbie-meals";
const defaultLocalStorageValue: State = {
  showFancy: true,
  showImages: true,
};

export const App = () => {
  const [globals, setGlobals] = useGlobal();

  // on init, pull localStorage once-and-only-once
  useEffect(() => {
    const storedValue = window.localStorage.getItem(localStorageKey);
    const parsedObject = storedValue
      ? JSON.parse(storedValue)
      : defaultLocalStorageValue;

    setGlobals(parsedObject);
  }, []);

  // update localStorage on every reactn update
  useEffect(() => {
    const storageObject = Object.keys(globals).length
      ? { ...globals }
      : defaultLocalStorageValue;

    window.localStorage.setItem(localStorageKey, JSON.stringify(storageObject));
  }, [JSON.stringify({ ...globals })]);

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
