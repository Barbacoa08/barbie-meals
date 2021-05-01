import { Container, Text } from "@chakra-ui/layout";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { RouteComponentProps } from "@reach/router";
import { PathForm, PathFormField, PathFormProvider } from "react-pathform";

export const ContactMe = (_: RouteComponentProps) => {
  return (
    <Container data-testid="ContactMe-root">
      <Text>
        Do you have a thought that you'd like to share with me? A "kudos dude"
        message? A funny emoji that you think should be in every header element?
        Go ahead and send it to me!
      </Text>

      <Box>
        <PathFormProvider
          initialRenderValues={{
            nested: {
              items: [
                {
                  email: "person@location.org",
                  subject: "Your page is _amazing_!",
                },
              ],
            },
          }}
        >
          <PathForm
            onSubmit={(values) => console.info(JSON.stringify(values, null, 2))}
          >
            <PathFormField
              path={["nested", "items", 0, "email"]}
              defaultValue=""
              render={({ inputProps, meta }) => (
                <FormControl id="email">
                  <FormLabel>Return Email (optional)</FormLabel>
                  <Input isInvalid={!!meta.error} {...inputProps} />
                  <FormHelperText>{meta.error?.message || ""}</FormHelperText>
                </FormControl>
              )}
            />

            <PathFormField
              path={["nested", "items", 0, "subject"]}
              defaultValue=""
              render={({ inputProps, meta }) => (
                <FormControl id="subject">
                  <FormLabel>Subject</FormLabel>
                  <Input isInvalid={!!meta.error} {...inputProps} />
                  <FormHelperText>{meta.error?.message || ""}</FormHelperText>
                </FormControl>
              )}
            />

            <PathFormField
              path={["nested", "items", 0, "message"]}
              defaultValue=""
              render={({ inputProps, meta }) => (
                <FormControl id="message">
                  <FormLabel>Message</FormLabel>
                  <Textarea isInvalid={!!meta.error} {...inputProps} />
                  <FormHelperText>{meta.error?.message || ""}</FormHelperText>
                </FormControl>
              )}
            />

            <Button type="submit" float="right">
              Submit
            </Button>
          </PathForm>
        </PathFormProvider>
      </Box>
    </Container>
  );
};
