import { Article } from "@layouts";
import { MDX } from "@mdx/client";
import { getPost, getPosts } from "@mdx/server";
import { FrontMatter } from "@types";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQueryInput } from "querystring";
import * as React from "react";

type PostDetailProps = {
  code: string;
  frontmatter: FrontMatter;
};

const PostDetail: NextPage<PostDetailProps> = (
  props
): JSX.Element => {
  const { code, frontmatter } = props;

  return (
    <Article
      title={frontmatter.title}
      description={frontmatter.description}
    >
      <main>
        <MDX source={code} />
      </main>
    </Article>
  );
};

export default PostDetail;

type Params = ParsedUrlQueryInput & {
  slug: string;
};

export const getStaticProps: GetStaticProps<PostDetailProps> = async (
  context
) => {
  const { slug } = context.params as Params;
  const { code, frontmatter } = await getPost(slug);

  const props = JSON.parse(JSON.stringify({ code, frontmatter }));

  return {
    props,
  };
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> =
  async () => {
    const paths = getPosts().map(({ slug }) => ({
      params: { slug },
    }));
    return {
      paths,
      fallback: false,
    };
  };
