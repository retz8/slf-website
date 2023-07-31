export const menu = [
  {
    href: "/",
    text: "HOME",
  },
  {
    href: "/generalInfo",
    text: "GENERAL INFO",
  },
  {
    href: "/tutorials",
    text: "TUTORIALS",
    submenu: [
      {
        href: "/tutorials/egg-removal",
        text: "Egg Removal",
      },
      {
        href: "/tutorials/lf-traps",
        text: "Lanternfly Traps",
      },
    ],
  },
  {
    href: "/schedule",
    text: "SCHEDULE",
  },
  {
    href: "/members",
    text: "MEMBERS",
  },
  {
    href: "/faq",
    text: "FAQ",
  },
];

export type MenuObjectType = {
  href: string;
  text: string;
};
