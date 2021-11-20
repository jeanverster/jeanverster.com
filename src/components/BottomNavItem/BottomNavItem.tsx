import { FlexProps } from "@chakra-ui/layout";
import { Button, ButtonProps, Flex, useColorModeValue } from "@chakra-ui/react";
import { useDockAnimation } from "@hooks";
import { motion, MotionValue } from "framer-motion";
import * as React from "react";

type BottomNavItemProps = FlexProps & {
  item: any;
  mouseX: MotionValue<number | null>;
};

const MotionButton = motion<ButtonProps>(Button);
const MotionFlex = motion<FlexProps>(Flex);

const BottomNavItem = ({
  item,
  mouseX,
  ...rest
}: BottomNavItemProps): JSX.Element => {
  const el = React.useRef<HTMLImageElement>(null);

  const { width } = useDockAnimation(mouseX, el);

  const bg = useColorModeValue("white", "gray.800");

  const Icon = item.icon;

  return (
    <MotionFlex width="auto" pos="relative" justify="flex-end" flexDir="column">
      <MotionButton
        px={0}
        ref={el}
        bg={bg}
        style={{
          width,
          height: width,
          willChange: "width",
        }}
        rounded="md"
        align="center"
        justify="center"
        transformOrigin="bottom"
        sx={{ "& svg": { width: "50%", height: "50%" } }}
        {...rest}
      >
        <Icon />
      </MotionButton>
    </MotionFlex>
  );
};

export default BottomNavItem;
