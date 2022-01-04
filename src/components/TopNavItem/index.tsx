import { Text } from "@chakra-ui/layout";
import { Box, Flex, FlexProps } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link, { LinkProps } from "next/link";
import React from "react";

type TopNavItemProps = LinkProps &
  FlexProps & {
    active?: boolean;
    title: string;
  };

export const TopNavItem = ({
  href,
  as,
  replace,
  scroll,
  passHref,
  prefetch,
  shallow,
  active,
  title,
  ...rest
}: TopNavItemProps): JSX.Element => {
  return (
    <Link
      {...{ href, as, replace, scroll, passHref, prefetch, shallow }}
    >
      <Flex
        height="100%"
        fontSize="sm"
        pos="relative"
        align="center"
        transition="all 0.2s ease"
        opacity={active ? 1 : 0.8}
        _hover={{
          cursor: "pointer",
          opacity: 1,
          transition: "all 0.2s ease",
        }}
        {...rest}
      >
        <Text fontSize="sm" fontWeight={600}>
          {title}
        </Text>
        {active && (
          <Box
            left={0}
            right={0}
            bottom={-1}
            height="2px"
            bg="brand.500"
            pos="absolute"
            rounded="sm"
            as={motion.div}
            layoutId="underline"
          />
        )}
      </Flex>
    </Link>
  );
};
