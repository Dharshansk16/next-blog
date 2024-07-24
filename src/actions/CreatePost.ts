"use server"; // for creating server action
import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import React from "react";

export default async function createPost(formData: FormData) {
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) {
    redirect("/api/auth/login");
  }

  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  console.log(title, content);
  // update database
  await prisma.post.create({
    data: {
      title,
      content,
    },
  });
  //revalidate
  revalidatePath("/posts");
}
