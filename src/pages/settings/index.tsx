import {
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/color-mode";
import {
  Box,
  Flex,
  RadioGroup,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  Text,
  useRadioGroup,
} from "@chakra-ui/react";
import { RadioCard, wallpaperAtom } from "@components";
import { Page } from "@layouts";
import { navAtom, NavType } from "@store";
import { atom, useAtom } from "jotai";
import { useAtomValue, useUpdateAtom } from "jotai/utils";
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
  const setNavMode = useUpdateAtom(navAtom);
  const { colorMode, setColorMode } = useColorMode();
  console.log("colorMode", colorMode);

  const options = ["light", "dark", "system"];

  const dockOptions = [NavType.DEFAULT, NavType.DOCK];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "color-mode",
    defaultValue: colorMode,
    onChange: (val) => setColorMode(val.toLowerCase()),
  });

  const {
    getRootProps: getDockRootProps,
    getRadioProps: getDockRadioProps,
  } = useRadioGroup({
    name: "dock-type",
    defaultValue: NavType.DOCK,
    onChange: (val) => setNavMode(val as NavType),
  });

  const group = getRootProps();

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
          name="color-mode"
          defaultValue={colorMode}
          onChange={setColorMode}
        >
          <Stack {...group} spacing={4} direction="row">
            {options.map((value) => {
              const radio = getRadioProps({ value });
              return (
                <RadioCard key={value} {...radio}>
                  {value}
                </RadioCard>
              );
            })}
          </Stack>
        </RadioGroup>
        <Text mb={3} fontWeight="bold">
          Navigation Type
        </Text>
        <RadioGroup
          mb={4}
          name="dock-type"
          defaultValue={NavType.DOCK}
          onChange={(val) => setNavMode(val as NavType)}
        >
          <Stack {...getDockRootProps} spacing={4} direction="row">
            {dockOptions.map((value) => {
              const radio = getDockRadioProps({ value });
              return (
                <RadioCard key={value} {...radio}>
                  {value}
                </RadioCard>
              );
            })}
          </Stack>
        </RadioGroup>
      </Flex>
    </Page>
  );
};

export default Settings;
