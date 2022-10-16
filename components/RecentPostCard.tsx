import React from "react";
import Link from "next/link";
import dayjs from "dayjs";

export type Props = {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
};

const RecentPostCard: React.FC<Props> = ({ title, slug, date, excerpt }) => {
  return (
    <Link key={slug} href={`/posts/${slug}`}>
      <a className="rounded-3xl p-8 hover:bg-slate-100 transition-colors space-y-4 w-full group">
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

export default RecentPostCard;
