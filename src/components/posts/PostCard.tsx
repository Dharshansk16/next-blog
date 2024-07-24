"use client";
import React from "react";
import Link from "next/link";

type CardProps = {
  title: string;
  content: string;
  id: number;
};

export default function PostCard({ title, content, id }: CardProps) {
  return (
    <div>
      <div className="card bg-zinc-700  w-96 shadow-lg transition duration-300 ease-in-out translate hover:scale-105">
        <Link href={`posts/${id}`}>
          <div className="card-body">
            <h2 className="card-title mx-auto">{title}</h2>
          </div>
        </Link>
      </div>
    </div>
  );
}
