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

export const Homepage = (_: RouteComponentProps) => {
  // TODO: instead of just importing Favorites, put _just_ current favorites here, with a "Click here to Edit your Favorites"

  return (
    <Container data-testid="Homepage-root">
      <Heading as="h2" size="lg" textAlign="center">
        Recently added deliciousness
      </Heading>

      <Flex marginTop={5}>
        <Link as={ReachLink} to={routes.recipes.pizza} color="Highlight">
          <Stack>
            <Text margin="auto">Pizza</Text>

            <Image
              alt={"pizza"}
              fallbackSrc="https://via.placeholder.com/100"
            />
          </Stack>
        </Link>

        <Spacer />

        <Link as={ReachLink} to={routes.recipes.nachos} color="Highlight">
          <Stack>
            <Text margin="auto">Nachos</Text>

            <Image
              alt={"nachos"}
              fallbackSrc="https://via.placeholder.com/100"
            />
          </Stack>
        </Link>

        <Spacer />

        <Link
          as={ReachLink}
          to={routes.recipes.breakfastBurritos}
          color="Highlight"
        >
          <Stack>
            <Text margin="auto">Breakfast Burritos</Text>

            <Image
              alt={"breakfast burritos"}
              fallbackSrc="https://via.placeholder.com/100"
              width={100}
              style={{ marginLeft: "auto", marginRight: "auto" }}
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
