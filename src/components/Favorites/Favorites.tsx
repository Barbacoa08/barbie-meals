import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Flex, Heading, Link, Stack } from "@chakra-ui/layout";
import { Divider, IconButton } from "@chakra-ui/react";
import { Link as ReachLink, RouteComponentProps } from "@reach/router";
import PouchDB from "pouchdb";
import { useEffect, useState } from "react";

import { routes } from "navigation";
import { stringCamelCaseToSentence } from "utils";

import { MealOptionProps, PouchDbMealName, PouchMeal } from "./FavoritesTypes";

// TODO: https://pouchdb.com/getting-started.html
// https://pouchdb.com/guides/setup-couchdb.html
// https://neighbourhood.ie/download-apache-couchdb-mac/
// https://www.ibm.com/cloud/free

export const Favorites = (_: RouteComponentProps) => {
  // TODO: will need to add a mock for PouchDB
  const dbMeal = new PouchDB(PouchDbMealName); // TODO: does this need to be higher up the chain? in `App`?

  // const mealToPut: PouchMeal = {
  //   _id: "1",
  //   // _rev: "1",
  //   name: "Pizza",
  //   description: "A pizza",
  //   image: "https://i.imgur.com/qJc1nEp.jpg",
  //   ingredients: ["tomato", "cheese"],
  //   instructions: ["cook", "eat"],
  // };
  // dbMeal
  //   .put(mealToPut)
  //   .then((result) => {
  //     console.log("put result");
  //     console.log(result);
  //   })
  //   .catch(function (err) {
  //     console.log("PUT err");
  //     console.log(err);
  //   });

  const [favorites, setFavorites] = useState<JSX.Element[]>([]);
  const [additionalMeals, setAdditionalMeals] = useState<JSX.Element[]>([]);
  useEffect(() => {
    dbMeal
      .allDocs()
      .then((storedFavoriteMeals) => {
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
                      .then((result) => {
                        console.log("remove result");
                        console.log(result);
                        // setFavorites(favMeals);
                        // setAdditionalMeals(addtMeals);
                      })
                      .catch(function (err) {
                        console.log("remove err");
                        console.log(err);
                      });
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
                  dbMeal.put(meal).then((result) => {
                    console.log("put result");
                    console.log(result);
                    // TODO: remove from array
                  });
                }}
              />
            );
          }
        });

        setFavorites(favMeals);
        setAdditionalMeals(addtMeals);
      })
      .catch((err) => console.error("allDocs err", err));
  }, [routes.recipes]);

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
