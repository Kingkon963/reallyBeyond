import * as React from "react";
import { NextPage } from "next";
import Head from "next/head";

import Layout from "@components/Layout";
import InfinityHeader from "@components/InfinityHeader";
import ServiceCard from "@components/ServiceCard";
import ListItem from "@components/ListItem";

const ServicesPage: NextPage = () => {
  return (
    <div className="overflow-x-clip">
      <Head>
        <title>Really Beyond | Services</title>
        <meta name="description" content="Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="container pt-[67px] mb-[200px]">
          <InfinityHeader gap={35}>Services</InfinityHeader>

          <div className="mt-[43px] flex flex-col gap-[40px] lg:gap-[60px]">
            <ServiceCard title="Brand Identity" number={1}>
              <div className="w-[298px] xsp:w-[358px] lg:w-auto mx-[12px] mt-[22px]">
                <span className="text-[18px] text-green dark:text-black">
                  Realization of your ideas and birth of your brand.
                </span>
                <p className="mt-0 text-[14px] lg:w-[498px] 3xl:w-[631px] leading-snug">
                  Colors, Marks, Fonts, Shapes - All is created during the brand
                  identity development and a personality of your brand comes to
                  life -It is a true sense of accomplishment to see how it looks
                  what you have been imagining from days or months. We make sure
                  to create the assets that you love to see.
                </p>
                <h2 className="text-[18px] text-green dark:text-black mt-5">
                  Process:
                </h2>
                <ul className="text-[14px] lg:ml-[17px] 3xl:ml-[19px] relative pt-1 list-outside list-[square]">
                  <ListItem>Color Palette Selection</ListItem>
                  <ListItem>Fonts Selection</ListItem>
                  <ListItem>Sketches</ListItem>
                  <ListItem>Logo Draft</ListItem>
                  <ListItem>Revisions</ListItem>
                  <ListItem>Polishing and Final Touches</ListItem>
                </ul>
              </div>
            </ServiceCard>
            <ServiceCard
              title={
                <span>
                  UX/UI &<br className="lg:hidden" /> Graphic Design
                </span>
              }
              number={2}
              mirror={true}
            >
              <div className="w-[298px] xsp:w-[358px] lg:w-auto mx-[12px] mt-[22px]">
                <span className="text-[18px] text-green dark:text-black">
                  Websites and Mobile Apps tailor-made specially for you
                </span>
                <p className="mt-0 text-[14px] lg:w-[498px] 3xl:w-[631px] leading-snug">
                  Your customers should enjoy using your website or app. Keeping
                  that in mind, we prioritize an excellent user experience over
                  everything else. Complexity of the requirements doesn’t scare
                  us.
                </p>
                <h2 className="text-[18px] text-green dark:text-black mt-5">
                  We can design:
                </h2>
                <ul className="text-[14px] lg:ml-[17px] 3xl:ml-[19px] relative pt-1 list-outside list-[square]">
                  <ListItem>Corporate websites, Blogs, Landing Pages</ListItem>
                  <ListItem>Data-rich dashboards and Admin Panels</ListItem>
                  <ListItem>Online stores and services</ListItem>
                  <ListItem>
                    Multidimensional and multi-users Mobile and Web Apps
                  </ListItem>
                </ul>
                <h2 className="text-[18px] text-green dark:text-black mt-5">
                  Process:
                </h2>
                <ul className="text-[14px] lg:ml-[17px] 3xl:ml-[19px] relative pt-1 list-outside list-[square]">
                  <ListItem>Wireframes </ListItem>
                  <ListItem>Prototype</ListItem>
                  <ListItem>User interface</ListItem>
                </ul>
              </div>
            </ServiceCard>
            <ServiceCard
              title={
                <h2 className="lg:leading-[72px]">
                  Web and Mobile <br /> Apps Development
                </h2>
              }
              titleY={39}
              number={3}
            >
              <div className="w-[298px] xsp:w-[358px] lg:w-auto mx-[12px] mt-[22px]">
                <span className="text-[18px] text-green dark:text-black">
                  Websites and Mobile Apps tailor-made specially for you
                </span>
                <p className="mt-0 text-[14px] lg:w-[498px] 3xl:w-[631px] leading-snug">
                  Your customers should enjoy using your website or app. Keeping
                  that in mind, we prioritize an excellent user experience over
                  everything else. Complexity of the requirements doesn’t scare
                  us.
                </p>
                <h2 className="text-[18px] text-green dark:text-black mt-5">
                  We can design:
                </h2>
                <ul className="text-[14px] lg:ml-[17px] 3xl:ml-[19px] relative pt-1 list-outside list-[square]">
                  <ListItem>Corporate websites, Blogs, Landing Pages</ListItem>
                  <ListItem>Data-rich dashboards and Admin Panels</ListItem>
                  <ListItem>Online stores and services</ListItem>
                  <ListItem>
                    Multidimensional and multi-users Mobile and Web Apps
                  </ListItem>
                </ul>
                <h2 className="text-[18px] text-green dark:text-black mt-5">
                  Process:
                </h2>
                <ul className="text-[14px] lg:ml-[17px] 3xl:ml-[19px] relative pt-1 list-outside list-[square]">
                  <ListItem>Wireframes </ListItem>
                  <ListItem>Prototype</ListItem>
                  <ListItem>User interface</ListItem>
                </ul>
              </div>
            </ServiceCard>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default ServicesPage;
