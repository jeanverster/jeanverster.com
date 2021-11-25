import { Container, Divider } from "@chakra-ui/layout";
import { Heading, Text } from "@chakra-ui/react";
import { Page } from "@layouts";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Page justify="center" bgPos="50% 50%" bgSize="cover" bg="transparent">
        <Container px={8} mt="12vmin" flexDir="column">
          <Heading mb={6}>Hi, I'm Jean Verster</Heading>
          <Text>
            Frontend engineer passionate about building great user experiences.
            Working with React & React Native.
          </Text>
          <Divider my={4} />
          <Text>Currently @ Secfi</Text>
        </Container>
      </Page>
    </>
  );
};

export default Home;
