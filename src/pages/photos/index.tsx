import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import { Container, Divider, Heading, Text } from "@chakra-ui/react";
import { Page } from "@layouts";
import { atom, useAtom } from "jotai";
import * as React from "react";

type PhotosProps = {};

export const zoomAtom = atom(2);
export const sizeAtom = atom(48);

const Photos = (props: PhotosProps): JSX.Element => {
  const [zoom, setZoom] = useAtom(zoomAtom);
  const [size, setSize] = useAtom(sizeAtom);
  const bg = useColorModeValue("blackAlpha.200", "whiteAlpha.200");
  const { colorMode, setColorMode } = useColorMode();
  return (
    <Page justify="center" bgPos="50% 50%" bgSize="cover" bg="transparent">
      <Container px={8} mt="12vmin" flexDir="column">
        <Heading mb={6}>Photos</Heading>
        <Text>Things I've shared on the internet.</Text>
        <Divider my={4} />
      </Container>
    </Page>
  );
};

export default Photos;
