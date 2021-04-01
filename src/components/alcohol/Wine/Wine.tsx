import { Flex, Heading, Stack } from "@chakra-ui/layout";
import { RouteComponentProps } from "@reach/router";
import { useGlobal } from "reactn";

import { Ingredient } from "components";
import gestos from "images/wine/wine-gestos-malbec-argentina.webp";
import toscana from "images/wine/wine-toscana-italy.webp";
import viognier from "images/wine/wine-white-viognier-california.webp";

export const Wine = (_: RouteComponentProps) => {
  const [showImages] = useGlobal("showImages");

  return (
    <Stack data-testid="Wine-root">
      <Heading size="lg" textAlign="center">
        Wine {showImages === false && "(`Images` are turned off)"}
      </Heading>

      <Flex justifyContent="space-evenly">
        <Ingredient
          img={gestos}
          ingredient="gestos"
          ingredientOpinionated="gestos"
          portion=""
        />

        <Ingredient
          img={toscana}
          ingredient="toscana"
          ingredientOpinionated="toscana"
          portion=""
        />

        <Ingredient
          img={viognier}
          ingredient="viognier"
          ingredientOpinionated="viognier"
          portion=""
        />
      </Flex>
    </Stack>
  );
};
