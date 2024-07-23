import React from "react";

export default function page() {
  return (
    <main>
      <div className="flex flex-col items-center p-24">
        <h1 className="text-4xl font-bold mb-8">Create Post</h1>
        <form className="flex flex-col gap-4">
          <div className="mb-4 flex flex-col">
            <label>Title:</label>
            <input type="text" name="title" id="title" placeholder="Title..." />
          </div>
          <div className="mb-4 flex flex-col">
            <label>Content:</label>
            <textarea name="content" id="content" />
          </div>
          <div className="mb-4">
            <button className="btn btn-primary">Upload</button>
          </div>
        </form>
      </div>
    </main>
  );
}
