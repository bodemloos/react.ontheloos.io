import { Flex, Box } from "@chakra-ui/react";

import { Outlet } from "shared/Router";

import { Navbar } from "./Navbar";

export const Layout: React.FC = () => {
  return (
    <Flex flex={{ base: 1 }} height="100vh" direction="column" h="full">
      <Box pb={20} w="100%" hideFrom="sm">
        <Navbar />
      </Box>
      <Outlet />
    </Flex>
  );
};
