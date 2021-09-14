import { Flex, Heading, Stack } from "@chakra-ui/layout";
import { RouteComponentProps } from "@reach/router";
import { useGlobal } from "reactn";

import { Ingredient } from "components";
import ramenWithBeefBroth from "images/asain-food-store/ramen_beef-broth.webp";
import jinRamenSpicy from "images/asain-food-store/jin-ramen-spicy.webp";

export const AsainFoodStore = (_: RouteComponentProps) => {
  const [showImages] = useGlobal("showImages");

  return (
    <Stack data-testid="AsainFoodStore-root">
      <Heading as="h1" size="lg" textAlign="center">
        AsainFoodStore {showImages === false && "(`Images` are turned off)"}
      </Heading>

      <Flex justifyContent="space-evenly">
        <Ingredient
          img={ramenWithBeefBroth}
          ingredient="Ramen With Beef Broth"
          ingredientOpinionated="Ramen With Beef Broth"
          portion=""
        />

        <Ingredient
          img={jinRamenSpicy}
          ingredient="Jin Spicy Ramen"
          ingredientOpinionated="Jin Spicy Ramen"
          portion=""
        />
      </Flex>
    </Stack>
  );
};
