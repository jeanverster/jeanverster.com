import { ButtonGroup, IconButton } from "@chakra-ui/button";
import { Container, FlexProps } from "@chakra-ui/layout";
import { Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import React, { useRef } from "react";
import Draggable from "react-draggable"; // The default
import { CgArrowsExpandLeft, CgClose, CgMathMinus } from "react-icons/cg";

type DraggableWindowProps = FlexProps & {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
};

export const DraggableWindow = ({
  title,
  onClose,
  children,
}: DraggableWindowProps): JSX.Element => {
  const bg = useColorModeValue("gray.50", "gray.900");
  const ref = useRef<HTMLDivElement>(null);
  return (
    <Draggable nodeRef={ref}>
      <Container
        bg={bg}
        ref={ref}
        rounded="xl"
        flexDir="column"
        justify="flex-start"
        p={4}
      >
        <Flex>
          <ButtonGroup spacing={2}>
            <IconButton
              size="xs"
              rounded="full"
              colorScheme="red"
              onClick={onClose}
              icon={<CgClose />}
              aria-label="close"
            />
            <IconButton
              size="xs"
              rounded="full"
              colorScheme="yellow"
              icon={<CgMathMinus />}
              aria-label="minimize"
            />
            <IconButton
              size="xs"
              rounded="full"
              colorScheme="green"
              icon={<CgArrowsExpandLeft />}
              aria-label="expand"
            />
          </ButtonGroup>
        </Flex>
        <Heading my={4}>{title}</Heading>
        {children}
      </Container>
    </Draggable>
  );
};
