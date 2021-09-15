import { Flex, Heading, Stack } from "@chakra-ui/layout";
import { RouteComponentProps } from "@reach/router";
import { useGlobal } from "reactn";

import { Ingredient } from "components";
import marionberry from "images/beer/beer-marionberry-sour-sour-ale.webp";
import pseudosue from "images/beer/beer-pseudo-sue-pale-ale.webp";
import rosella from "images/beer/beer-rosella.webp";
import wildlittlething from "images/beer/beer-wild-little-thing-slightly-sour-ale.webp";
import modist from "images/beer/modist-brewing-_limited_run_-esoteric-eclecticism.webp";

export const Beer = (_: RouteComponentProps) => {
  const [showImages] = useGlobal("showImages");

  return (
    <Stack data-testid="Beer-root">
      <Heading as="h2" size="lg" textAlign="center">
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
          img={modist}
          ingredient="modist brewing: esoteric eclecticism"
          ingredientOpinionated="modist brewing's limited run: esoteric eclecticism"
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
