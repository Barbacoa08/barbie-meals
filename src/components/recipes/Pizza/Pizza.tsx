import {
  Box,
  Flex,
  Heading,
  ListItem,
  OrderedList,
  Stack,
  Text,
} from "@chakra-ui/layout";
import { Tag } from "@chakra-ui/tag";
import { RouteComponentProps } from "@reach/router";

import { Ingredient } from "components";

export const Pizza = (_: RouteComponentProps) => {
  return (
    <Stack data-testid="Pizza-root">
      <Flex justifyContent="space-evenly">
        <Heading as="h2" size="lg">Pizza</Heading>

        <Box display="inline-flex">
          <Tag>#side</Tag>
          <Tag>#complex</Tag>
        </Box>
      </Flex>

      <Stack justifyContent="space-between">
        <Heading as="h4" size="sm">ingredients</Heading>

        <Flex>
          <Ingredient
            img={""}
            ingredient="TJs dough"
            ingredientOpinionated="kowalski's pizza dough"
            portion="1"
          />

          <Ingredient
            img={""}
            ingredient="pizza sauce"
            ingredientOpinionated="ragu sauce"
            portion="1 jar"
          />

          <Ingredient
            img={""}
            ingredient="mozzarella cheese"
            ingredientOpinionated="mozzarella / parmigiano-reggiano / pecorino-romano / quattro formaggi mix"
            portion="1 packet"
          />

          <Ingredient
            img={""}
            ingredient="oregano"
            ingredientOpinionated="oregano"
            portion="enough"
          />

          <Ingredient
            img={""}
            ingredient="red pepper flakes"
            ingredientOpinionated="red pepper flakes"
            portion="sprinkle"
          />

          <Ingredient
            img={""}
            ingredient="other toppings"
            ingredientOpinionated="mushroom, caramelized onions, peppers"
            portion="enough"
          />
        </Flex>
      </Stack>

      <Stack textAlign="right">
        <Heading as="h4" size="sm">instructions</Heading>

        <OrderedList>
          <ListItem>
            <Text>
              if you use pineapple, add a little more red-pepper-flakes than you
              normally would
            </Text>
          </ListItem>
        </OrderedList>
      </Stack>
    </Stack>
  );
};
