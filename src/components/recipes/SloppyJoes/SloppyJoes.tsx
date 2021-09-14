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
import { useGlobal } from "reactn";

import { Ingredient } from "components";
import ketchup from "images/condiments/ketchup.webp";
import sweetBabyRays from "images/condiments/sweet-baby-rays.webp";
import buns from "images/misc/buns.webp";
import meat from "images/misc/impossible-meat.webp";
import garlicPowder from "images/seasonings/garlic-powder.webp";
import worcestershireSauce from "images/seasonings/worcestershire-sauce.webp";
// import meatKetchupSBRPreMix from "images/recipe-specific/sloppy-joes-ketchup+SBR+meat.webp";

export const SloppyJoes = (_: RouteComponentProps) => {
  const [showFancy] = useGlobal("showFancy");
  const [showOpinions] = useGlobal("showOpinions");

  // TODO: useEffect, if any of these change, fade(transition) change. Probably need a new component.

  return (
    <Stack data-testid="SloppyJoes-root">
      <Flex justifyContent="space-evenly">
        <Heading as="h2" size="lg">Sloppy Joes</Heading>

        <Box display="inline-flex">
          {/*
            TODO: _eventually_ tags should be link to a proper search page
            https://fusejs.io/
            https://stackoverflow.com/q/23305000/1022765
          */}
          {!showOpinions && <Tag>#vegan</Tag>}
          <Tag>#fast</Tag>
          <Tag>#easy</Tag>
        </Box>
      </Flex>

      <Stack justifyContent="space-between">
        <Heading as="h4" size="sm">ingredients</Heading>

        <Flex>
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
            ingredientOpinionated="sweet baby rays original"
            portion="1/2 cup"
          />

          <Ingredient
            img={buns}
            ingredient="buns"
            ingredientOpinionated="brioche buns"
            portion="2-4"
          />

          {showFancy && (
            <Ingredient
              img={garlicPowder}
              ingredient="garlic powder"
              ingredientOpinionated="garlic powder"
              portion="~1 teaspoon"
            />
          )}

          {showFancy && (
            <Ingredient
              img={worcestershireSauce}
              ingredient="worcestershire sauce"
              ingredientOpinionated="worcestershire sauce"
              portion="~1 teaspoon"
            />
          )}
        </Flex>
      </Stack>

      {/*
        TODO: striped list items
        https://chakra-ui.com/docs/features/chakra-factory#attaching-styles
      */}
      <Stack textAlign="right">
        <Heading as="h4" size="sm">instructions</Heading>

        <OrderedList stylePosition="outside">
          <ListItem>
            <Text>brown meat</Text>
          </ListItem>

          <ListItem>
            {showFancy ? (
              <Text>
                add ketchup, garlic powder, worcestershire sauce, and sweet baby
                rays
              </Text>
            ) : (
              <Text>add ketchup, and sweet baby rays</Text>
            )}
          </ListItem>

          <ListItem>
            <Text>stir continuously until thickened (2-4 minutes)</Text>
          </ListItem>

          <ListItem>
            <Text>put mixture on the bun</Text>
          </ListItem>
        </OrderedList>
      </Stack>
    </Stack>
  );
};
