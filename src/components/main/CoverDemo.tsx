import React from "react";
import { Cover } from "@/components/ui/cover";

export function CoverDemo({
  title,
  content
}:{
  title:string,
  content:string
}) {
  return (
    <div className="z-10">
      <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        <Cover>{title}</Cover>
        <p className="text-sm">{content}</p>
      </h1>
    </div>
  );
}
