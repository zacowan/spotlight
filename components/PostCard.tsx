import React from "react";
import Link from "next/link";
import dayjs from "dayjs";
import Image from "next/image";

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
      <a className="rounded-3xl p-8 hover:bg-slate-100 transition-all space-y-4 w-full md:active:scale-95">
        {showImage && post.featuredImage && (
          <Image
            src={post.featuredImage.node.sourceUrl}
            width="100%"
            height="48px"
            layout="responsive"
            className="rounded-2xl"
          />
        )}
        <time className="text-slate-600 text-sm block">
          {dayjs(post.date).format("MMM D, YYYY")}
        </time>
        <div className="space-y-1">
          <h2 className="font-medium tracking-tight">{post.title}</h2>
          <div
            className="text-slate-600"
            dangerouslySetInnerHTML={{ __html: post.excerpt }}
          />
        </div>
        <span className="text-indigo-600 block max-w">Read Post</span>
      </a>
    </Link>
  );
};

export default PostCard;
