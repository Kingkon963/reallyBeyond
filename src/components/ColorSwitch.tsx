import React, { useEffect } from "react";

function ColorSwitch() {
  // const { x, y } = useWindowScroll();
  const elRef = React.useRef<HTMLDivElement | null>(null);

  function changeColorMode(mode: "bw" | "color") {
    if (process.browser) {
      const docElement = document.documentElement;
      if (mode == "bw") {
        docElement.classList.add("dark");
      } else docElement.classList.remove("dark");
    }
  }

  const checkPosition = () => {
    if (process.browser && elRef.current) {
      if (window.scrollY > 40 && window.innerWidth <= 1024) {
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

  return (
    <div ref={elRef}>
      <ul className="flex gap-[17px] absolute right-0 bottom-[-20px] translate-y-full mr-4 lg:relative lg:bottom-auto lg:translate-y-0 lg:mr-6">
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
    </div>
  );
}

export default ColorSwitch;
