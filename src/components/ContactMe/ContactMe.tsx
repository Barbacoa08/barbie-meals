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
import { useForm } from "react-hook-form";

export const ContactMe = (_: RouteComponentProps) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
    watch,
  } = useForm({
    defaultValues: {
      email: "",
      subject: "",
      message: "Your page is _amazing_!",
    },
  });
  return (
    <Container data-testid="ContactMe-root">
      <Text>
        Do you have a thought that you'd like to share with me? A "kudos dude"
        message? A funny emoji that you think should be in every header element?
        Go ahead and send it to me!
      </Text>

      <Box
        marginTop="10"
        border="1px"
        borderColor="gray.200"
        padding="5"
        paddingBottom="50"
      >
        <FormControl id="email">
          <FormLabel>Return Email (optional)</FormLabel>
          <Input
            {...register("email", {
              minLength: { message: "email length not valid", value: 10 },
            })}
            isInvalid={!!errors.email?.message?.length}
          />
          <FormHelperText>{errors.email?.message || ""}</FormHelperText>
        </FormControl>

        <FormControl id="subject">
          <FormLabel>Subject</FormLabel>
          <Input
            {...register("subject", {
              required: "a subject is required",
              minLength: { message: "subject length too short", value: 10 },
              maxLength: { message: "subject length too long", value: 40 },
            })}
            isInvalid={!!errors.subject?.message?.length}
          />
          <FormHelperText>{errors.subject?.message || ""}</FormHelperText>
        </FormControl>

        <FormControl id="message">
          <FormLabel>Message</FormLabel>
          <Textarea
            {...register("message", {
              required: "a message is required",
              minLength: { message: "message too short", value: 1 },
              maxLength: {
                message: "ok buddy, that message is a bit too long",
                value: 400,
              },
            })}
            isInvalid={!!errors.message?.message?.length}
          />
          <FormHelperText>{errors.message?.message || ""}</FormHelperText>
          <FormHelperText>
            {watch("message").length}/400 characters
          </FormHelperText>
        </FormControl>

        <Button
          type="submit"
          float="right"
          onClick={handleSubmit(
            (data) => {
              console.info("successful form submission data");
              console.info(data);
            },
            (formErrors) => {
              console.error("failed form submission errors");
              console.info(formErrors);
            }
          )}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
};
