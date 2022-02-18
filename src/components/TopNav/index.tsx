import { Container } from "@chakra-ui/layout";
import { Flex, useColorModeValue } from "@chakra-ui/react";
import { AnimateSharedLayout } from "framer-motion";
import { useRouter } from "next/router";
import * as React from "react";
import { Logo } from "../Logo/index";
import { TopNavItem } from "../TopNavItem";

type TopNavItem = {
  label: string;
  href: string;
};

type TopNavProps = {
  items: TopNavItem[];
};

export const TopNav = ({ items }: TopNavProps): JSX.Element => {
  const bg = useColorModeValue("gray.50", "gray.900");
  const router = useRouter();
  return (
    <Flex
      bg={bg}
      top={0}
      mx="auto"
      height="64px"
      width="100vw"
      position="fixed"
    >
      <Container px={{ base: 8, md: 0 }} maxW="container.md">
        <Flex
          as="nav"
          flex={1}
          height="100%"
          align="center"
          justify="space-between"
        >
          <Logo />
          <Flex>
            <AnimateSharedLayout>
              {items.map((item, i) => {
                const active = router.pathname === item.href;
                return (
                  <TopNavItem
                    title={item.label}
                    href={item.href}
                    key={item.href}
                    active={active}
                    mr={i < items.length - 1 ? 4 : 0}
                  />
                );
              })}
            </AnimateSharedLayout>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

TopNav.defaultProps = {
  items: [],
};
