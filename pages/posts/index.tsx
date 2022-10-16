import React from "react";
import { GetStaticProps } from "next";
import Head from "next/head";

import { getRecentPosts } from "../../lib/api";
import PostCard from "../../components/PostCard";
import Layout from "../../components/Layout";
import Navigation from "../../components/Navigation";
import MainContainer from "../../components/MainContainer";
import { RecentPost } from "../../lib/types";

type Props = {
  recentPosts: RecentPost[];
};

const Posts: React.FC<Props> = ({ recentPosts }) => {
  return (
    <Layout>
      <Head>
        <title>zacowan | Spotlight | Posts</title>
      </Head>
      <Navigation />
      <MainContainer>
        <section className="w-full pt-20 space-y-8">
          <h1 className="text-4xl font-medium tracking-tight text-center">
            All Posts
          </h1>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {recentPosts.map((post) => (
              <PostCard key={post.node.slug} post={post} />
            ))}
          </div>
        </section>
      </MainContainer>
    </Layout>
  );
};

export default Posts;

export const getStaticProps: GetStaticProps = async () => {
  const recentPosts = await getRecentPosts(1000);

  return {
    props: { recentPosts },
    revalidate: 10,
  };
};
