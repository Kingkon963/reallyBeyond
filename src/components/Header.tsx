import * as React from "react";
// import styles from "@styles/Header.module.scss";
import ColorSwitch from "./ColorSwitch";
import Menu from "./Menu";
import { useRouter } from "next/router";
import Link from "next/link";
import { useWindowSize } from "react-use";

interface HeaderInterface {
  showContactBtn?: boolean;
}

function Header({ showContactBtn = false }: HeaderInterface) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [smallScreen, setSmallScreen] = React.useState(true);
  const router = useRouter();
  const { width, height } = useWindowSize();

  const isNotHomePage = router.pathname !== "/";

  React.useEffect(() => {
    if (width < 1024) setSmallScreen(true);
    else setSmallScreen(false);
  }, [width]);

  return (
    <header
      className={`header sticky top-0
      z-[100] shadow-none transition-none ${
        menuOpen ? "h-screen bg-blue dark:bg-black overflow-y-scroll lg:overflow-y-clip" : smallScreen ? "border-b border-[#C9C9C9]" : ""
      }`}
    >
      <div className={`container`}>
        <div className={`nav  ${menuOpen ? "border-b-0 dark:border-b-0" : !smallScreen ? "border-b dark:border-gray-300" : "border-b-0"} `}>
          <div className={`logo-wrapper  `}>
            <Link href="/">
              <a>
                <span className={`text-green  ${menuOpen ? "dark:text-white" : "dark:text-black"}`}>REALLY</span>
                <span className={`text-lightGreen  ${menuOpen ? "dark:text-gray-600" : "dark:text-grayish"}`}>BEYOND</span>
              </a>
            </Link>
          </div>
          <nav className={`ml-10 mr-auto transition-none ${menuOpen ? "text-white" : ""}`}>
            {!(menuOpen && smallScreen) && (
              <span className="transition-none">
                <ColorSwitch />
              </span>
            )}
          </nav>
          <div className={`hidden lg:flex gap-5 ${menuOpen ? "hidden" : ""}`}>
            {!menuOpen && (
              <a href="#footer" className={`contact-us ${showContactBtn || isNotHomePage ? "" : "hidden"}`}>
                Contact us
              </a>
            )}
            <Link href="/idea">
              <a
                className={` bg-green hover:bg-orange dark:bg-black ${
                  menuOpen ? "dark:bg-white dark:text-black" : ""
                } text-white font-poppinsSemibold tracking-wide flex justify-center items-center btn-general`}
              >
                I have an Idea!
              </a>
            </Link>
          </div>
          <button
            className={`font-montserratBold ml-7 tracking-widest text-xl ${menuOpen ? "text-white" : "text-lightBlack"}`}
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
