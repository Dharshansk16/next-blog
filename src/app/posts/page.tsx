import React, { Suspense } from "react";
import PostList from "@/components/posts/PostList";
import Loading from "@/components/common/Loading";

export default function page() {
  return (
    <div className="flex flex-col items-center text-center pt-24  px-5">
      <h1 className="text-4xl font-bold mb-4">All Posts</h1>
      <Suspense fallback={<Loading />}>
        <PostList />
      </Suspense>
    </div>
  );
}
