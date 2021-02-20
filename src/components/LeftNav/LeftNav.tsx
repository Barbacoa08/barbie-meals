import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Box, Link, List, ListItem } from "@chakra-ui/layout";

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
          <Link>Home</Link>
        </ListItem>
        <ListItem>
          <Link>Sloppy Joes</Link>
        </ListItem>
      </List>
    </Box>
  );
};
