import * as React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Layout from "@components/Layout";
import TestimonialGrid from "@components/TestimonialGrid";
import InfinityHeader from "@components/InfinityHeader";

const Testimonials: NextPage = () => {
  return (
    <div className="overflow-x-clip">
      <Head>
        <title>Really Beyond | Blog</title>
        <meta name="description" content="Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="container top-gap pb-24 lg:px-32 mt-20">
          <div className="relative mb-8">
            <span className="uppercase font-openSansBold text-gray-400 tracking-wide text-[.625rem]">
              Learning Constantly. Exploring Opportunities. Always Improving
            </span>
            <InfinityHeader gap={20}>Our Thoughts</InfinityHeader>
            <span className="uppercase font-openSansBold text-gray-400 tracking-wide text-[.625rem] absolute -bottom-8 left-32">
              Here is all that we think and can't resist sharing it with you
            </span>
          </div>
          <div>blogs</div>
        </div>
      </Layout>
    </div>
  );
};

export default Testimonials;
