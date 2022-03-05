import { Flex, Heading, Stack } from "@chakra-ui/layout";
import { Divider, Input, Progress } from "@chakra-ui/react";
import { RouteComponentProps } from "@reach/router";
import { useEffect, useState } from "react";
import { useGlobal } from "reactn";
import { useDebouncedCallback } from "use-debounce/lib";
import { usePouch } from "use-pouchdb";

import { routes } from "navigation";

import { getUserFavorites } from "../../graphql";
import { PouchFavorites } from "./FavoritesTypes";
import { pullDataFromPouchAndCalculateFavorites } from "./helpers";

// BUG: switching from a known name to an unknown name will **not** store the existing favorites in hasura

export const Favorites = (_: RouteComponentProps) => {
  const { alcohol, recipes } = routes;
  const pouchDb = usePouch<PouchFavorites>();

  // pouchDB is _blazingly_ fast, so don't waste renders pre-populating arrays
  const [meals, setMeals] = useState<JSX.Element[]>([]);
  const [unselectedMeals, setUnselectedMeals] = useState<JSX.Element[]>([]);
  const [drinks, setDrinks] = useState<JSX.Element[]>([]);
  const [unselectedDrinks, setUnselectedDrinks] = useState<JSX.Element[]>([]);

  const [username, setUsername] = useGlobal("username");

  const syncDbs = useDebouncedCallback((passedUsername) => {
    getUserFavorites(passedUsername)
      .then(async (result) => {
        /**
         * If we have data from hasura, update pouchdb with
         * the new data and then recalculate favorites.
         *
         * HACK: this "Else" statement is incorrect: * Else do nothing, pouchdb is already setup.
         */

        if (result.length > 0) {
          // for simplicities sake, and because we have so few items, nuke and pave
          const currentDocs = await pouchDb
            .allDocs({ include_docs: true })
            .catch((err) => console.error("pouchDb.allDovs err", err));
          if (currentDocs && currentDocs.total_rows > 0) {
            const promises = currentDocs.rows.map(
              ({ doc }) => !!doc && pouchDb.remove(doc)
            );
            await Promise.all(promises);
          }

          const promises = result.map(({ id, key, title, uri }) => {
            const favToAdd: PouchFavorites = {
              _id: id,
              title,
              icon: "add",
              linkTo: uri,
              key,
            };
            return pouchDb
              .put(favToAdd)
              .catch((err) => console.error("favorite PUT err", err));
          });
          await Promise.all(promises);

          // now that we've updated pouchdb to be the SOT, we can recalculate favorites
          pullDataFromPouchAndCalculateFavorites(
            passedUsername,
            pouchDb,
            {
              alcohol,
              setDrinks,
              setUnselectedDrinks,
            },
            { recipes, setMeals, setUnselectedMeals }
          );
        } else {
          // HACK: shouldn't need this `else`
          pullDataFromPouchAndCalculateFavorites(
            passedUsername,
            pouchDb,
            {
              alcohol,
              setDrinks,
              setUnselectedDrinks,
            },
            { recipes, setMeals, setUnselectedMeals }
          );
        }
      })
      .catch((err) => {
        console.error("getUserFavorites err", err);
      });
  }, 500);

  useEffect(() => {
    // clear ui-state so that we can be assured that btns user proper `username` (this is annoyingly slow...)
    setDrinks([]);
    setUnselectedDrinks([]);
    setMeals([]);
    setUnselectedMeals([]);

    /**
     * On first load, `username` will always be empty, and that's good.
     * We'll pull from pouchDB on the first render as it's _blazingly_
     * fast. On subsequent loads, `username` may or may not be set, and
     * we'll update the UI+DBs as oppropriate. (hasura as SOT)
     */

    if (username.length === 0) {
      pullDataFromPouchAndCalculateFavorites(
        username,
        pouchDb,
        {
          alcohol,
          setDrinks,
          setUnselectedDrinks,
        },
        { recipes, setMeals, setUnselectedMeals }
      );
    } else {
      syncDbs(username);
    }
  }, [username]);

  return (
    <Stack data-testid="Favorites-root">
      <Heading as="h2" size="lg" textAlign="center">
        My Favorites
      </Heading>

      <Divider />

      <Input
        placeholder="Enter Username here to save your Favorites"
        defaultValue={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <Divider />

      <Meals meals={meals} unselectedMeals={unselectedMeals} />

      <Drinks drinks={drinks} unselectedDrinks={unselectedDrinks} />
    </Stack>
  );
};

const Meals = ({
  meals,
  unselectedMeals,
}: {
  meals: JSX.Element[];
  unselectedMeals: JSX.Element[];
}) => {
  if (meals.length === 0 && unselectedMeals.length === 0) {
    return <Progress isIndeterminate aria-label="Meal options are loading" />;
  }

  return (
    <Flex justifyContent="space-between" style={{ paddingBottom: 30 }}>
      <Stack>
        <Heading as="h3" size="lg">
          Meals
        </Heading>

        <Divider />

        {meals}
      </Stack>

      <Stack>
        <Heading as="h3" size="lg">
          Additional Meals
        </Heading>

        <Divider />

        {unselectedMeals}
      </Stack>
    </Flex>
  );
};

const Drinks = ({
  drinks,
  unselectedDrinks,
}: {
  drinks: JSX.Element[];
  unselectedDrinks: JSX.Element[];
}) => {
  if (drinks.length === 0 && unselectedDrinks.length === 0) {
    return <Progress isIndeterminate aria-label="Drink options are loading" />;
  }

  return (
    <Flex justifyContent="space-between">
      <Stack>
        <Heading as="h3" size="lg">
          Drinks
        </Heading>

        <Divider />

        {drinks}
      </Stack>

      <Stack>
        <Heading as="h3" size="lg">
          Additional Drinks
        </Heading>

        <Divider />

        {unselectedDrinks}
      </Stack>
    </Flex>
  );
};
