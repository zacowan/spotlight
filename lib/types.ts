export type FeaturedImage = {
  node: FeaturedImageNode;
};

export type FeaturedImageNode = {
  sourceUrl: string;
};

export type Category = {
  node: CategoryNode;
};

export type CategoryNode = {
  name: string;
};

export type TagNode = {
  name: string;
};

export type Author = {
  node: AuthorNode;
};

export type AuthorNode = {
  name: string;
  firstName: string;
  lastName: string;
  avatar: any;
};

export type PostNode = {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  featuredImage?: FeaturedImage;
  content: string;
  categories: {
    edges: Category[];
  };
  tags: {
    nodes: TagNode[];
  };
  author: Author;
};

export type Post = {
  node: PostNode;
};

export type PostBasic = {
  node: Omit<PostNode, "content" | "categories">;
};
