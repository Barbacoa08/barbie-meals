import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Grid,
  Heading,
  Link,
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
import buns from "images/misc/buns.webp";
import meat from "images/misc/impossible-meat.webp";
import pepper from "images/seasonings/black-pepper.webp";
import mexispice from "images/seasonings/mexi-spice.webp";
import salt from "images/seasonings/salt.webp";

export const Burgers = (_: RouteComponentProps) => {
  const [showFancy] = useGlobal("showFancy");
  const [showOnlyTheBasics] = useGlobal("showOnlyTheBasics");

  return (
    <Stack data-testid="Burgers-root">
      <Flex justifyContent="space-evenly">
        <Heading size="lg">Burgers</Heading>

        <Box display="inline-flex">
          <Tag>#filling</Tag>
          {showOnlyTheBasics && (
            <>
              <Tag>#fast</Tag>
              <Tag>#easy</Tag>
            </>
          )}
          {showFancy && (
            <>
              <Tag>#complex</Tag>
              <Tag>#slow</Tag>
            </>
          )}
        </Box>
      </Flex>

      <Grid>
        <Link
          color="lightblue"
          href="https://twitter.com/blueapron/status/952965279193206784?lang=en"
          isExternal
        >
          Mexican Spice (Blue Apron) <ExternalLinkIcon />
        </Link>
        <Text>
          Equal parts: Paprika, Oregano, Cumin, Garlic Powder, Ancho/Chipotle
          Chile Powder
        </Text>
      </Grid>

      <PattiesDirections />

      <AoliDirections />

      <OnionsDirections />

      <AssemblyDirections />
    </Stack>
  );
};

const PattiesDirections = () => {
  return (
    <>
      <Stack justifyContent="space-between">
        <Heading size="sm">patties ingredients</Heading>
        <Flex>
          <Ingredient
            img={meat}
            ingredient="meat"
            ingredientOpinionated="impossilbe/bison meat"
            portion="1lb -> 3 patties"
          />

          <Ingredient
            img={mexispice}
            ingredient="mexican spice"
            ingredientOpinionated="mexican spice"
            portion="~2tsp"
          />

          <Ingredient
            img={salt}
            ingredient="salt"
            ingredientOpinionated="salt"
            portion="pinch"
          />

          <Ingredient
            img={pepper}
            ingredient="pepper"
            ingredientOpinionated="pepper"
            portion="pinch"
          />
        </Flex>
      </Stack>

      <Stack textAlign="right">
        <Heading size="sm">patties instructions</Heading>

        <OrderedList stylePosition="outside">
          <ListItem>
            <Text>thoroughly mix together meat, spice, salt, pepper</Text>
          </ListItem>

          <ListItem>
            <Text>shape burgers and grill 5-6 minutes per side</Text>
          </ListItem>

          <ListItem>
            <Text>remove burgers, leave frond for grilling the onions in</Text>
          </ListItem>
        </OrderedList>
      </Stack>
    </>
  );
};

const OnionsDirections = () => {
  return (
    <>
      <Stack justifyContent="space-between">
        <Heading size="sm">onions ingredients</Heading>
        <Flex>
          <Ingredient
            img={""}
            ingredient="meat frond"
            ingredientOpinionated="meat frond"
            portion=""
          />

          <Ingredient
            img={""}
            ingredient="onion"
            ingredientOpinionated="yellow onion"
            portion="large"
          />

          <Ingredient
            img={""}
            ingredient="red wine vinegar"
            ingredientOpinionated="red wine vinegar"
            portion="pinch"
          />
        </Flex>
      </Stack>

      <Stack textAlign="right">
        <Heading size="sm">onion instructions</Heading>

        <OrderedList stylePosition="outside">
          <ListItem>
            <Text>cook in pan after patties are done 4-6 minutes</Text>
          </ListItem>

          <ListItem>
            <Text>
              once soft, turn heat off and sprinkle with red wine vinegar
            </Text>
          </ListItem>

          <ListItem>
            <Text>stir continiously until carmalized then set aside</Text>
          </ListItem>
        </OrderedList>
      </Stack>
    </>
  );
};

const AoliDirections = () => {
  return (
    <>
      <Stack justifyContent="space-between">
        <Heading size="sm">aoli ingredients</Heading>
        <Flex>
          <Ingredient
            img={""}
            ingredient="mayo"
            ingredientOpinionated="mayo"
            portion="1/4 cup"
          />

          <Ingredient
            img={""}
            ingredient="mustard"
            ingredientOpinionated="dijon mustard"
            portion="1 tbsp"
          />

          <Ingredient
            img={""}
            ingredient="garlic"
            ingredientOpinionated="garlic"
            portion="2 large cloves"
          />

          <Ingredient
            img={""}
            ingredient="red wine vinegar"
            ingredientOpinionated="red wine vinegar"
            portion="pinch"
          />

          <Ingredient
            img={""}
            ingredient="salt"
            ingredientOpinionated="salt"
            portion="pinch"
          />

          <Ingredient
            img={""}
            ingredient="pepper"
            ingredientOpinionated="pepper"
            portion="pinch"
          />
        </Flex>
      </Stack>

      <Stack textAlign="right">
        <Heading size="sm">aoli instructions</Heading>

        <OrderedList stylePosition="outside">
          <ListItem>
            <Text>finely chop garlic cloves</Text>
          </ListItem>

          <ListItem>
            <Text>stir everything together in a bowl</Text>
          </ListItem>
        </OrderedList>
      </Stack>
    </>
  );
};

const AssemblyDirections = () => {
  const [showFancy] = useGlobal("showFancy");
  const [showOnlyTheBasics] = useGlobal("showOnlyTheBasics");

  return (
    <>
      <Stack justifyContent="space-between">
        <Heading size="sm">assembly ingredients</Heading>
        <Flex>
          <Ingredient
            img={""}
            ingredient="meat"
            ingredientOpinionated="meat"
            portion=""
          />

          {showFancy && (
            <Ingredient
              img={""}
              ingredient="aoli"
              ingredientOpinionated="aoli"
              portion=""
            />
          )}

          {!showOnlyTheBasics && (
            <Ingredient
              img={""}
              ingredient="chevre cheese"
              ingredientOpinionated="chevre cheese"
              portion=""
            />
          )}

          <Ingredient
            img={buns}
            ingredient="buns"
            ingredientOpinionated="brioche buns"
            portion=""
          />

          <Ingredient
            img={ketchup}
            ingredient="ketchup"
            ingredientOpinionated="ketchup"
            portion=""
          />

          <Ingredient
            img={""}
            ingredient="onions"
            ingredientOpinionated="onions"
            portion=""
          />
        </Flex>
      </Stack>

      <Stack textAlign="right">
        <Heading size="sm">assembly instructions</Heading>

        <OrderedList stylePosition="outside">
          <ListItem>
            <Text>Toast bun</Text>
          </ListItem>
          <ListItem>
            <Text>Lather with Aoli</Text>
          </ListItem>
          <ListItem>
            <Text>Add chevre to patty</Text>
          </ListItem>
          <ListItem>
            <Text>Top with ketchup</Text>
          </ListItem>
          <ListItem>
            <Text>Add onions</Text>
          </ListItem>
          <ListItem>
            <Text>DO NOT add tomatoes or lettuce, the textures do NOT mix</Text>
          </ListItem>
        </OrderedList>
      </Stack>
    </>
  );
};
