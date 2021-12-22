import * as React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Layout from "@components/Layout";
import TestimonialGrid from "@components/TestimonialGrid";

const Testimonials: NextPage = () => {
  return (
    <>
      <Head>
        <title>Really Beyond | Testimonials</title>
        <meta name="description" content="Testimonials" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="container pb-24">
          <h1 className="text-green text-7xl font-poppinsSemibold pt-16 pb-5">
            Testimonials
          </h1>
          <TestimonialGrid />
        </div>
      </Layout>
    </>
  );
};

export default Testimonials;
