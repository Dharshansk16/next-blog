"use client";
import createPost from "@/actions/CreatePost";
import React from "react";
import { useRef, useState, FormEvent } from "react";

export default function UploadForm() {
  const ref = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    if (ref.current) {
      const formData = new FormData(ref.current);
      await createPost(formData);
      ref.current?.reset();
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form
        ref={ref}
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 min-w-[750px]"
      >
        <div className="mb-4 flex flex-co">
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title..."
            className="input bg-zinc-700 input-bordered input-md w-full"
            required
          />
        </div>
        <div className="mb-4 flex flex-col">
          <textarea
            name="content"
            id="content"
            placeholder="write an artice..."
            className="textarea bg-zinc-700 textarea-bordered textarea-xl w-full"
            required
          />
        </div>
        <div className="mb-4 flex justify-end">
          <button type="submit" className="btn btn-primary text-white">
            {isLoading ? "Publishing..." : "Publish"}
          </button>
        </div>
      </form>
    </div>
  );
}
