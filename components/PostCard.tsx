import React from "react";
import Link from "next/link";
import dayjs from "dayjs";
import Image from "next/image";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";

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
          <AspectRatio.Root ratio={16 / 9}>
            <Image
              src={post.featuredImage.node.sourceUrl}
              layout="fill"
              className="rounded-2xl"
            />
          </AspectRatio.Root>
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
        <span className="max-w block text-indigo-600">Read Post</span>
      </a>
    </Link>
  );
};

export default PostCard;
