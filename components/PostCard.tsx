import React from "react";
import Link from "next/link";
import dayjs from "dayjs";
import Image from "next/future/image";

import { PostBasic } from "../lib/types";
import Tags from "./Tags";

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
      <a className="flex w-full flex-col justify-between rounded-3xl p-8 transition-all hover:bg-slate-100 md:active:scale-95">
        <div className="space-y-4">
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
          <Tags tags={post.tags} />
        </div>
        <span className="max-w block pt-4 text-indigo-600">Read Post</span>
      </a>
    </Link>
  );
};

export default PostCard;
