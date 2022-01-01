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
        <div className="container pt-12">
          <h1 className="font-poppinsRegular text-[#262626] text-[30px] lg:text-[60px]">
            A few questions for you:
          </h1>
          <div className="mt-10 mb-20">
            <Questions />
          </div>
          <div>
            <h1 className="font-poppinsRegular text-[#262626] text-[30px] lg:text-[60px]">
              If your answer is yes
            </h1>
            <p className="text-[18px] mt-[5px]">
              to any of these questions we can be a big help and there are
              plenty of <br /> details for you on this page. Do you have an idea
              which you think can be <br /> a great business? We listen to your
              idea and turn it into a detailed <br /> specifications document.
            </p>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default IdeaPage;
