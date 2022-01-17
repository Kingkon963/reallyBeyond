import React, { useEffect } from "react";
import { useLocalStorage } from "react-use";

function ColorSwitch() {
  const [colorPref, setColorPref, deleteColorPref] = useLocalStorage<
    "bw" | "color"
  >("colorPref", "color");

  const elRef = React.useRef<HTMLDivElement | null>(null);

  function changeColorMode(mode: "bw" | "color") {
    if (process.browser) {
      setColorPref(mode);
      const docElement = document.documentElement;
      if (mode == "bw") {
        docElement.classList.add("dark");
      } else docElement.classList.remove("dark");
    }
  }

  const checkPosition = () => {
    if (process.browser && elRef.current) {
      if (window.scrollY > 18 && window.innerWidth <= 1024) {
        elRef.current.hidden = true;
      } else {
        elRef.current.hidden = false;
      }
    }
  };

  useEffect(() => {
    if (process.browser) {
      document.addEventListener("scroll", checkPosition);
    }

    return () => {
      document.removeEventListener("scroll", checkPosition);
    };
  }, []);

  useEffect(() => {
    if (colorPref) {
      changeColorMode(colorPref);
    }
  }, [colorPref]);

  return (
    <div ref={elRef} className="z-[1000] transition-none">
      <ul className="flex gap-[0px] absolute right-0 bottom-[-20px] translate-y-full mr-4 lg:relative lg:bottom-auto lg:translate-y-0 lg:mr-6 transition-none">
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
      text-inherit after:bg-black transition-none
      after:h-[1px] after:opacity-0 dark:after:opacity-100"
          onClick={() => changeColorMode("bw")}
        >
          B&W
        </li>
      </ul>
    </div>
  );
}

export default ColorSwitch;
