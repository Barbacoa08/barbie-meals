import { Router } from "@reach/router";

import { Homepage, SloppyJoes } from "components";

export const routes = {
  homepage: "homepage",
  sloppyJoes: "sloppy-joes",
};

export const RouterContainer = () => {
  return (
    <Router>
      <Homepage default path={routes.homepage} />
      <SloppyJoes path={routes.sloppyJoes} />
    </Router>
  );
};
