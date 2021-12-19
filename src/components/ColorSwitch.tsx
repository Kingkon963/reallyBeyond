import React from "react";

function ColorSwitch() {
  function changeColorMode(mode: "bw" | "color") {
    if (process.browser) {
      const docElement = document.documentElement;
      if (mode == "bw") {
        docElement.classList.add("dark");
      } else docElement.classList.remove("dark");
    }
  }
  return (
    <div className="container">
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
