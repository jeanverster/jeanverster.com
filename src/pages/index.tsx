import { Flex, SimpleGrid } from "@chakra-ui/layout";
import { Box, Heading } from "@chakra-ui/react";
import { Page } from "@layouts";
import { getPosts } from "@mdx/server";
import { Post } from "@types";
import type { NextPage } from "next";
import { GetStaticProps } from "next";
import { PostCard } from "../components";

type HomeProps = {
  posts: Post[];
};

const content = <Flex py={4}>Content</Flex>;

const steps = [
  { label: "Step 1", content },
  { label: "Step 2", content },
  { label: "Step 3", content },
];

export const getStaticProps: GetStaticProps<HomeProps> = () => {
  const posts = getPosts();
  return {
    props: { posts: JSON.parse(JSON.stringify(posts)) },
  };
};

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <Page
      title="Hi, I'm Jean Verster"
      description="Frontend engineer passionate about building great user experiences. Working with React & React Native."
    >
      <Box pt={4}>
        <Heading
          mb={4}
          fontSize="2xl"
          color="brand.500"
          fontWeight="bold"
        >
          Latest posts
        </Heading>
        <SimpleGrid columns={[1, 2]} spacing={10}>
          {posts.map((post) => (
            <PostCard
              slug={post.slug}
              key={post.slug}
              {...post.frontmatter}
            />
          ))}
        </SimpleGrid>
      </Box>
    </Page>
  );
};

export default Home;
