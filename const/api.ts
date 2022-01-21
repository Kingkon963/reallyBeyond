import { Axios } from "axios";
import { Media } from "interfaces/Post";

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
