export type FeaturedImage = {
  node: {
    sourceUrl: string;
  };
};

export type Post = {
  node: {
    title: string;
    excerpt: string;
    slug: string;
    date: string;
    featuredImage?: FeaturedImage;
    content: string;
  };
};

export type RecentPost = Omit<Post, "node.content">;
