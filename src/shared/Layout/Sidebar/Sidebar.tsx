import { Box, Flex, Icon as ThemeIcon } from "@chakra-ui/react";

import { Separator } from "shared/Separator";

import { INavItem } from "../Navbar/INav";
import { useNavItems } from "../Navbar/useNavItems";
import { SidebarItem } from "./SidebarItem";
import "./sidebar.scss";

export interface ISubbarProps {
  title?: string;
}

export const Sidebar: React.FC = ({ title = "DASHBOARD" }: ISubbarProps) => {
  const navItems = useNavItems();
  return (
    <Box pt={4} h="full" className="sidebar">
      <Flex direction="column" h="full">
        <Box>
          <Box pb={5} pt={2} pr="10px" textAlign="center">
            {title}
          </Box>
          <Separator mb={4} marginLeft="-10px" w={"100%"} />
          <Box as="nav" px={0}>
            {navItems.map((nav) => (
              <Box key={nav.label}>
                <Flex
                  color="gray.200"
                  bg="gray.700"
                  w="65%"
                  borderTopRightRadius={10}
                  borderBottomRightRadius={10}
                  fontSize={12}
                  px={3}
                  py={4}
                  mb={3}
                  mt={3}
                >
                  <ThemeIcon as={nav.icon} />
                  <Box lineHeight={1} pl={5}>
                    {nav.label}
                  </Box>
                </Flex>
                {nav.children.map((navItem: INavItem) => (
                  <SidebarItem
                    key={navItem.label}
                    href={navItem.href || ""}
                    label={navItem.label}
                    icon={navItem.icon}
                  />
                ))}
              </Box>
            ))}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
