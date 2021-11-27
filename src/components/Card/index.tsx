import { useColorModeValue } from "@chakra-ui/color-mode";
import { FlexProps } from "@chakra-ui/react";
import { MotionProps, Variants } from "framer-motion";
import React from "react";
import { MotionFlex } from "../MotionFlex";

export type CardProps = FlexProps &
  MotionProps & {
    shouldAnimate?: boolean;
  };
const variants: Variants = {
  show: {
    y: 0,
    opacity: 1,
  },
  hide: {
    y: 50,
    opacity: 0,
  },
};

export const Card = ({
  children,
  shouldAnimate = false,
  ...rest
}: CardProps) => {
  const bg = useColorModeValue("white", "gray.800");

  return (
    <MotionFlex
      animate="show"
      initial="hide"
      variants={shouldAnimate ? variants : {}}
      bg={bg}
      {...rest}
    >
      {children}
    </MotionFlex>
  );
};

Card.defaultProps = {
  shadow: "md",
  width: "auto",
  rounded: "md",
  onClick: () => false,
  flexDirection: "column",
  shouldAnimate: true,
};
