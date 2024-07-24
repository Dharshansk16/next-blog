import React, { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-[1400px] mx-auto min-h-screen bg-zinc-800 flex flex-col border-l-inherit border-r-inherit">
      {children}
    </div>
  );
}
