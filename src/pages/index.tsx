import { Container, Divider } from "@chakra-ui/layout";
import { Heading, Text } from "@chakra-ui/react";
import { Page } from "@layouts";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import {
  RiGithubLine,
  RiHome2Line,
  RiImageLine,
  RiQuillPenLine,
  RiUser4Line,
} from "react-icons/ri";
import BottomNav from "../components/BottomNav/index";

const items = [
  {
    icon: RiHome2Line,
    label: "Home",
    href: "/",
    id: "1",
  },
  {
    icon: RiImageLine,
    label: "Photos",
    href: "/photos",
    id: "2",
  },
  {
    icon: RiQuillPenLine,
    label: "Writing",
    href: "/blog",
    id: "2",
  },
  {
    icon: RiGithubLine,
    label: "Projects",
    href: "/about",
    id: "2",
  },
  {
    icon: RiUser4Line,
    label: "About",
    href: "/about",
    id: "2",
  },
];

const motionItems = items.map(({ icon, ...rest }) => {
  const MotionIcon = motion(icon);
  return {
    icon: MotionIcon,
    ...rest,
  };
});

const Home: NextPage = () => {
  return (
    <>
      {/* <Flex
        sx={{
          zIndex: -1,
          pos: "fixed",
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Image
          alt="Mountains"
          layout="fill"
          objectFit="cover"
          quality={100}
          src="/images/wallpapers/3.webp"
        />
      </Flex> */}
      <Page justify="center" bgPos="50% 50%" bgSize="cover" bg="transparent">
        <Container px={8} mt="12vmin" flexDir="column">
          <Heading>Hi, I'm Jean Verster</Heading>
          <Text>
            Frontend engineer passionate about building great user experiences.
            Working with React & React Native
          </Text>
          <Divider my={4} />
          <Text>Currently @ Secfi</Text>
        </Container>

        <BottomNav items={items} />
      </Page>
    </>
  );
};

export default Home;
