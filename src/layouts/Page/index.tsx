import { useColorModeValue } from "@chakra-ui/color-mode";
import { Flex, FlexProps } from "@chakra-ui/layout";
import * as React from "react";

type PageProps = FlexProps;

export const Page = ({ children, ...rest }: PageProps): JSX.Element => {
  const bg = useColorModeValue("gray.50", "gray.900");
  return (
    <Flex bg={bg} {...rest}>
      {children}
    </Flex>
  );
};

Page.defaultProps = {
  pt: "64px",
  minH: "100vh",
  width: "100vw",
};
