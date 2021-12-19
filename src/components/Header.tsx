import React from "react";
import styles from "@styles/Header.module.scss";
import ColorSwitch from "./ColorSwitch";

function Header() {
  ///handleColorModeShift("bw");
  return (
    <header className={`${styles.header}`}>
      <div className={`container`}>
        <div
          className={`${styles.nav} h-[4.2rem] lg:h-32 border-b dark:border-b dark:border-gray-300`}
        >
          <div className={`${styles.logoWrapper} lg:text-[25px] `}>
            <a href="/">
              <span className="text-green dark:text-black">REALLY</span>
              <span className="text-lightGreen dark:text-gray-400">BEYOND</span>
            </a>
          </div>
          <nav>
            <ColorSwitch />
          </nav>
          <a href="#footer" className="contact-us">
            {" "}
            Contact us{" "}
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
