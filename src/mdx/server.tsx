import * as chakraButtons from "@chakra-ui/button";
import * as chakraHooks from "@chakra-ui/hooks";
import * as chakraLayout from "@chakra-ui/layout";
import * as framerMotion from "framer-motion";
import fs from "fs";
import matter from "gray-matter";
import { bundleMDX } from "mdx-bundler";
import path from "path";
import * as reactIconsRI from "react-icons/ri";
import { remarkMdxImages } from "remark-mdx-images";

const chakra = Object.keys({
  ...chakraHooks,
  ...chakraLayout,
  ...chakraButtons,
}).filter((key) => key !== "__esModule");

const framer = Object.keys(framerMotion).filter((key) => key !== "__esModule");

const ri = Object.keys(reactIconsRI).filter((key) => key !== "__esModule");

const POSTS_PATH = path.join(process.cwd(), "src/posts");

export const getSourceOfFile = (filePath: string) => {
  return fs.readFileSync(path.join(POSTS_PATH, filePath, "index.mdx"), "utf-8");
};

export const getPosts = () => {
  return fs
    .readdirSync(POSTS_PATH)
    .map((filePath) => {
      const source = getSourceOfFile(filePath);
      const slug = filePath.replace(/\.mdx?$/, "");
      const { data } = matter(source);

      return {
        frontmatter: data,
        slug: slug,
      };
    })
    .filter((posts) => !!posts.frontmatter.isPublished);
};

type IncludeComponents = {
  chakra?: string[];
  framer?: string[];
  reactIcons?: string[];
};

export const getPost = async (
  slug: string,
  inlcudeComponents: IncludeComponents = {}
) => {
  const source = getSourceOfFile(slug);
  const imagesUrl = `/img/blog/${slug}`;
  const directory = path.join(POSTS_PATH, slug);

  if (process.platform === "win32") {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      "node_modules",
      "esbuild",
      "esbuild.exe"
    );
  } else {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      "node_modules",
      "esbuild",
      "bin",
      "esbuild"
    );
  }

  const { code, frontmatter } = await bundleMDX({
    source,
    cwd: directory,
    xdmOptions: (options) => {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        remarkMdxImages,
      ];
      return options;
    },
    esbuildOptions: (options) => {
      options.outdir = path.join(process.cwd(), "public", imagesUrl);
      options.loader = {
        ...options.loader,
        ".webp": "file",
        ".jpeg": "file",
        ".jpg": "file",
        ".svg": "file",
        ".png": "file",
        ".gif": "file",
      };

      options.publicPath = imagesUrl;
      options.write = true;

      return options;
    },
    globals: {
      "@chakra-ui/react": {
        varName: "chakra",
        namedExports: chakra,
        defaultExport: false,
      },
      "framer-motion": {
        varName: "framer",
        namedExports: framer,
        defaultExport: false,
      },
      "@react-icons/ri": {
        varName: "ri",
        namedExports: ri,
        defaultExport: false,
      },
    },
  });

  return {
    frontmatter,
    code,
  };
};
