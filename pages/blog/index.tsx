import * as React from "react";
import type { GetStaticProps } from "next";
import Head from "next/head";

import Layout from "@components/Layout";
import InfinityHeader from "@components/InfinityHeader";
import BlogPost from "@components/BlogPost";
import { getAllPosts } from "@lib/api";
import keyGen from "src/utils/genKey";
import { GetAllPostsResponse } from "interfaces/GetAllPostsResponse";

interface BlogPageData {
  posts?: GetAllPostsResponse | null;
}

const BlogPage = ({ posts }: BlogPageData) => {
  return (
    <div className="overflow-x-clip">
      <Head>
        <title>Really Beyond | Blog</title>
        <meta name="description" content="Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div
          className="container relative pt-24 pb-12 lg:py-[75px]
         lg:flex lg:flex-col lg:items-center"
        >
          <div className="relative mb-[62px] lg:mb-24 lg:w-[904px]">
            <span
              className="uppercase font-openSansBold text-[#7D7D7D] 
            text-[12px] absolute left-0 -top-10 lg:top-0"
            >
              Learning Constantly. Exploring Opportunities.
              <br className="sm:hidden" /> Always Improving
            </span>
            <InfinityHeader gap={11}>Our Thoughts</InfinityHeader>
            <span
              className="uppercase font-openSansBold text-[#7D7D7D] 
              text-[12px] absolute mt-[10px] lg:mt-0 lg:-bottom-[20px] lg:left-[259px]"
            >
              Here is all that we think and can't resist
              <br className="sm:hidden" /> sharing it with you
            </span>
          </div>

          <div>
            {posts &&
              posts.data.length !== 0 &&
              posts.data.map((post) => {
                return <BlogPost post={post} key={keyGen()} />;
              })}

            {posts && posts.data.length === 0 && (
              <div className="flex justify-center items-center">
                <h1 className="text-3xl text-grayish">No Blog Post Found!</h1>
              </div>
            )}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const postsData = await getAllPosts();

  return {
    props: {
      posts: postsData,
    },
    revalidate: 10,
  };
};

export default BlogPage;
