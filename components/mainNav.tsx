import Link from "next/link";
import React from "react";
import ToggleMode from "./ToggleMode";
import MainNavLink from "./mainNavLink";

const MainNav = () => {
  return (
    <div className="flex justify-between  ">
      <MainNavLink />
      <div className="flex items-center gap-2">
        <Link href="/logout">LogOut</Link>
        <ToggleMode />
      </div>
    </div>
  );
};

export default MainNav;
