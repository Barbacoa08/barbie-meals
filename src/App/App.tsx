import { Container } from "@chakra-ui/layout";

import { Homepage, LeftNav } from "components";

import "./App.css";

export const App = () => {
  return (
    <main className="app" data-testid="App-root">
      <LeftNav />
      <Container>
        <h1>Barbie Meals</h1>

        <Homepage />
      </Container>
    </main>
  );
};
