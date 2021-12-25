import React from "react";

interface InfinityHeader {
  children: String | JSX.Element;
  gap?: number;
}

function InfinityHeader({ children, gap = 20 }: InfinityHeader) {
  return (
    <h1 className="text-[#B4D7CE66] relative text-3xl lg:text-7xl font-poppinsSemibold mt-[43px] lg:pb-16 flex w-fit">
      <span
        className={`absolute dark:text-grayish whitespace-nowrap`}
        style={{ left: `-${(100 + gap) * 4}%` }}
      >
        {children}
      </span>
      <span
        className={`absolute dark:text-grayish whitespace-nowrap`}
        style={{ left: `-${(100 + gap) * 3}%` }}
      >
        {children}
      </span>
      <span
        className={`absolute dark:text-grayish whitespace-nowrap`}
        style={{ left: `-${(100 + gap) * 2}%` }}
      >
        {children}
      </span>
      <span
        className={`absolute dark:text-grayish whitespace-nowrap`}
        style={{ left: `-${100 + gap}%` }}
      >
        {children}
      </span>
      <span className="text-green dark:text-black">{children}</span>
      <span
        className={`absolute dark:text-grayish whitespace-nowrap`}
        style={{ left: `${100 + gap}%` }}
      >
        {children}
      </span>
      <span
        className={`absolute dark:text-grayish whitespace-nowrap`}
        style={{ left: `${(100 + gap) * 2}%` }}
      >
        {children}
      </span>
      <span
        className={`absolute dark:text-grayish whitespace-nowrap`}
        style={{ left: `${(100 + gap) * 3}%` }}
      >
        {children}
      </span>
      <span
        className={`absolute dark:text-grayish whitespace-nowrap`}
        style={{ left: `${(100 + gap) * 4}%` }}
      >
        {children}
      </span>
    </h1>
  );
}

export default InfinityHeader;
