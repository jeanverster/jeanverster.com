import { HalfBleed } from "@layouts/PostLayout";
import Image, { ImageProps } from "next/image";

export const Img = (props: ImageProps) => {
  return (
    <HalfBleed>
      <Image
        {...props}
        alt="blog-image"
        width="100%"
        height="50%"
        layout="responsive"
      />
    </HalfBleed>
  );
};
