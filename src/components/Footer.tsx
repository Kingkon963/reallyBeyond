import * as React from "react";
import IconButton from "./IconButton";

const CardWrapper: React.FC = ({ children }) => {
  return (
    <div className="lg:w-[343px] lg:h-[149px] 3xl:w-[429px] 3xl:h-[186px]">
      {children}
    </div>
  );
};

function Footer() {
  return (
    <footer id="footer" className="homeFooter">
      <div className="inner">
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
        <div className="cards lg:gap-x-[38px] 3xl:gap-x-[48px]">
          <CardWrapper>
            <div className="card  xl:w-full py-0 flex flex-col justify-center items-center 3xl:gap-5">
              <h6>EMAIL</h6>
              <p>
                <a href="mailto:info@reallybeyond.com">info@reallybeyond.com</a>
              </p>
            </div>
          </CardWrapper>
          <CardWrapper>
            <div className="card xl:w-full py-0 flex flex-col justify-center items-center 3xl:gap-5">
              <h6>Website</h6>
              <p>
                <a href="http://www.reallybeyond.com/">www.reallybeyond.com</a>
              </p>
            </div>
          </CardWrapper>
          <CardWrapper>
            <div className="card xl:w-full py-0 flex flex-col justify-center items-center 3xl:gap-5">
              <h6>WhatsApp/Telegram</h6>
              <p>
                <a href="tel:+923484660336">+923484660336</a>
              </p>
            </div>
          </CardWrapper>
        </div>
        <div className="cards grid-cols-3 mt-5 lg:mt-[42px] 3xl:mt-[53px] bg-re-500 w-full">
          <div className="bg-yello-400 flex justify-start sm:justify-center">
            <IconButton name="LinkedIn" />
          </div>
          <div className="bg-yello-400 flex justify-center">
            <IconButton name="Facebook" />
          </div>
          <div className="bg-yello-400 flex justify-end sm:justify-center">
            <IconButton name="Behance" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
