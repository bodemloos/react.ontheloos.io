import {
  Home,
  User,
  Users,
  Settings,
  AlertOctagon,
  AlertCircle,
  AlertTriangle,
  PieChart,
} from "react-feather";

import { useAuthStore } from "modules/auth/application";

import { INavSection } from "./INav";

export const useNavItems = () => {
  const isAuthenticated = useAuthStore((store) => store.isAuthenticated);

  return isAuthenticated ? NAV_ITEMS : [];
};

// todo: translations
export const NAV_ITEMS: Array<INavSection> = [
  {
    label: "general",
    icon: Settings,
    children: [
      {
        label: "Dashboard",
        href: "/",
        icon: Home,
      },
      {
        label: "Profile",
        href: "/profile",
        icon: User,
      },
      {
        label: "Users",
        href: "/users",
        icon: Users,
      },
    ],
  },
  {
    label: "statistics",
    icon: PieChart,
    children: [
      {
        label: "warnings",
        href: "/warnings",
        icon: AlertCircle,
      },
      {
        label: "errors",
        href: "/errors",
        icon: AlertTriangle,
      },
      {
        label: "traffic",
        href: "/traffic",
        icon: AlertOctagon,
      },
    ],
  },
];
