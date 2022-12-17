import type { PostBasic, PostOnlyId } from "./types";

const API_URL = process.env.WORDPRESS_API_URL;

async function fetchAPI(query = "", { variables }: Record<string, any> = {}) {
  const headers = { "Content-Type": "application/json" };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      "Authorization"
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  // WPGraphQL Plugin must be enabled
  const res = await fetch(API_URL, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

const POST_FIELDS_FRAGMENT = `
fragment PostFields on Post {
  title
  excerpt
  id
  date
  featuredImage {
    node {
      sourceUrl
    }
  }
  tags {
    nodes {
      name
    }
  }
}
`;

export async function getAllPostsId(): Promise<PostOnlyId[]> {
  const data = await fetchAPI(`
    {
      posts(first: 10000) {
        edges {
          node {
            id
          }
        }
      }
    }
  `);

  if (!data) return [];

  return data?.posts.edges;
}

export async function getPostsBasic(number = 3): Promise<PostBasic[]> {
  const data = await fetchAPI(
    `
    ${POST_FIELDS_FRAGMENT}
    query AllPosts {
      posts(first: ${number}, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            ...PostFields
          }
        }
      }
    }
  `
  );

  if (!data) return [];

  return data?.posts.edges;
}

export async function getPostById(id: string) {
  const data = await fetchAPI(
    `
    ${POST_FIELDS_FRAGMENT}
    query PostById($id: ID!) {
      post(id: $id, idType: ID) {
        ...PostFields
        content
      }
    }
  `,
    {
      variables: {
        id: id,
      },
    }
  );

  return data;
}
