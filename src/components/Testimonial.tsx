import React from "react";

interface Testimonial {
  variant?: "simple" | "decorated";
  borderColor?: "orange" | "greenish";
  children: String | JSX.Element;
  designElement?: "circles" | "blocks" | "blocksSmall";
  author: {
    name: String;
    info: String;
  };
}

function Testimonial({
  variant,
  borderColor,
  author,
  designElement,
  children,
}: Testimonial) {
  const isSimple = variant === "simple";
  return (
    <div
      className={`testimonials-grid__item  ${borderColor ? borderColor : ""} ${
        isSimple
          ? "border-0 border-b lg:border-b-0 last:border-b-0 border-gray-300"
          : ""
      }`}
    >
      <span
        className={`gothic ${isSimple ? "text-green dark:text-black" : ""}`}
      >
        {" "}
        “{" "}
      </span>
      <p className="testimonials-grid__item__text">{children}</p>
      <div className="m-top-auto">
        <p className="testimonials-grid__item__author">{author.name}</p>
        <p className="testimonials-grid__item__location">{author.info}</p>
      </div>
      {!isSimple && (
        <>
          {designElement && designElement === "circles" && (
            <div className="circles">
              <div className="circles__circle circles__first"></div>
              <div className="circles__circle circles__second"></div>
              <div className="circles__circle circles__third"></div>
            </div>
          )}
          {designElement && designElement === "blocks" && (
            <div className="blocks-wrapper">
              <div className="blocks">
                <div className="blocks__first blocks__block"></div>
                <div className="blocks__second blocks__block"></div>
                <div className="blocks__third blocks__block"></div>
              </div>
            </div>
          )}
          {designElement && designElement === "blocksSmall" && (
            <div className="blocks-wrapper">
              <div className="blocks w-[45px] h-[45px] top-20">
                <div className="blocks__first blocks__block"></div>
                <div className="blocks__second blocks__block top-[13px] -left-[13px]"></div>
                <div className="blocks__third blocks__block top-[26px] -left-[26px]"></div>
              </div>
            </div>
          )}
          <span className="bolt">
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
          </span>
        </>
      )}
    </div>
  );
}

export default Testimonial;
