import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Flex, FlexProps, Heading } from "@chakra-ui/layout";
import { Container, IconButton, Text } from "@chakra-ui/react";
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
      <Container
        px={{ base: 8, md: 0 }}
        pt={["96px", "12vmax", "12vmin"]}
        pb="128px"
        maxW="container.md"
      >
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
        <Text fontWeight="bold">{description}</Text>
        <Box my={6} />
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
