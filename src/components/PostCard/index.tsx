import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { FrontMatter } from "@types";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { MotionFlex } from "../MotionFlex/index";

type PostCardProps = FrontMatter & { slug: string };

export const PostCard = ({
  title,
  date,
  slug,
  cover,
  description,
}: PostCardProps): JSX.Element => {
  return (
    <Flex
      sx={{
        "& h2": {
          transition: "color 0.2s ease",
        },
      }}
      flexDir="column"
      mb={8}
    >
      {!!cover && (
        <Link href={`/writing/${slug}`} passHref>
          <MotionFlex
            rounded="md"
            pos="relative"
            overflow="hidden"
            width="100%"
            height={{ base: "12rem", md: "16rem" }}
            mb={4}
            whileHover={{
              scale: 1.01,
            }}
            sx={{
              transition: "transform 0.4s ease",
              ".blog-cover-image": {
                transition: "transform 0.4s ease",
              },
              "&:hover": {
                cursor: "pointer",
                ".blog-cover-image": {
                  transform: "scale(1.15)",
                  transition: "transform 0.4s ease",
                },
              },
            }}
          >
            <Image
              className="blog-cover-image"
              src={cover}
              layout="fill"
              alt="blog-cover-image"
            />
          </MotionFlex>
        </Link>
      )}
      <Flex flexDir="column" flex={2} py={4}>
        <Heading fontSize="2xl" fontWeight="bold">
          {title}
        </Heading>
        <Text mt={1} mb={2} fontSize="xs" fontWeight="bold">
          {date}
        </Text>
        <Text fontSize="lg" mt={2} mb={4}>
          {description}
        </Text>
        <Link href={`/writing/${slug}`} passHref>
          <Button
            mb={4}
            variant="link"
            mr="auto"
            aria-label="Read more"
            fontSize="sm"
            _hover={{
              cursor: "pointer",
              color: "brand.500",
              textDecoration: "underline",
              transition: "color 0.2s ease",
            }}
          >
            Read More
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};
