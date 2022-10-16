import Head from "next/head";
import { GetStaticProps } from "next";
import { getRecentPosts } from "../lib/api";
import Image from "next/image";
import Link from "next/link";
import smileProfile from "../public/resources/smile_profile.png";
import React from "react";
import { RecentPost } from "../lib/types";
import dayjs from "dayjs";

type Props = {
  recentPosts: RecentPost[];
};

const Home: React.FC<Props> = ({ recentPosts }) => {
  console.log(recentPosts);

  return (
    <div className="flex justify-center">
      <Head>
        <title>zacowan | Spotlight</title>
      </Head>
      <div className="py-8 bg-white w-full border-x border-slate-200 min-h-screen md:mx-8 lg:mx-16 mx-0">
        <nav className="flex justify-center">
          <ul className="flex flex-wrap space-x-8 px-8 py-2 rounded-full shadow border border-slate-200">
            <li className="font-medium hover:underline">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="font-medium hover:underline">
              <Link href="/posts">
                <a>Posts</a>
              </Link>
            </li>
            <li className="font-medium hover:underline">
              <Link href="/setup">
                <a>Setup</a>
              </Link>
            </li>
          </ul>
        </nav>
        <main className="flex flex-col items-center space-y-40 px-10">
          <section className="max-w-prose w-full pt-20 space-y-8">
            <div className="w-20">
              <Image className="bg-blue-200 rounded-full" src={smileProfile} />
            </div>
            <h1 className="text-4xl font-medium tracking-tight">
              Software Engineer & UX Enthusiast
            </h1>
            <p>
              I'm an experienced frontend software engineer passionate about
              creative problem solving, successful communication, and the
              intersection of design and engineering. I will graduate in
              December of 2022 and am currently looking for full-time software
              opportunities starting in January 2023.
            </p>
            <a
              href="#"
              className="bg-blue-600 text-white px-4 py-2 rounded-full block w-max text-sm shadow hover:bg-blue-700 transition-colors"
            >
              Download Resume
            </a>
          </section>
          <section className="max-w-prose w-full space-y-8">
            <h1 className="text-xl font-medium tracking-tight">Recent Posts</h1>
            <div className="flex flex-wrap gap-8">
              {recentPosts.map(({ node: post }) => (
                <Link key={post.slug} href={`/posts/${post.slug}`}>
                  <a className="rounded-3xl p-8 hover:bg-slate-100 transition-colors space-y-4 w-full">
                    <time className="text-slate-600 text-sm">
                      {dayjs(post.date).format("MMM D, YYYY")}
                    </time>
                    <h2 className="text-lg font-medium tracking-tight">
                      {post.title}
                    </h2>
                    <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                    <span className="text-blue-600 block max-w">Read Post</span>
                  </a>
                </Link>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const recentPosts = await getRecentPosts();

  return {
    props: { recentPosts },
    revalidate: 10,
  };
};
