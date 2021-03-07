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

export const PBJ = (_: RouteComponentProps) => {
  const [showFancy] = useGlobal("showFancy");
  const [showOpinions] = useGlobal("showOpinions");

  // TODO: useEffect, if any of these change, fade(transition) change. Probably need a new component.

  return (
    <Stack data-testid="PBJ-root">
      <Flex justifyContent="space-evenly">
        <Heading size="lg">Toasted PBJ</Heading>

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

      <Stack>
        <Heading size="sm">ingredients</Heading>

        <Flex justifyContent="space-between">
          <Ingredient
            img={""} // TODO: add image
            ingredient="bread"
            ingredientOpinionated="vietnamese baguette"
            portion=""
          />

          <Ingredient
            img={""} // TODO: add image
            ingredient="peanut butter"
            ingredientOpinionated="trader joes unsalted crunchy peanut butter"
            portion=""
          />

          <Ingredient
            img={""} // TODO: add image
            ingredient="jam/jelly"
            ingredientOpinionated="fig jam from your local farmers market"
            portion=""
          />

          <Ingredient
            img={""} // TODO: add image
            ingredient="olive oil / butter"
            ingredientOpinionated="butter"
            portion=""
          />
        </Flex>
      </Stack>

      <Stack textAlign="right">
        <Heading size="sm">instructions</Heading>

        {/*
          TODO: striped list items
          https://chakra-ui.com/docs/features/chakra-factory#attaching-styles
        */}
        <OrderedList stylePosition="outside">
          <ListItem>
            {showFancy ? (
              <Text>warm pan/skillet/toaster-oven (~2 minutes)</Text>
            ) : (
              <Text>warm toaster-oven (~2 minutes)</Text>
            )}
          </ListItem>

          <ListItem>
            put PB on one slice of bread, jam on the other slice, sandwich
          </ListItem>

          <ListItem>
            brush top and bottom of sandwich with{" "}
            {showOpinions ? "butter" : "oil/butter"}
          </ListItem>

          <ListItem>
            {showFancy ? (
              <Text>
                place sandwich in skillet, put a plate on top of the sandwich
                and lightly squish it down, leaving the plate on the sandwich;
                lightly brown (2-4 minutes) and then flip and repeat process for
                other side of sandwich
              </Text>
            ) : (
              <Text>
                place sandwich in toaster-over until it's lightly browned
              </Text>
            )}
          </ListItem>

          <ListItem>
            remove sandwich from heat, cut, plate, and consume before it gets
            cold!
          </ListItem>
        </OrderedList>
      </Stack>
    </Stack>
  );
};
