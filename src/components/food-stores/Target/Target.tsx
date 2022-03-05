import { Flex, Heading, Stack } from "@chakra-ui/layout";
import { RouteComponentProps } from "@reach/router";
import { useGlobal } from "reactn";

import { Ingredient } from "components";

import tots from "images/target/target-mini-tots.webp";

export const Target = (_: RouteComponentProps) => {
  const [showImages] = useGlobal("showImages");

  return (
    <Stack data-testid="Target-root">
      <Heading as="h2" size="lg" textAlign="center">
        Target {showImages === false && "(`Images` are turned off)"}
      </Heading>

      <Flex justifyContent="space-evenly">
        <Ingredient
          img={tots}
          ingredient="mini tater tots"
          ingredientOpinionated="mini tater tots"
          portion=""
        />
      </Flex>
    </Stack>
  );
};
