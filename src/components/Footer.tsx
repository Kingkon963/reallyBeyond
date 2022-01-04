import * as React from "react";
import IconButton from "./IconButton";

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
        <div className="relative">
          <h2 className="whitespace-nowrap">Get in Touch</h2>
          <div className="circles-wrapper -top-[40px] -right-[57px] lg:-top-[38px] lg:-right-[104px] 3xl:-top-[46px] 3xl:-right-[126px]">
            <div className="circles medium">
              <div className="circles__circle circles__first"></div>
              <div className="circles__circle circles__second"></div>
              <div className="circles__circle circles__third"></div>
            </div>
          </div>
        </div>
        <div className="cards">
          <CardWrapper>
            <div className="card xl:w-full py-0 flex flex-col justify-center items-center 3xl:gap-5">
              <h6>EMAIL</h6>
              <p>
                <a href="mailto:info@reallybeyond.com">info@reallybeyond.com</a>
              </p>
            </div>
            <IconButton name="LinkedIn" />
          </CardWrapper>
          <CardWrapper>
            <div className="card xl:w-full py-0 flex flex-col justify-center items-center 3xl:gap-5">
              <h6>Website</h6>
              <p>
                <a href="http://www.reallybeyond.com/">www.reallybeyond.com</a>
              </p>
            </div>
            <IconButton name="Facebook" />
          </CardWrapper>
          <CardWrapper>
            <div className="card xl:w-full py-0 flex flex-col justify-center items-center 3xl:gap-5">
              <h6>WhatsApp/Telegram</h6>
              <p>
                <a href="tel:+923484660336">+923484660336</a>
              </p>
            </div>
            <IconButton name="Behance" />
          </CardWrapper>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
