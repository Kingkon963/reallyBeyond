import * as React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Layout from "@components/Layout";
import BlogPost from "@components/BlogPost";
import Avatar from "@components/Avatar";
import Newsletter from "@components/Newsletter";
import Link from "next/link";

const Quote: React.FC = ({ children }) => {
  return (
    <div className="flex gap-[10px] my-5">
      <span
        className="font-redHatDisplayMedium text-green text-[50px] leading-[60px]
      -mt-[8px] -ml-[12px]"
      >
        “
      </span>
      <div className="font-poppinsRegular text-[20px] leading-[30px] lg:text-[26px] lg:leading-[39px]">
        {children}
      </div>
    </div>
  );
};

const BlogPostPage: NextPage = () => {
  return (
    <div className="overflow-x-clip">
      <Head>
        <title>Really Beyond | Blog</title>
        <meta name="description" content="Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <>
          <div className="container pt-[69px]">
            <div className="lg:w-[650px] mx-auto mb-[50px] lg:mb-[90px]">
              <h1 className="font-poppinsSemibold text-[30px] leading-[39px] lg:text-[40px] lg:leading-[52px] text-[#333333]">
                Lorem Ipsum dolores sit amet, consectetur unde
              </h1>
              <div className="flex items-center gap-[10px] pt-[20px] pb-[31px] mb-[31px] border-b border-green">
                <Avatar imgUrl={null} />
                <div className="flex items-center gap-[12px]">
                  <span className="uppercase font-openSansBold text-[12px] text-center text-[#7D7D7D]">
                    {/* {post.attributes.author.data?.attributes.username} */}
                    Jane Elliot
                  </span>
                  <span className="font-openSansBold text-[12px] text-center text-[#7D7D7D]">
                    {/* {new Date(post.attributes.publishedAt).toLocaleDateString(
                    undefined,
                    { day: "2-digit", month: "2-digit", year: "2-digit" }
                  )} */}
                    22.12.22
                  </span>
                </div>
              </div>
              <div>
                <h1 className="font-poppinsMedium text-[20px] leading-[24px] lg:text-[26px] lg:leading-[31px]">
                  Lorem ipsum dolor sit amet
                </h1>

                <p className="text-[#313131]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ultricies integer quis auctor elit sed vulputate mi sit amet.
                  Urna duis convallis convallis tellus id interdum velit
                  laoreet. Quam nulla porttitor massa id neque. Aliquet eget sit
                  amet tellus cras adipiscing enim eu. Quis commodo odio aenean
                  sed. Rhoncus aenean vel elit scelerisque. Tincidunt praesent
                  semper feugiat nibh sed pulvinar.
                </p>

                <Quote>
                  Commodo elit at imperdiet dui accumsan sit. Ut ornare lectus
                  sit amet est placerat in egestas.
                </Quote>
              </div>

              <div className="flex justify-between mt-[20px] lg:mt-[40px]">
                <Link href="#">
                  <div className="flex items-center gap-[15px]">
                    <span>
                      <svg
                        width="9"
                        height="13"
                        viewBox="0 0 9 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.13679 12.8396C8.35024 12.6273 8.35024 12.2827 8.13679 12.0704L2.02488 6.50024L8.13679 0.929547C8.35024 0.717184 8.35024 0.372612 8.13679 0.160249C7.92334 -0.0521142 7.57716 -0.0521142 7.36373 0.160249L0.859656 6.08796C0.745882 6.20118 0.697139 6.35178 0.7047 6.49969C0.697139 6.6481 0.745882 6.79819 0.859656 6.91142L7.36431 12.8397C7.57771 13.052 7.92334 13.052 8.13679 12.8396Z"
                          className="fill-green dark:fill-black"
                        />
                      </svg>
                    </span>
                    <span className="text-green dark:text-black font-redHatDisplayMedium text-[16px] leading-[24px]">
                      Read previous
                    </span>
                  </div>
                </Link>
                <Link href="#">
                  <div className="flex items-center gap-[15px]">
                    <span className="text-green dark:text-black font-redHatDisplayMedium text-[16px] leading-[24px]">
                      Read next
                    </span>
                    <span>
                      <svg
                        width="9"
                        height="13"
                        viewBox="0 0 9 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.860773 0.161311C0.647367 0.373714 0.647432 0.718264 0.860919 0.930587L6.97389 6.49955L0.863033 12.0714C0.649628 12.2838 0.649693 12.6284 0.863179 12.8407C1.07667 13.053 1.42285 13.053 1.63624 12.8406L8.13919 6.91161C8.25294 6.79836 8.30166 6.64775 8.29407 6.49985C8.3016 6.35143 8.25283 6.20135 8.13903 6.08815L1.63326 0.161142C1.41981 -0.051159 1.07418 -0.0510925 0.860773 0.161311Z"
                          className="fill-green dark:fill-black"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <Newsletter />
        </>
      </Layout>
    </div>
  );
};

export default BlogPostPage;
