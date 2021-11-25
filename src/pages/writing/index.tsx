import { Container, Divider, Heading, Text } from "@chakra-ui/react";
import { Page } from "@layouts";
import * as React from "react";

type WritingProps = {};

const Writing = (props: WritingProps): JSX.Element => {
  return (
    <Page justify="center" bgPos="50% 50%" bgSize="cover" bg="transparent">
      <Container px={8} mt="12vmin" flexDir="column">
        <Heading mb={6}>Writing</Heading>
        <Text>Blog posts and some assorted goodies.</Text>
        <Divider my={4} />
      </Container>
    </Page>
  );
};

export default Writing;
