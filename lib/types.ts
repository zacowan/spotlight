export type FeaturedImage = {
  node: {
    sourceUrl: string;
  };
};

export type RecentPost = {
  node: {
    title: string;
    excerpt: string;
    slug: string;
    date: string;
    featuredImage?: FeaturedImage;
  };
};
