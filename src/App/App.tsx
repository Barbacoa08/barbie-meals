import { Container } from "@chakra-ui/layout";

import { Homepage, LeftNav } from "components";

import "./App.css";

export const App = () => {
  return (
    <main className="app" data-testid="App-root">
      <LeftNav />
      <Container>
        <p>Header Text</p>

        <Homepage />
      </Container>
    </main>
  );
};
