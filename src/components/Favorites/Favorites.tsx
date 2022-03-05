import { Flex, Heading, Stack } from "@chakra-ui/layout";
import { Divider, Input } from "@chakra-ui/react";
import { RouteComponentProps } from "@reach/router";
import { useEffect, useState } from "react";
import { useGlobal } from "reactn";
import { usePouch } from "use-pouchdb";

import { routes } from "navigation";

import { getUserFavorites } from "../../graphql";
import { PouchFavorites } from "./FavoritesTypes";
import { pullDataFromPouchAndCalculateFavorites } from "./helpers";

export const Favorites = (_: RouteComponentProps) => {
  const { alcohol, recipes } = routes;
  const pouchDb = usePouch<PouchFavorites>();

  // pouchDB is _blazingly_ fast, so don't waste renders pre-populating arrays
  const [meals, setMeals] = useState<JSX.Element[]>([]);
  const [unselectedMeals, setUnselectedMeals] = useState<JSX.Element[]>([]);
  const [drinks, setDrinks] = useState<JSX.Element[]>([]);
  const [unselectedDrinks, setUnselectedDrinks] = useState<JSX.Element[]>([]);

  const [username, setUsername] = useGlobal("username");

  useEffect(() => {
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
      getUserFavorites(username)
        .then((result) => {
          console.log("getUserFavorites result", result);
          // if we have data from hasura, update pouchdb with the new data and then recalculate favorites
          if (result.length > 0) {
            // pouchDb
            //   .allDocs()
            //   .then((allDocs) => {
            //     allDocs.rows.map((doc) => pouchDb.remove(doc?.doc?._id));
            //     // pouchDb = new PouchDB("bm-favorites");
            //     const favToAdd: PouchFavorites = {
            //       _id: result[0].key,
            //       title: result[0].key,
            //       icon: "add",
            //       // linkTo: uri,
            //       linkTo: "",
            //       key: result[0].key,
            //     };
            //     pouchDb
            //       .put(favToAdd)
            //       .then(() => {})
            //       .catch((err) => {
            //         console.error("pouchDb erase then `put` err", err);
            //       });
            //     // add `result` to pouchdb
            //   })
            //   .catch((err) => {
            //     console.error("pouchDb.destroy err", err);
            //   });
          }
        })
        .catch((err) => {
          console.error("getUserFavorites err", err);
        });
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

      <Flex justifyContent="space-between">
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
    </Stack>
  );
};
