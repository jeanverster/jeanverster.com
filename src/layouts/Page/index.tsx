import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Flex, FlexProps, Heading } from "@chakra-ui/layout";
import { Container, IconButton, Text } from "@chakra-ui/react";
import { MotionFlex } from "@components";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import * as React from "react";
import { RiArrowGoBackFill } from "react-icons/ri";
import AnimatedText from "../../components/AnimatedText/index";
import { fadeUp } from "../../utils";

type PageProps = FlexProps & {
  title: string;
  children: React.ReactNode;
  description: string;
  hideTopTitle?: boolean;
  showBackButton?: boolean;
};

export const Page = ({
  children,
  title,
  description,
  hideTopTitle = false,
  showBackButton = false,
  ...rest
}: PageProps): JSX.Element => {
  const bg = useColorModeValue("gray.50", "gray.900");
  const { back } = useRouter();
  return (
    <>
      <NextSeo title={title} description={description} />
      <Flex bg={bg} {...rest}>
        <Container
          px={{ base: 8, md: 2 }}
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

          {!hideTopTitle && (
            <>
              <MotionFlex {...fadeUp(0)}>
                <AnimatedText
                  tag={Heading}
                  text={title}
                  color="brand.500"
                  fontSize={["2xl", "5xl"]}
                />
              </MotionFlex>
              {description && (
                <MotionFlex {...fadeUp(0.7)}>
                  <Text fontSize="lg">{description}</Text>
                </MotionFlex>
              )}

              <Box my={6} />
            </>
          )}
          {children}
        </Container>
      </Flex>
    </>
  );
};

Page.defaultProps = {
  minH: "100vh",
  title: "Title",
  description: "Description",
};
