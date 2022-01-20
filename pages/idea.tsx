import * as React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Layout from "@components/Layout";
import keyGen from "src/utils/genKey";
import PathSvg from "@components/PathSvg";
import Newsletter from "@components/Newsletter";

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
      <span className=" col-span-1 lg:absolute lg:-top-[13px] lg:left-0 border border-[#C9C9C9] bg-white text-green dark:text-black font-openSansBold rounded-full w-[26px] h-[26px] text-[14px] flex justify-center items-center">
        {number}
      </span>
      <p className=" col-start-2 col-end-13 pl-[8px] lg:pl-0  text-[18px] font-openSansRegular lg:w-[250px] mt-[2px] lg:mt-0 overflow-clip">
        {children}
      </p>
    </div>
  );
};

interface PathHeading {
  number: number;
  text: String;
}

const PathHeading: React.FC<PathHeading> = ({ number, text }) => {
  return (
    <div>
      <h1 className=" relative left-0 text-[30px] lg:text-[24px] 3xl:text-[30px] leading-[150%] z-20 font-openSansRegular">
        <span
          className="absolute -top-[24px] -left-[12px] lg:-bottom-[18px] lg:-left-[20px] 3xl:-bottom-[29px] 3xl:-left-[27px] -z-10 
      font-openSansBold text-[#EEF3F2] text-[85px] lg:text-[70px] 3xl:text-[85px] "
        >
          {number}
        </span>
        {text}
      </h1>
    </div>
  );
};

interface RequirementBox {
  color: "green" | "orange" | "blue";
}

const RequirementBox: React.FC<RequirementBox> = ({ children, color }) => {
  return (
    <div
      className={`w-[153px] h-[55px] xsp:w-[170px] lg:w-[172px] lg:h-[45px] 3xl:w-[209px] 3xl:h-[55px] 
      text-[17px] lg:text-[14px] 3xl:text-[16px] text-[#212121] font-openSansRegular 
      flex justify-center items-center border 
      ${color === "green" ? "border-green" : ""}
      ${color === "orange" ? "border-orange" : ""}
      ${color === "blue" ? "border-blue" : ""}
      dark:border-[#9F9F9F]
      `}
    >
      {children}
    </div>
  );
};

const IdeaPage: NextPage = () => {
  return (
    <div className="overflow-x-clip">
      <Head>
        <title>Really Beyond | Idea</title>
        <meta name="description" content="Idea" />
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
            <div className="w-[328px] h-[316px] xsp:w-[377px] lg:w-[365px] lg:h-[352px] mt-5 lg:hidden bg-[#F2F8F6] text-[30px] font-poppinsLight flex justify-center items-center lg:absolute lg:right-0 lg:-top-[225px]">
              illustration
            </div>
          </div>

          <div className="bg-blue dark:bg-black w-screen py-16">
            <div className="container flex relative">
              <div>
                <h1 className="font-poppinsLight text-white text-[30px] lg:text-[60px]">
                  And what after that?
                </h1>
                <p className="text-white text-[14px] 3xl:text-[16px] leading-[150%]">
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
                <button className="bg-orange dark:bg-white text-white dark:text-black font-poppinsSemibold w-full lg:w-[180px] h-[49px]">
                  Let’s Get Started
                </button>
              </div>
              <div className="flex-1 hidden lg:block lg:relative">
                <div className="w-[365px] h-[352px] bg-[#F2F8F6] text-[30px] font-poppinsLight flex justify-center items-center lg:absolute lg:right-0 lg:-top-[225px]">
                  illustration
                </div>
              </div>

              <hr className="border border-orange dark:border-grayish w-[66px] absolute -top-[66px] -left-[14px] rotate-90" />
            </div>
          </div>

          <div className="container pt-[120px] pb-[100px] 3xl:pt-[165px] relative ">
            <PathSvg />
            {/* First Meeting */}
            <div className="flex mb-[114px] 3xl:mb-[140px]">
              <div className="lg:w-1/2">
                <PathHeading number={1} text="First Meeting" />
                <p className="text-[16px] lg:text-[14px] 3xl:text-[16px] leading-[150%] lg:w-[550px] 3xl:w-[668px] mt-[7px] 3xl:mt-[14px]">
                  In our first meeting, we want to know everything about your
                  idea. You don’t even have to stress about how you are going to
                  do this. We will be there helping you in the process, asking
                  you everything we need to know.
                  <br /> <br /> After our initial meeting we will share a
                  summary with you. It will be about our conclusions and our
                  understanding of your idea. Just to make sure we are on the
                  same page. When we get your approval, we will be ready for the
                  next step.
                </p>
              </div>
              <div className="flex-1 hidden lg:block">
                <div
                  className="w-[205px] h-[198px] 3xl:w-[249px] 3xl:h-[240.5px] bg-[#F2F8F6] 
                text-[30px] 3xl:text-[36px] font-poppinsLight lg:flex justify-center items-center 
                lg:absolute lg:-right-[69px] lg:top-[55px] 3xl:-right-[170px] 3xl:top-[82px]"
                >
                  illustration
                </div>
              </div>
            </div>
            {/* Project Introduction Document */}
            <div className="flex">
              <div className="lg:w-1/2 hidden lg:block">
                <div
                  className="w-[205px] h-[198px] 3xl:w-[250px] 3xl:h-[240px] bg-[#F2F8F6] text-[30px] 3xl:text-[36px] font-poppinsLight 
                 lg:flex justify-center items-center lg:absolute lg:-left-[76px] lg:top-[368px] 3xl:top-[460px] 3xl:-left-[130px]"
                >
                  illustration
                </div>
              </div>
              <div className="flex-1 lg:ml-[22px] 3xl:ml-[32px]">
                <PathHeading number={2} text="Project Introduction Document" />
                <p className="text-[16px] lg:text-[14px] 3xl:text-[16px] leading-[150%]  mt-[7px]">
                  Once we have the initial overview ready and we are all clear
                  about the basic idea of the project, we will then prepare a
                  document consisting of the following:
                </p>
                <div className="text-[16px] lg:text-[14px] 3xl:text-[16px] leading-[150%]">
                  <h6 className="text-[21px] lg:text-[18px] text-blue dark:text-black leading-[150%] font-openSansRegular mt-[12px] mb-[5px]">
                    What? Why? How? Who?
                  </h6>
                  <ol className="list-[square] ml-[20px] text-blue dark:text-black">
                    <li>
                      <span className="font-openSansBold">What:</span> We will
                      define your project, its features and its goals.
                    </li>
                    <li>
                      <span className="font-openSansBold">Why:</span> We will
                      talk about its importance. What kind of problem it will
                      help solve.
                    </li>
                    <li>
                      <span className="font-openSansBold">How:</span> We will
                      explain the procedures that should be followed for maximum
                      effectiveness of the project.
                    </li>
                    <li>
                      <span className="font-openSansBold">Who:</span> The roles
                      of everyone that participates in the project will be
                      defined and their responsibilities will be shared.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            {/* Final Report */}
            <div className="flex">
              <div className="lg:w-1/2 mt-[125px] lg:mt-[85px] 3xl:mt-[125px]  lg:-ml-[4px] 3xl:ml-0">
                <PathHeading number={3} text="Final Report" />
                <p className="text-[16px] lg:text-[14px] 3xl:text-[16px] leading-[150%] max-w-[632px] mt-[7px]">
                  Once step 2 is approved by you, we will prepare a final
                  specifications document consisting of the following:
                </p>
                <div className="text-[16px] lg:text-[14px] 3xl:text-[16px] leading-[150%] mt-[16px]">
                  <ol className="list-[square] ml-[20px] max-w-[665px] text-blue dark:text-black">
                    <li>A refined and detailed project introduction.</li>
                    <li>Functional requirements of the system</li>
                    <li>
                      Non-Functional Requirements that will explain how the
                      project should perform. It covers all the remaining
                      requirements which are not covered by the functional
                      requirements. It is an added document that covers topics
                      like
                    </li>
                  </ol>
                </div>
                <div className="hidden lg:block">
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-[12px] my-[32px]">
                    <RequirementBox color="green">Speed</RequirementBox>
                    <RequirementBox color="orange">Security</RequirementBox>
                    <RequirementBox color="blue">Capacity</RequirementBox>
                    <RequirementBox color="orange">
                      Compatibility
                    </RequirementBox>
                    <RequirementBox color="blue">Reliability</RequirementBox>
                    <RequirementBox color="green">Usability</RequirementBox>
                  </div>
                </div>
                <div className="lg:hidden block">
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-[12px] my-[32px] max-w-[372px]">
                    <RequirementBox color="green">Speed</RequirementBox>
                    <RequirementBox color="blue">Reliability</RequirementBox>
                    <RequirementBox color="orange">
                      Compatibility
                    </RequirementBox>
                    <RequirementBox color="blue">Capacity</RequirementBox>
                    <RequirementBox color="orange">Security</RequirementBox>
                    <RequirementBox color="green">Usability</RequirementBox>
                  </div>
                </div>
                <ol
                  className="text-[16px] lg:text-[14px] 3xl:text-[16px] leading-[150%] list-[square] lg:w-[533px] 3xl:w-[647px] ml-[20px]
                 text-blue dark:text-black"
                >
                  <li className="mb-[16px]">
                    Use Cases. This is a diagram that is a visual representation
                    of who a product’s users are, how they will interact with
                    the product, and what the product does.
                  </li>
                  <li className="mb-[16px]">
                    Technical Specifications. This is a detailed document that
                    talks about the technical requirements agreed by both
                    parties that will serve to define the requirements of the
                    product.
                  </li>
                  <li>Timeline estimations.</li>
                </ol>
              </div>
              <div className="flex-1 hidden lg:flex justify-center items-center ml-[25px]">
                <div className="w-[365px] h-[352px] 3xl:w-[443px] 3xl:h-[427px] bg-[#F2F8F6] text-[30px] 3xl:text-[36px] font-poppinsLight flex justify-center items-center mt-[63px]">
                  illustration
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue dark:bg-black w-screen pt-16 pb-16 lg:pb-40 3xl:pb-40">
            <div className="container lg:flex relative">
              <div>
                <h1
                  className="font-poppinsLight text-white text-[30px] mb-4 lg:mb-0 lg:text-[60px] lg:w-[974px] 3xl:w-[1091px] 
                leading-tight"
                >
                  Having a clear plan and specifications document is a peace of
                  mind.
                </h1>
                <p className="text-white text-[14px] 3xl:text-[16px] leading-[150%] lg:mt-[35px] lg:w-[548px] 3xl:w-[697px]">
                  Worth mentioning here that once we deliver the service and you
                  decide to continue working with us for your product
                  development we will return $2000 back to you.
                  <br />
                  <br /> Lack of clarity brings confusion and you end up
                  spending much more than initially planned. What we want to do
                  is shine a light on your ideas so that you can communicate
                  them better with the companies you want to work with.
                  <br />
                  <br />
                </p>
                <button className="bg-orange dark:bg-white text-white dark:text-black font-poppinsSemibold w-full lg:w-[180px] h-[49px]">
                  Let’s Get Started
                </button>
              </div>
              <div className="flex-1 lg:relative">
                <div
                  className="w-[328px] h-[307px] xsp:w-[382px] xsp:h-[363px] lg:w-[365px] lg:h-[352px] bg-[#F2F8F6] text-[30px] font-poppinsLight 
                flex justify-center items-center mt-8 lg:mt-0 lg:absolute lg:right-[98px] lg:top-[203px] 3xl:right-[164px]"
                >
                  illustration
                </div>
              </div>
            </div>
          </div>

          <Newsletter />
        </>
      </Layout>
    </div>
  );
};

export default IdeaPage;
