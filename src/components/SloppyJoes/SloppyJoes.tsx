import { Image } from "@chakra-ui/image";
import {
  Box,
  Flex,
  Heading,
  List,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/layout";
import { RouteComponentProps } from "@reach/router";
import { useGlobal } from "reactn";

import buns from "images/buns.webp";
import meat from "images/impossible-meat.webp";
import ketchup from "images/ketchup.webp";
import sweetBabyRays from "images/sweet-baby-rays.webp";

export const SloppyJoes = (_: RouteComponentProps) => {
  const [showImages] = useGlobal("showImages");
  const [showFancy] = useGlobal("showFancy");
  const [showOpinions] = useGlobal("showOpinions");

  return (
    <Stack data-testid="SloppyJoes-root">
      <Heading size="lg">Sloppy Joes</Heading>

      <Stack justifyContent="space-between">
        <Heading size="sm">ingredients</Heading>

        <Flex>
          <Box>
            <Text textAlign="center">
              <Text as="span" hidden={!showOpinions}>
                brioche{" "}
              </Text>
              buns 2-4
            </Text>
            <Image
              alt="brioche buns"
              boxSize="150px"
              fallbackSrc="https://via.placeholder.com/150"
              hidden={!showImages}
              objectFit="contain"
              src={buns}
            />
          </Box>

          <Box>
            <Text textAlign="center">
              <Text as="span" hidden={!showOpinions}>
                heinz{" "}
              </Text>
              ketchup 1/2 cup
            </Text>
            <Image
              alt="ketchup"
              boxSize="150px"
              fallbackSrc="https://via.placeholder.com/150"
              hidden={!showImages}
              objectFit="contain"
              src={ketchup}
            />
          </Box>

          <Box>
            <Text textAlign="center">
              <Text as="span" hidden={!showOpinions}>
                impossible/bison{" "}
              </Text>
              meat 1lb
            </Text>
            <Image
              alt="meat"
              boxSize="150px"
              fallbackSrc="https://via.placeholder.com/150"
              hidden={!showImages}
              objectFit="contain"
              src={meat}
            />
          </Box>

          <Box>
            <Text textAlign="center">
              sweet baby rays{" "}
              <Text as="span" hidden={!showOpinions}>
                original{" "}
              </Text>
              1/2 cup
            </Text>
            <Image
              alt="sweet baby rays"
              boxSize="150px"
              fallbackSrc="https://via.placeholder.com/150"
              hidden={!showImages}
              objectFit="contain"
              src={sweetBabyRays}
            />
          </Box>
        </Flex>
      </Stack>

      <Stack textAlign="right">
        <Heading size="sm">instructions</Heading>

        <List>
          <ListItem>
            <Text>brown meat</Text>
          </ListItem>

          <ListItem>
            {showFancy ? (
              <Text>
                add 1/2 cup ketchup, ~1/2 tablespoon of garlic powder, ~1/2
                tablespoon worcestershire sauce, and 1/2 cup sweet baby rays
              </Text>
            ) : (
              <Text>add 1/2 cup ketchup, and 1/2 cup sweet baby rays</Text>
            )}
          </ListItem>

          <ListItem>
            <Text>stir continuously until thick (2-4 minutes)</Text>
          </ListItem>

          <ListItem>
            <Text>put mixture on the bun</Text>
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
};
