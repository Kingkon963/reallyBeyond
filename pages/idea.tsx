import * as React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Layout from "@components/Layout";
import keyGen from "src/utils/genKey";

const Questions: React.FC = ({ children }) => {
  const quetions = [
    "Do you have an idea which you think can be a great business?",
    "Do you think your idea needs to be refined?",
    "Do you have an idea but not sure if it can be implemented or not?",
    "Do you have an idea but simply don’t know what is the next step?",
  ];
  return (
    <div className="flex flex-col lg:flex-row ">
      {quetions.map((question, _idx) => {
        return (
          <Question key={keyGen()} number={_idx + 1}>
            {question}
          </Question>
        );
      })}
    </div>
  );
};

const Question: React.FC<{ number: Number }> = ({ children, number }) => {
  return (
    <div className="grid grid-flow-col grid-cols-12 lg:block mb-5 last:mb-0 lg:mb-0 lg:border-t border-[#C9C9C9] relative lg:pt-7 lg:w-1/4">
      <span className=" col-span-1 lg:absolute lg:-top-[13px] lg:left-0 border border-[#C9C9C9] bg-white text-green font-openSansBold rounded-full w-[26px] h-[26px] text-[14px] flex justify-center items-center">
        {number}
      </span>
      <p className=" col-start-2 col-end-13 pl-[8px] lg:pl-0  text-[18px] font-openSansRegular lg:w-[250px] mt-[2px] lg:mt-0 overflow-clip">
        {children}
      </p>
    </div>
  );
};

const IdeaPage: NextPage = () => {
  return (
    <div className="overflow-x-clip">
      <Head>
        <title>Really Beyond | Blog</title>
        <meta name="description" content="Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <>
          <div className="container pt-12 pb-8 lg:pb-16">
            <h1 className="font-poppinsLight text-[#262626] text-[30px] lg:text-[60px]">
              A few questions for you:
            </h1>
            <div className="mt-10 mb-20">
              <Questions />
            </div>
            <div>
              <h1 className="font-poppinsLight text-[#262626] text-[30px] lg:text-[60px]">
                If your answer is yes
              </h1>
              <p className="text-[18px] mt-[5px]">
                to any of these questions we can be a big help and there are
                plenty of <br /> details for you on this page. Do you have an
                idea which you think can be <br /> a great business? We listen
                to your idea and turn it into a detailed <br /> specifications
                document.
              </p>
            </div>
            <div className="w-[365px] h-[352px] mt-5 lg:hidden bg-[#F2F8F6] text-[30px] font-poppinsLight flex justify-center items-center lg:absolute lg:right-0 lg:-top-[225px]">
              illustration
            </div>
          </div>

          <div className="bg-blue w-screen py-16 mb-96 ">
            <div className="container flex relative">
              <div>
                <h1 className="font-poppinsLight text-white text-[30px] lg:text-[60px]">
                  And what after that?
                </h1>
                <p className="text-white text-[14px] leading-[150%]">
                  You can use that visual documentation to quickly share your
                  ideas with other vendors,
                  <br className="hidden lg:block" /> collaborate on projects
                  with us, or plan your business budget in no time. We will
                  essentially
                  <br className="hidden lg:block" /> create a document that will
                  have all the information and specifications that you may need
                  in
                  <br /> order to get price quotes from technology companies.
                  <br />
                  <br /> We have priced this service at $2,000 and we would like
                  to include a few words on why we
                  <br className="hidden lg:block" /> charge for this server
                  apart from the reason of course we spend our time.
                  <br />
                  <br /> We have collective experience of 15 years to refine the
                  ideas and create specification
                  <br className="hidden lg:block" /> documents and product
                  development plans.
                  <br /> We have tried and tested many practices to execute the
                  product development so we might
                  <br className="hidden lg:block" /> have some great suggestions
                  for you.
                  <br /> And based on years of experience we have come to the
                  conclusion that if as a client you don’t
                  <br className="hidden lg:block" /> have a proper
                  specifications document, you end up spending a lot of extra
                  money and time
                  <br className="hidden lg:block" /> to get the product
                  developed and the journey itself can be a frustrating one.
                  <br />
                  <br />
                  <br />
                </p>
                <button className="bg-orange text-white w-full lg:w-[180px] h-[49px]">
                  Let’s Get Started
                </button>
              </div>
              <div className="flex-1 hidden lg:block lg:relative">
                <div className="w-[365px] h-[352px] bg-[#F2F8F6] text-[30px] font-poppinsLight flex justify-center items-center lg:absolute lg:right-0 lg:-top-[225px]">
                  illustration
                </div>
              </div>

              <hr className="border-2 border-orange w-[66px] absolute -top-[66px] -left-[14px] rotate-90" />
            </div>
          </div>
        </>
      </Layout>
    </div>
  );
};

export default IdeaPage;
