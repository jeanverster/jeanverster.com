import { Container, Divider, Heading, Text } from "@chakra-ui/react";
import { Page } from "@layouts";
import { atom } from "jotai";
import * as React from "react";

type ProjectsProps = {};

export const zoomAtom = atom(2);
export const sizeAtom = atom(48);

const Projects = (props: ProjectsProps): JSX.Element => {
  return (
    <Page justify="center" bgPos="50% 50%" bgSize="cover" bg="transparent">
      <Container px={8} mt="12vmin" flexDir="column">
        <Heading mb={6}>Projects</Heading>
        <Text>Some of my open source work.</Text>
        <Divider my={4} />
      </Container>
    </Page>
  );
};

export default Projects;
