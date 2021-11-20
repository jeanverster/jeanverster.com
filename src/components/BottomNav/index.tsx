import { FlexProps } from "@chakra-ui/layout";
import { Flex, useColorModeValue } from "@chakra-ui/react";
import { motion, useMotionValue } from "framer-motion";
import * as React from "react";
import BottomNavItem from "../BottomNavItem/BottomNavItem";

type BottomNavProps = {
  items: any[];
};

const MotionFlex = motion<FlexProps>(Flex);

const BottomNav = ({ items }: BottomNavProps): JSX.Element => {
  const bg = useColorModeValue("blackAlpha.200", "whiteAlpha.200");

  const x = useMotionValue<number | null>(null);

  return (
    <MotionFlex
      sx={{
        p: 2,
        mb: 4,
        bottom: 4,
        height: "64px",
        zIndex: 1000,
        pos: "fixed",
        display: "flex",
        bg,
        justifyContent: "center",
        rounded: "xl",
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
      initial="initial"
      whileHover="hover"
      animate="initial"
      onMouseLeave={() => x.set(0)}
      onMouseMove={({ clientX }) => x.set(clientX)}
    >
      <Flex height="100%" alignItems="flex-end">
        {items.map((item, i) => {
          return (
            <BottomNavItem
              mr={i < items.length - 1 ? 2 : 0}
              item={item}
              mouseX={x}
              key={item.id}
            />
          );
        })}
      </Flex>
    </MotionFlex>
  );
};

export default BottomNav;
