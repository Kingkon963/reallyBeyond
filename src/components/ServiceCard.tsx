import * as React from "react";
import { useMedia } from "react-use";

const UnderlineSVG = ({ size }: { size: "small" | "medium" | "large" }) => {
  const SVGs = {
    small: (
      <svg
        width="95"
        height="15"
        viewBox="0 0 95 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="6" width="95" height="3" fill="#212121" />
        <path
          d="M27 1L36.1667 14L44.7222 1L53.2778 14L60.9167 1L69.7778 14L76.8056 1L85.9722 14L93 1"
          className="stroke-[#B4D7CE]"
        />
      </svg>
    ),
    medium: (
      <svg
        width="121"
        height="19"
        viewBox="0 0 121 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="8" width="121" height="3" fill="#212121" />
        <path
          d="M35 1L46.5361 18L57.3031 1L68.07 18L77.6834 1L88.835 18L97.6793 1L109.215 18L118.06 1"
          className="stroke-[#B4D7CE]"
        />
      </svg>
    ),
    large: (
      <svg
        width="375"
        height="19"
        viewBox="0 0 375 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="8" width="375" height="3" fill="#212121" />
        <path
          d="M289 1L300.536 18L311.303 1L322.07 18L331.683 1L342.835 18L351.679 1L363.215 18L372.06 1"
          className="stroke-[#B4D7CE]"
        />
      </svg>
    ),
  };
  return SVGs[size];
};

interface ServiceCard {
  title: string;
  number: number;
}

const ServiceCard: React.FC<ServiceCard> = ({ title, number, children }) => {
  const isLG = useMedia("(min-width: 1024px)");
  return (
    <div
      className="bg-[#F2F8F6] text-[#262626] lg:w-[765px] lg:h-[655px] 3xl:w-[944px]
    pt-[146px] 3xl:pt-[250px] pb-[38px] relative"
    >
      <h1
        className="font-poppinsLight text-[30px] leading-[45px]
        lg:text-[60px] lg:leading-[90px]
      absolute top-[28px] left-[67px] 3xl:top-[101px]"
      >
        {title}
      </h1>
      <div className="absolute top-[75px] lg:top-[124px] 3xl:top-[197px]">
        <UnderlineSVG size={isLG ? "medium" : "small"} />
      </div>

      <div
        className="absolute right-[28px] lg:-right-[401px] lg:top-[97px] 3xl:-right-[475px] 3xl:top-[110px]
      flex flex-col items-end z-10"
      >
        <span className="font-poppinsLight text-[30px] leading-[45px] lg:text-[60px] lg:leading-[65px]">
          {number.toString().padStart(2, "0")}
        </span>
        <UnderlineSVG size="medium" />
      </div>
      {/* Illustration */}
      <div
        className="bg-[#F0E3D8] w-[167px] h-[147px] xsp:w-[201px] xsp:h-[177px] 
      lg:w-[417px] lg:h-[437px] 3xl:w-[515px] 3xl:h-[453px]
       lg:absolute lg:top-[109px] lg:left-[648px] 3xl:left-[799px]"
      ></div>

      <div className="lg:ml-[58px]">{children}</div>
    </div>
  );
};

export default ServiceCard;
