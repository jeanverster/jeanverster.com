import { useColorModeValue } from "@chakra-ui/color-mode";
import { Flex, FlexProps, Heading } from "@chakra-ui/layout";
import { Container, Text } from "@chakra-ui/react";
import { BackButton } from "@components";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import * as React from "react";

type ArticleProps = FlexProps & {
  title: string;
  children: React.ReactNode;
  description: string;
  showBackButton?: boolean;
};

export const Article = ({
  children,
  title,
  description,
  showBackButton = false,
  ...rest
}: ArticleProps): JSX.Element => {
  const bg = useColorModeValue("gray.50", "gray.900");
  const { back } = useRouter();
  return (
    <>
      <NextSeo title={title} description={description} />
      <Flex bg={bg} {...rest}>
        <Container pt="12vmin" pb="128px" maxW="container.md">
          <BackButton mb={8} />
          <Heading
            as="h1"
            mx="auto"
            mb={4}
            textAlign="center"
            maxW="75%"
          >
            {title}
          </Heading>
          <Text mt={6} mb={10} fontWeight="bold" textAlign="center">
            {description}
          </Text>
          {children}
        </Container>
      </Flex>
    </>
  );
};

Article.defaultProps = {
  title: "Title",
  description: "Description",
};
