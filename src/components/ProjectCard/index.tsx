import {
  Flex,
  Heading,
  Link,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
} from "@chakra-ui/react";
import { GithubRepository } from "@types";
import { RiStarFill } from "react-icons/ri";

export const ProjectCard = ({
  name,
  description,
  html_url,
  stargazers_count,
  topics,
  license,
}: GithubRepository) => {
  return (
    <Link
      href={html_url}
      textDecoration="none"
      target="_blank"
      rel="noreferrer"
      _hover={{
        textDecoration: "none",
      }}
    >
      <Flex
        sx={{
          borderWidth: 2,
          rounded: "xl",
          "&:hover": {
            cursor: "pointer",
            borderColor: "brand.500",
          },
        }}
        p={6}
        flexDir="column"
      >
        <Flex flexDir="column" flex={2}>
          <Heading mb={3} fontSize="xl" fontWeight="bold">
            {name}
          </Heading>
          <Flex
            sx={{
              justifyContent: "flex-start",
              alignItems: "center",
              mb: 4,
            }}
          >
            <Tag variant={"outline"} colorScheme="brand" size="md">
              <TagLeftIcon size="12px" as={RiStarFill} />
              <TagLabel>{stargazers_count}</TagLabel>
            </Tag>
            <Text
              fontSize="xs"
              opacity={0.7}
              mr="auto"
              ml={2}
              fontWeight="bold"
            >
              {license?.name || "MIT license"}
            </Text>
          </Flex>
          <Flex flexWrap={"wrap"}>
            {topics.map((topic) => (
              <Tag mb={2} mr={2} size="sm" key={topic}>
                {topic}
              </Tag>
            ))}
          </Flex>

          <Text fontSize="sm" mt={2}>
            {description}
          </Text>
        </Flex>
      </Flex>
    </Link>
  );
};
