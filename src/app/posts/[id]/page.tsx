import Loading from "@/components/common/Loading";
import Post from "@/components/posts/Post";
import React, { Suspense } from "react";

interface Params {
  id: string;
}

export default function page({ params }: { params: Params }) {
  return (
    <div className="flex flex-col items-center text-center pt-16 px-32">
      <Suspense fallback={<Loading />}>
        <Post id={params.id} />
      </Suspense>
    </div>
  );
}
