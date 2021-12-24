import * as React from "react";
import styles from "@styles/Header.module.scss";
import ColorSwitch from "./ColorSwitch";
import Menu from "./Menu";

interface HeaderInterface {
  showContactBtn?: boolean;
}

function Header({ showContactBtn = false }: HeaderInterface) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <header
      className={`${
        styles.header
      } sticky top-0 z-[100] shadow-md transition-none ${
        menuOpen
          ? "h-screen bg-blue dark:bg-black overflow-y-scroll lg:overflow-y-clip"
          : ""
      }`}
    >
      <div className={`container`}>
        <div
          className={`${styles.nav} h-[4.2rem] lg:h-32  dark:border-b ${
            menuOpen ? "border-b-0" : ""
          } dark:border-gray-300`}
        >
          <div className={`${styles.logoWrapper} lg:text-[25px] `}>
            <a href="/">
              <span
                className={`text-green  ${
                  menuOpen ? "dark:text-white" : "dark:text-black"
                }`}
              >
                REALLY
              </span>
              <span
                className={`text-lightGreen  ${
                  menuOpen ? "dark:text-gray-600" : "dark:text-grayish"
                }`}
              >
                BEYOND
              </span>
            </a>
          </div>
          <nav
            className={`ml-10 mr-auto transition-none ${
              menuOpen ? "text-white" : ""
            }`}
          >
            {!menuOpen && <ColorSwitch />}
          </nav>
          <div className={`hidden lg:flex gap-5 ${menuOpen ? "hidden" : ""}`}>
            {!menuOpen && (
              <a
                href="#footer"
                className={`contact-us ${showContactBtn ? "" : "hidden"}`}
              >
                Contact us
              </a>
            )}
            <a
              href="#"
              className={` bg-green dark:bg-black ${
                menuOpen ? "dark:bg-white dark:text-black" : ""
              } text-white font-poppinsSemibold tracking-wide flex justify-center items-center px-12 py-5 q`}
            >
              I have an Idea!
            </a>
          </div>
          <button
            className={`font-montserratBold ml-7 tracking-widest text-xl ${
              menuOpen ? "text-white" : "text-lightBlack"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "BACK" : "MENU"}
          </button>
        </div>
      </div>
      {menuOpen && <Menu />}
    </header>
  );
}

export default Header;
