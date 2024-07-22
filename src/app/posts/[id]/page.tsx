import React from "react";

interface Params {
  id: String;
}

export default async function page({ params }: { params: Params }) {
  const response = await fetch(`https://dummyjson.com/posts/${params.id}`);
  const post = await response.json();
  return (
    <div className="flex flex-col items-center text-center pt-24 px-32">
      <h1 className="text-4xl mb-4 font-bold">{post.title}</h1>
      <p className="text-lg leading-normal">{post.body}</p>
    </div>
  );
}
