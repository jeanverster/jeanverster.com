import { SimpleGrid } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/react";
import { atom, useAtom } from "jotai";
import Image from "next/image";
import React from "react";

interface WallpaperSelectProps {}

type Wallpaper = {
  id: string;
  title: string;
  src: NodeRequire;
};

export const wallpaperAtom = atom<Wallpaper | null>(null);

const wallpapers = [
  {
    src: require("../../../public/images/wallpapers/1.webp"),
    title: "Mountains",
    id: "1",
  },
  {
    src: require("../../../public/images/wallpapers/2.webp"),
    title: "Beach",
    id: "2",
  },
  {
    src: require("../../../public/images/wallpapers/3.webp"),
    title: "Desert",
    id: "3",
  },
  {
    src: require("../../../public/images/wallpapers/4.webp"),
    title: "Forest",
    id: "4",
  },
];

export const WallpaperSelect = (props: WallpaperSelectProps): JSX.Element => {
  const [selectedWallpaper, setSelectedWallpaper] = useAtom(wallpaperAtom);
  return (
    <SimpleGrid columns={2} spacing={4}>
      {wallpapers.map(({ id, src, title }) => {
        const selected = selectedWallpaper?.id === id;
        return (
          <Flex
            key={id}
            pos="relative"
            onClick={() => {
              const wallpaper = wallpapers.find((w) => w.id === id);
              if (wallpaper) {
                setSelectedWallpaper(wallpaper);
              }
            }}
            sx={{
              rounded: "lg",
              borderWidth: 2,
              height: "196px",
              overflow: "hidden",
              opacity: selected ? 1 : 0.8,
              borderColor: selected ? "blue.500" : "transparent",
              _hover: {
                cursor: "pointer",
                opacity: 1,
              },
            }}
          >
            <Image
              alt="Mountains"
              layout="fill"
              objectFit="cover"
              quality={100}
              src={src}
            />
          </Flex>
        );
      })}
    </SimpleGrid>
  );
};
