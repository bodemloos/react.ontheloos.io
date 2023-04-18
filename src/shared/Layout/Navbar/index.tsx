import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  IconButton,
  Button,
  Collapse,
  HStack,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

import { Link, useNavigate } from "shared/Router";
import { useNotImplementedYetToast } from "shared/Toast";

import { useAuthStore } from "modules/auth/application";

import { INavbar } from "./INav";
import { LoaderBar } from "./LoaderBar";
import { MobileNav } from "./MobileNav";

export const Navbar = ({ w }: INavbar) => {
  const { isOpen, onToggle } = useDisclosure();
  const bg = useColorModeValue("white", "rgba(20, 20, 28,.95)");

  return (
    <Box w={w || "100%"} position="fixed" zIndex="10">
      <Flex
        w="100%"
        h="70px"
        py={6}
        px={8}
        borderBottom={1}
        borderStyle="solid"
        borderColor={useColorModeValue("gray.200", "gray.800")}
        align="center"
        boxShadow="0px 2px 5px 0px rgba(0,0,0,.6)"
        bg={bg}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant="ghost"
            aria-label="Toggle Navigation"
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
        ></Flex>
        <HStack direction={"row"} spacing={4}>
          <SignInButton />
          <SignUpButton />
          <LogoutButton />
        </HStack>
      </Flex>
      <LoaderBar />
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

const SignInButton = () => {
  const isAuthenticated = useAuthStore((store) => store.isAuthenticated);

  if (isAuthenticated) {
    return null;
  }

  return (
    <Button
      fontWeight={400}
      variant="link"
      fontSize={12}
      as={Link}
      to="/sign-in"
    >
      Sign In
    </Button>
  );
};

const SignUpButton = () => {
  const notImplemented = useNotImplementedYetToast();
  const isAuthenticated = useAuthStore((store) => store.isAuthenticated);

  if (isAuthenticated) {
    return null;
  }

  return (
    <Button
      fontSize={12}
      p={2}
      display={{ base: "none", md: "inline-flex" }}
      colorScheme="blue"
      onClick={notImplemented}
    >
      Sign Up
    </Button>
  );
};

const LogoutButton = () => {
  const navigate = useNavigate();

  const isAuthenticated = useAuthStore((store) => store.isAuthenticated);
  const logout = useAuthStore((store) => store.logout);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <Button
      fontSize={12}
      fontWeight={400}
      variant="link"
      onClick={() => logout().then(() => navigate("/"))}
    >
      Logout
    </Button>
  );
};
