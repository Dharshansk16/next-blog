import createPost from "@/actions/CreatePost";
import React from "react";

export default function UploadForm() {
  return (
    <div>
      <form action={createPost} className="flex flex-col gap-4">
        <div className="mb-4 flex flex-col">
          <label htmlFor="title">Title:</label>
          <input
            className="bg-zinc-300 rounded text-zinc-800"
            type="text"
            name="title"
            id="title"
            placeholder="Title..."
            required
          />
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="content">Content:</label>
          <textarea
            className="bg-zinc-300 rounded text-zinc-800"
            name="content"
            id="content"
            placeholder="Enter the content..."
            required
          />
        </div>
        <div className="mb-4">
          <button type="submit" className="btn btn-primary text-white">
            Upload
          </button>
        </div>
      </form>
    </div>
  );
}
