import { Router } from "@reach/router";

import { Beer, Homepage, Wine } from "components";
import { AsainFoodStore, CostCo } from "components/FoodStores";
import { Burgers, PBJ, SloppyJoes } from "components/recipes";

export const routes = {
  homepage: "homepage",

  burgers: "burgers",
  pbj: "pbj",
  sloppyJoes: "sloppy-joes",

  beer: "beer",
  wine: "wine",

  costco: "costco",
  asainFoodStore: "asain-food-store",
};

export const RouterContainer = () => {
  return (
    <Router>
      <Homepage default path={routes.homepage} />

      <Burgers path={routes.burgers} />
      <PBJ path={routes.pbj} />
      <SloppyJoes path={routes.sloppyJoes} />

      <Beer path={routes.beer} />
      <Wine path={routes.wine} />

      <CostCo path={routes.costco} />
      <AsainFoodStore path={routes.asainFoodStore} />
    </Router>
  );
};
