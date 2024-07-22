import React, { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-[1400px] mx-auto min-h-screen bg-white flex flex-col border-l border-r">
      {children}
    </div>
  );
}
