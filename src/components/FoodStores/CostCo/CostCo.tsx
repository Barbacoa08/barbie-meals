import { Flex, Heading, Stack } from "@chakra-ui/layout";
import { RouteComponentProps } from "@reach/router";
import { useGlobal } from "reactn";

import { Ingredient } from "components";
import cheesecurds from "images/costco/costco_cheese-curds.webp";

export const CostCo = (_: RouteComponentProps) => {
  const [showImages] = useGlobal("showImages");

  return (
    <Stack data-testid="CostCo-root">
      <Heading size="lg" textAlign="center">
        CostCo {showImages === false && "(`Images` are turned off)"}
      </Heading>

      <Flex justifyContent="space-evenly">
        <Ingredient
          img={cheesecurds}
          ingredient="cheese curds"
          ingredientOpinionated="cheese curds"
          portion=""
        />
      </Flex>
    </Stack>
  );
};
