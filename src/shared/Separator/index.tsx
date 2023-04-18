import React from "react";

import { Flex, FlexProps } from "@chakra-ui/react";

export const Separator = (props: FlexProps) => {
  const { children, ...rest } = props;
  return (
    <Flex
      h="1px"
      w="60%"
      bg="linear-gradient(90deg, rgba(224, 225, 226, 0) 0%, #425e7a 49.52%, rgba(224, 225, 226, 0) 100%)"
      {...rest}
    >
      {children}
    </Flex>
  );
};
