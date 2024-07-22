import React from "react";
import Link from "next/link";

interface PostProps {
  id: String;
  title: String;
  body: String;
}

export default async function page() {
  const response = await fetch("https://dummyjson.com/posts?limit=10");
  const data: { posts: PostProps[] } = await response.json();
  return (
    <div className="flex flex-col items-center text-center pt-24  px-5">
      <h1 className="text-4xl font-bold mb-4">All Posts</h1>
      <ul className="text-lg">
        {data.posts.map((post, index) => (
          <li key={index} className="mb-4">
            <Link href={`posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
