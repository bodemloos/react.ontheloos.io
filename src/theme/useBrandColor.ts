import { useColorModeValue } from "@chakra-ui/react";

export const useBrandColor = () => {
  return useColorModeValue("gray.800", "gray.800");
};
