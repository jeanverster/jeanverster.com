import { Text } from "@chakra-ui/react";
import { Page } from "@layouts";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Page
      title="Hi, I'm Jean Verster"
      description="Frontend engineer passionate about building great user experiences.
            Working with React & React Native."
    >
      <Text>Currently @ Secfi</Text>
    </Page>
  );
};

export default Home;
