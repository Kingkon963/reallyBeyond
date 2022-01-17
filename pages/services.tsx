import * as React from "react";
import { NextPage } from "next";
import Head from "next/head";

import Layout from "@components/Layout";
import InfinityHeader from "@components/InfinityHeader";

const ServicesPage: NextPage = () => {
  return (
    <div className="overflow-x-clip">
      <Head>
        <title>Really Beyond | Services</title>
        <meta name="description" content="Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="container pt-[67px]">
          <InfinityHeader gap={35}>Services</InfinityHeader>

          <div>
            <p>Brand</p>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default ServicesPage;
