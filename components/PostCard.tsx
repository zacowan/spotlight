import React from "react";
import Link from "next/link";
import dayjs from "dayjs";
import Image from "next/future/image";

import { PostBasic } from "../lib/types";

export type Props = {
  post: PostBasic;
  showImage?: boolean;
};

const PostCard: React.FC<Props> = ({
  post: { node: post },
  showImage = true,
}) => {
  return (
    <Link key={post.slug} href={`/posts/${post.slug}`}>
      <a className="w-full space-y-4 rounded-3xl p-8 transition-all hover:bg-slate-100 md:active:scale-95">
        {showImage && post.featuredImage && (
          <div className="relative h-32 w-full">
            <Image
              src={post.featuredImage.node.sourceUrl}
              className="rounded-2xl object-contain"
              alt=""
              fill
            />
          </div>
        )}
        <time className="block text-sm text-slate-600">
          {dayjs(post.date).format("MMM D, YYYY")}
        </time>
        <div className="space-y-1">
          <h2 className="font-medium tracking-tight">{post.title}</h2>
          <div
            className="text-slate-600"
            dangerouslySetInnerHTML={{ __html: post.excerpt }}
          />
        </div>
        <div className="flex flex-wrap gap-1">
          {post.tags &&
            post.tags.nodes.map((tag) => (
              <span
                key={tag.name}
                className="rounded-full bg-indigo-100 px-3 py-2 text-xs"
              >
                {tag.name}
              </span>
            ))}
        </div>
        <span className="max-w block pt-4 text-indigo-600">Read Post</span>
      </a>
    </Link>
  );
};

export default PostCard;
