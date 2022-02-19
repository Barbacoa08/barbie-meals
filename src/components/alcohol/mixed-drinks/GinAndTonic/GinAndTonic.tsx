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

export const GinAndTonic = (_: RouteComponentProps) => {
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
            img={""}
            ingredient="large ice cubes"
            ingredientOpinionated="one large sphere of ice"
            portion="1"
          />

          <Ingredient
            img={""}
            ingredient="gin"
            ingredientOpinionated="du nord"
            portion="1.5 oz"
          />

          <Ingredient
            img={""}
            ingredient="lime"
            ingredientOpinionated="1-to-1 ratio if using pre-squeezed, else 1-to-2 lime to gin"
            portion="1.5 oz"
          />

          <Ingredient
            img={""}
            ingredient="tonic water"
            ingredientOpinionated="canada dry tonic"
            portion="~16 oz (to taste)"
          />
        </Flex>

        <Stack textAlign="right">
          <Heading as="h4" size="sm">
            instructions
          </Heading>

          <OrderedList>
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
    </Stack>
  );
};
