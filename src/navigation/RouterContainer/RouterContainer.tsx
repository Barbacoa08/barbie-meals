import { Router } from "@reach/router";

import { ContactMe, Favorites, Hidden, Homepage } from "components";
import { Beer, GinAndTonic, Wine } from "components/alcohol";
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
  homepage: "/homepage",
  contactMe: "/contact-me",
  favorites: "/favorites",

  recipes: {
    bakedCarrotPotatoes: "/baked-carrot-potatoes",
    breakfastBurritos: "/breakfast-burritos",
    burgers: "/burgers",
    grilledCheese: "/grilled-cheese",
    nachos: "/nachos",
    pasta: "/pasta",
    pbj: "/pbj",
    pizza: "/pizza",
    sloppyJoes: "/sloppy-joes",
  },

  alcohol: {
    beer: "/beer",
    wine: "/wine",
    ginAndTonic: "/gin-and-tonic",
  },

  costco: "/costco",
  asainFoodStore: "/asain-food-store",

  hidden: "/hidden",
};

export const RouterContainer = () => {
  return (
    <Router>
      <Homepage default path={routes.homepage} />
      <ContactMe path={routes.contactMe} />
      <Favorites path={routes.favorites} />

      <BakedCarrotPotatoes path={routes.recipes.bakedCarrotPotatoes} />
      <BreakfastBurritos path={routes.recipes.breakfastBurritos} />
      <Burgers path={routes.recipes.burgers} />
      <GrilledCheese path={routes.recipes.grilledCheese} />
      <Pasta path={routes.recipes.pasta} />
      <PBJ path={routes.recipes.pbj} />
      <SloppyJoes path={routes.recipes.sloppyJoes} />
      <Pizza path={routes.recipes.pizza} />
      <Nachos path={routes.recipes.nachos} />

      <Beer path={routes.alcohol.beer} />
      <Wine path={routes.alcohol.wine} />
      <GinAndTonic path={routes.alcohol.ginAndTonic} />

      <CostCo path={routes.costco} />
      <AsainFoodStore path={routes.asainFoodStore} />

      <Hidden path={routes.hidden} />
    </Router>
  );
};
