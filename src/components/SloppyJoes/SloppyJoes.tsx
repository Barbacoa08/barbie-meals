import { Flex, Heading, Stack, Text } from "@chakra-ui/layout";
import { RouteComponentProps } from "@reach/router";
import { useGlobal } from "reactn";

export const SloppyJoes = (_: RouteComponentProps) => {
  const [showImages] = useGlobal("showImages");
  const [showFancy] = useGlobal("showFancy");

  return (
    <Stack data-testid="SloppyJoes-root">
      <Heading size="md">Sloppy Joes</Heading>

      <Flex>
        <Text>Instructions: TODO</Text>
        <Stack>
          <Text>
            TEMP: <code>showFancy: {JSON.stringify(showFancy)}</code>
          </Text>

          <Text>
            TEMP: <code>showImages: {JSON.stringify(showImages)}</code>
          </Text>
        </Stack>
      </Flex>
    </Stack>
  );
};
