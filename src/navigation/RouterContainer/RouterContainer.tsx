import { Router } from "@reach/router";

import { ContactMe, Hidden, Homepage } from "components";
import { Beer, Wine } from "components/alcohol";
import { AsainFoodStore, CostCo } from "components/food-stores";
import { Burgers, Pasta, PBJ, SloppyJoes } from "components/recipes";
import { GrilledCheese } from "components/recipes/GrilledCheese";

export const routes = {
  homepage: "homepage",
  contactMe: "contact-me",

  burgers: "burgers",
  grilledCheese: "grilled-cheese",
  pasta: "pasta",
  pbj: "pbj",
  sloppyJoes: "sloppy-joes",

  beer: "beer",
  wine: "wine",

  costco: "costco",
  asainFoodStore: "asain-food-store",

  hidden: "hidden",
};

export const RouterContainer = () => {
  return (
    <Router>
      <Homepage default path={routes.homepage} />
      <ContactMe path={routes.contactMe} />

      <Burgers path={routes.burgers} />
      <GrilledCheese path={routes.grilledCheese} />
      <Pasta path={routes.pasta} />
      <PBJ path={routes.pbj} />
      <SloppyJoes path={routes.sloppyJoes} />

      <Beer path={routes.beer} />
      <Wine path={routes.wine} />

      <CostCo path={routes.costco} />
      <AsainFoodStore path={routes.asainFoodStore} />

      <Hidden path={routes.hidden} />
    </Router>
  );
};
