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
          className="rounded-full bg-indigo-100 px-3 py-2 text-xs text-slate-600"
        >
          {tag.name}
        </span>
      ))}
    </div>
  );
};

export default Tags;
