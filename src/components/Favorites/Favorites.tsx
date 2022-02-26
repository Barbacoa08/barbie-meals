import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Flex, Heading, Link, Stack } from "@chakra-ui/layout";
import {
  Divider,
  IconButton,
  Input,
  ScaleFade,
  useDisclosure,
} from "@chakra-ui/react";
import { Link as ReachLink, RouteComponentProps } from "@reach/router";
import { useCallback, useEffect, useState } from "react";
import { usePouch } from "use-pouchdb";

import { routes } from "navigation";
import { hashValue, stringCamelCaseToSentence } from "utils";

import { getUserFavorites } from "../../graphql";
import { FavoriteOptionProps, PouchFavorites } from "./FavoritesTypes";

export const Favorites = (_: RouteComponentProps) => {
  const { alcohol, recipes } = routes;
  const dbFavorites = usePouch<PouchFavorites>();

  const [meals, setMeals] = useState<JSX.Element[]>([]);
  const [additionalMeals, setAdditionalMeals] = useState<JSX.Element[]>([]);

  const [drinks, setDrinks] = useState<JSX.Element[]>([]);
  const [additionalDrinks, setAdditionalDrinks] = useState<JSX.Element[]>([]);

  const [user, setUser] = useState<string>("");

  // TODO: this method is so... yuck... find a cleaner solution
  const calculateMeals = useCallback(
    (storedFavoriteMeals: PouchDB.Core.AllDocsResponse<{}>) => {
      const storedIds = storedFavoriteMeals.rows.map((row) => row.id);

      const addtMeals: JSX.Element[] = [];
      const favMeals: JSX.Element[] = [];
      Object.keys(recipes).forEach((mealId) => {
        const uri = recipes[mealId];
        const title = stringCamelCaseToSentence(mealId);
        const key = `meal-option-${mealId}`;

        if (storedIds.includes(mealId)) {
          favMeals.push(
            <FavoriteOption
              icon="remove"
              title={title}
              linkTo={uri}
              key={key}
              onClick={(e) => {
                e.preventDefault();

                dbFavorites.get(mealId).then((doc) => {
                  dbFavorites
                    .remove(doc)
                    .then(() => {
                      dbFavorites
                        .allDocs()
                        .then(calculateMeals)
                        .catch((err) =>
                          console.error("PouchDb.allDocs err", err)
                        );
                    })
                    .catch((err) => console.error("meal removal err", err));
                });
              }}
            />
          );
        } else {
          addtMeals.push(
            <FavoriteOption
              icon="add"
              title={title}
              linkTo={uri}
              key={key}
              onClick={(e) => {
                e.preventDefault();

                const meal: PouchFavorites = {
                  _id: mealId,
                  title,
                  icon: "add",
                  linkTo: uri,
                  key,
                };
                dbFavorites
                  .put(meal)
                  .then(() => {
                    dbFavorites
                      .allDocs()
                      .then(calculateMeals)
                      .catch((err) =>
                        console.error("PouchDb.allDocs err", err)
                      );
                  })
                  .catch((err) => console.error("meal PUT err", err));
              }}
            />
          );
        }
      });

      const favMealsUpdated = hashValue(favMeals) !== hashValue(meals);
      const addtMealsUpdated =
        hashValue(addtMeals) !== hashValue(additionalMeals);

      if (favMealsUpdated || addtMealsUpdated) {
        setMeals(favMeals);
        setAdditionalMeals(addtMeals);
      }
    },
    [recipes]
  );

  const calculateDrinks = useCallback(
    (storedFavoriteDrinks: PouchDB.Core.AllDocsResponse<{}>) => {
      const storedIds = storedFavoriteDrinks.rows.map((row) => row.id);

      const addtDrinks: JSX.Element[] = [];
      const favDrinks: JSX.Element[] = [];
      Object.keys(alcohol).forEach((drinkId) => {
        const uri = alcohol[drinkId];
        const title = stringCamelCaseToSentence(drinkId);
        const key = `drink-option-${drinkId}`;

        if (storedIds.includes(drinkId)) {
          favDrinks.push(
            <FavoriteOption
              icon="remove"
              title={title}
              linkTo={uri}
              key={key}
              onClick={(e) => {
                e.preventDefault();

                dbFavorites.get(drinkId).then((doc) => {
                  dbFavorites
                    .remove(doc)
                    .then(() => {
                      dbFavorites
                        .allDocs()
                        .then(calculateDrinks)
                        .catch((err) =>
                          console.error("PouchDb.allDocs err", err)
                        );
                    })
                    .catch((err) => console.error("drink removal err", err));
                });
              }}
            />
          );
        } else {
          addtDrinks.push(
            <FavoriteOption
              icon="add"
              title={title}
              linkTo={uri}
              key={key}
              onClick={(e) => {
                e.preventDefault();

                const drink: PouchFavorites = {
                  _id: drinkId,
                  title,
                  icon: "add",
                  linkTo: uri,
                  key,
                };
                dbFavorites
                  .put(drink)
                  .then(() => {
                    dbFavorites
                      .allDocs()
                      .then(calculateDrinks)
                      .catch((err) =>
                        console.error("PouchDb.allDocs err", err)
                      );
                  })
                  .catch((err) => console.error("drink PUT err", err));
              }}
            />
          );
        }
      });

      const favDrinksUpdated = hashValue(favDrinks) !== hashValue(drinks);
      const addtDrinksUpdated =
        hashValue(addtDrinks) !== hashValue(additionalDrinks);

      if (favDrinksUpdated || addtDrinksUpdated) {
        setDrinks(favDrinks);
        setAdditionalDrinks(addtDrinks);
      }
    },
    [alcohol]
  );

  const pullData = useCallback(async (user: string = "") => {
    // TODO: implement usage
    const dbResult = await getUserFavorites(user);
    console.log("dbResult", dbResult);
    // TODO: notes: pull data, if "favorites" doesn't exist, kill it

    // TODO: notes: implement add/remove favorites

    // still need to setup `sync`: https://pouchdb.com/api.html#sync
    // https://hasura.io/blog/couchdb-style-conflict-resolution-rxdb-hasura/

    dbFavorites
      .allDocs()
      .then((result) => {
        calculateDrinks(result);
        calculateMeals(result);
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
        value={user}
        onChange={(e) => setUser(e.target.value)}
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

const FavoriteOption = ({
  icon,
  title,
  linkTo,
  onClick,
}: FavoriteOptionProps) => {
  const { isOpen, onToggle } = useDisclosure({ isOpen: true });

  const buttonIcon = icon === "add" ? <AddIcon /> : <MinusIcon />;

  return (
    <ScaleFade initialScale={0.1} in={isOpen}>
      <Flex borderWidth="2px" justifyContent="space-between" p={3} shadow="md">
        <Stack justify="center" paddingRight={5}>
          <Link as={ReachLink} to={linkTo}>
            {title}
          </Link>
        </Stack>

        <IconButton
          aria-label={icon}
          icon={buttonIcon}
          onClick={(e) => {
            onToggle();
            onClick(e);
          }}
        />
      </Flex>
    </ScaleFade>
  );
};
