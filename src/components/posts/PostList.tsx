import React from "react";
import Link from "next/link";
import prisma from "@/lib/db";
import PostCard from "./PostCard";

export default async function PostList() {
  const posts = await prisma.post.findMany();
  return (
    <div>
      <ul className="text-lg  flex flex-col items-center gap-y-8">
        {posts.map((post, index) => (
          <PostCard
            key={index}
            title={post.title}
            content={post.content}
            id={post.id}
          />
        ))}
      </ul>
    </div>
  );
}
