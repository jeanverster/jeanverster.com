import { Flex, SimpleGrid } from "@chakra-ui/layout";
import { Box, Heading, Link, Text } from "@chakra-ui/react";
import { MotionFlex, PostCard } from "@components";
import { Page } from "@layouts";
import { getPosts } from "@mdx/server";
import { initAtom } from "@store";
import { Post } from "@types";
import { useUpdateAtom } from "jotai/utils";
import type { NextPage } from "next";
import { GetStaticProps } from "next";
import AnimatedText from "../components/AnimatedText";
import { useFadeAnimation } from "../hooks";

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
  const setInit = useUpdateAtom(initAtom);
  const index = posts.length % 2 === 0 ? 1 : 2;
  return (
    <Page title="Home" hideTopTitle>
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
        <MotionFlex {...useFadeAnimation(0)}>
          <Text fontSize="lg">Hi, my name is</Text>
        </MotionFlex>
        <AnimatedText
          fontSize={["3xl", "5xl"]}
          my={2}
          tag={Heading}
          color="brand.500"
          text="Jean Verster."
        />

        <MotionFlex {...useFadeAnimation(0.95)}>
          <Heading fontSize={["2xl", "3xl"]}>
            I build experiences for the modern web.
          </Heading>
        </MotionFlex>
        <MotionFlex {...useFadeAnimation(1.15)}>
          <Text fontSize="lg" mt={8} maxW={["100%", "80%"]}>
            I&apos;m a senior frontend engineer with a passion for
            high quality software and a love for the web. Currently,
            I&apos;m working to allow startup employees to own their
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
        {/* Set init value to true to prevent the animation from running again */}
        <MotionFlex
          onAnimationComplete={() => setInit(true)}
          flexDir="column"
          {...useFadeAnimation(1.3)}
        >
          <Heading
            mb={4}
            fontSize="2xl"
            color="brand.500"
            fontWeight="bold"
          >
            Latest posts
          </Heading>
          <SimpleGrid
            columns={[1, 2]}
            spacing={10}
            sx={{
              ".post-card": {
                borderBottomWidth: 1,
              },
              // last 2 children
              ".post-card:nth-last-child(-n+2)": {
                borderBottomWidth: 0,
              },
            }}
          >
            {posts.map((post) => (
              <PostCard
                slug={post.slug}
                key={post.slug}
                {...post.frontmatter}
              />
            ))}
            {posts.map((post) => (
              <PostCard
                slug={post.slug}
                key={post.slug}
                {...post.frontmatter}
              />
            ))}
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
