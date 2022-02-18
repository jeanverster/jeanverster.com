import { Flex, SimpleGrid } from "@chakra-ui/layout";
import { Box, Heading, Link, Text } from "@chakra-ui/react";
import { MotionFlex, PostCard } from "@components";
import { Page } from "@layouts";
import { getPosts } from "@mdx/server";
import { Post } from "@types";
import { fadeUp } from "@utils";
import type { NextPage } from "next";
import { GetStaticProps } from "next";
import AnimatedText from "../components/AnimatedText";

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
    <Page hideTopTitle>
      <Flex
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          pb: 16,
          textAlign: "left",
          width: "100%",
        }}
      >
        <MotionFlex {...fadeUp(0)}>
          <AnimatedText
            textAlign="left"
            fontWeight="lighter"
            fontSize="md"
            tag={Heading}
            mb={0}
            text="Hi, my name is"
          />
        </MotionFlex>

        <MotionFlex {...fadeUp(0.25)}>
          <AnimatedText
            fontSize="6xl"
            mb={4}
            mt={4}
            tag={Heading}
            delay={0.9}
            color="brand.500"
            text="Jean Verster,"
          />
        </MotionFlex>
        <MotionFlex {...fadeUp(1.95)}>
          <Heading fontSize="4xl">
            I build experiences for the modern web.
          </Heading>
        </MotionFlex>
        <MotionFlex {...fadeUp(2.25)}>
          <Text mt={8}>
            I&apos;m a senior frontend engineer with a passion for
            high quality software and a love for the web. Currently,
            I'm working to allow startup employees to own their
            options at
            <Link
              color="brand.500"
              as="a"
              textDecoration="none"
              href="https://www.secfi.com/"
            >
              {" "}
              Secfi
            </Link>
            .
          </Text>
        </MotionFlex>
      </Flex>
      <Box pt={4}>
        <MotionFlex {...fadeUp(3)}>
          <Heading
            mb={4}
            fontSize="2xl"
            color="brand.500"
            fontWeight="bold"
          >
            Latest posts
          </Heading>
        </MotionFlex>
        <MotionFlex {...fadeUp(3.45)}>
          <SimpleGrid columns={[1, 2]} spacing={10}>
            {posts.map((post) => (
              <PostCard
                slug={post.slug}
                key={post.slug}
                {...post.frontmatter}
              />
            ))}
          </SimpleGrid>
        </MotionFlex>
      </Box>
    </Page>
  );
};

export default Home;
