import { Flex, Heading, Stack } from "@chakra-ui/layout";
import { RouteComponentProps } from "@reach/router";
import { useGlobal } from "reactn";

import { Ingredient } from "components";
import cheesecurds from "images/costco/costco_cheese-curds.webp";
import flautas from "images/costco/costco-flautas.webp";

export const CostCo = (_: RouteComponentProps) => {
  const [showImages] = useGlobal("showImages");

  return (
    <Stack data-testid="CostCo-root">
      <Heading as="h1" size="lg" textAlign="center">
        CostCo {showImages === false && "(`Images` are turned off)"}
      </Heading>

      <Flex justifyContent="space-evenly">
        <Ingredient
          img={cheesecurds}
          ingredient="cheese curds"
          ingredientOpinionated="cheese curds"
          portion=""
        />

        <Ingredient
          img={flautas}
          ingredient="chicken flautas"
          ingredientOpinionated="chicken flautas"
          portion=""
        />
      </Flex>
    </Stack>
  );
};
