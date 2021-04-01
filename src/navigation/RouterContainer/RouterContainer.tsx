import { Router } from "@reach/router";

import { Beer, Homepage, Wine } from "components";
import { PBJ, SloppyJoes } from "components/recipes";

// good, not great, but drinkable: https://www.tgbrews.com/pseudo-sue
export const routes = {
  beer: "beer",
  homepage: "homepage",
  pbj: "pbj",
  sloppyJoes: "sloppy-joes",
  wine: "wine",
};

export const RouterContainer = () => {
  return (
    <Router>
      <Homepage default path={routes.homepage} />
      <Beer path={routes.beer} />
      <PBJ path={routes.pbj} />
      <SloppyJoes path={routes.sloppyJoes} />
      <Wine path={routes.beer} />
    </Router>
  );
};
