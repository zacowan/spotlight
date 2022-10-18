import React from "react";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";

import { getAllPostsWithSlug, getPostBySlug } from "../../lib/api";
import Layout from "../../components/Layout";
import Navigation from "../../components/Navigation";
import MainContainer from "../../components/MainContainer";
import Footer from "../../components/Footer";
import type { PostNode } from "../../lib/types";

type Props = {
  post: PostNode;
};

const Post: React.FC<Props> = ({ post }) => {
  return (
    <Layout>
      <Head>
        <title>zacowan | Spotlight | Post</title>
      </Head>
      <Navigation />
      <MainContainer>
        <article className="prose prose-slate w-full pt-20">
          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </MainContainer>
      <Footer />
    </Layout>
  );
};

export default Post;

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const data = await getPostBySlug(params?.slug);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: data.post,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths: allPosts.edges.map(({ node }) => `/posts/${node.slug}`) || [],
    fallback: false,
  };
};
