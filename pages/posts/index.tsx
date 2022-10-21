import React from "react";
import { GetStaticProps } from "next";
import Head from "next/head";

import { getPostsBasic } from "../../lib/api";
import PostCard from "../../components/PostCard";
import Layout from "../../components/Layout";
import Navigation from "../../components/Navigation";
import MainContainer from "../../components/MainContainer";
import Footer from "../../components/Footer";
import { PostBasic } from "../../lib/types";

type Props = {
  posts: PostBasic[];
};

const Posts: React.FC<Props> = ({ posts }) => {
  return (
    <Layout>
      <Head>
        <title>zacowan | Spotlight | Posts</title>
      </Head>
      <Navigation />
      <MainContainer>
        <section className="w-full max-w-prose space-y-8 pt-20">
          <h1 className="text-4xl font-medium tracking-tight">
            My thoughts on software engineering and the projects I work on.
          </h1>
          <p className="text-slate-600">
            Whether its a project I've worked on, a new paradigm I'm excited
            about, or just something random I learned, you'll be able to read my
            thoughts about it here.
          </p>
          <div className="border-l border-slate-200">
            <div className="ml-4 grid grid-cols-1 gap-8 md:grid-cols-2">
              {posts.map((post) => (
                <PostCard key={post.node.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      </MainContainer>
      <Footer />
    </Layout>
  );
};

export default Posts;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPostsBasic(1000);

  return {
    props: { posts },
    revalidate: 10,
  };
};
