"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

const navLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/posts",
    label: "Posts",
  },
  {
    href: "/create-post",
    label: "Create",
  },
];

export default function Header() {
  const { isAuthenticated } = useKindeBrowserClient();
  const pathName = usePathname();
  return (
    <div className="py-3  text-zinc-600 flex justify-between items-center px-4 font-semibold shadow-md">
      <h1 className="text-2xl px-4 text-zinc-100 items-center">
        <Link href="/">myBlog</Link>
      </h1>
      <nav>
        <ul className="flex justify-between gap-4 px-4 items-center">
          {navLinks.map((item, index) => (
            <li
              className={pathName === item.href ? "text-zinc-100" : ""}
              key={index}
            >
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
          {isAuthenticated ? (
            <li>
              <LogoutLink>Logout</LogoutLink>
            </li>
          ) : (
            <LoginLink>Login</LoginLink>
          )}
        </ul>
      </nav>
    </div>
  );
}
