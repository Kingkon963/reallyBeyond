import ColorSwitch from "@components/ColorSwitch";
import Header from "@components/Header";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={"bg-lightOrange h-screen"}>
      <Head>
        <title>Really Beyond</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <section className="hero border border-red-500">
          <div className="container">
            {/* <div>
              <ColorSwitch />
            </div> */}
            <div className="flex-group">
              <div className="hero__text">
                <h5>Working remotely globally</h5>
                <h1>
                  We go really beyond your
                  <br />
                  expectations to make
                  <br />
                  you happy.
                </h1>
                <p>
                  By keeping you involved all along the process. A process that
                  is designed to bring your ideas to life smoothly and quickly.
                </p>
                <a href="#footer" className="contact-us">
                  {" "}
                  Contact us{" "}
                </a>
              </div>
              <div className="hero__vectors">
                <div className="circles">
                  <div className="circles__first"></div>
                  <div className="circles__second"></div>
                  <div className="circles__third"></div>
                </div>
                <div className="blocks">
                  <div className="blocks__first blocks__block"></div>
                  <div className="blocks__second blocks__block"></div>
                  <div className="blocks__third blocks__block"></div>
                </div>
              </div>
            </div>
            <div className="hero__offer">
              <h4>What we offer:</h4>
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
                  Brand Identity
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
                  UX/UI & Graphic Design
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
                  Web and Mobile Apps Development
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
                  Consultancy
                </li>
              </ul>
            </div>
            <h2 className="font-bold">What our customers say:</h2>
            <div className="testimonials-grid">
              <div className="testimonials-grid__item orange">
                <span className="gothic"> “ </span>
                <p className="testimonials-grid__item__text">
                  Demonstrated incredible determination and technical expertise
                  to get our complex website up and running in the shortest time
                  possible. Quality of work is excellent. No concerns from our
                  end as a client.
                </p>
                <div className="m-top-auto">
                  <p className="testimonials-grid__item__author">
                    Dr. John Wong
                  </p>
                  <p className="testimonials-grid__item__location">
                    FluidBiotech - Canada
                  </p>
                </div>
                <div className="circles">
                  <div className="circles__circle circles__first"></div>
                  <div className="circles__circle circles__second"></div>
                  <div className="circles__circle circles__third"></div>
                </div>
                <span className="bolt">
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
              </div>
              <div className="testimonials-grid__item">
                <span className="gothic"> “ </span>
                <p className="testimonials-grid__item__text">
                  Shoaib and his company did a great job with helping us create,
                  design and execute two web sites. His creative abilities
                  combined with his technical skills made an awesome combination
                  for the work requirements. He was professional to deal with in
                  all aspects; the business discussions, reliability, delivery
                  on time, meeting attendance, and he communicated with us
                  consistently. A Plus-5 Star rating from me!
                </p>
                <div className="m-top-auto">
                  <p className="testimonials-grid__item__author">
                    Peter L. Carfagno
                  </p>
                  <p className="testimonials-grid__item__location">
                    Premier Consulting - USA
                  </p>
                </div>
                <span className="bolt">
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
              </div>
              <div className="testimonials-grid__item greenish">
                <span className="gothic"> “ </span>
                <p className="testimonials-grid__item__text">
                  Very prompt and attentive to details, Honest and Dependable.
                </p>
                <div className="m-top-auto">
                  <p className="testimonials-grid__item__author">Luke Hong</p>
                  <p className="testimonials-grid__item__location">
                    iChild Company. Ltd- Singapore
                  </p>
                </div>
                <div className="blocks-wrapper">
                  <div className="blocks">
                    <div className="blocks__first blocks__block"></div>
                    <div className="blocks__second blocks__block"></div>
                    <div className="blocks__third blocks__block"></div>
                  </div>
                </div>
                <span className="bolt">
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
              </div>
              <div className="testimonials-grid__item">
                <span className="gothic"> “ </span>
                <p className="testimonials-grid__item__text">
                  Nailed absolutely every element of the work. Understood the
                  brief and the quality of the work was fantastic. Would highly
                  recommend!
                </p>
                <div className="m-top-auto">
                  <p className="testimonials-grid__item__author">Adil Ali</p>
                  <p className="testimonials-grid__item__location">
                    Sincere Digital - UK
                  </p>
                </div>
                <span className="bolt">
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
              </div>
              <div className="testimonials-grid__item greenish">
                <span className="gothic"> “ </span>
                <p className="testimonials-grid__item__text">
                  Great work. Built our entire site on React. Created custom
                  graphics that are amazing. Communication was smooth and easy.
                  <br />
                  Highly recommended for quality work. 10/10.
                </p>
                <div className="m-top-auto">
                  <p className="testimonials-grid__item__author">Josh M.</p>
                  <p className="testimonials-grid__item__location">
                    Lichen - Canada
                  </p>
                </div>
                <div className="blocks-wrapper">
                  <div className="blocks">
                    <div className="blocks__first blocks__block"></div>
                    <div className="blocks__second blocks__block"></div>
                    <div className="blocks__third blocks__block"></div>
                  </div>
                </div>
                <span className="bolt">
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
              </div>
              <div className="testimonials-grid__item orange">
                <span className="gothic"> “ </span>
                <p className="testimonials-grid__item__text">
                  Did a terrific job developing a website for our holiday let
                  apartment. Very creative, responsive and a pleasure to deal
                  with.
                </p>
                <div className="m-top-auto">
                  <p className="testimonials-grid__item__author">
                    Ellie Schwab
                  </p>
                  <p className="testimonials-grid__item__location">
                    Mission-Beach House Apartment - Australia
                  </p>
                </div>
                <div className="circles">
                  <div className="circles__circle circles__first"></div>
                  <div className="circles__circle circles__second"></div>
                  <div className="circles__circle circles__third"></div>
                </div>
                <span className="bolt">
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
              </div>
            </div>
          </div>
        </section>
        <section className="two-cols">
          <div className="left">
            <h2 className="font-bold">
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
            <h2 className="font-bold">
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
      </main>

      <footer id="footer" className="homeFooter">
        <div className="inner">
          <div className="logo">
            <span>REALLY</span>
            <span>BEYOND </span>
          </div>
          <h2 className="font-bold">Get in Touch</h2>
          <div className="circles-wrapper">
            <div className="circles medium">
              <div className="circles__circle circles__first"></div>
              <div className="circles__circle circles__second"></div>
              <div className="circles__circle circles__third"></div>
            </div>
          </div>
          <div className="cards">
            <div>
              <h6>EMAIL</h6>
              <p>
                <a href="mailto:info@reallybeyond.com">info@reallybeyond.com</a>
              </p>
            </div>
            <div>
              <h6>Website</h6>
              <p>
                <a href="http://www.reallybeyond.com/">www.reallybeyond.com</a>
              </p>
            </div>
            <div>
              <h6>WhatsApp/Telegram</h6>
              <p>
                <a href="tel:+923484660336">+923484660336</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
