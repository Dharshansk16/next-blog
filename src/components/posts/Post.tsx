import prisma from "@/lib/db";
import { notFound } from "next/navigation";
import React from "react";

export default async function Post({ id }: { id: string }) {
  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  if (!post) {
    notFound(); //throw 404 page
  }
  return (
    <div>
      <h1 className="mb-12 text-4xl font-bold leading-normal tracking-tight  md:text-5xl lg:text-6xl">
        {post.title}
      </h1>
      <p className="mb-6 text-lg font-normal  lg:text-xl sm:px-16 xl:px-48 ">
        {post.content}
      </p>
    </div>
  );
}
