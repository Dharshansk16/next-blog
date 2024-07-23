import UploadForm from "@/components/form/UploadForm";
import React from "react";

export default async function page() {
  return (
    <main>
      <div className="flex flex-col items-center p-24">
        <h1 className="text-4xl font-bold mb-8">Create Post</h1>
        <UploadForm />
      </div>
    </main>
  );
}
