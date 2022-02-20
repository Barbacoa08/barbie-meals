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
import prosecco from "images/alcohol-ingredients/cheap-prosecco.webp";
import gin from "images/alcohol-ingredients/du-nord.webp";
import ice from "images/alcohol-ingredients/ice-cubes.webp";
import lemons from "images/alcohol-ingredients/lemons.webp";
import simplesyrup from "images/alcohol-ingredients/simple-syrup.webp";

export const French75 = (_: RouteComponentProps) => {
  const [showOpinions] = useGlobal("showOpinions");

  return (
    <Stack data-testid="French75-root">
      <Flex justifyContent="space-evenly">
        <Heading as="h2" size="lg">
          French 75
        </Heading>

        <Box display="inline-flex">
          <Tag>#gin</Tag>
          <Tag>#champagne</Tag>
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
            ingredientOpinionated="du nord gin"
            portion="1 oz"
          />

          <Ingredient
            img={lemons}
            ingredient="lemon juice"
            ingredientOpinionated="fresh squeezed lemon juice"
            portion={"0.5 oz"}
          />

          <Ingredient
            img={simplesyrup}
            ingredient="simple syrup"
            ingredientOpinionated="simple syrup"
            portion="0.5 oz"
          />

          <Ingredient
            img={prosecco}
            ingredient="champagne/prosecco"
            ingredientOpinionated="cheapo prosecco"
            portion="~3 oz"
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
              add ice, gin, simple syrup, and lemon juice to a cocktail shaker
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
            <Text>
              strain into cup and top off with{" "}
              {showOpinions ? "prosecco" : "champagne"}
            </Text>
          </ListItem>
        </OrderedList>
      </Stack>
    </Stack>
  );
};
