import UploadForm from "@/components/form/UploadForm";
import React from "react";

export default async function page() {
  return (
    <main>
      <div className="flex flex-col p-24 items-center">
        <h1 className="text-4xl font-bold mb-8 text-center ">Create Post</h1>
        <UploadForm />
      </div>
    </main>
  );
}
