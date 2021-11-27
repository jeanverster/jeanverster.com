import {
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/color-mode";
import { Text } from "@chakra-ui/react";
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
    <Page
      title="Photos"
      description="Things I've shared on the internet."
    >
      <Text>Content here</Text>
    </Page>
  );
};

export default Photos;
