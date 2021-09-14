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
import butter from "images/misc/butter.webp";
import eggs from "images/misc/eggs.webp";
import tortillawraps from "images/misc/spinach-tortilla-wraps.webp";
import sausage from "images/misc/tjs-chicken-sausage.webp";
import pepper from "images/seasonings/black-pepper.webp";
import garlicpowder from "images/seasonings/garlic-powder.webp";
import salt from "images/seasonings/salt.webp";
import sweetpeppers from "images/vegetables/sweet-peppers.webp";

export const BreakfastBurritos = (_: RouteComponentProps) => {
  return (
    <Stack data-testid="BreakfastBurritos-root">
      <Flex justifyContent="space-evenly">
        <Heading as="h2" size="lg">Breakfast Burritos</Heading>

        <Box display="inline-flex">
          <Tag>#filling</Tag>
          <Tag>#fast</Tag>
          <Tag>#easy</Tag>
        </Box>
      </Flex>

      <Stack justifyContent="space-between">
        <Heading as="h3" size="sm">ingredients</Heading>

        <Flex>
          <Ingredient
            img={eggs}
            ingredient="eggs"
            ingredientOpinionated="eggs"
            portion="3"
          />

          <Ingredient
            img={sweetpeppers}
            ingredient="sweet peppers"
            ingredientOpinionated="sweet peppers"
            portion="4"
          />

          <Ingredient
            img={sausage}
            ingredient="sausage"
            ingredientOpinionated="sausage"
            portion="1 sausage"
          />

          <Ingredient
            img={butter}
            ingredient="butter"
            ingredientOpinionated="butter"
            portion="1/2 tablespoon"
          />

          <Ingredient
            img={tortillawraps}
            ingredient="tortilla wraps"
            ingredientOpinionated="tortilla wraps"
            portion="2"
          />

          <Ingredient
            img={salt}
            ingredient="salt"
            ingredientOpinionated="salt"
            portion="enough"
          />

          <Ingredient
            img={pepper}
            ingredient="black pepper"
            ingredientOpinionated="black pepper"
            portion="enough"
          />

          <Ingredient
            img={garlicpowder}
            ingredient="garlic powder"
            ingredientOpinionated="garlic powder"
            portion="enough"
          />
        </Flex>
      </Stack>

      <Stack textAlign="right">
        <Heading as="h3" size="sm">instructions</Heading>

        <OrderedList>
          <ListItem>
            <Text>dice the peppers and sausage</Text>
          </ListItem>

          <ListItem>
            <Text>
              beat the eggs until smooth then <Text as="i">lightly</Text> season
              with salt, pepper, and garlic powder
            </Text>
          </ListItem>

          <ListItem>
            <Text>cook the peppers and sausage, 3-4 minutes</Text>
          </ListItem>

          <ListItem>
            <Text>
              reduce the heat to low, add the butter and stir until coated
            </Text>
          </ListItem>

          <ListItem>
            <Text>
              once coated, add mixture to eggs, beat and return to pan
            </Text>
          </ListItem>

          <ListItem>
            <Text>cook on medium heat, stirring constantly</Text>
          </ListItem>

          <ListItem>
            <Text>
              when the eggs are 70% cooked, season with salt, pepper, and garlic
              powder, then continue to stir constantly
            </Text>
          </ListItem>

          <ListItem>
            <Text>
              once eggs are fully cooked, divide in two and wrap in warm
              tortilla shells
            </Text>
          </ListItem>
        </OrderedList>
      </Stack>
    </Stack>
  );
};
