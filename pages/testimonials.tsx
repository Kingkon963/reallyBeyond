import * as React from "react";
import { useMedia, useWindowSize } from "react-use";
import type { NextPage } from "next";
import Head from "next/head";
import Layout from "@components/Layout";
import TestimonialGrid from "@components/TestimonialGrid";
import InfinityHeader from "@components/InfinityHeader";

const Testimonials: NextPage = () => {
  const is3XL = useMedia("(min-width: 1800px)");
  const { width, height } = useWindowSize();
  console.log(width);
  return (
    <div className="overflow-x-clip">
      <Head>
        <title>Really Beyond | Testimonials</title>
        <meta name="description" content="Testimonials" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="container top-gap pb-24 ">
          <InfinityHeader gap={is3XL ? 17.5 : 9.5}>Testimonials</InfinityHeader>
          <div className="lg:py-16 3xl:pt-24 3xl:pb-0">
            <TestimonialGrid variant="simple" />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Testimonials;
