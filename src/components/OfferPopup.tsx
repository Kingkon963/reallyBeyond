import React, { useRef, useState } from "react";
import Popup from "./Popup";

interface OfferPopup {
  title: String;
  children: JSX.Element;
  shortCurlySVG?: boolean;
}

function OfferPopup({ title, children, shortCurlySVG = false }: OfferPopup) {
  const [open, setOpen] = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);
  const titleRef = useRef(null);

  return (
    <>
      <li
        ref={titleRef}
        className={`flex items-center font-poppinsRegular ${
          open ? "text-white z-[1000]" : ""
        } transition-none`}
      >
        <span>
          {shortCurlySVG ? (
            <svg
              width="65"
              height="25"
              viewBox="0 0 65 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.33789 23.25L13.3546 2L27.294 23.25L38.3494 2L52.7695 23.25L63.8249 2"
                stroke="#B4D7CE"
                strokeWidth="1.25"
              />
            </svg>
          ) : (
            <svg
              width="106"
              height="24"
              viewBox="0 0 106 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1.5L15.4201 22.75L28.8788 1.5L42.3376 22.75L54.3543 1.5L68.2937 22.75L79.3491 1.5L93.7692 22.75L104.825 1.5"
                stroke="#B4D7CE"
                strokeWidth="1.25"
              />
            </svg>
          )}
        </span>
        {title}
        <div className="ml-3 flex items-center ">
          <button
            onClick={() => setOpen(!open)}
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
          >
            {
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${open ? "rotate-45" : ""}`}
              >
                <circle
                  cx="14"
                  cy="14"
                  r="13.5"
                  className={`stroke-orange dark:stroke-grayish ${
                    btnHovered ? "stroke-green" : ""
                  } ${open ? "stroke-white" : ""}`}
                />
                <path
                  d="M21 14L7 14"
                  stroke="#212121"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`${open ? "stroke-white" : "stroke-black"}`}
                />
                <path
                  d="M14 7L14 21"
                  stroke="#212121"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`${open ? "stroke-white" : "stroke-black"}`}
                />
              </svg>
            }
          </button>
        </div>
      </li>
      <Popup open={open} close={() => setOpen(false)} callerRef={titleRef}>
        {children}
      </Popup>
    </>
  );
}

export default OfferPopup;
