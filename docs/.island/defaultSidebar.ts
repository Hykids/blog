import { defineConfig, DefaultTheme } from "islandjs";

type NavItemWithLink = {
  text: string;
  link?: string;
  items?: NavItemWithLink[];
  activeMatch?: string;
};

export const defaultSideBar = [
  {
    text: "Introduction",
    items: [
      {
        text: "Getting starting",
        link: "/get_start",
      },
    ],
  },
  {
    text: "JavaScript",
    items: [
      {
        text: "JavaScript",
        link: "/js/javascript",
      },
      {
        text: "解构赋值",
        link: "/js/fresh",
      },
    ],
  },
  {
    text: "React",
    items: [
      {
        text: "react-hook底层原理",
        link: "/react/react-hook",
      },
    ],
  },
  {
    text: "面经",
    items: [
      {
        text: "CSS3",
        link: "/interview/CSS3",
      },
    ],
  },
];
