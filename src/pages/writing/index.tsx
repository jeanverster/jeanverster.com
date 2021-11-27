import { PostCard } from "@components";
import { Page } from "@layouts";
import { getPosts } from "@mdx/server";
import { GetStaticProps } from "next";
import * as React from "react";

type Post = {
  frontmatter: FrontMatter;
  slug: string;
};

type FrontMatter = {
  title: string;
  date: string;
  description: string;
  tags: string[];
  isPublished: boolean;
};

type WritingProps = {
  posts: Post[];
};

const Writing = ({ posts }: WritingProps): JSX.Element => {
  return (
    <Page
      title="Writing"
      description="Blog posts and some assorted goodies."
    >
      {posts.map(
        ({ frontmatter: { title, description, date }, slug }) => (
          <PostCard
            key={slug}
            {...{ title, description, date, slug }}
          />
        )
      )}
    </Page>
  );
};

export default Writing;

export const getStaticProps: GetStaticProps<WritingProps> = () => {
  const posts = getPosts();
  console.log("posts", posts);
  return {
    props: { posts: JSON.parse(JSON.stringify(posts)) },
  };
};
