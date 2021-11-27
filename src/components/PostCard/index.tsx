import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import * as React from "react";

type PostCardProps = {
  title: string;
  date: string;
  slug: string;
  description: string;
};

export const PostCard = ({
  title,
  date,
  slug,
  description,
}: PostCardProps): JSX.Element => {
  return (
    <Link href={`/writing/${slug}`} passHref>
      <Flex
        flexDir="column"
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
        py={4}
        borderBottomWidth={1}
      >
        <Heading fontSize="2xl" fontWeight="bold">
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
    </Link>
  );
};
