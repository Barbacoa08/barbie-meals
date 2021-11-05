import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Flex, Heading, Link, Stack } from "@chakra-ui/layout";
import { Divider, IconButton } from "@chakra-ui/react";
import { Link as ReachLink, RouteComponentProps } from "@reach/router";
import PouchDB from "pouchdb";
import { useCallback, useEffect, useState } from "react";

import { routes } from "navigation";
import { stringCamelCaseToSentence } from "utils";

import { MealOptionProps, PouchDbMealName, PouchMeal } from "./FavoritesTypes";

// https://neighbourhood.ie/download-apache-couchdb-mac/
// https://www.ibm.com/cloud/free

export const Favorites = (_: RouteComponentProps) => {
  // TODO: will need to add a mock for PouchDB for unit tests
  const dbMeal = new PouchDB(PouchDbMealName); // TODO: does this need to be higher up the chain? in `App`?

  const [favorites, setFavorites] = useState<JSX.Element[]>([]);
  const [additionalMeals, setAdditionalMeals] = useState<JSX.Element[]>([]);

  // TODO: thid method is so... yuck... find a cleaner solution
  const calculateMeals = useCallback(
    (storedFavoriteMeals: PouchDB.Core.AllDocsResponse<{}>) => {
      const storedIds = storedFavoriteMeals.rows.map((row) => row.id);

      const addtMeals: JSX.Element[] = [];
      const favMeals: JSX.Element[] = [];
      Object.keys(routes.recipes).forEach((mealId) => {
        const uri = routes.recipes[mealId];
        const title = stringCamelCaseToSentence(mealId);
        const key = `meal-option-${mealId}`;

        if (storedIds.includes(mealId)) {
          favMeals.push(
            <MealOption
              icon="remove"
              title={title}
              linkTo={uri}
              key={key}
              onClick={(e) => {
                e.preventDefault();

                dbMeal.get(mealId).then((doc) => {
                  dbMeal
                    .remove(doc)
                    .then(() => {
                      dbMeal
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
            <MealOption
              icon="add"
              title={title}
              linkTo={uri}
              key={key}
              onClick={(e) => {
                e.preventDefault();

                const meal: PouchMeal = {
                  _id: mealId,
                  title,
                  icon: "add",
                  linkTo: uri,
                  key,
                };
                dbMeal
                  .put(meal)
                  .then(() => {
                    dbMeal
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

      setFavorites(favMeals);
      setAdditionalMeals(addtMeals);
    },
    [routes.recipes]
  );
  useEffect(() => {
    dbMeal
      .allDocs()
      .then(calculateMeals)
      .catch((err) => console.error("PouchDb.allDocs err", err));
  }, []);

  return (
    <Stack data-testid="Favorites-root">
      <Heading as="h2" size="lg" textAlign="center">
        My Favorites
      </Heading>

      <Divider />

      <Flex justifyContent="space-between">
        <Stack>
          <Heading as="h3" size="lg">
            Current Favorites
          </Heading>

          <Divider />

          {favorites}
        </Stack>

        <Stack>
          <Heading as="h2" size="lg">
            Additional Meals
          </Heading>

          <Divider />

          {additionalMeals}
        </Stack>
      </Flex>
    </Stack>
  );
};

const MealOption = ({ icon, title, linkTo, onClick }: MealOptionProps) => {
  const buttonIcon = icon === "add" ? <AddIcon /> : <MinusIcon />;

  return (
    <Flex borderWidth="2px" justifyContent="space-between" p={3} shadow="md">
      <Stack justify="center">
        <Link as={ReachLink} to={linkTo}>
          {title}
        </Link>
      </Stack>

      <IconButton aria-label={icon} icon={buttonIcon} onClick={onClick} />
    </Flex>
  );
};
