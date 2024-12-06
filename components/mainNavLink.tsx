"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MainNavLink = () => {
  const navLink = [
    { label: "Dashboard", href: "/" },
    { label: "Tickets", href: "/ticket" },
    { label: "Users", href: "/users" },
  ];
  const currentPath = usePathname();

  return (
    <div className="flex items-center gap-2">
      {navLink &&
        navLink?.map((link) => (
          <Link
            href={link?.href}
            className={` ${
              currentPath === link.href &&
              "cursor-default text-primary/100 hover:text-primary/50"
            }`}
            key={link?.label}>
            {link.label}
          </Link>
        ))}
    </div>
  );
};

export default MainNavLink;
