import {
  RiGithubLine,
  RiHome2Line,
  RiQuillPenLine,
  RiSettings2Line,
  RiTwitterLine,
} from "react-icons/ri";

export const DOCK_ITEMS = [
  {
    icon: RiHome2Line,
    label: "Home",
    href: "/",
    ariaLabel: "Home",
  },
  {
    icon: RiQuillPenLine,
    label: "Writing",
    href: "/writing",
    ariaLabel: "Writing",
  },
  {
    icon: RiGithubLine,
    label: "Projects",
    href: "/projects",
    ariaLabel: "Github Projects",
  },
  {
    icon: RiSettings2Line,
    label: "Settings",
    href: "/settings",
    ariaLabel: "Settings",
  },
  {
    icon: RiTwitterLine,
    label: "Twitter",
    href: "https://twitter.com/jeanverster",
    ariaLabel: "Twitter",
  },
];

export const TOP_NAV_ITEMS = [
  {
    icon: RiQuillPenLine,
    label: "Writing",
    href: "/writing",
  },
  {
    icon: RiGithubLine,
    label: "Projects",
    href: "/projects",
  },
  {
    icon: RiSettings2Line,
    label: "Settings",
    href: "/settings",
  },
];
