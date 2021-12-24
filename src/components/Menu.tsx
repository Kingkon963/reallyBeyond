import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { behanceIcon, facebookIcon, linkedInIcon } from "src/svgIcons";
import keyGen from "src/utils/genKey";

function Info({ title, value }: { title: String; value: String }) {
  return (
    <div className="flex flex-col gap-1 justify-start w-full">
      <span className="text-sm text-[#878787] font-poppinsSemibold uppercase">
        {title}
      </span>
      <span className="font-poppinsRegular text-2xl">{value}</span>
    </div>
  );
}

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
      url: "/testimonials",
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
    <div className="bg-blue dark:bg-black text-white h-full  flex justify-center pt-10 lg:pt-32">
      <div className="container">
        <div className="grid lg:grid-cols-2 pb-10 lg:pb-0">
          <div className="flex flex-col gap-10 lg:border-r">
            {menuItems.map((item) => {
              return (
                <span
                  className={`font-poppinsRegular text-2xl lg:text-4xl dark:text-[#878787] dark:hover:text-white hover:text-orange transition-none ${
                    active === item.title ? "text-orange dark:text-white" : ""
                  }`}
                  onClick={() => setActiveLink()}
                  key={keyGen()}
                >
                  <Link href={item.url}>{item.title}</Link>
                </span>
              );
            })}
          </div>
          <div className="flex flex-col gap-10 justify-center items-center pt-10 lg:pt-0 pb-10 lg:pb-0 border-t mt-10 lg:mt-0 lg:border-t-0 lg:px-24">
            <h1 className="font-poppinsLight text-orange dark:text-white text-5xl lg:text-7xl w-full">
              Get in Touch
            </h1>
            <div className="flex flex-col gap-10 w-full">
              <Info title="email" value="info@reallybeyond.com" />
              <Info title="Website" value="www.reallybeyond.com" />
              <Info title="WhatsApp/Telegram" value="+923484660336" />
            </div>
            <div className="w-full mt-auto flex justify-between items-baseline">
              <div className="flex gap-2 lg:gap-3 items-baseline">
                {linkedInIcon}
                <span className="uppercase font-poppinsSemibold">LinkedIn</span>
              </div>

              <div className="flex gap-2 lg:gap-3 items-baseline">
                <span className="self-start">{facebookIcon}</span>
                <span className="uppercase font-poppinsSemibold">Facebook</span>
              </div>

              <div className="flex gap-2 lg:gap-3 items-baseline">
                {behanceIcon}
                <span className="uppercase font-poppinsSemibold">Behance</span>
              </div>
            </div>
          </div>

          <div className="lg:hidden">
            <a
              href="#"
              className={` bg-green text-white font-poppinsSemibold tracking-wide flex justify-center items-center px-12 py-5 q`}
            >
              I have an Idea!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
