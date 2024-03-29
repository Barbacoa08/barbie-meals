import { Center, Container, Flex, Heading } from "@chakra-ui/layout";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import PouchDB from "pouchdb";
import { useEffect, useGlobal, useMemo } from "reactn";
import { Provider as PouchDBProvider } from "use-pouchdb";

import { LeftNav, RouterContainer } from "navigation";
import { hashValue } from "utils";

import "./App.css";

const localStorageKey = "barbie-meals";

export const App = () => {
  const dbFavorites = new PouchDB("bm-favorites");

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
  }, [hashValue({ ...globals })]); // gotta spread because the attributes are getters

  const theme = useMemo(() => {
    const opendyslexic = globals.useOpenDyslexicMono
      ? {
          fonts: {
            body: "OpenDyslexicMono",
            heading: "OpenDyslexicMono",
          },
        }
      : {};
    const extendedTheme = extendTheme({
      colors: {
        gray: {
          // need just a touch more contrast for the Ingredient/Badge components
          200: "#FFF",
        },
      },

      ...opendyslexic,
    });

    return extendedTheme;
  }, [globals.useOpenDyslexicMono]);

  return (
    <main className="app" data-testid="App-root">
      <ChakraProvider theme={theme}>
        <PouchDBProvider pouchdb={dbFavorites}>
          <Flex>
            <LeftNav />

            <Container>
              <Center>
                <Heading as="h1">Barbie Meals</Heading>
              </Center>

              <RouterContainer />
            </Container>
          </Flex>
        </PouchDBProvider>
      </ChakraProvider>
    </main>
  );
};
