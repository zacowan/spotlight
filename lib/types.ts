export type FeaturedImage = {
  node: {
    sourceUrl: string;
  };
};

export type PostNode = {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  featuredImage?: FeaturedImage;
  content: string;
};

export type Post = {
  node: PostNode;
};

export type PostBasic = {
  node: Omit<PostNode, "content">;
};
