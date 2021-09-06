import { Router } from "@reach/router";

import { ContactMe, Hidden, Homepage } from "components";
import { Beer, Wine } from "components/alcohol";
import { AsainFoodStore, CostCo } from "components/food-stores";
import {
  BakedCarrotPotatoes,
  BreakfastBurritos,
  Burgers,
  GrilledCheese,
  Nachos,
  Pasta,
  PBJ,
  Pizza,
  SloppyJoes,
} from "components/recipes";

export const routes = {
  homepage: "homepage",
  contactMe: "contact-me",

  bakedCarrotPotatoes: "baked-carrot-potatoes",
  breakfastBurritos: "breakfast-burritos",
  burgers: "burgers",
  grilledCheese: "grilled-cheese",
  nachos: "nachos",
  pasta: "pasta",
  pbj: "pbj",
  pizza: "pizza",
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

      <BakedCarrotPotatoes path={routes.bakedCarrotPotatoes} />
      <BreakfastBurritos path={routes.breakfastBurritos} />
      <Burgers path={routes.burgers} />
      <GrilledCheese path={routes.grilledCheese} />
      <Pasta path={routes.pasta} />
      <PBJ path={routes.pbj} />
      <SloppyJoes path={routes.sloppyJoes} />
      <Pizza path={routes.pizza} />
      <Nachos path={routes.nachos} />

      <Beer path={routes.beer} />
      <Wine path={routes.wine} />

      <CostCo path={routes.costco} />
      <AsainFoodStore path={routes.asainFoodStore} />

      <Hidden path={routes.hidden} />
    </Router>
  );
};
