import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { FrontMatter } from "@types";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

type PostCardProps = FrontMatter & { slug: string };

export const PostCard = ({
  title,
  date,
  slug,
  cover,
  description,
}: PostCardProps): JSX.Element => {
  return (
    <Link href={`/writing/${slug}`} passHref>
      <Flex
        _hover={{
          cursor: "pointer",
          "& h2": {
            color: "blue.500",
            transition: "color 0.2s ease",
          },
        }}
        sx={{
          "& h2": {
            transition: "color 0.2s ease",
          },
        }}
        flexDir="column"
      >
        {!!cover && (
          <Flex
            rounded="md"
            pos="relative"
            overflow="hidden"
            width="100%"
            height="16rem"
            mb={4}
          >
            <Image src={cover} layout="fill" alt="blog-cover-image" />
          </Flex>
        )}
        <Flex flexDir="column" flex={2} py={4} borderBottomWidth={1}>
          <Heading fontSize="xl" fontWeight="bold">
            {title}
          </Heading>
          <Text mt={1} mb={2} fontSize="xs" fontWeight="bold">
            {date}
          </Text>
          <Text mt={2} mb={4}>
            {description}
          </Text>
          <Button
            mb={4}
            variant="link"
            mr="auto"
            aria-label="Read more"
          >
            Read More
          </Button>
        </Flex>
      </Flex>
    </Link>
  );
};
