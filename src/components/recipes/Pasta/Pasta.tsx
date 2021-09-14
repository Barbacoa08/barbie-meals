import {
  Box,
  Flex,
  Heading,
  ListItem,
  OrderedList,
  Stack,
} from "@chakra-ui/layout";
import { Tag } from "@chakra-ui/tag";
import { RouteComponentProps } from "@reach/router";

import { Ingredient } from "components";
import italianSeasoning from "images/seasonings/italian-seasoning.webp";
import marinara from "images/condiments/marinara-sauce.webp";
import meat from "images/misc/impossible-meat.webp";
import noodles from "images/misc/pasta-noodles.webp";

export const Pasta = (_: RouteComponentProps) => {
  return (
    <Stack data-testid="Pasta-root">
      <Flex justifyContent="space-evenly">
        <Heading as="h1" size="lg">Pasta</Heading>

        <Box display="inline-flex">
          <Tag>#vegan</Tag>
          <Tag>#fast</Tag>
          <Tag>#easy</Tag>
        </Box>
      </Flex>

      <Stack justifyContent="space-between">
        <Heading as="h3" size="sm">ingredients</Heading>
        <OrderedList stylePosition="outside">
          <Flex justifyContent="space-between">
            <Ingredient
              img={italianSeasoning}
              ingredient="italian seasoning"
              ingredientOpinionated="italian seasoning"
              portion="1 tbsp"
            />

            <Ingredient
              img={meat}
              ingredient="meat"
              ingredientOpinionated="impossilbe/bison meat"
              portion="~3/4 lb"
            />

            <Ingredient
              img={marinara}
              ingredient="marinara sauce"
              ingredientOpinionated="marinara sauce"
              portion="~25oz"
            />

            <Ingredient
              img={noodles}
              ingredient="noodles"
              ingredientOpinionated="chickpea rotini noodles"
              portion="1 box"
            />
          </Flex>
        </OrderedList>
      </Stack>

      <Stack textAlign="right">
        <Heading as="h3" size="sm">instructions</Heading>

        <OrderedList stylePosition="outside">
          <ListItem>
            put sauce in a pot on low heat to warm and{" "}
            <span style={{}}>slightly</span> reduce
          </ListItem>

          <ListItem>stir italian seasoning into sauce</ListItem>

          <ListItem>cook pasta</ListItem>

          <ListItem>brown meat, do not season</ListItem>

          <ListItem>
            once sauce is warm, meat is browned, and pasta is cooked, mix all of
            them together, turn off heat, and let sit for ~2 minutes to cool
          </ListItem>

          <ListItem>serve</ListItem>
        </OrderedList>
      </Stack>
    </Stack>
  );
};
