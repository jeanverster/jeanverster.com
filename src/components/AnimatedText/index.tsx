import { HeadingProps } from "@chakra-ui/react";
import { MotionFlex } from "@components";
import { motion, Variants } from "framer-motion";
import React from "react";

type AnimatedTextProps = HeadingProps & {
  tag: React.ComponentType<any>;
  text: string;
  delay?: number;
};

const item = {
  hidden: {
    y: "200%",

    transition: {
      ease: [0.455, 0.03, 0.515, 0.955],
      duration: 0.85,
    },
  },
  visible: {
    y: 0,

    transition: {
      ease: [0.455, 0.03, 0.515, 0.955],
      duration: 0.65,
    },
  },
};

const AnimatedText = ({
  tag: Tag,
  text,
  delay,
  ...rest
}: AnimatedTextProps) => {
  const container: Variants = {
    visible: {
      transition: {
        delayChildren: delay,
        staggerChildren: 0.025,
      },
    },
  };

  //  Split each word of props.text into an array
  const splitWords = text.split(" ");

  // Create storage array
  const words = [];

  // Push each word into words array
  for (const word of splitWords) {
    words.push(word.split(""));
  }

  // Add a space ("\u00A0") to the end of each word
  words.map((word) => {
    return word.push("\u00A0");
  });

  return (
    <MotionFlex
      alignItems="flex-start"
      initial="hidden"
      animate="visible"
      variants={container}
      ml={-1}
    >
      {words.map((word, index) => {
        return (
          // Wrap each word in the Wrapper component
          <Tag {...rest} key={`${word}-key-${index}`}>
            {word.flat().map((element, index) => {
              return (
                <span
                  style={{
                    overflow: "hidden",
                    display: "inline-block",
                  }}
                  key={index}
                >
                  <motion.span
                    style={{ display: "inline-block" }}
                    variants={item}
                  >
                    {element}
                  </motion.span>
                </span>
              );
            })}
          </Tag>
        );
      })}
    </MotionFlex>
  );
};

export default AnimatedText;
