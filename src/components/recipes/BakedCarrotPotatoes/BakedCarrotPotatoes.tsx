import {
  Box,
  Flex,
  Heading,
  ListItem,
  OrderedList,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/layout";
import { Tag } from "@chakra-ui/tag";
import { RouteComponentProps } from "@reach/router";
import { useGlobal } from "reactn";

import { Ingredient } from "components";
import hamsteak from "images/recipe-specific/target-ham-steak.webp";
import salt from "images/seasonings/salt.webp";
import pepper from "images/seasonings/black-pepper.webp";
import garlicpowder from "images/seasonings/garlic-powder.webp";
import carrots from "images/vegetables/baby-carrots.webp";
import potatoes from "images/vegetables/baby-red-potatoes.webp";

export const BakedCarrotPotatoes = (_: RouteComponentProps) => {
  const [showOpinions] = useGlobal("showOpinions");

  return (
    <Stack data-testid="BakedCarrotPotatoes-root">
      <Flex justifyContent="space-evenly">
        <Heading size="lg">Baked Carrots and Potatoes</Heading>

        <Box display="inline-flex">
          <Tag>#side</Tag>
          <Tag>#easy</Tag>
        </Box>
      </Flex>

      <Stack justifyContent="space-between">
        <Heading as="h3" size="sm">ingredients</Heading>

        <Flex>
          <Ingredient
            img={carrots}
            ingredient="carrots"
            ingredientOpinionated="baby carrots"
            portion="16 oz"
          />

          <Ingredient
            img={potatoes}
            ingredient="baby potatoes"
            ingredientOpinionated="baby red potatoes"
            portion="24 oz"
          />

          <Ingredient
            img={salt}
            ingredient="salt"
            ingredientOpinionated="salt"
            portion="enough"
          />

          <Ingredient
            img={pepper}
            ingredient="pepper"
            ingredientOpinionated="black pepper"
            portion="enough"
          />

          <Ingredient
            img={garlicpowder}
            ingredient="garlic powder"
            ingredientOpinionated="garlic powder"
            portion="enough"
          />

          {showOpinions && (
            <Ingredient
              img={hamsteak}
              ingredient="ham steak"
              ingredientOpinionated="ham steak"
              portion="1"
            />
          )}
        </Flex>
      </Stack>

      <Stack textAlign="right">
        <Heading as="h3" size="sm">instructions</Heading>

        <OrderedList>
          <ListItem>
            <Text>preheat oven to 450 F° (~230 C°)</Text>
          </ListItem>

          <ListItem>
            <Text>halve carrots, quarter potatoes</Text>
          </ListItem>

          <ListItem>
            <Text>
              combine in large bowl with enough olive oil to coat, then medium
              sprinkle with: salt + pepper + garlic powder
            </Text>
          </ListItem>

          <ListItem>
            <Text>place evenly in pan, lightly sprinkle with garlic powder</Text>
          </ListItem>

          <ListItem>
            <Text>roast at 450 for ~34 minutes</Text>
          </ListItem>
        </OrderedList>

        {showOpinions && (
          <UnorderedList>
            <ListItem>
              <Text>(optionally) pair with a Ham Steak</Text>
            </ListItem>
          </UnorderedList>
        )}
      </Stack>
    </Stack>
  );
};
