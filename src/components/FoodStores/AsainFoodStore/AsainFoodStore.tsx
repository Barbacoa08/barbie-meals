import { Flex, Heading, Stack } from "@chakra-ui/layout";
import { RouteComponentProps } from "@reach/router";
import { useGlobal } from "reactn";

import { Ingredient } from "components";
import ramenWithBeefBroth from "images/asain-food-store/ramen_beef-broth.webp";

export const AsainFoodStore = (_: RouteComponentProps) => {
  const [showImages] = useGlobal("showImages");

  return (
    <Stack data-testid="AsainFoodStore-root">
      <Heading size="lg" textAlign="center">
        AsainFoodStore {showImages === false && "(`Images` are turned off)"}
      </Heading>

      <Flex justifyContent="space-evenly">
        <Ingredient
          img={ramenWithBeefBroth}
          ingredient="Ramen With Beef Broth"
          ingredientOpinionated="Ramen With Beef Broth"
          portion=""
        />
      </Flex>
    </Stack>
  );
};
