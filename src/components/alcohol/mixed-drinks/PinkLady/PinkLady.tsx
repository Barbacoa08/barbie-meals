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
import applejack from "images/alcohol-ingredients/applejack-whiskey.webp";
import gin from "images/alcohol-ingredients/drumshanbo-gin.webp";
import grenadine from "images/alcohol-ingredients/grenadine.webp";
import ice from "images/alcohol-ingredients/ice-cubes.webp";
import lemons from "images/alcohol-ingredients/lemons.webp";

export const PinkLady = (_: RouteComponentProps) => {
  const [showOpinions] = useGlobal("showOpinions");

  return (
    <Stack data-testid="PinkLady-root">
      <Flex justifyContent="space-evenly">
        <Heading as="h2" size="lg">
          Pink Lady
        </Heading>

        <Box display="inline-flex">
          <Tag>#gin</Tag>
          <Tag>#grenadine</Tag>
          <Tag>#lemon</Tag>
        </Box>
      </Flex>

      <Stack justifyContent="space-between">
        <Heading as="h4" size="sm">
          ingredients
        </Heading>

        <Flex>
          <Ingredient
            img={gin}
            ingredient="gin"
            ingredientOpinionated="drumshanbo gin"
            portion="1.5 oz"
          />

          <Ingredient
            img={applejack}
            ingredient="applejack whiskey"
            ingredientOpinionated="applejack whiskey (optional)"
            portion="0.5 oz"
          />

          <Ingredient
            img={lemons}
            ingredient="lemon juice"
            ingredientOpinionated="fresh squeezed lemon juice"
            portion={"0.5 oz"}
          />

          <Ingredient
            img={grenadine}
            ingredient="grenadine"
            ingredientOpinionated="grenadine"
            portion="1 tsp"
          />

          <Ingredient
            img={ice}
            ingredient="ice cubes"
            ingredientOpinionated="ice cubes"
            portion="many"
          />
        </Flex>
      </Stack>

      <Stack textAlign="right">
        <Heading as="h4" size="sm">
          instructions
        </Heading>

        <OrderedList>
          <ListItem>
            <Text>
              add ice, gin, applejack, grenadine, and lemon juice to a cocktail
              shaker
              {showOpinions &&
                ", passing lemon juice through a fine mesh strainer if freshly squeezed"}
            </Text>
          </ListItem>

          <ListItem>
            <Text>
              shake vigorously until chilled {showOpinions && "(~15 seconds)"}
            </Text>
          </ListItem>

          <ListItem>
            <Text>serve</Text>
          </ListItem>
        </OrderedList>
      </Stack>
    </Stack>
  );
};
