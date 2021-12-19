import React from "react";
import styles from "@styles/Header.module.scss";

function Header() {
  function changeColorMode(mode: "bw" | "color") {
    if (process.browser) {
      const docElement = document.documentElement;
      if (mode == "bw") {
        docElement.classList.add("dark");
      } else docElement.classList.remove("dark");
    }
  }
  ///handleColorModeShift("bw");
  return (
    <header className={`${styles.header} `}>
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
            <ul className="hidden lg:flex gap-[17px] ">
              <li
                className={`relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full
                 text-orange after:bg-orange dark:text-gray-400 dark:after:bg-gray-400 
                 after:h-[1px] after:opacity-1 dark:after:opacity-0 dark:hover:after:opacity-100`}
                onClick={() => changeColorMode("color")}
              >
                COLOR
              </li>
              <li
                className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full
                 text-black after:bg-black  
                 after:h-[1px] after:opacity-0 dark:after:opacity-100"
                onClick={() => changeColorMode("bw")}
              >
                B&W
              </li>
            </ul>
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
