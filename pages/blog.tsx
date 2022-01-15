import * as React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Layout from "@components/Layout";
import InfinityHeader from "@components/InfinityHeader";
import BlogPost from "@components/BlogPost";

const Testimonials: NextPage = () => {
  return (
    <div className="overflow-x-clip">
      <Head>
        <title>Really Beyond | Blog</title>
        <meta name="description" content="Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="container relative py-24 flex flex-col items-center ">
          <div className="relative mb-24 w-[904px]">
            <span
              className="uppercase font-openSansBold text-gray-400 tracking-wide 
            text-[.625rem] absolute left-0 -top-10"
            >
              Learning Constantly. Exploring Opportunities. Always Improving
            </span>
            <InfinityHeader gap={11}>Our Thoughts</InfinityHeader>
            <span
              className="uppercase font-openSansBold text-gray-400 tracking-wide 
            text-[.625rem] absolute top-[86px] left-[259px]"
            >
              Here is all that we think and can't resist sharing it with you
            </span>
          </div>

          <div>
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Testimonials;
