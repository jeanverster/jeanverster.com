import { Box } from "@chakra-ui/react";
import Image, { ImageProps } from "next/image";

export const Img = (props: ImageProps) => {
  return (
    <Box mb={4}>
      <Image
        {...props}
        alt="blog-image"
        width="100%"
        height="50%"
        layout="responsive"
      />
    </Box>
  );
};
