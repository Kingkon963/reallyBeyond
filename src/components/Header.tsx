import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@styles/Header.module.scss";
import ColorSwitch from "./ColorSwitch";

function Menu() {
  const [active, setActive] = React.useState("");
  const router = useRouter();

  const menuItems = [
    {
      title: "About Really Beyond",
      url: "#",
    },
    {
      title: "Services",
      url: "#",
    },
    {
      title: "Our Works",
      url: "#",
    },
    {
      title: "Monthly Pricing Plans",
      url: "#",
    },
    {
      title: "Testimonials",
      url: "testimonials",
    },
    {
      title: "Blog",
      url: "#",
    },
  ];

  const setActiveLink = () => {
    menuItems.forEach((item) => {
      if (item.url === router.pathname) setActive(item.title);
    });
  };

  React.useEffect(() => setActiveLink(), []);

  return (
    <div className="bg-blue text-white h-full  flex justify-center pt-32">
      <div className="container">
        <div className="grid grid-cols-2 ">
          <div className="flex flex-col gap-10 border-r">
            {menuItems.map((item) => {
              return (
                <span
                  className={`font-poppinsRegular text-4xl hover:text-orange transition-none ${
                    active === item.title ? "text-orange" : ""
                  }`}
                  onClick={() => setActiveLink()}
                >
                  <Link href={item.url}>{item.title}</Link>
                </span>
              );
            })}
          </div>
          <div>Right</div>
        </div>
      </div>
    </div>
  );
}

interface HeaderInterface {
  showContactBtn?: boolean;
}

function Header({ showContactBtn = false }: HeaderInterface) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <header
      className={`${styles.header} sticky top-0 z-[100] transition-none ${
        menuOpen ? "h-screen bg-blue" : ""
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
              <span className="text-green dark:text-black">REALLY</span>
              <span className="text-lightGreen dark:text-gray-400">BEYOND</span>
            </a>
          </div>
          <nav
            className={`ml-10 mr-auto transition-none ${
              menuOpen ? "text-white" : ""
            }`}
          >
            <ColorSwitch />
          </nav>
          <div className={`flex gap-5 ${menuOpen ? "hidden" : ""}`}>
            <a
              href="#footer"
              className={`contact-us ${showContactBtn ? "" : "hidden"}`}
            >
              Contact us
            </a>
            <a
              href="#"
              className={` bg-green text-white font-poppinsSemibold tracking-wide flex justify-center items-center px-12 py-5 q`}
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
