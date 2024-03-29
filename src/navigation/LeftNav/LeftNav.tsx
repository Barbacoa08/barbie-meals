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
import { stringCamelCaseToSentence } from "utils";

export const LeftNav = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const btnRef = useRef<any>();
  const { colorMode, toggleColorMode } = useColorMode();

  const [showImages, setShowImages] = useGlobal("showImages");
  const [showFancy, setShowFancy] = useGlobal("showFancy");
  const [showOpinions, setShowOpinions] = useGlobal("showOpinions");
  const [showOnlyTheBasics, setShowOnlyTheBasics] =
    useGlobal("showOnlyTheBasics");

  const [useOpenDyslexicMono, setUseOpenDyslexicMono] = useGlobal(
    "useOpenDyslexicMono"
  );

  /**
   * TODO: useMediaQuery to optionally use `Drawer` vs `Box`? With all nav items in their own component?
   * https://chakra-ui.com/docs/hooks/use-media-query
   *
   * could optionaly use a hook to change on screen width change, but that's probably overkill
   * https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs
   * https://usehooks.com/useWindowSize/
   */

  const recipeLinks: JSX.Element[] = [];
  Object.keys(routes.recipes).forEach((recipeObjectKey) => {
    const uri = routes.recipes[recipeObjectKey];

    const title = stringCamelCaseToSentence(recipeObjectKey);

    recipeLinks.push(
      <ListItem key={`left-nav-recipe-${recipeObjectKey}`}>
        <Link as={ReachLink} to={uri}>
          {title}
        </Link>
      </ListItem>
    );
  });

  const alcoholLinks: JSX.Element[] = [];
  Object.keys(routes.alcohol).forEach((recipeObjectKey) => {
    const uri = routes.alcohol[recipeObjectKey];

    const title = stringCamelCaseToSentence(recipeObjectKey);

    alcoholLinks.push(
      <ListItem key={`left-nav-recipe-${recipeObjectKey}`}>
        <Link as={ReachLink} to={uri}>
          {title}
        </Link>
      </ListItem>
    );
  });

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
              <List>
                <ListItem>
                  <Link as={ReachLink} to={routes.homepage}>
                    Home
                  </Link>
                </ListItem>

                <ListItem>
                  <Link as={ReachLink} to={routes.favorites}>
                    Favorites
                  </Link>
                </ListItem>

                <ListItem>
                  <Link as={ReachLink} to={routes.contactMe}>
                    Contact Me
                  </Link>
                </ListItem>
              </List>

              <Heading as="h4" size="sm" mt="10" mb="2">
                Recipes
              </Heading>
              <List textAlign="right">{recipeLinks}</List>

              <Heading as="h4" size="sm" mt="10" mb="2">
                Alcohol
              </Heading>
              <List textAlign="right">{alcoholLinks}</List>

              <Heading as="h4" size="sm" mt="10" mb="2">
                Store Specific favorites
              </Heading>
              <List textAlign="right">
                <ListItem>
                  <Link as={ReachLink} to={routes.costco}>
                    CostCo
                  </Link>
                </ListItem>
                <ListItem>
                  <Link as={ReachLink} to={routes.asainFoodStore}>
                    Asain Food Store
                  </Link>
                </ListItem>
                <ListItem>
                  <Link as={ReachLink} to={routes.target}>
                    Target
                  </Link>
                </ListItem>
              </List>

              <Heading as="h4" size="sm" mt="10">
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
                <ToggleButton
                  isChecked={useOpenDyslexicMono}
                  label="Use OpenDyslexic"
                  labelElement={
                    <span style={{ fontFamily: "OpenDyslexicMono" }}>
                      Use OpenDyslexic
                    </span>
                  }
                  onChange={(checked) => setUseOpenDyslexicMono(checked)}
                />
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};
