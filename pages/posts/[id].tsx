import React from "react";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/future/image";
import dayjs from "dayjs";

import { getAllPostsId, getPostById } from "../../lib/api";
import Layout from "../../components/Layout";
import Navigation from "../../components/Navigation";
import MainContainer from "../../components/MainContainer";
import Footer from "../../components/Footer";
import type { PostNode } from "../../lib/types";
import Tags from "../../components/Tags";

type Props = {
  post: PostNode;
};

const getKeywordsFromPost = (post: PostNode) => {
  const tags = post.tags.nodes;
  let res = "";

  tags.forEach((tag, index) => {
    res += tag.name;
    if (index < tags.length - 1) res += ",";
  });

  return res;
};

const getDescriptionFromPost = (post: PostNode) => {
  const excerpt = post.excerpt;

  // Remove the surrounding <p> and </p> tags
  return excerpt.substring(3, excerpt.length - 5);
};

const Post: React.FC<Props> = ({ post }) => {
  const title = `zacowan | ${post.title}`;
  const keywords = getKeywordsFromPost(post);
  const description = getDescriptionFromPost(post);

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Zachary Cowan" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Navigation />
      <MainContainer>
        <section className="space-y-8 pt-20">
          {post.featuredImage && (
            <div className="relative h-64 w-full">
              <Image
                src={post.featuredImage.node.sourceUrl}
                className="rounded-2xl object-contain"
                alt=""
                fill
                priority
              />
            </div>
          )}
          <article className="prose prose-slate w-full">
            <div className="flex flex-col justify-start gap-4 md:flex-row md:items-center md:justify-between">
              <time className="block text-sm text-slate-600">
                {dayjs(post.date).format("MMM D, YYYY")}
              </time>
              <Tags tags={post.tags} />
            </div>
            <h1 className="mt-8">{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
        </section>
      </MainContainer>
      <Footer />
    </Layout>
  );
};

export default Post;

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const data = await getPostById(params?.id as string);

  if (!data.post) {
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
  const allPosts = await getAllPostsId();

  return {
    paths: allPosts.map(({ node }) => `/posts/${node.id}`) || [],
    fallback: "blocking",
  };
};
