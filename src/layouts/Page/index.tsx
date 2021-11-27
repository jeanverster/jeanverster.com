import { useColorModeValue } from "@chakra-ui/color-mode";
import { Flex, FlexProps, Heading } from "@chakra-ui/layout";
import {
  Container,
  Divider,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import * as React from "react";
import { RiArrowGoBackFill } from "react-icons/ri";

type PageProps = FlexProps & {
  title: string;
  children: React.ReactNode;
  description: string;
  showBackButton?: boolean;
};

export const Page = ({
  children,
  title,
  description,
  showBackButton = false,
  ...rest
}: PageProps): JSX.Element => {
  const bg = useColorModeValue("gray.50", "gray.900");
  const { back } = useRouter();
  return (
    <Flex bg={bg} {...rest}>
      <Container pt="12vmin" pb="96px" maxW="container.sm">
        {showBackButton && (
          <IconButton
            size="sm"
            mb={4}
            onClick={() => back()}
            aria-label="Back to writing page"
            icon={<RiArrowGoBackFill />}
          />
        )}

        <Heading mb={4}>{title}</Heading>
        <Text>{description}</Text>
        <Divider my={4} />
        {children}
      </Container>
    </Flex>
  );
};

Page.defaultProps = {
  minH: "100vh",
  title: "Title",
  description: "Description",
};
