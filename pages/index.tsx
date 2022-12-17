import Head from "next/head";
import { GetStaticProps } from "next";
import React from "react";

import { getPostsBasic } from "../lib/api";
import { PostBasic } from "../lib/types";
import Layout from "../components/Layout";
import Navigation from "../components/Navigation";
import PostCard from "../components/PostCard";
import MainContainer from "../components/MainContainer";
import Footer from "../components/Footer";

type Props = {
  recentPosts: PostBasic[];
};

const Home: React.FC<Props> = ({ recentPosts }) => {
  return (
    <Layout>
      <Head>
        <title>zacowan</title>
        <meta
          name="description"
          content="Learn more about the work of Zachary Cowan and read his recent posts."
        />
        <meta name="keywords" content="zachary,cowan,resume,blog" />
      </Head>
      <Navigation />
      <MainContainer>
        <section className="w-full max-w-prose space-y-8 pt-20">
          <h1 className="text-4xl font-medium tracking-tight">
            Software Engineer & UX Enthusiast
          </h1>
          <p className="text-slate-600">
            I'm a software engineer with a passion for creating extraordinary
            user experiences. I love to learn and am constantly trying to
            sharpen and broaden my skill set.
          </p>
        </section>
        <section className="w-full max-w-prose space-y-8">
          <h1 className="text-xl font-medium tracking-tight">Recent Posts</h1>
          <div className="border-l border-slate-200">
            <div className="ml-4 flex flex-wrap gap-8">
              {recentPosts.map((post) => (
                <PostCard key={post.node.id} post={post} showImage={false} />
              ))}
            </div>
          </div>
        </section>
      </MainContainer>
      <Footer />
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const recentPosts = await getPostsBasic();

  return {
    props: { recentPosts },
    revalidate: 10,
  };
};
