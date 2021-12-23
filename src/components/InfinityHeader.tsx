import React from "react";

interface InfinityHeader {
  children: String | JSX.Element;
}

function InfinityHeader({ children }: InfinityHeader) {
  return (
    <h1 className="text-[#B4D7CE66] relative  text-7xl font-poppinsSemibold mt-[43px] py-12 flex">
      <span className="absolute -left-[160%]">{children}</span>
      <span className="absolute -left-[120%]">{children}</span>
      <span className="absolute -left-[80%]">{children}</span>
      <span className="absolute -left-[40%] ">{children}</span>
      <span className="text-green">{children}</span>
      <span className="absolute left-[40%]">{children}</span>
      <span className="absolute left-[80%]">{children}</span>
      <span className="absolute left-[120%]">{children}</span>
      <span className="absolute left-[160%]">{children}</span>
    </h1>
  );
}

export default InfinityHeader;
