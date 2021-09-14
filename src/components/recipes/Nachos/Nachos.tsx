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
// import beans from "images/vegetables/black-beans.webp";
import seasoning from "images/seasonings/taco-seasoning.webp";

export const Nachos = (_: RouteComponentProps) => {
  return (
    <Stack data-testid="Nachos-root">
      <Flex justifyContent="space-evenly">
        <Heading as="h2" size="lg">Nachos (serves six)</Heading>

        <Box display="inline-flex">
          <Tag>#side</Tag>
          <Tag>#easy</Tag>
        </Box>
      </Flex>

      <Stack justifyContent="space-between">
        <Heading as="h4" size="sm">ingredients</Heading>

        <Flex>
          <Ingredient
            img={""}
            ingredient="meat"
            ingredientOpinionated="ground bison"
            portion="16 oz"
          />

          <Ingredient
            img={""}
            ingredient="tomatoes"
            ingredientOpinionated="crushed tomatoes"
            portion="1 can"
          />

          <Ingredient
            img={""}
            ingredient="diced onions"
            ingredientOpinionated="diced onions"
            portion="1 large onion"
          />

          <Ingredient
            img={""}
            ingredient="sliced olives"
            ingredientOpinionated="sliced olives"
            portion="two small cans"
          />

          <Ingredient
            img={""}
            ingredient="diced jalapenos"
            ingredientOpinionated="diced jalapenos"
            portion="one small can"
          />

          <Ingredient
            img={""}
            ingredient="cheese"
            ingredientOpinionated="mexican blend cheese"
            portion="one large bag"
          />

          <Ingredient
            img={""}
            ingredient="tortilla chips"
            ingredientOpinionated="blue corn torilla chips"
            portion="two bags"
          />

          <Ingredient
            img={""}
            ingredient="salsa"
            ingredientOpinionated="chunky salsa"
            portion="one jar"
          />

          <Ingredient
            img={seasoning}
            ingredient="taco seasoning"
            ingredientOpinionated="taco seasoning"
            portion="2 packets"
          />

          <Ingredient
            img={""}
            ingredient="sour cream"
            ingredientOpinionated="sour cream"
            portion="one medium container"
          />

          <Ingredient
            img={""}
            ingredient="guacamole"
            ingredientOpinionated="guacamole"
            portion="a whole bunch"
          />
        </Flex>
      </Stack>

      <Stack textAlign="right">
        <Heading as="h4" size="sm">instructions</Heading>

        <OrderedList>
          <ListItem>
            <Text>preheat oven to 300 F° (150 C°)</Text>
          </ListItem>

          <ListItem>
            <Text>brown meat</Text>
          </ListItem>

          <ListItem>
            <Text>get your biggest sheet pan</Text>
          </ListItem>

          <ListItem>
            <Text>
              place one solid layer of chips and cover with a solid layer of
              cheese
            </Text>
          </ListItem>

          <ListItem>
            <Text>
              place in over for 5 minutes or until cheese is mostly melted
            </Text>
          </ListItem>

          <ListItem>
            <Text>
              remove pan from oven, evenly distribute: meat, beans, tomatoes,
              onions, olives, jalapenos, and a thin layer of cheese
            </Text>
          </ListItem>

          <ListItem>
            <Text>place in over for 5 minutes or until cheese is melted</Text>
          </ListItem>

          <ListItem>
            <Text>
              remove pan from over, place a thick layer of chips and then a
              thick layer of cheese
            </Text>
          </ListItem>

          <ListItem>
            <Text>
              return to oven for 10 minutes or until cheese is fully melted
            </Text>
          </ListItem>

          <ListItem>
            <Text>
              turn off oven, remove pan and let rest for 2 minutes, just long
              enough for cheese to congeal
            </Text>
          </ListItem>

          <ListItem>
            <Text>put a think layer of salsa over nachos</Text>
          </ListItem>

          <ListItem>
            <Text>
              serve with individual servings of sour cream and guacamole
            </Text>
          </ListItem>
        </OrderedList>
      </Stack>
    </Stack>
  );
};
