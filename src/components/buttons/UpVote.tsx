"use client";
import React, { useState } from "react";

export default function UpVote() {
  const [upvoteCount, setUpvotecount] = useState(0);

  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => {
          setUpvotecount(upvoteCount + 1);
        }}
      >
        Upvote
      </button>
      <p>upvotes:{upvoteCount}</p>
    </div>
  );
}
