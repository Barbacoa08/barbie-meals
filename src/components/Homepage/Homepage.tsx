import { Image } from "@chakra-ui/image";
import {
  Container,
  Flex,
  Heading,
  Link,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/layout";
import { Box } from "@chakra-ui/react";
import { Link as ReachLink, RouteComponentProps } from "@reach/router";

import { Favorites } from "components";
import { routes } from "navigation";

import burritos from "images/completed/breakfast-burritos.webp";
import tots from "images/target/target-mini-tots.webp";

export const Homepage = (_: RouteComponentProps) => {
  return (
    <Container data-testid="Homepage-root">
      <Heading as="h2" size="lg" textAlign="center">
        Recently added deliciousness
      </Heading>

      <Flex marginTop={5}>
        <Link
          as={ReachLink}
          to={routes.recipes.breakfastBurritos}
          color="Highlight"
        >
          <Stack>
            <Text margin="auto">Breakfast Burritos</Text>

            <Image
              alt={"two burritos"}
              src={burritos}
              fallbackSrc="https://via.placeholder.com/200"
              width={200}
            />
          </Stack>
        </Link>

        <Spacer />

        <Link as={ReachLink} to={routes.target} color="Highlight">
          <Stack>
            <Text margin="auto">Mini Tater Tots</Text>

            <Image
              alt={"tater tots"}
              src={tots}
              fallbackSrc="https://via.placeholder.com/200"
              width={200}
            />
          </Stack>
        </Link>
      </Flex>

      <Box marginTop="20">
        <Favorites />
      </Box>
    </Container>
  );
};
