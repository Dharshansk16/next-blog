import React from "react";

export default async function Post({ id }: { id: String }) {
  const response = await fetch(`https://dummyjson.com/posts/${id}`);
  const post = await response.json();
  return (
    <div>
      <h1 className="text-4xl mb-4 font-bold">{post.title}</h1>
      <p className="text-lg leading-normal">{post.body}</p>
    </div>
  );
}
