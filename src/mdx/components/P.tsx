import { Text, TextProps } from "@chakra-ui/layout";

export const P = (props: TextProps) => {
  if (typeof props.children !== "string") {
    return <>{props.children}</>;
  }

  return <Text {...props} />;
};
