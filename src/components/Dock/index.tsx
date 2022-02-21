import { FlexProps } from "@chakra-ui/layout";
import { Flex, useColorModeValue } from "@chakra-ui/react";
import {
  AnimateSharedLayout,
  motion,
  useMotionValue,
} from "framer-motion";
import { useAtomValue } from "jotai/utils";
import { useRouter } from "next/router";
import * as React from "react";
import { IconType } from "react-icons";
import { sizeAtom } from "../../pages/settings";
import { initAtom } from "../../store/index";
import DockItem from "../DockItem/DockItem";

type DockProps = {
  items: {
    icon: IconType;
    label: string;
    href: string;
  }[];
};

const MotionFlex = motion<FlexProps>(Flex);

export const Dock = ({ items }: DockProps): JSX.Element => {
  const bg = useColorModeValue("blackAlpha.200", "whiteAlpha.200");
  const init = useAtomValue(initAtom);

  const x = useMotionValue<number | null>(null);

  const size = useAtomValue(sizeAtom);

  const router = useRouter();

  return (
    <MotionFlex
      initial={{ y: 200 }}
      animate={{ y: 0 }}
      // @ts-ignore
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 14,
        delay: init ? 0 : 1.2,
      }}
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
        <AnimateSharedLayout key="active-indicator">
          {items.map((item, i) => {
            const active = router.pathname === item.href;
            return (
              <DockItem
                mouseX={x}
                item={item}
                key={item.href}
                active={active}
                mr={i < items.length - 1 ? 2 : 0}
              />
            );
          })}
        </AnimateSharedLayout>
      </Flex>
    </MotionFlex>
  );
};
