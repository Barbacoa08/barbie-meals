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

import { Ingredient } from "components";
import ketchup from "images/condiments/ketchup.webp";
import buns from "images/misc/buns.webp";
import meat from "images/misc/impossible-meat.webp";
import pepper from "images/seasonings/black-pepper.webp";
import mexispice from "images/seasonings/mexi-spice.webp";
import salt from "images/seasonings/salt.webp";

export const BreakfastBurritos = (_: RouteComponentProps) => {
  return (
    <Stack data-testid="BreakfastBurritos-root">
      <Flex justifyContent="space-evenly">
        <Heading size="lg">Burgers</Heading>

        <Box display="inline-flex">
          <Tag>#filling</Tag>
          <Tag>#fast</Tag>
          <Tag>#easy</Tag>
        </Box>
      </Flex>

      <Grid>TODO: ingredients</Grid>
    </Stack>
  );
};
