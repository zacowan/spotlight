import React from "react";
import Link from "next/link";
import dayjs from "dayjs";
import Image from "next/image";

import { FeaturedImage } from "../lib/types";

export type Props = {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  featuredImage?: FeaturedImage;
};

const PostCard: React.FC<Props> = ({
  title,
  slug,
  date,
  excerpt,
  featuredImage,
}) => {
  return (
    <Link key={slug} href={`/posts/${slug}`}>
      <a className="rounded-3xl p-8 hover:bg-slate-100 transition-colors space-y-4 w-full group">
        {featuredImage && (
          <Image
            src={featuredImage.node.sourceUrl}
            width="100%"
            height="48px"
            layout="responsive"
            className="rounded-2xl"
          />
        )}
        <time className="text-slate-600 text-sm block">
          {dayjs(date).format("MMM D, YYYY")}
        </time>
        <h2 className="text-lg font-medium tracking-tight">{title}</h2>
        <div dangerouslySetInnerHTML={{ __html: excerpt }} />
        <span className="text-blue-600 block max-w group-hover:underline">
          Read Post
        </span>
      </a>
    </Link>
  );
};

export default PostCard;
