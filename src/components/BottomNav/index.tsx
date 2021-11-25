import { FlexProps } from "@chakra-ui/layout";
import { Flex, useColorModeValue } from "@chakra-ui/react";
import { motion, useMotionValue } from "framer-motion";
import { useAtomValue } from "jotai/utils";
import * as React from "react";
import { IconType } from "react-icons";
import { sizeAtom } from "../../pages/settings";
import BottomNavItem from "../BottomNavItem/BottomNavItem";

type BottomNavProps = {
  items: {
    icon: IconType;
    label: string;
    href: string;
  }[];
};

const MotionFlex = motion<FlexProps>(Flex);

export const BottomNav = ({ items }: BottomNavProps): JSX.Element => {
  const bg = useColorModeValue("blackAlpha.200", "whiteAlpha.200");

  const x = useMotionValue<number | null>(null);

  const size = useAtomValue(sizeAtom);
  console.log("size", size);

  return (
    <MotionFlex
      initial={{ y: 200 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 80, damping: 20 }}
      sx={{
        bg,
        p: 2,
        bottom: 4,
        zIndex: 1000,
        pos: "fixed",
        rounded: "xl",
        display: "flex",
        height: `${size + 16}px`,
        justifyContent: "center",
        _before: {
          top: "0",
          left: "0",
          content: '""',
          width: "100%",
          height: "100%",
          border: "inherit",
          borderRadius: 8,
          position: "absolute",
          backdropFilter: "blur(2px)",
        },
      }}
      onMouseLeave={() => x.set(0)}
      onMouseMove={({ clientX }) => x.set(clientX)}
    >
      <Flex height="100%" alignItems="flex-end">
        {items.map((item, i) => {
          return (
            <BottomNavItem
              mouseX={x}
              item={item}
              key={item.href}
              mr={i < items.length - 1 ? 2 : 0}
            />
          );
        })}
      </Flex>
    </MotionFlex>
  );
};
