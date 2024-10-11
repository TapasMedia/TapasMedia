import React from "react";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { FloatingNav } from "./ui/floating-navbar.jsx";

const Navbar = () => {
  const navItems = [
    {
      name: "Home",
      link: "/#home",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/#about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/#contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
      <FloatingNav navItems={navItems} />
  );
};

export default Navbar;
