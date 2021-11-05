import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Flex, Heading, Stack, Text } from "@chakra-ui/layout";
import { Divider, IconButton } from "@chakra-ui/react";
import { RouteComponentProps } from "@reach/router";
import PouchDB from "pouchdb";

import { MealOptionProps, PouchDbMealName } from "./FavoritesTypes";

// TODO: https://pouchdb.com/getting-started.html
// https://pouchdb.com/guides/setup-couchdb.html
// https://neighbourhood.ie/download-apache-couchdb-mac/
// https://www.ibm.com/cloud/free

export const Favorites = (_: RouteComponentProps) => {
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
      console.log("result");
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

          <MealOption icon="remove" text="Burgers" />
        </Stack>

        <Stack>
          <Heading as="h2" size="lg">
            Additional Meals
          </Heading>

          <Divider />

          <MealOption icon="add" text="Pizza" />
          <MealOption icon="add" text="Pasta" />
        </Stack>
      </Flex>
    </Stack>
  );
};

const MealOption = ({ icon, iconAriaLabel, text }: MealOptionProps) => {
  const buttonIcon = icon === "add" ? <AddIcon /> : <MinusIcon />;

  return (
    <Flex justifyContent="space-evenly" p={5} shadow="md" borderWidth="1px">
      <Stack justify="center">
        <Text fontSize="lg">{text}</Text>
      </Stack>
      <IconButton aria-label={iconAriaLabel || icon} icon={buttonIcon} />
    </Flex>
  );
};
