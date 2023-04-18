import { Icon } from "react-feather";

import { Box, useColorModeValue, Icon as ThemeIcon } from "@chakra-ui/react";

import { NavLink } from "shared/Router";

import "./sidebar.item.scss";

interface ISidebarItemProps {
  label: string;
  href: string;
  icon?: Icon;
}

export const SidebarItem: React.FC<ISidebarItemProps> = ({
  label,
  href,
  icon,
}) => (
  <Box
    className="sidebar-item"
    display="flex"
    justifyContent="space-between"
    my={2}
    px={6}
    mx={0}
    as={NavLink}
    to={href}
    sx={{
      transition: "all 300ms ease",
    }}
    _activeLink={{
      color: useColorModeValue("blue.700", "blue.500"),
      borderRadius: "10px",
      width: "85%",
      borderLeftRadius: "lg",
      borderLeft: "solid",
      borderColor: useColorModeValue("blue.500", "blue.500"),
      borderLeftWidth: 4,
      paddingLeft: 5,
      marginLeft: 0,
      backgroundColor: "#0f0f15",
    }}
  >
    <Box display="flex" gap={0} alignContent="left">
      <ThemeIcon mt="1" p={2} as={icon} /> {label}
    </Box>
  </Box>
);
