import { Flex, Heading, Stack } from "@chakra-ui/layout";
import { Divider, Input } from "@chakra-ui/react";
import { RouteComponentProps } from "@reach/router";
import { useCallback, useEffect, useState } from "react";
import { useGlobal } from "reactn";
import { usePouch } from "use-pouchdb";

import { routes } from "navigation";

import { getUserFavorites } from "../../graphql";
import { PouchFavorites } from "./FavoritesTypes";
import { calculateFavorites } from "./helpers";
import { useDebouncedCallback } from "use-debounce/lib";

export const Favorites = (_: RouteComponentProps) => {
  const { alcohol, recipes } = routes;
  const dbFavorites = usePouch<PouchFavorites>();

  const [meals, setMeals] = useState<JSX.Element[]>([]);
  const [additionalMeals, setAdditionalMeals] = useState<JSX.Element[]>([]);

  const [drinks, setDrinks] = useState<JSX.Element[]>([]);
  const [additionalDrinks, setAdditionalDrinks] = useState<JSX.Element[]>([]);

  const [user, setUser] = useGlobal("username");
  const debounced = useDebouncedCallback((value) => setUser(value), 1000);

  const pullData = useCallback(async (user: string = "") => {
    // this is _only _ called when the user is updated and on page first load, so treat
    // hasura as the "source of truth" here, but everywhere else, pouchdb is the SOT

    // TODO: implement usage
    const dbResult = await getUserFavorites(user);
    console.log("dbResult", dbResult);
    // TODO: notes: pull data, if "favorite" doesn't exist, kill it

    // TODO: notes: implement add/remove favorite

    // still need to setup `sync`: https://pouchdb.com/api.html#sync
    // https://hasura.io/blog/couchdb-style-conflict-resolution-rxdb-hasura/

    dbFavorites
      .allDocs()
      .then((result) => {
        calculateFavorites(
          result,
          alcohol,
          dbFavorites,
          setDrinks,
          setAdditionalDrinks
        );
        calculateFavorites(
          result,
          recipes,
          dbFavorites,
          setMeals,
          setAdditionalMeals
        );
      })
      .catch((err) => console.error("PouchDb.allDocs err", err));
  }, []);

  useEffect(() => {
    pullData(user);
  }, [user]);

  return (
    <Stack data-testid="Favorites-root">
      <Heading as="h2" size="lg" textAlign="center">
        My Favorites
      </Heading>

      <Divider />

      <Input
        placeholder="Enter Username here to save your Favorites"
        defaultValue={user}
        onChange={(e) => debounced(e.target.value)}
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
          <Heading as="h2" size="lg">
            Additional Meals
          </Heading>

          <Divider />

          {additionalMeals}
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
          <Heading as="h2" size="lg">
            Additional Drinks
          </Heading>

          <Divider />

          {additionalDrinks}
        </Stack>
      </Flex>
    </Stack>
  );
};
