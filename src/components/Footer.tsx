import * as React from "react";
import { linkedInIcon, facebookIcon, behanceIcon } from "src/svgIcons";

const CardWrapper: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col items-center xl:gap-[50px] 3xl:gap-[63px]">
      {children}
    </div>
  );
};

function Footer() {
  return (
    <footer id="footer" className="homeFooter">
      <div className="inner xl:pb-[50px] 3xl:pb-[63px]">
        <div className="logo">
          <span>REALLY</span>
          <span>BEYOND </span>
        </div>
        <h2 className="whitespace-nowrap">Get in Touch</h2>
        <div className="circles-wrapper">
          <div className="circles medium">
            <div className="circles__circle circles__first"></div>
            <div className="circles__circle circles__second"></div>
            <div className="circles__circle circles__third"></div>
          </div>
        </div>
        <div className="cards">
          <CardWrapper>
            <div className="card xl:w-full">
              <h6>EMAIL</h6>
              <p>
                <a href="mailto:info@reallybeyond.com">info@reallybeyond.com</a>
              </p>
            </div>
            <div className="flex gap-2 lg:gap-3 items-baseline text-white">
              {linkedInIcon}
              <span className="uppercase font-poppinsSemibold">LinkedIn</span>
            </div>
          </CardWrapper>
          <CardWrapper>
            <div className="card xl:w-full">
              <h6>Website</h6>
              <p>
                <a href="http://www.reallybeyond.com/">www.reallybeyond.com</a>
              </p>
            </div>
            <div className="flex gap-2 lg:gap-3 items-baseline">
              <span className="self-start">{facebookIcon}</span>
              <span className="uppercase font-poppinsSemibold text-white">
                Facebook
              </span>
            </div>
          </CardWrapper>
          <CardWrapper>
            <div className="card xl:w-full">
              <h6>WhatsApp/Telegram</h6>
              <p>
                <a href="tel:+923484660336">+923484660336</a>
              </p>
            </div>
            <div className="flex gap-2 lg:gap-3 items-baseline">
              {behanceIcon}
              <span className="uppercase font-poppinsSemibold text-white">
                Behance
              </span>
            </div>
          </CardWrapper>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
