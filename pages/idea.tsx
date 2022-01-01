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
    <div className="flex flex-wrap">
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
    <div className="border-t border-[#C9C9C9] relative pt-7 w-1/4">
      <span className="absolute -top-[13px] left-0 border border-[#C9C9C9] bg-white text-green font-openSansBold rounded-full w-[26px] h-[26px] text-[14px] flex justify-center items-center">
        {number}
      </span>
      <p className="text-[18px] font-openSansRegular lg:w-[250px]">
        {children}
      </p>
    </div>
  );
};

const Testimonials: NextPage = () => {
  return (
    <div className="overflow-x-clip">
      <Head>
        <title>Really Beyond | Blog</title>
        <meta name="description" content="Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="container pt-12">
          <h1 className="font-poppinsRegular text-[30px] lg:text-[60px]">
            A few questions for you:
          </h1>
          <div className="mt-10 mb-20">
            <Questions />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Testimonials;
