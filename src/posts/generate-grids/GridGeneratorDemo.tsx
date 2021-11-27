import { Box, Button, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import { motion } from "framer-motion";
import * as React from "react";
import { RiArrowUpDownLine } from "react-icons/ri";

const GridGeneratorDemo = (): JSX.Element => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex p={5} flexDir="column" justify="center">
      <Heading>Hey! I&apos;m some mdx</Heading>
      <motion.div animate={{ rotate: isOpen ? 90 : 0 }}>
        <Box shadow="lg" m={4} rounded="large" bg="blue.500">
          <Box as={RiArrowUpDownLine} size="48px" color="white" />
        </Box>
      </motion.div>
      <Button onClick={onToggle}>Click Me</Button>
    </Flex>
  );
};

export default GridGeneratorDemo;
