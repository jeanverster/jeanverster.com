import {
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/color-mode";
import {
  Box,
  Flex,
  Radio,
  RadioGroup,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { wallpaperAtom } from "@components";
import { Page } from "@layouts";
import { atom, useAtom } from "jotai";
import { useAtomValue } from "jotai/utils";
import * as React from "react";

type SettingsProps = {};

export const zoomAtom = atom(2);
export const sizeAtom = atom(48);

const Settings = (props: SettingsProps): JSX.Element => {
  const [zoom, setZoom] = useAtom(zoomAtom);
  const [size, setSize] = useAtom(sizeAtom);
  const wallpaper = useAtomValue(wallpaperAtom);
  const bg = useColorModeValue("blackAlpha.200", "whiteAlpha.200");
  const containerBg = useColorModeValue("gray.100", "gray.800");
  const { colorMode, setColorMode } = useColorMode();
  return (
    <Page title="Settings" description="Update all the things.">
      <Flex flexDir="column">
        <Text mb={3} fontWeight="bold">
          Dock magnification
        </Text>
        <Slider
          mb={4}
          min={0}
          max={6}
          step={1}
          defaultValue={zoom}
          onChangeEnd={setZoom}
        >
          <SliderTrack bg={bg}>
            <Box position="relative" right={10} />
            <SliderFilledTrack bg="brand.500" />
          </SliderTrack>
          <SliderThumb boxSize={6} />
        </Slider>
        <Text mb={3} fontWeight="bold">
          Dock size
        </Text>
        <Slider
          mb={4}
          min={48}
          step={4}
          max={96}
          defaultValue={size}
          onChangeEnd={setSize}
        >
          <SliderTrack bg={bg}>
            <Box position="relative" right={10} />
            <SliderFilledTrack bg="brand.500" />
          </SliderTrack>
          <SliderThumb boxSize={6} />
        </Slider>
        <Text mb={3} fontWeight="bold">
          Color mode
        </Text>
        <RadioGroup
          mb={4}
          defaultValue={colorMode}
          onChange={setColorMode}
        >
          <Stack direction="row">
            <Radio colorScheme="brand" value="dark">
              Dark
            </Radio>
            <Radio colorScheme="brand" value="light">
              Light
            </Radio>
          </Stack>
        </RadioGroup>
      </Flex>
    </Page>
  );
};

export default Settings;
