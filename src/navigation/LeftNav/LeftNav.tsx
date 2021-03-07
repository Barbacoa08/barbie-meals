import { useColorMode } from "@chakra-ui/color-mode";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Heading, Link, List, ListItem, Stack } from "@chakra-ui/layout";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { Link as ReachLink } from "@reach/router";
import { useRef } from "react";
import { useGlobal } from "reactn";

import { ToggleButton } from "components";
import { routes } from "navigation";

export const LeftNav = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const btnRef = useRef<any>();
  const { colorMode, toggleColorMode } = useColorMode();

  const [showImages, setShowImages] = useGlobal("showImages");
  const [showFancy, setShowFancy] = useGlobal("showFancy");
  const [showOpinions, setShowOpinions] = useGlobal("showOpinions");
  const [showOnlyTheBasics, setShowOnlyTheBasics] = useGlobal(
    "showOnlyTheBasics"
  );

  return (
    <Box as="nav" data-testid="LeftNav-root" maxHeight="100vh">
      <IconButton
        aria-label="Nav Menu Button"
        icon={<HamburgerIcon />}
        margin="1"
        onClick={onOpen}
        position="absolute"
        ref={btnRef}
      />
      <Drawer
        finalFocusRef={btnRef}
        isOpen={isOpen}
        onClose={onClose}
        placement="left"
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />

            <DrawerBody>
              <Heading size="sm" mt="10" mb="2">
                Recipes
              </Heading>
              <List textAlign="right">
                <ListItem>
                  <Link as={ReachLink} to={routes.homepage}>
                    Home
                  </Link>
                </ListItem>
                <ListItem>
                  <Link as={ReachLink} to={routes.sloppyJoes}>
                    Sloppy Joes
                  </Link>
                </ListItem>
                <ListItem>
                  <Link as={ReachLink} to={routes.pbj}>
                    Toasted PBJ
                  </Link>
                </ListItem>
                {/*
        <ListItem>
          <Link as={ReachLink} to={routes.todo}>
            Pasta
          </Link>
        </ListItem>
        <ListItem>
          <Link as={ReachLink} to={routes.todo}>
            Burger
          </Link>
        </ListItem>
        <ListItem>
          <Link as={ReachLink} to={routes.todo}>
            Nachos
          </Link>
        </ListItem>
        <ListItem>
          <Link as={ReachLink} to={routes.todo}>
            Tacos
          </Link>
        </ListItem> */}
              </List>

              <Heading size="sm" mt="10">
                View Options
              </Heading>
              <Stack my="2">
                <ToggleButton
                  isChecked={showImages}
                  label="Images"
                  onChange={(checked) => {
                    setShowOnlyTheBasics(false);
                    setShowImages(checked);
                  }}
                />
                <ToggleButton
                  isChecked={showFancy}
                  label="Fancy"
                  onChange={(checked) => {
                    setShowOnlyTheBasics(false);
                    setShowFancy(checked);
                  }}
                />
                <ToggleButton
                  isChecked={showOpinions}
                  label="Opinionated"
                  onChange={(checked) => {
                    setShowOnlyTheBasics(false);
                    setShowOpinions(checked);
                  }}
                />

                <ToggleButton
                  isChecked={showOnlyTheBasics}
                  label="Only the Basics"
                  onChange={(checked) => {
                    if (checked) {
                      setShowFancy(false);
                      setShowImages(false);
                      setShowOpinions(false);
                    }

                    setShowOnlyTheBasics(checked);
                  }}
                />
                <ToggleButton
                  isChecked={colorMode === "dark"}
                  label={"Color Mode"}
                  onChange={toggleColorMode}
                />
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};
