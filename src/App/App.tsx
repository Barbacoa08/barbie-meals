import { Container } from "@chakra-ui/layout";

import { LeftNav } from "components";
import { RouterContainer } from "RouterContainer";

import "./App.css";

export const App = () => {
  return (
    <main className="app" data-testid="App-root">
      <nav>
        <LeftNav />
      </nav>

      <Container>
        <h1>Barbie Meals</h1>

        <RouterContainer />
      </Container>
    </main>
  );
};
