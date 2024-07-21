import Link from "next/link";
import React from "react";

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
    href: "/login",
    label: "Login",
  },
];

export default function Header() {
  return (
    <div className="py-2 bg-zinc-400 flex justify-between items-center px-4 font-semibold">
      <h1 className="text-2xl items-center">myBlog</h1>
      <nav>
        <ul className="flex justify-between gap-4 px-4 items-center">
          {navLinks.map((item, index) => (
            <li key={index}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
