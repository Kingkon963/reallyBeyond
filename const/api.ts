import { Axios } from "axios";

export const getStrapiURL = (path = "") => {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`;
};

export const axios = new Axios({
  baseURL: getStrapiURL(),
  headers: {
    "Content-Type": "application/json",
  },
});
