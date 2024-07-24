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
      <h1 className="text-4xl mb-4 font-bold">{post.title}</h1>
      <p className="text-lg leading-normal">{post.content}</p>
    </div>
  );
}
