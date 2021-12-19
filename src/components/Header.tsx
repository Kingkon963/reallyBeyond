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
    <header className={`${styles.header} px-4 3xl:px-64 `}>
      <div className={`${styles.container}`}>
        <div className={`${styles.nav} h-[4.2rem] lg:h-32`}>
          <div className={`${styles.logoWrapper} lg:text-[25px] `}>
            <a href="/">
              <span className="text-green dark:text-black">REALLY</span>
              <span className="text-lightGreen dark:text-gray-400">BEYOND</span>
            </a>
          </div>
          <nav>
            <ul className="hidden lg:flex">
              <li
                className={`text-orange border-b border-orange dark:text-gray-400 dark:border-none`}
                onClick={() => changeColorMode("color")}
              >
                COLOR
              </li>
              <li
                className="text-lightBlack hover:border-b dark:border-b border-lightBlack"
                onClick={() => changeColorMode("bw")}
              >
                B&W
              </li>
            </ul>
          </nav>
          <a
            href="#footer"
            className="btn-primary text-[14px] lg:text-[16px]  px-[1.75rem] py-[.68rem] lg:px-10 lg:py-4 dark:bg-black"
          >
            {" "}
            Contact us{" "}
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
