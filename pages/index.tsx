import * as React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { useIntersection } from "react-use";
import OfferPopup from "@components/OfferPopup";
import Layout from "@components/Layout";
import TestimonialGrid from "@components/TestimonialGrid";
import ListItem from "@components/ListItem";

const Home: NextPage = () => {
  const heroContactBtn = React.useRef<HTMLAnchorElement>(null);
  const contctBtnIntersect = useIntersection(heroContactBtn, {
    root: null,
    rootMargin: "-6%",
    threshold: 1,
  });
  const [showHeaderBtn, setShowHeaderBtn] = React.useState(false);

  React.useEffect(() => {
    if (contctBtnIntersect) {
      if (contctBtnIntersect.intersectionRatio < 1) setShowHeaderBtn(true);
      else setShowHeaderBtn(false);
    }
  }, [contctBtnIntersect?.intersectionRatio]);

  return (
    <div>
      <Head>
        <title>Really Beyond</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout showHeaderContactBtn={showHeaderBtn}>
        <div>
          <section className="hero">
            <div className="container">
              <div className="flex-group">
                <div className="hero__text">
                  <h5 className="m-0 leading-none text-[#868686]">Working remotely globally.</h5>
                  <h1 className="font-poppinsSemibold leading-tight">
                    We go really beyond your
                    <br />
                    expectations to make
                    <br />
                    you happy.
                  </h1>
                  <p className="font-openSansRegular text-[#333333] 3xl:my-10">
                    By keeping you involved all along the process. A process
                    that is designed to bring your <br className="hidden xl:block"/> ideas to life smoothly and
                    quickly.
                  </p>
                  <a href="#footer" className="contact-us w-[218px] h-[65px] flex justify-center items-center mt-5" ref={heroContactBtn}>
                    Contact us
                  </a>
                </div>
                <div className="hero__vectors 3xl:scale-110 3xl:translate-y-[10px]">
                  <div className="circles 3xl:scale-110 3xl:translate-y-[-10px] 3xl:translate-x-[-10px]">
                    <div className="circles__first"></div>
                    <div className="circles__second"></div>
                    <div className="circles__third"></div>
                  </div>
                  <div className="blocks 3xl:left-[95px] 3xl:top-0">
                    <div className="blocks__first blocks__block"></div>
                    <div className="blocks__second blocks__block"></div>
                    <div className="blocks__third blocks__block"></div>
                  </div>
                </div>
              </div>
              <div className="hero__offer">
                <h4>What we offer:</h4>
                <ul className="special">
                  <OfferPopup title="Brand Identity">
                    <div>
                      <span className="text-lg lg:text-2xl text-orange dark:text-black">
                        Realization of your ideas and birth of your brand.
                      </span>
                      <p className="mt-0 text-sm lg:text-lg leading-snug">
                        Colors, Marks, Fonts, Shapes - All is created during the
                        brand identity development and a personality of your
                        brand comes to life -It is a true sense of
                        accomplishment to see how it looks what you have been
                        imagining from days or months. We make sure to create
                        the assets that you love to see.
                      </p>
                      <span className="text-lg lg:text-2xl text-orange dark:text-black">
                        Process:
                      </span>
                      <ul className="text-sm lg:text-lg  relative list-inside list-disc">
                        <li className="before:hidden relative m-0 p-0 w-full translate-x-5 lg:translate-x-0">
                          <span className="left-4">
                            Color Palette Selection
                          </span>
                        </li>
                        <li className="before:hidden relative m-0 p-0 w-full translate-x-5 lg:translate-x-0">
                          <span className="left-4">Fonts Selection</span>
                        </li>
                        <li className="before:hidden relative m-0 p-0 w-full translate-x-5 lg:translate-x-0">
                          <span className="left-4">Sketches</span>
                        </li>
                        <li className="before:hidden relative m-0 p-0 w-full translate-x-5 lg:translate-x-0">
                          <span className="left-4">Logo Draft</span>
                        </li>
                        <li className="before:hidden relative m-0 p-0 w-full translate-x-5 lg:translate-x-0">
                          <span className="left-4">Revisions</span>
                        </li>
                        <li className="before:hidden  relative m-0 p-0 w-full translate-x-5 lg:translate-x-0">
                          <span className="left-4">
                            Polishing and Final Touches
                          </span>
                        </li>
                      </ul>
                    </div>
                  </OfferPopup>
                  <OfferPopup title="UX/UI & Graphic Design">
                    <div>
                      <span className="text-lg lg:text-2xl text-orange dark:text-black">
                        Websites and Mobile Apps tailor-made specially for you
                      </span>
                      <p className="mt-0 text-sm lg:text-lg leading-snug">
                        Your customers should enjoy using your website or app.
                        Keeping that in mind, we prioritize an excellent user
                        experience over everything else. Complexity of the
                        requirements doesn’t scare us.
                      </p>
                      <span className="text-lg lg:text-2xl text-orange dark:text-black">
                        We can design:
                      </span>
                      <ul className="text-sm lg:text-lg  relative list-outside ml-5 list-disc">
                        <ListItem>
                          Corporate websites, Blogs, Landing Pages
                        </ListItem>
                        <ListItem>
                          Data-rich dashboards and Admin Panels
                        </ListItem>
                        <ListItem>Online stores and services</ListItem>
                        <ListItem>
                          Multidimensional and multi-users Mobile and Web Apps
                        </ListItem>
                      </ul>
                      <span className="text-lg lg:text-2xl text-orange">
                        Process:
                      </span>
                      <ul className="text-sm lg:text-lg  relative ml-5 list-outside list-disc">
                        <ListItem>Wireframes </ListItem>
                        <ListItem>Prototype</ListItem>
                        <ListItem>User interface</ListItem>
                      </ul>
                    </div>
                  </OfferPopup>
                  <OfferPopup
                    title="Web and Mobile Apps Development"
                    shortCurlySVG={true}
                  >
                    <div>
                      <span className="text-lg lg:text-2xl text-orange dark:text-black">
                        Fast, Secure and Optimized Websites, Mobile Apps and
                        solutions of all complexities
                      </span>
                      <p className="mt-0 text-sm lg:text-lg leading-snug">
                        Skilled developers and Software Engineers will take care
                        of your needs and make everything like a breeze for you.
                        We make sure you just sit back and relax while we
                        develop your dream app or website. A very small one page
                        website to an enterprise level solution - We can do it.
                      </p>
                      <span className="text-lg lg:text-2xl text-orange dark:text-black">
                        Process:
                      </span>
                      <ul className="text-sm lg:text-lg mt-4 ml-5 list-outside list-disc">
                        <ListItem>
                          UX/UI Design: An imagery representation and wireframes
                          of your complete system with all the colors, icons,
                          fonts...
                        </ListItem>
                        <ListItem>
                          Front-End Development: An interactive working
                          prototype
                        </ListItem>
                        <ListItem>
                          Backend-Development: Implement of the main logic of
                          the system and integration with Front-End
                        </ListItem>
                        <ListItem>
                          Testing: Each and every inch of your product will be
                          tested by Pros.
                        </ListItem>
                        <ListItem>
                          Deployment and Maintenance: No headache for you, we
                          will deploy and maintain
                        </ListItem>
                      </ul>
                    </div>
                  </OfferPopup>
                  <OfferPopup title="Consultancy" shortCurlySVG={true}>
                    <div>
                      <span className="text-lg lg:text-2xl text-orange dark:text-black">
                        From idea refinement to launch
                      </span>
                      <p className="mt-0 text-sm lg:text-lg leading-snug">
                        Set of different processes and strategies to achieve all
                        your wishes. This is a long term bond between you and
                        us. We go through many discussions with you to come up
                        with a solution or set of services for your particular
                        needs. You may want to automate your organization or
                        have a revolutionary idea, we will work on it together.
                        Having a multi-skilled team with diverse experience and
                        strong business acumen, We can deal with all things
                        design, technology keeping in mind your audience and
                        business.
                      </p>
                      <span className="text-lg lg:text-2xl text-orange dark:text-black">
                        Process:
                      </span>
                      <ul className="text-sm lg:text-lg relative list-inside list-disc">
                        <ListItem>Initial Discussion</ListItem>
                        <ListItem>
                          Detailed Analysis of Your Requirements
                        </ListItem>
                        <ListItem>Idea Refinement</ListItem>
                        <ListItem>Documentation</ListItem>
                        <ListItem>Product Development</ListItem>
                        <ListItem>Product Launch</ListItem>
                      </ul>
                    </div>
                  </OfferPopup>
                </ul>
              </div>
              <h2 className="font-poppinsLight text-[#262626] font-light">What our customers say:</h2>
              <TestimonialGrid variant="decorated" />
            </div>
          </section>
          <section className="two-cols">
            <div className="left">
              <h2>
                Our <span>Character:</span>
              </h2>
              <ul className="special">
                <li>
                  <span>
                    <svg
                      width="106"
                      height="24"
                      viewBox="0 0 106 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1.5L15.4201 22.75L28.8788 1.5L42.3376 22.75L54.3543 1.5L68.2937 22.75L79.3491 1.5L93.7692 22.75L104.825 1.5"
                        stroke="#B4D7CE"
                        strokeWidth="1.25"
                      />
                    </svg>
                  </span>
                  Creative
                </li>
                <li>
                  <span>
                    <svg
                      width="106"
                      height="24"
                      viewBox="0 0 106 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1.5L15.4201 22.75L28.8788 1.5L42.3376 22.75L54.3543 1.5L68.2937 22.75L79.3491 1.5L93.7692 22.75L104.825 1.5"
                        stroke="#B4D7CE"
                        strokeWidth="1.25"
                      />
                    </svg>
                  </span>
                  Technical
                </li>
                <li>
                  <span>
                    <svg
                      width="65"
                      height="25"
                      viewBox="0 0 65 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.33789 23.25L13.3546 2L27.294 23.25L38.3494 2L52.7695 23.25L63.8249 2"
                        stroke="#B4D7CE"
                        strokeWidth="1.25"
                      />
                    </svg>
                  </span>
                  Business Oriented
                </li>
                <li>
                  <span>
                    <svg
                      width="65"
                      height="25"
                      viewBox="0 0 65 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.33789 23.25L13.3546 2L27.294 23.25L38.3494 2L52.7695 23.25L63.8249 2"
                        stroke="#B4D7CE"
                        strokeWidth="1.25"
                      />
                    </svg>
                  </span>
                  Responsible
                </li>
              </ul>
            </div>
            <div className="right">
              <h2>
                <span>No Compromise</span>on:
              </h2>
              <ul className="special blue">
                <li>
                  <span>
                    <svg
                      width="65"
                      height="25"
                      viewBox="0 0 65 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.33789 23.25L13.3546 2L27.294 23.25L38.3494 2L52.7695 23.25L63.8249 2"
                        stroke="#B4D7CE"
                        strokeWidth="1.25"
                      />
                    </svg>
                  </span>
                  Excellent Customer Service
                </li>
                <li>
                  <span>
                    <svg
                      width="65"
                      height="25"
                      viewBox="0 0 65 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.33789 23.25L13.3546 2L27.294 23.25L38.3494 2L52.7695 23.25L63.8249 2"
                        stroke="#B4D7CE"
                        strokeWidth="1.25"
                      />
                    </svg>
                  </span>
                  Usefulness of the product
                </li>
                <li>
                  <span>
                    <svg
                      width="65"
                      height="25"
                      viewBox="0 0 65 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.33789 23.25L13.3546 2L27.294 23.25L38.3494 2L52.7695 23.25L63.8249 2"
                        stroke="#B4D7CE"
                        strokeWidth="1.25"
                      />
                    </svg>
                  </span>
                  High Quality
                </li>
                <li>
                  <span>
                    <svg
                      width="106"
                      height="24"
                      viewBox="0 0 106 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1.5L15.4201 22.75L28.8788 1.5L42.3376 22.75L54.3543 1.5L68.2937 22.75L79.3491 1.5L93.7692 22.75L104.825 1.5"
                        stroke="#B4D7CE"
                        strokeWidth="1.25"
                      />
                    </svg>
                  </span>
                  Caring mindset for your business
                </li>
              </ul>
              <ul className="special blue-responsive">
                <li>
                  <span>
                    <svg
                      width="106"
                      height="24"
                      viewBox="0 0 106 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1.5L15.4201 22.75L28.8788 1.5L42.3376 22.75L54.3543 1.5L68.2937 22.75L79.3491 1.5L93.7692 22.75L104.825 1.5"
                        stroke="#B4D7CE"
                        strokeWidth="1.25"
                      />
                    </svg>
                  </span>
                  Excellent Customer Service
                </li>
                <li>
                  <span>
                    <svg
                      width="106"
                      height="24"
                      viewBox="0 0 106 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1.5L15.4201 22.75L28.8788 1.5L42.3376 22.75L54.3543 1.5L68.2937 22.75L79.3491 1.5L93.7692 22.75L104.825 1.5"
                        stroke="#B4D7CE"
                        strokeWidth="1.25"
                      />
                    </svg>
                  </span>
                  Usefulness of the product
                </li>
                <li>
                  <span>
                    <svg
                      width="65"
                      height="25"
                      viewBox="0 0 65 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.33789 23.25L13.3546 2L27.294 23.25L38.3494 2L52.7695 23.25L63.8249 2"
                        stroke="#B4D7CE"
                        strokeWidth="1.25"
                      />
                    </svg>
                  </span>
                  High Quality
                </li>
                <li>
                  <span>
                    <svg
                      width="65"
                      height="25"
                      viewBox="0 0 65 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.33789 23.25L13.3546 2L27.294 23.25L38.3494 2L52.7695 23.25L63.8249 2"
                        stroke="#B4D7CE"
                        strokeWidth="1.25"
                      />
                    </svg>
                  </span>
                  Caring mindset for your business
                </li>
              </ul>
            </div>
          </section>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
