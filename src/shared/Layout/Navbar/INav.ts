import { Icon } from "react-feather";

export interface INavbar {
  w?: string | number;
}

export interface INavSection {
  label: string;
  subLabel?: string;
  href?: string;
  icon?: Icon;
  children: Array<INavItem>;
}

export interface INavItem {
  label: string;
  subLabel?: string;
  href?: string;
  icon?: Icon;
  children?: Array<INavItem>;
}
