import { Text } from "@chakra-ui/layout";
import { Box, Flex, FlexProps } from "@chakra-ui/react";
import { useRouter } from "next/router";
import * as React from "react";
import { RiArrowLeftLine } from "react-icons/ri";

export const BackButton = (props: FlexProps) => {
  const { back } = useRouter();
  return (
    <Flex
      as="a"
      onClick={back}
      opacity={0.8}
      align="center"
      mr="auto"
      _hover={{
        cursor: "pointer",
        opacity: 1,
        transition: "all 0.2s ease",
      }}
      {...props}
    >
      <Box as={RiArrowLeftLine} mr={2} />
      <Text>Back</Text>
    </Flex>
  );
};
