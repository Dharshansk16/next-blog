"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

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
  {
    href: "/login",
    label: "Login",
  },
];

export default function Header() {
  const pathName = usePathname();
  return (
    <div className="py-3  text-zinc-500 flex justify-between items-center px-4 font-semibold shadow-md">
      <h1 className="text-2xl px-4 text-zinc-700 items-center">
        <Link href="/">myBlog</Link>
      </h1>
      <nav>
        <ul className="flex justify-between gap-4 px-4 items-center">
          {navLinks.map((item, index) => (
            <li
              className={pathName === item.href ? "text-zinc-700" : ""}
              key={index}
            >
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
