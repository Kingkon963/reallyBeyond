import * as React from "react";

function Footer() {
  return (
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
  );
}

export default Footer;
