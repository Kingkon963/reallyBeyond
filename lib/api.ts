import { Axios } from "axios";
import { GetAllSlugsResponse } from "interfaces/GetAllSlugsResponse";
import { GetPostResponse } from "interfaces/GetPostResponse";
import { GetAllPostsResponse } from "interfaces/GetAllPostsResponse";

export const getStrapiURL = (path = "") => {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`;
};

export function getStrapiMedia(url: string) {
  const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
  return imageUrl;
}

export const axios = new Axios({
  baseURL: getStrapiURL(),
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAllPosts = async () => {
  let posts: GetAllPostsResponse | null = null;

  const qs = require("qs");
  const query = qs.stringify(
    {
      populate: {
        author: {
          fields: ["username"],
          populate: {
            avatar: {
              fields: ["url"],
            },
          },
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  try {
    const res = await axios.get(getStrapiURL(`/api/posts?${query}`));
    if (res.statusText === "OK") {
      //console.log("GetAllPostsResponse", res.data);
      posts = JSON.parse(res.data);
    }
  } catch (error) {
    console.log(error);
  }

  return posts;
};

export const getAllSlugs = async () => {
  let slugs: string[] = [];

  const qs = require("qs");
  const query = qs.stringify(
    {
      fields: ["slug"],
    },
    {
      encodeValuesOnly: true,
    }
  );

  try {
    const res = await axios.get(getStrapiURL(`/api/posts?${query}`));
    if (res.statusText === "OK") {
      const data: GetAllSlugsResponse = JSON.parse(res.data);
      data.data.forEach((post) => {
        slugs.push(post.attributes.slug);
      });
    }
  } catch (error) {
    console.log(error);
  }

  return slugs;
};

export const getPost = async (slug: string) => {
  let postData: GetPostResponse | null = null;

  const qs = require("qs");
  const query = qs.stringify(
    {
      filters: {
        slug: {
          $eq: slug,
        },
      },
      populate: {
        author: {
          fields: ["username"],
          populate: {
            avatar: {
              fields: ["url"],
            },
          },
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  try {
    const res = await axios.get(getStrapiURL(`/api/posts?${query}`));
    if (res.statusText === "OK") {
      postData = JSON.parse(res.data);
    }
  } catch (error) {
    console.log(error);
  }

  return postData;
};
