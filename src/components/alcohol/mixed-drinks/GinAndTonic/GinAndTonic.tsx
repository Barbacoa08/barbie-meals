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
import tonic from "images/alcohol-ingredients/canada-dry-tonic-water.webp";
import gin from "images/alcohol-ingredients/du-nord.webp";
import ice from "images/alcohol-ingredients/ice-sphere.webp";
import lime from "images/alcohol-ingredients/lime.webp";

export const GinAndTonic = (_: RouteComponentProps) => {
  const [showOpinions] = useGlobal("showOpinions");

  return (
    <Stack data-testid="GinAndTonic-root">
      <Flex justifyContent="space-evenly">
        <Heading as="h2" size="lg">
          Gin and Tonic
        </Heading>

        <Box display="inline-flex">
          <Tag>#gin</Tag>
          <Tag>#lime</Tag>
          <Tag>#tonic</Tag>
          <Tag>#easy</Tag>
        </Box>
      </Flex>

      <Stack justifyContent="space-between">
        <Heading as="h4" size="sm">
          ingredients
        </Heading>

        <Flex>
          <Ingredient
            img={ice}
            ingredient="large ice cube"
            ingredientOpinionated="large ice sphere"
            portion="1"
          />

          <Ingredient
            img={gin}
            ingredient="gin"
            ingredientOpinionated="du nord gin"
            portion="1.5 oz"
          />

          <Ingredient
            img={lime}
            ingredient="lime juice"
            ingredientOpinionated="fresh squeezed lime juice"
            portion={showOpinions ? "1.5 oz" : "0.75 oz"}
          />

          <Ingredient
            img={tonic}
            ingredient="tonic water"
            ingredientOpinionated="canada dry tonic"
            portion="~16 oz (to taste)"
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
              squeeze enough lime juice to get a 1-to-2 lime to gin ratio, if
              you are using presqueezed lime juice, use a 1-to-1 ratio
            </Text>
          </ListItem>

          <ListItem>
            <Text>place the ice in the cup</Text>
          </ListItem>

          <ListItem>
            <Text>pour the gin directly onto the ice</Text>
          </ListItem>

          <ListItem>
            <Text>pour the lime juice directly onto the ice</Text>
          </ListItem>

          <ListItem>
            <Text>slowly pour the tonic directly onto the ice</Text>
          </ListItem>
        </OrderedList>
      </Stack>
    </Stack>
  );
};
