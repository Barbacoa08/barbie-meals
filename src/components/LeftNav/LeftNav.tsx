import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Box, List, ListItem } from "@chakra-ui/layout";
import { Link } from "@reach/router";

import { routes } from "RouterContainer";

export const LeftNav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      data-testid="LeftNav-root"
      maxHeight="100%"
      maxWidth="sm"
      overflow="hidden"
    >
      <List>
        <ListItem>
          <Button onClick={toggleColorMode}>
            Toggle {colorMode === "light" ? "Dark" : "Light"}
          </Button>
        </ListItem>
        <ListItem>
          <Link to={routes.homepage}>Home</Link>
        </ListItem>
        <ListItem>
          <Link to={routes.sloppyJoes}>Sloppy Joes</Link>
        </ListItem>
      </List>
    </Box>
  );
};
