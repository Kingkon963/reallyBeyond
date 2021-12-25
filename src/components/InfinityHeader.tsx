import React from "react";

interface InfinityHeader {
  children: String | JSX.Element;
}

function InfinityHeader({ children }: InfinityHeader) {
  const gap = 20;
  return (
    <h1 className="text-[#B4D7CE66] relative text-3xl lg:text-7xl font-poppinsSemibold mt-[43px] pb-16 flex w-fit">
      <span
        className={`absolute dark:text-grayish`}
        style={{ left: `-${(100 + gap) * 4}%` }}
      >
        {children}
      </span>
      <span
        className={`absolute dark:text-grayish`}
        style={{ left: `-${(100 + gap) * 3}%` }}
      >
        {children}
      </span>
      <span
        className={`absolute dark:text-grayish`}
        style={{ left: `-${(100 + gap) * 2}%` }}
      >
        {children}
      </span>
      <span
        className={`absolute dark:text-grayish`}
        style={{ left: `-${100 + gap}%` }}
      >
        {children}
      </span>
      <span className="text-green dark:text-black">{children}</span>
      <span
        className={`absolute dark:text-grayish`}
        style={{ left: `${100 + gap}%` }}
      >
        {children}
      </span>
      <span
        className={`absolute dark:text-grayish`}
        style={{ left: `${(100 + gap) * 2}%` }}
      >
        {children}
      </span>
      <span
        className={`absolute dark:text-grayish`}
        style={{ left: `${(100 + gap) * 3}%` }}
      >
        {children}
      </span>
      <span
        className={`absolute dark:text-grayish`}
        style={{ left: `${(100 + gap) * 4}%` }}
      >
        {children}
      </span>
    </h1>
  );
}

export default InfinityHeader;
