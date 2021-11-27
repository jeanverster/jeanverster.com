import {
  Button,
  Flex,
  Heading,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import * as React from "react";
import { RiArrowUpDownLine } from "react-icons/ri";

const GridGeneratorDemo = (): JSX.Element => {
  const { isOpen, onToggle } = useDisclosure();
  const bg = useColorModeValue("white", "gray.800");
  return (
    <Flex py={5} flexDir="column" justify="center" align="center">
      <Heading>Hey! I&apos;m some mdx</Heading>
      <Flex
        width="196px"
        height="196px"
        shadow="lg"
        my={4}
        mx="auto"
        rounded="3xl"
        bg={bg}
        justifyContent="center"
        alignItems="center"
      >
        <motion.div
          animate={{
            rotate: isOpen ? 90 : 0,
            transformOrigin: "center",
          }}
        >
          <Flex
            transformOrigin="center"
            as={RiArrowUpDownLine}
            size="48px"
            color={bg === "white" ? "gray.800" : "white"}
          />
        </motion.div>
      </Flex>
      <Button colorScheme="brand" onClick={onToggle}>
        Click Me
      </Button>
    </Flex>
  );
};

export default GridGeneratorDemo;
