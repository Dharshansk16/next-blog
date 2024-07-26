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
  const [isHoverIndex, setIsHoverIndex] = useState<number | null>(null);
  return (
    <div className="py-3  text-zinc-600 flex justify-between items-center px-4 font-semibold shadow-md">
      <h1 className="text-2xl px-4 text-zinc-100 items-center">
        <Link href="/">myBlog</Link>
      </h1>
      <nav>
        <ul className="flex justify-between gap-4 px-4 items-center">
          {navLinks.map((item, index) => (
            <li
              onMouseEnter={() => {
                setIsHoverIndex(index);
              }}
              onMouseLeave={() => {
                setIsHoverIndex(null);
              }}
              className={
                pathName === item.href || isHoverIndex === index
                  ? "text-zinc-100"
                  : ""
              }
              key={index}
            >
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
          {isAuthenticated ? (
            <li
              onMouseEnter={() => {
                setIsHoverIndex(33);
              }}
            >
              <LogoutLink
                className={isHoverIndex === 33 ? "text-zinc-100" : ""}
              >
                Logout
              </LogoutLink>
            </li>
          ) : (
            <li
              onMouseEnter={() => {
                setIsHoverIndex(34);
              }}
            >
              <LoginLink className={isHoverIndex === 34 ? "text-zinc-100" : ""}>
                Login
              </LoginLink>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}
