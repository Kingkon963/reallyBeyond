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
        <div className="container top-gap pb-24 px-32">
          <InfinityHeader gap={20}>Our Thoughts</InfinityHeader>
        </div>
      </Layout>
    </div>
  );
};

export default Testimonials;
