import React from "react";
import type { TagNode } from "../lib/types";

export type Props = {
  tags: {
    nodes: TagNode[];
  };
};

const Tags: React.FC<Props> = ({ tags }) => {
  return (
    <div className="flex flex-wrap gap-1">
      {tags.nodes.map((tag) => (
        <span
          key={tag.name}
          className="rounded-full bg-indigo-600/10 px-3 py-2 text-xs text-slate-600 dark:bg-indigo-500/20 dark:text-slate-300"
        >
          {tag.name}
        </span>
      ))}
    </div>
  );
};

export default Tags;
