import React from "react";
import Link from "next/link";

interface Post {
  id: String;
  title: String;
  body: String;
}

export default async function PostList() {
  const response = await fetch("https://dummyjson.com/posts?limit=15");
  const data: { posts: Post[] } = await response.json();
  return (
    <div>
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
