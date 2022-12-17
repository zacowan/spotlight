export type PostOnlyId = {
  node: PostOnlyIdNode;
};

export type PostOnlyIdNode = {
  id: string;
};

export type FeaturedImage = {
  node: FeaturedImageNode;
};

export type FeaturedImageNode = {
  sourceUrl: string;
};

export type TagNode = {
  name: string;
};

export type PostNode = {
  title: string;
  excerpt: string;
  id: string;
  date: string;
  featuredImage?: FeaturedImage;
  content: string;
  tags: {
    nodes: TagNode[];
  };
};

export type Post = {
  node: PostNode;
};

export type PostBasic = {
  node: Omit<PostNode, "content">;
};
