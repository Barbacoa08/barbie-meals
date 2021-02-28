import {
  Flex,
  Heading,
  List,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/layout";
import { Tag } from "@chakra-ui/tag";
import { RouteComponentProps } from "@reach/router";
import { useGlobal } from "reactn";

import buns from "images/buns.webp";
import meat from "images/impossible-meat.webp";
import ketchup from "images/ketchup.webp";
import sweetBabyRays from "images/sweet-baby-rays.webp";
import { Ingredient } from "components";

export const SloppyJoes = (_: RouteComponentProps) => {
  const [showFancy] = useGlobal("showFancy");

  // TODO: useEffect, if any of these change, fade(transition) change. Probably need a new component.

  return (
    <Stack data-testid="SloppyJoes-root">
      <Heading size="lg">Sloppy Joes</Heading>

      <Stack justifyContent="space-between">
        <Heading size="sm">ingredients</Heading>

        <Flex justifyContent="space-between">
          <Ingredient
            img={meat}
            ingredient="meat"
            ingredientOpinionated="impossilbe/bison meat"
            portion="1lb"
          />

          <Ingredient
            img={ketchup}
            ingredient="ketchup"
            ingredientOpinionated="heinz ketchup"
            portion="1/2 cup"
          />

          <Ingredient
            img={sweetBabyRays}
            ingredient="sweet baby rays"
            ingredientOpinionated="original sweet baby rays"
            portion="1/2 cup"
          />

          <Ingredient
            img={buns}
            ingredient="buns"
            ingredientOpinionated="brioche buns"
            portion="2-4"
          />
        </Flex>
      </Stack>

      <Stack textAlign="right">
        <Heading size="sm">instructions</Heading>

        <List>
          <ListItem>
            <Text>brown meat</Text>
          </ListItem>

          <ListItem>
            {showFancy ? (
              <Text>
                add 1/2 cup ketchup, ~1/2 tablespoon of garlic powder, ~1/2
                tablespoon worcestershire sauce, and 1/2 cup sweet baby rays
              </Text>
            ) : (
              <Text>add 1/2 cup ketchup, and 1/2 cup sweet baby rays</Text>
            )}
          </ListItem>

          <ListItem>
            <Text>stir continuously until thick (2-4 minutes)</Text>
          </ListItem>

          <ListItem>
            <Text>put mixture on the bun</Text>
          </ListItem>
        </List>
      </Stack>

      {/*
        TODO: https://fusejs.io/
        vertically flex-end
        _eventually_ tags should be link to a proper search page
      */}
      <Flex>
        <Tag>#sloppy-joes</Tag>
        <Tag>#vegan</Tag>
        <Tag>#fast</Tag>
        <Tag>#easy</Tag>
      </Flex>
    </Stack>
  );
};
