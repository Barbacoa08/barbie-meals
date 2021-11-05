import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Flex, Heading, Link, Stack, Text } from "@chakra-ui/layout";
import { Box, Divider, IconButton } from "@chakra-ui/react";
import { Link as ReachLink, RouteComponentProps } from "@reach/router";
import PouchDB from "pouchdb";
import { FC, useMemo, useState } from "react";

import { routes } from "navigation";
import { stringCamelCaseToSentence } from "utils";

import { MealOptionProps, PouchDbMealName } from "./FavoritesTypes";

// TODO: https://pouchdb.com/getting-started.html
// https://pouchdb.com/guides/setup-couchdb.html
// https://neighbourhood.ie/download-apache-couchdb-mac/
// https://www.ibm.com/cloud/free

export const Favorites = (_: RouteComponentProps) => {
  // TODO: will need to add a mock for PouchDB
  const dbMeal = new PouchDB(PouchDbMealName);

  dbMeal
    .info()
    .then((info) => {
      console.log("info");
      console.log(info);
    })
    .catch(function (err) {
      console.log("info err");
      console.log(err);
    });
  dbMeal
    .allDocs()
    .then((result) => {
      console.log("allDocs result");
      console.log(result);
    })
    .catch(function (err) {
      console.log("allDocs err");
      console.log(err);
    });

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

  // const [favorites, setFavorites] = useState<JSX.Element[]>([]);
  const allMeals = useMemo(() => {
    const recipeLinks: JSX.Element[] = [];
    Object.keys(routes.recipes).forEach((recipeObjectKey) => {
      const uri = routes.recipes[recipeObjectKey];

      const title = stringCamelCaseToSentence(recipeObjectKey);

      const icon = "add"; // TODO: set icon properly based on PouchDB
      recipeLinks.push(
        <MealOption icon={icon} key={`meal-option-${recipeObjectKey}`}>
          <Stack justify="center">
            <Link as={ReachLink} to={uri}>
              {title}
            </Link>
          </Stack>
        </MealOption>
      );
    });

    return recipeLinks;
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

          {/* <MealOption icon="remove" text="Burgers" /> */}
        </Stack>

        <Stack>
          <Heading as="h2" size="lg">
            Additional Meals
          </Heading>

          <Divider />

          {allMeals}
        </Stack>
      </Flex>
    </Stack>
  );
};

const MealOption = ({ children, icon, key }: MealOptionProps) => {
  const buttonIcon = icon === "add" ? <AddIcon /> : <MinusIcon />;

  return (
    <Flex
      borderWidth="2px"
      justifyContent="space-between"
      key={key}
      p={3}
      shadow="md"
    >
      {children}

      <IconButton aria-label={icon} icon={buttonIcon} />
    </Flex>
  );
};
