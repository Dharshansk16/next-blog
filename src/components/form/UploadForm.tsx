import createPost from "@/actions/CreatePost";
import React from "react";

export default function UploadForm() {
  return (
    <div>
      <form action={createPost} className="flex flex-col gap-4">
        <div className="mb-4 flex flex-col">
          <label htmlFor="title">Title:</label>
          <input
            className="bg-zinc-400 rounded"
            type="text"
            name="title"
            id="title"
            placeholder="Title..."
          />
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="content">Content:</label>
          <textarea
            className="bg-zinc-400 rounded"
            name="content"
            id="content"
          />
        </div>
        <div className="mb-4">
          <button className="btn btn-primary text-white">Upload</button>
        </div>
      </form>
    </div>
  );
}
