export type Post = {
  frontmatter: FrontMatter;
  slug: string;
};

export type FrontMatter = {
  title: string;
  date: string;
  description: string;
  cover: string;
  tags: string[];
  isPublished: boolean;
};
