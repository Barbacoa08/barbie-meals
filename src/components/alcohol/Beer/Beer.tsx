import { Flex, Heading, Stack } from "@chakra-ui/layout";
import { RouteComponentProps } from "@reach/router";
import { useGlobal } from "reactn";

import { Ingredient } from "components";
import marionberry from "images/beer/beer-marionberry-sour-sour-ale.webp";
import pseudosue from "images/beer/beer-pseudo-sue-pale-ale.webp";
import rosella from "images/beer/beer-rosella.webp";
import wildlittlething from "images/beer/beer-wild-little-thing-slightly-sour-ale.webp";

export const Beer = (_: RouteComponentProps) => {
  const [showImages] = useGlobal("showImages");

  return (
    <Stack data-testid="Beer-root">
      <Heading size="lg" textAlign="center">
        Beer {showImages === false && "(`Images` are turned off)"}
      </Heading>

      <Flex justifyContent="space-evenly">
        <Ingredient
          img={marionberry}
          ingredient="marionberry sour ale"
          ingredientOpinionated="marionberry sour ale"
          portion=""
        />

        <Ingredient
          img={rosella}
          ingredient="rosella"
          ingredientOpinionated="rosella"
          portion=""
        />

        <Ingredient
          img={wildlittlething}
          ingredient="wild little thing"
          ingredientOpinionated="wild little thing"
          portion=""
        />

        <Ingredient
          img={pseudosue}
          ingredient="pseudo sue"
          ingredientOpinionated="pseudo sue"
          portion=""
        />
      </Flex>
    </Stack>
  );
};
