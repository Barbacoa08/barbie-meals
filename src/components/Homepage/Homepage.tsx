import { Container, Text } from "@chakra-ui/layout";

export const Homepage = () => {
  return (
    <Container data-testid="Homepage-root">
      <Text>
        I'm going to be right up front and let you know that this site if more
        for me than it is for you. I didn't really like the other options that I
        had for writing down recipies, and being a front-end engineer, I just
        wanted a quick refernce for myself to be able to find my recipes. So I
        built this! I do hope that you find this useful, but this is more for me
        than you. Just wanted to be clear on that.
      </Text>

      <Text>Okie dokie! Enough of that, time for food!</Text>
    </Container>
  );
};