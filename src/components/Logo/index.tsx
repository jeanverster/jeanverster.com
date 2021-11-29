import { FlexProps } from "@chakra-ui/layout";
import { Flex, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import logoDark from "../../../public/images/jv-dark.png";
import logoLight from "../../../public/images/jv-white.png";

export const Logo = (props: FlexProps): JSX.Element => {
  const src = useColorModeValue(logoDark, logoLight);

  return (
    <Flex {...props}>
      <Link href="/" passHref>
        <Image
          alt="jeanverster.com logo"
          src={src}
          width={96}
          objectFit="contain"
        />
      </Link>
    </Flex>
  );
};
