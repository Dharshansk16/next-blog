import React from "react";
import Link from "next/link";
import prisma from "@/lib/db";

export default async function PostList() {
  const posts = await prisma.post.findMany();
  return (
    <div>
      <ul className="text-lg">
        {posts.map((post, index) => (
          <li key={index} className="mb-4">
            <Link href={`posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
