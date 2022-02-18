import { useColorModeValue } from "@chakra-ui/color-mode";
import { RadioProps, useRadio } from "@chakra-ui/radio";
import { Box, Flex } from "@chakra-ui/react";
import React from "react";

export const RadioCard = (props: RadioProps) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  const checkboxRef = React.useRef<HTMLInputElement>(null);

  const bg = useColorModeValue("gray.300", "gray.700");

  const checked = checkboxRef?.current?.checked;

  return (
    <Flex as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        ref={checkboxRef}
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        onChange={(val) => console.log("val", val)}
        _checked={{
          bg,
          color: "white",
          borderColor: "teal.600",
          "& .checkmark": {
            opacity: 1,
          },
        }}
        _focus={{
          boxShadow: "outline",
          bg,
        }}
        _hover={{
          bg,
        }}
        px={8}
        py={4}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "20px",
            height: "20px",
            rounded: "full",
            flexShrink: "0",
            mx: "auto",
            mb: 1,
          }}
        >
          <Box
            sx={{
              bg: checked ? "white" : "teal.600",
              height: 4,
              rounded: "full",
              width: 4,
            }}
            className="checkmark"
            bg="white"
          />
        </Box>
        {props.children}
      </Box>
    </Flex>
  );
};
