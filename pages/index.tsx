import Head from "next/head";
import { GetStaticProps } from "next";
import Image from "next/image";
import React from "react";

import { getRecentPosts } from "../lib/api";
import smileProfile from "../public/resources/smile_profile.png";
import { RecentPost } from "../lib/types";
import Layout from "../components/Layout";
import Navigation from "../components/Navigation";
import RecentPostCard from "../components/RecentPostCard";
import MainContainer from "../components/MainContainer";

type Props = {
  recentPosts: RecentPost[];
};

const Home: React.FC<Props> = ({ recentPosts }) => {
  console.log(recentPosts);

  return (
    <Layout>
      <Head>
        <title>zacowan | Spotlight</title>
      </Head>
      <Navigation />
      <MainContainer>
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
            intersection of design and engineering. I will graduate in December
            of 2022 and am currently looking for full-time software
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
              <RecentPostCard key={post.slug} {...post} />
            ))}
          </div>
        </section>
      </MainContainer>
    </Layout>
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
