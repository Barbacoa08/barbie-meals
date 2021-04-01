import { Router } from "@reach/router";

import { Homepage } from "components";
import { PBJ, SloppyJoes } from "components/recipes";

// TODO: add some alcohol recs
// good, not great, but drinkable: https://www.tgbrews.com/pseudo-sue
export const routes = {
  homepage: "homepage",
  sloppyJoes: "sloppy-joes",
  pbj: "pbj",
};

export const RouterContainer = () => {
  return (
    <Router>
      <Homepage default path={routes.homepage} />
      <SloppyJoes path={routes.sloppyJoes} />
      <PBJ path={routes.pbj} />
    </Router>
  );
};
