"use server"; // for creating server action
import React from "react";

export default async function createPost(formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  console.log(title, content);
}
