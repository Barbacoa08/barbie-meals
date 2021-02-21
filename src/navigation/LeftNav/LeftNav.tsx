import { useColorMode } from "@chakra-ui/color-mode";
import { Box, Heading, Link, List, ListItem, Stack } from "@chakra-ui/layout";
import { Link as ReachLink } from "@reach/router";

import { ToggleButton } from "components";
import { routes } from "navigation";
import { useGlobal } from "reactn";

export const LeftNav = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const [showImages, setShowImages] = useGlobal("showImages");
  const [showFancy, setShowFancy] = useGlobal("showFancy");
  const [showOnlyTheBasics, setShowOnlyTheBasics] = useGlobal(
    "showOnlyTheBasics"
  );

  return (
    <Box
      as="nav"
      data-testid="LeftNav-root"
      maxHeight="100vh"
      maxWidth="sm"
      overflow="auto"
    >
      <Heading size="sm" mt="10" mb="2">
        Recipies
      </Heading>
      <List>
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
        {/* <ListItem>
          <Link as={ReachLink} to={routes.todo}>
            Mexi-Burger
          </Link>
        </ListItem>
        <ListItem>
          <Link as={ReachLink} to={routes.todo}>
            Pasta
          </Link>
        </ListItem>
        <ListItem>
          <Link as={ReachLink} to={routes.todo}>
            PB & J
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
          onChange={(checked) => setShowImages(checked)}
        />
        <ToggleButton
          isChecked={showFancy}
          label="Fancy"
          onChange={(checked) => setShowFancy(checked)}
        />
        <ToggleButton
          isChecked={showOnlyTheBasics}
          label="Only the Basics"
          onChange={(checked) => setShowOnlyTheBasics(checked)}
        />
        <ToggleButton
          isChecked={colorMode === "dark"}
          label={"Color Mode"}
          onChange={toggleColorMode}
        />
      </Stack>
    </Box>
  );
};
