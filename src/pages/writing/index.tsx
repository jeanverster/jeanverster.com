import { PostCard } from "@components";
import { Page } from "@layouts";
import { getPosts } from "@mdx/server";
import { Post } from "@types";
import { GetStaticProps } from "next";
import * as React from "react";

type WritingProps = {
  posts: Post[];
};

export const getStaticProps: GetStaticProps<WritingProps> = () => {
  const posts = getPosts();
  return {
    props: { posts: JSON.parse(JSON.stringify(posts)) },
  };
};

const Writing = ({ posts }: WritingProps): JSX.Element => {
  return (
    <Page
      title="Writing"
      description="Blog posts and some assorted goodies."
    >
      {posts.map(({ frontmatter, slug }) => (
        <PostCard key={slug} {...frontmatter} slug={slug} />
      ))}
    </Page>
  );
};

export default Writing;
