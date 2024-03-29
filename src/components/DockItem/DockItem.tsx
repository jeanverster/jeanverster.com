import { FlexProps } from "@chakra-ui/layout";
import {
  Button,
  ButtonProps,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { MotionFlex } from "@components";
import { useDockAnimation } from "@hooks";
import { motion, MotionValue, Variants } from "framer-motion";
import { useAtomValue } from "jotai/utils";
import Link from "next/link";
import * as React from "react";
import { IconType } from "react-icons";
import { sizeAtom, zoomAtom } from "../../pages/settings";

type DockItemProps = FlexProps & {
  item: {
    icon: IconType;
    label: string;
    href: string;
  };
  active: boolean;
  mouseX: MotionValue<number | null>;
};

const MotionButton = motion<ButtonProps>(Button);
// const MotionFlex = motion<FlexProps>(Flex);

const variants: Variants = {
  hidden: {
    opacity: 0,
    display: "none",
  },
  hover: {
    opacity: 1,
    display: "block",
  },
};

const DockItem = ({
  item,
  mouseX,
  active,
  ...rest
}: DockItemProps): JSX.Element => {
  const el = React.useRef<HTMLImageElement>(null);

  const zoom = useAtomValue(zoomAtom);
  const size = useAtomValue(sizeAtom);

  const { width } = useDockAnimation(mouseX, el, zoom, size);

  const bg = useColorModeValue("white", "gray.800");
  const tooltipBg = useColorModeValue("gray.800", "white");

  const Icon = item.icon;

  return (
    <MotionFlex
      width="auto"
      pos="relative"
      justify="flex-end"
      flexDir="column"
    >
      <Link href={item.href} passHref>
        <MotionButton
          px={3}
          ref={el}
          bg={bg}
          style={{
            // @ts-ignore
            width,
            // @ts-ignore
            height: width,
            willChange: "width",
          }}
          aria-label={item.label}
          rounded="md"
          align="center"
          justify="center"
          transformOrigin="bottom"
          whileHover="hover"
          initial="hidden"
          animate="hidden"
          position="relative"
          sx={{ "& svg": { width: "80%", height: "80%" } }}
          {...rest}
        >
          <MotionFlex
            py={1}
            px={2}
            top={-9}
            color={bg}
            rounded="md"
            bg={tooltipBg}
            pos="absolute"
            borderWidth={1}
            variants={variants}
          >
            <Text fontSize="sm" fontWeight="light">
              {item.label}
            </Text>
          </MotionFlex>
          <Icon />

          {active && (
            <MotionFlex
              width="4px"
              layoutId="active-indicator"
              height="4px"
              rounded="full"
              bg={tooltipBg}
              position="absolute"
              bottom="12%"
            />
          )}
        </MotionButton>
      </Link>
    </MotionFlex>
  );
};

export default DockItem;
