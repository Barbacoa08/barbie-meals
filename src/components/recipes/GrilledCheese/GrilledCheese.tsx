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
import bread from "images/costco/costco_daves-killer-break-21-whole-grains.webp";
import cheese from "images/costco/costco_habanero-cheese.webp";
import sugar from "images/seasonings/brown-sugar.webp";
import onion from "images/vegetables/yellow-onion.webp";
import butter from "images/misc/butter.webp";

export const GrilledCheese = (_: RouteComponentProps) => {
  const [showFancy] = useGlobal("showFancy");
  const [showOpinions] = useGlobal("showOpinions");

  // TODO: useEffect, if any of these change, fade(transition) change. Probably need a new component.

  return (
    <Stack data-testid="GrilledCheese-root">
      <Flex justifyContent="space-evenly">
        <Heading size="lg">Grilled Cheese</Heading>

        <Box display="inline-flex">
          {/*
            TODO: _eventually_ tags should be link to a proper search page
            https://fusejs.io/
            https://stackoverflow.com/q/23305000/1022765
          */}
          <Tag>#fast</Tag>
          <Tag>#easy</Tag>
        </Box>
      </Flex>

      <Stack justifyContent="space-between">
        <Heading as="h3" size="sm">ingredients</Heading>

        <Flex>
          {showFancy && (
            <>
              <Ingredient
                img={onion}
                ingredient="onion"
                ingredientOpinionated="yellow onion"
                portion="1 small"
              />

              <Ingredient
                img={sugar}
                ingredient="brown sugar"
                ingredientOpinionated="brown sugar"
                portion="1-2 tbsp"
              />
            </>
          )}

          <Ingredient
            img={bread}
            ingredient="bread"
            ingredientOpinionated="Dave's Killer Bread, 21 Grains"
            portion="2 slices"
          />

          <Ingredient
            img={butter}
            ingredient="butter"
            ingredientOpinionated="unsalter butter"
            portion="enough"
          />

          <Ingredient
            img={cheese}
            ingredient="cheese"
            ingredientOpinionated="Cabot Habanero Cheddar Cheese"
            portion="enough"
          />

          {showOpinions && (
            <Ingredient
              img={ketchup}
              ingredient="ketchup"
              ingredientOpinionated="heinz ketchup"
              portion="enough"
            />
          )}
        </Flex>
      </Stack>

      <Stack textAlign="right">
        <Heading as="h3" size="sm">instructions</Heading>

        <OrderedList stylePosition="outside">
          {showFancy && (
            <>
              <ListItem>
                <Text>
                  warm ~1tbsp of olive oil in skillet at low-medium/medium heat
                </Text>
              </ListItem>
              <ListItem>
                <Text>slice onion into thin-medium strips</Text>
              </ListItem>
              <ListItem>
                <Text>add onion to skillet, stir occasionaly</Text>
              </ListItem>
              <ListItem>
                <Text>
                  when the onion is starting to become translucent, add brown
                  sugar and stir continuously until there are no clumps of sugar
                </Text>
              </ListItem>
              <ListItem>
                <Text>continue to cook until carmalized, ~4 minutes</Text>
              </ListItem>
              <ListItem>
                <Text>set asside for use in sandwich</Text>
              </ListItem>
            </>
          )}

          <ListItem>
            <Text>warm skillet at low/medium heat</Text>
          </ListItem>

          <ListItem>
            <Text>slice cheese</Text>
          </ListItem>

          <ListItem>
            <Text>butter one side of each bread slice</Text>
          </ListItem>

          <ListItem>
            {showFancy ? (
              <Text>
                once skillet is warm, place one bread slice butter side down on
                skillet, add thin layer of cheese, add generous layer of
                carmalized onion, add thin layer of cheese, add second slice of
                bread with butter side up, then cover
              </Text>
            ) : (
              <Text>
                once skillet is warm, place one bread slice butter side down on
                skillet, add layer of chese and then second slice of bread with
                butter side up, then cover
              </Text>
            )}
          </ListItem>

          <ListItem>
            <Text>
              cook until golden brown and cheese is slightly melted, ~3 minutes,
              flip and keep covered
            </Text>
          </ListItem>

          <ListItem>
            <Text>
              cook until second side is golden brown and cheese is melty, ~3
              minutes, turn off heat and remove sandwich
            </Text>
          </ListItem>

          <ListItem>
            <Text>
              wait for cheese to re-solidify, 1-2 minutes, then immediately cut
              and consume {showOpinions && "w/ ketchup"}
            </Text>
          </ListItem>
        </OrderedList>
      </Stack>
    </Stack>
  );
};
