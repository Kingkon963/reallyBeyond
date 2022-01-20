import * as React from "react";
import { NextPage } from "next";
import Head from "next/head";

import Layout from "@components/Layout";
import InfinityHeader from "@components/InfinityHeader";
import ServiceCard from "@components/ServiceCard";
import ListItem from "@components/ListItem";
import Newsletter from "@components/Newsletter";

const ServicesPage: NextPage = () => {
  return (
    <div className="overflow-x-clip">
      <Head>
        <title>Really Beyond | Services</title>
        <meta name="description" content="Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <>
          <div className="container pt-[67px] mb-[50px] lg:mb-[95px] 3xl:mb-[160px]">
            <InfinityHeader gap={35}>Services</InfinityHeader>

            <div className="mt-[43px] flex flex-col gap-[40px] lg:gap-[60px]">
              <ServiceCard title="Brand Identity" number={1}>
                <div className="w-[298px] xsp:w-[358px] lg:w-auto mx-[12px] mt-[22px]">
                  <span className="text-[18px] text-green dark:text-black">
                    Realization of your ideas and birth of your brand.
                  </span>
                  <p className="mt-0 text-[14px] lg:w-[498px] 3xl:w-[631px] leading-snug">
                    Colors, Marks, Fonts, Shapes - All is created during the
                    brand identity development and a personality of your brand
                    comes to life -It is a true sense of accomplishment to see
                    how it looks what you have been imagining from days or
                    months. We make sure to create the assets that you love to
                    see.
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
                  <p className="mt-0 text-[14px] lg:w-[498px] leading-snug">
                    Your customers should enjoy using your website or app.
                    Keeping that in mind, we prioritize an excellent user
                    experience over everything else. Complexity of the
                    requirements doesn’t scare us.
                  </p>
                  <h2 className="text-[18px] text-green dark:text-black mt-5">
                    We can design:
                  </h2>
                  <ul className="text-[14px] lg:ml-[17px] 3xl:ml-[19px] relative pt-1 list-outside list-[square]">
                    <ListItem>
                      Corporate websites, Blogs, Landing Pages
                    </ListItem>
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
                  <h2 className="lg:leading-[72px] lg:-mt-[68px]">
                    Web and Mobile <br /> Apps Development
                  </h2>
                }
                number={3}
              >
                <div className="w-[298px] xsp:w-[358px] lg:w-[498px] mx-[12px] mt-[22px]">
                  <span className="text-[18px] text-green dark:text-black">
                    Fast, Secure and Optimized Websites, Mobile Apps and
                    solutions of all complexities
                  </span>
                  <p className="mt-0 text-[14px] lg:w-[498px] 3xl:w-[584px] leading-snug">
                    Skilled developers and Software Engineers will take care of
                    your needs and make everything like a breeze for you. We
                    make sure you just sit back and relax while we develop your
                    dream app or website. A very small one page website to an
                    enterprise level solution - We can do it.
                  </p>
                  <h2 className="text-[18px] text-green dark:text-black mt-5">
                    Process:
                  </h2>
                  <ul
                    className="text-[14px] lg:ml-[17px] 3xl:ml-[19px] relative pt-1 list-outside list-[square]
                lg:w-[505px] 3xl:w-[566px]"
                  >
                    <ListItem>
                      UX/UI Design: An imagery representation and wireframes of
                      your complete system with all the colors, icons, fonts...
                    </ListItem>
                    <ListItem>
                      Front-End Development: An interactive working prototype
                    </ListItem>
                    <ListItem>
                      Backend-Development: Implement of the main logic of the
                      system and integration with Front-End
                    </ListItem>
                    <ListItem>
                      Testing: Each and every inch of your product will be
                      tested by Pros.
                    </ListItem>
                    <ListItem>
                      Deployment and Maintenance: No headache for you, we will
                      deploy and maintain
                    </ListItem>
                  </ul>
                </div>
              </ServiceCard>
              <ServiceCard
                title={
                  <h1 className="lg:mr-[149px] 3xl:mr-[266px]">Consultancy</h1>
                }
                number={4}
                mirror
              >
                <div
                  className="w-[298px] xsp:w-[358px] lg:w-auto mx-[12px] mt-[22px]
              3xl:ml-[76px]"
                >
                  <span className="text-[18px] text-green dark:text-black">
                    From idea refinement to launch
                  </span>
                  <p className="mt-0 text-[14px] lg:w-[498px] 3xl:w-[557px] leading-snug">
                    Set of different processes and strategies to achieve all
                    your wishes. This is a long term bond between you and us. We
                    go through many discussions with you to come up with a
                    solution or set of services for your particular needs. You
                    may want to automate your organization or have a
                    revolutionary idea, we will work on it together. Having a
                    multi-skilled team with diverse experience and strong
                    business acumen, We can deal with all things design,
                    technology keeping in mind your audience and business.
                  </p>
                  <h2 className="text-[18px] text-green dark:text-black mt-5">
                    Process:
                  </h2>
                  <ul className="text-[14px] lg:ml-[17px] 3xl:ml-[19px] relative pt-1 list-outside list-[square]">
                    <ListItem>Initial Discussion</ListItem>
                    <ListItem>Detailed Analysis of Your Requirements</ListItem>
                    <ListItem>Idea Refinement</ListItem>
                    <ListItem>Documentation</ListItem>
                    <ListItem>Product Development</ListItem>
                    <ListItem>Product Launch</ListItem>
                  </ul>
                </div>
              </ServiceCard>
            </div>
          </div>
          <Newsletter />
        </>
      </Layout>
    </div>
  );
};

export default ServicesPage;
