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
        <div className="container relative pt-24 pb-12 lg:py-24 lg:flex lg:flex-col lg:items-center ">
          <div className="relative mb-[62px] lg:mb-24 lg:w-[904px]">
            <span
              className="uppercase font-openSansBold text-[#7D7D7D] 
            text-[12px] absolute left-0 -top-10"
            >
              Learning Constantly. Exploring Opportunities. Always Improving
            </span>
            <InfinityHeader gap={11}>Our Thoughts</InfinityHeader>
            <span
              className="uppercase font-openSansBold text-[#7D7D7D] 
              text-[12px] absolute mt-[10px] lg:mt-0 lg:top-[86px] lg:left-[259px]"
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
