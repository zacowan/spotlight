import React from "react";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import Image from "next/image";

import { getAllPostsWithSlug, getPostBySlug } from "../../lib/api";
import Layout from "../../components/Layout";
import Navigation from "../../components/Navigation";
import MainContainer from "../../components/MainContainer";
import Footer from "../../components/Footer";
import type { PostNode } from "../../lib/types";

type Props = {
  post: PostNode;
};

const getKeywordsFromPost = (post: PostNode) => {
  const tags = post.tags.edges;
  let res = "";

  tags.forEach((tag, index) => {
    res += tag.node.name;
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
        <article className="prose prose-slate w-full pt-20">
          {post.featuredImage && (
            <AspectRatio.Root ratio={16 / 9}>
              <Image
                src={post.featuredImage.node.sourceUrl}
                layout="fill"
                className="rounded-2xl"
                priority
                alt=""
              />
            </AspectRatio.Root>
          )}
          <h1 className="mt-8">{post.title}</h1>
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
